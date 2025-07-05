import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page'

describe('HomePage', () => {
  it('renders the main heading', () => {
    render(<HomePage />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Crispy Cuts Club')
  })

  it('renders the call-to-action buttons', () => {
    render(<HomePage />)
    const getStartedButton = screen.getByRole('link', { name: /get started/i })
    const learnMoreButton = screen.getByRole('link', { name: /learn more/i })
    
    expect(getStartedButton).toBeInTheDocument()
    expect(learnMoreButton).toBeInTheDocument()
  })

  it('displays trust indicators', () => {
    render(<HomePage />)
    expect(screen.getByText('10,000+')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('50+')).toBeInTheDocument()
    expect(screen.getByText('Master Barbers')).toBeInTheDocument()
  })

  it('shows user type cards', () => {
    render(<HomePage />)
    expect(screen.getByText('Clients')).toBeInTheDocument()
    expect(screen.getByText('Barbers')).toBeInTheDocument()
    expect(screen.getByText('Agencies')).toBeInTheDocument()
    expect(screen.getByText('Shelters')).toBeInTheDocument()
  })

  it('has correct links for user signup', () => {
    render(<HomePage />)
    const clientLink = screen.getByRole('link', { name: /join as client/i })
    const barberLink = screen.getByRole('link', { name: /apply as barber/i })
    
    expect(clientLink).toHaveAttribute('href', '/signup/client')
    expect(barberLink).toHaveAttribute('href', '/signup/barber')
  })
})