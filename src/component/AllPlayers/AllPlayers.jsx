import AvailableCart from '../Availablecart/AvailableCart';
import SelectedCart from '../SelectedCart/SelectedCart';
import './AllPlayers.css'

const AllPlayers = ({handleIsActiveState,isActive}) => {
    return (
        <div className='mb-56'>
           <div className="flex justify-end gap-5">
            <button onClick={()=>handleIsActiveState('cart')} className={`${isActive.cart?"btn active" :"btn"}`}>Available</button>
            <button onClick={()=>handleIsActiveState('about')} className={`${isActive.cart?"btn " :"btn active"}`}>Selected (0)</button>
           </div>

           <AvailableCart></AvailableCart>
           <SelectedCart></SelectedCart>
        </div>
    );
};

export default AllPlayers;