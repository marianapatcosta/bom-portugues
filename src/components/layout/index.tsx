import { ReactNode } from 'react'
import { Footer, Header } from '..'
import { StyledLayout, StyledMain } from './styles'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <StyledLayout>
        <Header />
        <StyledMain>{children}</StyledMain>
        <Footer />
      </StyledLayout>
    </>
  )
}

export default Layout
