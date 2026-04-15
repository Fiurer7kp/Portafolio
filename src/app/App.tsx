import { BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import AppRoutes from './routes'
import { TransitionProvider } from './context/TransitionContext'
import { PreferencesProvider } from './context/PreferencesContext'

export default function App() {
  return (
    <BrowserRouter>
      <PreferencesProvider>
        <TransitionProvider>
          <Layout>
            <AppRoutes />
          </Layout>
        </TransitionProvider>
      </PreferencesProvider>
    </BrowserRouter>
  )
}
