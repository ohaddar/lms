import { BrowserRouter } from 'react-router-dom'

// Custom render function wrapper component
export const AllTheProviders = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return <BrowserRouter>{children}</BrowserRouter>
}
