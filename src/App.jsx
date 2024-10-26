
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

  const handleDeletePrice=(id) =>{
    const newPrice=selectPlayer.find((player) =>player.id !=id)
    setClimes(climes - newPrice.price)
  }
  
  const handleSelectPlayer=(player)=>{
    const isexist=selectPlayer.find((p) =>p.id ==player.id);
    if(climes < player.price && isexist){
      alert('your money is not enough and this payer is already added')
      return
    }
    if(climes <player.price){
      alert('your money is not enough')
      return
    }
    if(isexist){
      alert('this player is already added')
    }
    
    else{
      
      const newPlayers=[...selectPlayer,player]
      setSelectPlayer(newPlayers)
      handleDeletePrice( player)
     
    }
      
  }

  

  const handlePlayerDelete=(id)=>{
    
   const remainingPlayer=selectPlayer.filter((p)=>p.id !=id)
    setSelectPlayer(remainingPlayer)
    
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
    handlePlayerDelete={handlePlayerDelete}
    ></AllPlayers>
    <Footer></Footer>
      
     
    </>
  )
}

export default App
