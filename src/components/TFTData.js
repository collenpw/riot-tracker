import { useContext, useState } from "react";
import { DataContext } from "../App";
import { Route, Redirect } from "react-router-dom";

import MatchHistory from "./MatchHistory";

const TFTData = (props) => {

    const [summoner, setSummoner] = useState('');

    const [redirect, setRedirect] = useState(false);

    const linkData = useContext(DataContext);
    // console.log(linkData);

    const handleAPICall = async(summoner) => {
        try{
            const url = `${linkData.proxy}https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/${summoner}?${linkData.key}`;
    
            const res = await fetch (url);
            const data = await res.json();
            props.setPuuid(data.puuid);
            // console.log(data);
            setRedirect(true)
        }
    
        catch(err){
            console.error(err);
        }
    
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(summoner);
        handleAPICall(summoner);
    }

    if(redirect) {
        return <Redirect to='/match-history'/>}

    return (
        <>
        <Route path='/tft-data/match-history' exact render={() => <MatchHistory />} />
        
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className='summoner-input' 
                    placeholder='Enter Summoner Name'
                    type="text" 
                    onChange={(event) => setSummoner(event.target.value)}
                />
            </form>
        </div>
        </>
    );
};

export default TFTData;