import { useState, useEffect } from "react";

import PlayerName from "./PlayerName";

const Players = (props) => {

    // console.log(props);

    const [playerData, setPlayerData] = useState([]);

    const createPUUIDArr = () => {

        const tempArr = [];

        for(let i = 0; i< props.players.length; i++) {
            tempArr.push( {
                'name': props.players[i].puuid,
                'place': props.players[i].placement
            })
        }

        tempArr.sort((a,b) => {
            return a.place - b.place;
        });

        setPlayerData(tempArr);
}
    
    useEffect(()=>{

        createPUUIDArr();

    }, [])

    return(
        <PlayerName names={playerData}/>
    )
}

export default Players;