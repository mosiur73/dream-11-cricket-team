import AvailableCart from '../Availablecart/AvailableCart';
import SelectedCart from '../SelectedCart/SelectedCart';
import './AllPlayers.css'

const AllPlayers = ({handleIsActiveState,isActive,handleSelectPlayer,selectPlayer,handlePlayerDelete}) => {
    
    
    return (
        <div className='mb-56'>
           <div className="flex justify-end gap-5">
            <button onClick={()=>handleIsActiveState('cart')} className={`${isActive.cart?"btn active" :"btn"}`}>Available</button>
            <button onClick={()=>handleIsActiveState('about')} className={`${isActive.cart?"btn " :"btn active"}`}>Selected {selectPlayer.length}</button>
           </div>
               {
                isActive.cart?<AvailableCart handleSelectPlayer={handleSelectPlayer}></AvailableCart>:
                <SelectedCart selectPlayer={selectPlayer} handlePlayerDelete={handlePlayerDelete}
            handleIsActiveState={handleIsActiveState} isActive={isActive}
                ></SelectedCart>
                
            }
          
           
        </div>
        // hello world
    );
};

export default AllPlayers;