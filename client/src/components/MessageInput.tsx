import { ChangeEvent, KeyboardEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const InputButton = (props: { isActive: boolean; onClick: () => void }) => {
  const { isActive, onClick } = props

  return (
    <button
      className={`flex items-center justify-center px-2 py-2 rounded absolute right-3 top-3 transition-all duration-200 ${isActive ? 'cursor-default bg-slate-300' : 'bg-nora-cta-skyblue hover:bg-nora-hover-skyblue'}`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faArrowUp} className="text-nora-offwhite" size={'xs'} />
    </button>
  )
}

const MessageInput = (props: {
  message: string
  updateMessage: (msg: string) => void
  updateAnalysis: (msg: string) => void
}) => {
  const { message, updateMessage, updateAnalysis } = props

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    updateMessage(event.target.value)
    event.target.style.height = 'auto'
    event.target.style.height = `${event.target.scrollHeight + 5}px`
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      updateAnalysis(message)
    }
  }

  return (
    <div className="w-full relative mb-8">
      <InputButton isActive={message.length === 0} onClick={() => updateAnalysis(message)} />
      <textarea
        className={`w-full max-h-96 flex justify-center p-4 pr-12 overflow-clip scrollbar-hide outline-none resize-none rounded bg-nora-offwhite border border-slate-400 hover:border-slate-500 focus:border-slate-500 hover:shadow-sm focus:shadow-md transition-all duration-200 text-lg`}
        placeholder="What's the last thing a patient said to you?"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={message}
        required
      />
    </div>
  )
}

export default MessageInput
