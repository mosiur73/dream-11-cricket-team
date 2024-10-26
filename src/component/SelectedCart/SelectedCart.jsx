import { MdDelete } from "react-icons/md";

const SelectedCart = ({selectPlayer,handlePlayerDelete}) => {

    
    return (
        <div>
            <h2 className='text-2xl font-bold flex justify-start'>Selected cart ({selectPlayer.length} /6)</h2>

            {
                selectPlayer.map((player,idx) =>(
                    <div key={idx}>
                        <div className="bg-gray-200 rounded-2xl mb-5 flex justify-between items-center">
                            <div className="flex gap-5 p-3">
                                <img className="w-20 rounded-full" src={player.img} alt="" />
                                <div>
                                    <h2 className="font-bold">{player.name}</h2>
                                    <h4>{player.role}</h4>
                                </div>
                            </div>
                            <button onClick={()=>handlePlayerDelete(player.id)} className="pr-10 text-3xl text-orange-500"><MdDelete  /></button>
                           

                        </div>

                    </div>
                ))
            }
            <button className='bg-[#E7FE29] p-3 rounded-xl font-bold btn-outline btn m-6 flex justify-start'>Add more Player</button>
        </div>
    );
};

export default SelectedCart;