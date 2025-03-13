import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css'
import './btn.css'
import './video.css'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="container mx-auto main-layout">
      <Home />
    </div>
  )
}

export default App
