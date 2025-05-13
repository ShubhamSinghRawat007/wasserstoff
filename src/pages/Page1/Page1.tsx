import { useState } from 'react'
import { 
  LogoHeader, 
  FileUploader, 
  InputField, 
  Button,
  Card
} from '../../lib'
import './Page1.css'

interface TicketGeneratorProps {
  onGenerate: (data: {
    name: string
    email: string
    github: string
    avatar?: string
  }) => void
}
// Icon components for demo
const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );
  
  const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
  
  const GitHubIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 1C5.925 1 1 5.925 1 12c0 4.867 3.163 8.992 7.547 10.437.55.1.75-.238.75-.53 0-.262-.01-1.124-.015-2.04-3.073.668-3.722-1.48-3.722-1.48-.5-1.27-1.22-1.61-1.22-1.61-.998-.683.076-.669.076-.669 1.104.078 1.684 1.135 1.684 1.135.98 1.677 2.574 1.193 3.2.912.1-.71.38-1.194.69-1.47-2.453-.28-5.032-1.226-5.032-5.456 0-1.205.43-2.188 1.134-2.957-.114-.28-.492-1.408.11-2.936 0 0 .927-.297 3.038 1.13A10.6 10.6 0 0 1 12 6.844c.94.004 1.887.128 2.77.376 2.11-1.427 3.035-1.13 3.035-1.13.604 1.528.226 2.656.112 2.936.707.77 1.133 1.752 1.133 2.957 0 4.24-2.582 5.173-5.044 5.45.39.338.735 1.01.735 2.037 0 1.47-.013 2.653-.013 3.015 0 .295.198.636.755.527C19.842 20.99 23 16.865 23 12c0-6.075-4.925-11-11-11z" />
    </svg>
  );
  

export default function TicketGenerator({ onGenerate }: TicketGeneratorProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [github, setGithub] = useState('')
  const [avatar, setAvatar] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleFileUpload = (file: File) => {
    setAvatar(file)
  }

  const handleSubmit = () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      onGenerate({
        name,
        email,
        github,
        avatar: avatar ? URL.createObjectURL(avatar) : undefined
      })
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="ticket-generator-page"  >
      {/* Background particles - add these divs */}
      <div className="background-particles">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.1 + 0.05
            }}
          />
        ))}
      </div>
      
      <LogoHeader />
      <Card>
        <FileUploader onFileUpload={handleFileUpload} />
        <InputField
            label="Full Name"
            placeholder="John Doe"
            value={name}
            onChange={setName}
            icon={<UserIcon />}
            variant="outlined"
          />
         <InputField
            label="Email Address"
            type="email"
            placeholder="john@example.com"
            value={email}
            onChange={setEmail}
            icon={<MailIcon />}
            variant="outlined"
            status={email && !email.includes('@') ? 'error' : email ? 'success' : 'default'}
            helperText={email && !email.includes('@') ? 'Please enter a valid email' : email ? 'Email looks good!' : ''}
          />
        <InputField 
          label="GitHub Username"
          placeholder="jonsnep"
          value={github}
          onChange={setGithub}
          icon={<GitHubIcon />}
          variant="outlined"
        />
        <Button 
          onClick={handleSubmit}
          loading={isLoading}
          disabled={!name || !email || !github}
          fullWidth
        >
          Generate My Ticket
        </Button>
      </Card>
      
      <footer className="page-footer">
        <p>Join 10,000+ developers at Coding Conf 2023</p>
      </footer>
    </div>
  );
}