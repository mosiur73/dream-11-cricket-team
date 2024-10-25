
import { useState } from 'react'
import './App.css'
import AllPlayers from './component/AllPlayers/AllPlayers'
import Footer from './component/Footer/Footer'
import Navbar from './component/Navbar/Navbar'
import Banner from './component/Banner/Banner'

function App() {
  const [climes,setClimes]=useState(0)
  const [selectPlayer,setSelectPlayer]=useState([])
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
  
  const handleSelectPlayer=(player)=>{
    if(climes <player.price){
      alert('your money is not enough')
    }else{
      const newPlayers=[...selectPlayer,player]
      setSelectPlayer(newPlayers)
    }
    
    
    
  }
 

  
  

  return (
    <>
    
    <Navbar climes={climes}></Navbar>
    <Banner handleclimes={handleclimes}></Banner>

    <AllPlayers
    handleIsActiveState={handleIsActiveState}
    handleSelectPlayer={handleSelectPlayer}
    isActive={isActive}
    selectPlayer={selectPlayer}
    ></AllPlayers>
    <Footer></Footer>
      
     
    </>
  )
}

export default App
