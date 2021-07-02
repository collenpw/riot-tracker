import { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";

const PlayerName = (props) => {
    
    const linkData = useContext(DataContext);
    const [names, setNames] = useState([]);
    const [translatedNames, setTranslatedNames] = useState([]);

    // console.log(props);

    const translateNames = async() => {
        const tempArr = [];
        // console.log(props.names[0]);
        for (let i = 0; i< props.names.length; i++) {
            const res = await fetch(`${linkData.proxy}https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-puuid/${props.names[i].name}?${linkData.key}`);
            const data = await res.json();
            tempArr.push({
                'name': data.name,
                'place': props.names[i].place
            })    
        }
        setTranslatedNames(tempArr)
    }


    useEffect(() =>{

        setNames(props.names);

    },[]);


    useEffect(()=>{

        translateNames();

    },[names]);

    // console.log(translatedNames);

    // console.log(props);
    return (
        <div>
            {translatedNames.map((player)=> {
                return (
                <div key={player.name}className='player-data'>
                    <h3>{player.name}</h3>
                    <h3>{player.place}</h3>
                </div>
                )
            })}
            
        </div>
    );
};

// return(
//     <div></div>
// )


export default PlayerName;