import React, { useEffect, useState } from 'react';
import ShowPlayers from '../ShowPlayers/ShowPlayers';

const AvailableCart = () => {
    const [players,setPlayers]=useState([])

    useEffect( ()=>{
        fetch('fakedata.json')
        .then(res=>res.json())
        .then(data =>setPlayers(data))
    } ,[])
    return (
        <div>
            <h2 className='text-2xl font-bold flex justify-start'>Available Cart</h2>
           <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
           {
                players.map(player => <ShowPlayers key={player.id} player={player}></ShowPlayers>)
            }
           </div>
        </div>
    );
};

export default AvailableCart;