import { useEffect, useContext, useState } from "react";
import { DataContext } from "../App";

import MatchDataEntry from "./MatchDataEntry";

const MatchHistory = () => {

    const linkData = useContext(DataContext);

    const [matchIDs, setMatchIDs] = useState([]);

    const [matchesData, setMatchesData] = useState([]);


    const makeAPICall = async() => {
        const res = await fetch (`${linkData.proxy}https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/${linkData.puuid}/ids?count=5&${linkData.key}`);
        const data = await res.json();
        // console.log('this is the make API call log' + data);
        setMatchIDs(data);
    }

    const getMatchesData = async() => {
        const tempArr = [];
        for(let i=0; i<matchIDs.length; i++) {
            const res = await fetch (`${linkData.proxy}https://americas.api.riotgames.com/tft/match/v1/matches/${matchIDs[i]}?${linkData.key}`);
            const data = await res.json();
            tempArr.push(data)
            
        } 
            setMatchesData(tempArr);
    }
    
        
        
    useEffect(() => {
        
        makeAPICall();
        
    }, [])

    useEffect(() => {
        getMatchesData();
    }, [matchIDs])
    
    return (
        <div>
            <div>
                <MatchDataEntry data={matchesData}/>
            </div>
        </div>
    );
};

export default MatchHistory;