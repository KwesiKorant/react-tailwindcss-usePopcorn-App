import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import './styles.css'
// import App from './App.jsx'

import Star from './StarRating'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Star maxRating={10} />
    <Star/>
  </StrictMode>,
)
