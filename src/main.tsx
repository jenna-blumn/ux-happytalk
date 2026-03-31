import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// @ts-expect-error - No declaration file for styles
import '@blumnai-studio/blumnai-design-system/styles'
import './index.css'
import { App } from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
