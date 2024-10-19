import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI
from transformers import pipeline
import torch

load_dotenv()

# Flask app
app = Flask(__name__)

if (os.environ['ENV'] == 'development'):
    cors = CORS(app, origins="*")
else:
    cors = CORS(app, resources={
                r"/*": {"origins": ["https://jayyy-s.github.io"]}})
# OpenAI API client
client = OpenAI()

# Set up pipeline
model_checkpoint = "jayyys/distilbert-mental-topic-classification"
topic_classifier = pipeline("text-classification",
                            model=model_checkpoint,
                            device=0 if torch.cuda.is_available() else -1)


@app.route("/")
def home():
    return "All Good"


@app.route("/message-analysis", methods=["POST"])
def get_fine_tuned_response():
    data = request.get_json()
    message = data["message"]

    if not message:
        return jsonify({"error": "Message required"}), 400

    def classify_topic():
        return topic_classifier(message)[0]['label']

    def generate_response():
        system_content = "Nora is a compassionate, empathetic, and validating mental health assistant that helps mental health counselors with virtual communications between counselors and their patients."

        completion = client.chat.completions.create(
            model="ft:gpt-4o-mini-2024-07-18:personal:counselor-chat:AH63wczp",
            temperature=0.7,
            messages=[
                {"role": "system", "content": system_content},
                {
                    "role": "user",
                    "content": message
                }
            ]
        )

        return completion.choices[0].message.content

    res = {
        "topic": classify_topic(),
        "generatedResponse": generate_response()
    }

    return jsonify(res), 201


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 10000))
    print(port)
    app.run(debug=True if os.environ['ENV'] ==
            'development' else False, port=port)
