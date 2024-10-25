import logo from '../../assets/logo.png';

import { FaBitcoin } from "react-icons/fa";


const Navbar = ({climes}) => {
    
    return (
        
        <div className=''>
        
       
           <div className='flex max-w-7xl mx-auto justify-between fixed left-0 right-0   top-0 bg-[#F9F7F3] '>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='flex items-center gap-8'>
                <h3>Home</h3>
                <h3>Fixture</h3>
                <h3>Team</h3>
                <h3>Schedules</h3>
                <button className='flex items-center btn'>{climes} coin <FaBitcoin /></button>
            </div>
           </div>
          
          
           
        </div>
    );
};

export default Navbar;