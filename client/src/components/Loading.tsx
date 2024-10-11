import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFan } from '@fortawesome/free-solid-svg-icons'

const Loading = () => {
  return (
    <div className="animate-spin-sin">
      <FontAwesomeIcon icon={faFan} size="lg" className="text-nora-charcoal" />
    </div>
  )
}

export default Loading
