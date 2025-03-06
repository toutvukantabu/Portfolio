import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Router from "@/presentation/Router";
import '@/core/i18n'
import {LanguageFadeProvider} from '@/application/provider/LanguageFadeProvider';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <LanguageFadeProvider>
            <Router/>
        </LanguageFadeProvider>
    </StrictMode>,
)
