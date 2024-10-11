import { Analysis } from '../data/types'
import { useTypewriter } from 'use-typewriter-hook'

const GeneratedAnalysis = (props: { analysis: Analysis }) => {
  const { analysis } = props

  const typingDelayMillis = 15

  const { textValue: introText } = useTypewriter({
    targetText: 'It seems like your patient might be struggling with ',
    autoStartDelay: 0,
    typingDelayMillis
  })
  const { textValue: topicText } = useTypewriter({
    targetText: `${analysis.topic.replace('-', ' ')}.`,
    autoStartDelay: 0,
    typingDelayMillis
  })
  const { textValue: responseText } = useTypewriter({
    targetText: `Here's a response you might use as inspiration when responding to them: `,
    autoStartDelay: 0,
    typingDelayMillis
  })
  const { textValue: generatedText } = useTypewriter({
    targetText: `"${analysis.generatedResponse}"`,
    autoStartDelay: 0,
    typingDelayMillis
  })

  if (!analysis) {
    return <div>Loading...</div>
  }

  return (
    <div className="w-11/12 text-lg p-4 bg-nora-offwhite border border-slate-400 rounded shadow">
      <span>{introText}</span>
      <span className="font-bold">{topicText}</span>
      <br />
      <span>{responseText}</span>
      <br />
      <div className="flex justify-center mt-4 mb-2">
        <span className="w-11/12 text-base bg-slate-300 p-2 rounded italic">{generatedText}</span>
      </div>
    </div>
  )
}

export default GeneratedAnalysis
