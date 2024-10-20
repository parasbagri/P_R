import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='ms-Fabric dir="ltr'>
     <p>Shree ganeshay namha::</p>
     {/* <Button text="Click ME" onShow={()=> console.log("clicked")}/> */}
     <Button text="Not on me"/>
     <Button text="me"/>
    </div> 
  )
}

export default App
