import { FaUser } from "react-icons/fa";
import { CiFlag1 } from "react-icons/ci";

const ShowPlayers = ({player,handleSelectPlayer}) => {
    
    const {name,role,batting_style,country,rating,price,img}=player
    
    
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl space-y-4">
 
   <img className="rounded-2xl" src={img} alt="" />
 
  <div className="">
    <h2 className="card-title "><FaUser />{name}</h2>
    <div className="flex justify-between mb-4">
        <h4 className="flex items-center gap-2"><CiFlag1 />{country}</h4>
        <h4>{role}</h4>
    </div>
    <div className="border-b mb-2"></div>
    <h4 className="justify-start flex font-bold mb-3">Rating:{rating}</h4>
    <h4 className="flex justify-start font-medium">{batting_style}</h4>
    <div className="card-actions justify-between items-center">
      <h4>price:{price}</h4>
      <button onClick={()=>handleSelectPlayer(player)} className="btn">Chose player</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ShowPlayers;