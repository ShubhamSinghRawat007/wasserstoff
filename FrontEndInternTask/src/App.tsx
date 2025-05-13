import { useState } from 'react'
import TicketGenerator from './pages/Page1/Page1'
import TicketConfirmation from './pages/Page2/Page2'

function App() {
  const [currentPage, setCurrentPage] = useState<'generator' | 'confirmation'>('generator')
  const [ticketData, setTicketData] = useState<{
    name: string
    email: string
    github: string
    avatar?: string
  } | null>(null)

  const handleGenerateTicket = (data: {
    name: string
    email: string
    github: string
    avatar?: string
  }) => {
    setTicketData(data)
    setCurrentPage('confirmation')
  }

  const handleCreateNew = () => {
    setCurrentPage('generator')
  }

  return (
    <>
      {currentPage === 'generator' ? (
        <TicketGenerator onGenerate={handleGenerateTicket} />
      ) : (
        <TicketConfirmation 
          name={ticketData?.name || ''}
          email={ticketData?.email || ''}
          github={ticketData?.github || ''}
          avatar={ticketData?.avatar}
          onCreateNew={handleCreateNew}
        />
      )}
    </>
  )
}

export default App