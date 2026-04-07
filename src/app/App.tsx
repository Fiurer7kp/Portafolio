import { BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import AppRoutes from './routes'
import { TransitionProvider } from './context/TransitionContext'

export default function App() {
  return (
    <BrowserRouter>
      <TransitionProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </TransitionProvider>
    </BrowserRouter>
  )
}
