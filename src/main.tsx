import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/theme.css';
import './styles/base.css';
import './styles/nav.css';
import './styles/hero.css';
import './styles/tech-stack.css';
import './styles/projects.css';
import './styles/activity.css';
import './styles/contact.css';
import './styles/footer.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
