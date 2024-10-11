import { useState } from 'react'
import NoraIntro from '../components/NoraIntro'
import MessageInput from '../components/MessageInput'
import { Analysis } from '../data/types'
import GeneratedAnalysis from '../components/GeneratedAnalysis'
import Loading from '../components/Loading'
import axiosInstance from '../axiosInstance'

function AnalysisPage() {
  const [message, setMessage] = useState('')
  const [analysis, setAnalysis] = useState<Analysis | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const getAnalysis = (message: string) => {
    setAnalysis(null)
    setIsLoading(true)
    axiosInstance
      .post('/message-analysis', { message: message })
      .then((res) => {
        setAnalysis(res.data)
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  }

  return (
    <div className="w-full max-w-3xl px-5 py-6 font-nunito text-nora-charcoal flex flex-col items-center">
      <NoraIntro />
      <MessageInput
        message={message}
        updateMessage={(msg) => setMessage(msg)}
        updateAnalysis={getAnalysis}
      />
      {analysis && <GeneratedAnalysis analysis={analysis} />}
      {isLoading && <Loading />}
    </div>
  )
}

export default AnalysisPage
