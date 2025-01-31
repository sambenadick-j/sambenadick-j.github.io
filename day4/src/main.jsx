import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyContext from './ContextApi.jsx'
let data="global data"
createRoot(document.getElementById('root')).render(
  <MyContext.Provider value={data}>
    <App />
  </MyContext.Provider>
)