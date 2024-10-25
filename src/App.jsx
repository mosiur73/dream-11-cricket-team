
import { useState } from 'react'
import './App.css'
import AllPlayers from './component/AllPlayers/AllPlayers'
import Footer from './component/Footer/Footer'
import Navbar from './component/Navbar/Navbar'
import Banner from './component/Banner/Banner'

function App() {
  const [climes,setClimes]=useState(0)
  const [isActive,setIsActive]=useState({
    cart:"true",
    status:"active"
  })

  const handleIsActiveState=(status)=>{
    if(status== "cart"){
      setIsActive({
        cart:true,
        status:"cart"
      })
    }
    else{
      setIsActive({
        cart:false,
        status:"about"
      })
    }
  }

  const handleclimes=()=>{
    setClimes(climes + 50000)
  }

  
  

  return (
    <>
    
    <Navbar climes={climes}></Navbar>
    <Banner handleclimes={handleclimes}></Banner>
    
    <AllPlayers
    handleIsActiveState={handleIsActiveState}
    isActive={isActive}
    ></AllPlayers>
    <Footer></Footer>
      
     
    </>
  )
}

export default App
