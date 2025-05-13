import { 
  LogoHeader, 
  Ticket, 
  Avatar,
  TextHighlight,
  Button
} from '../../lib'

interface TicketConfirmationProps {
  name: string
  email: string
  github: string
  avatar?: string
  onCreateNew: () => void
}

export default function TicketConfirmation({
  name,
  email,
  github,
  avatar,
  onCreateNew
}: TicketConfirmationProps) {
  return (
    <>
      <LogoHeader />
      <div className="confirmation-header">
        <h2>
          Congrats, <TextHighlight>{name}</TextHighlight>!
        </h2>
        <p>Your ticket is ready</p>
      </div>
      
      <Ticket
  title="Coding Conf"
  date="Jan 21, 2025"
  location="Austin, TX"
  name={name}
  username={github}
  avatarUrl={avatar || ''}
/>

      
      <div className="action-button">
        <Button onClick={onCreateNew}>
          Create Another Ticket
        </Button>
      </div>
    </>
  )
}