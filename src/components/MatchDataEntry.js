import Players from "./Players";

import { useState } from "react";

const MatchDataEntry = (props) => {

    const [open, setOpen] = useState(false);
    const toggle = (e) =>  {
        console.log(e.target);
        setOpen(!open)
        
    }
    const matches = props.data;

    let classList = 'hidden';

    if(open) {
        classList = 'shown'
    } else {
        classList = 'hidden'
    }

    return (
        <div>
            {matches 
                ? matches.map((match) => {


                    const milliseconds = match.info.game_datetime;

                    const date = new Date(milliseconds);

                    const formattedDate = date.toLocaleString();
                    

                    return (
                        <div  key={match.metadata.match_id}>
                            <h1 id={matches.indexOf(match)}onClick={toggle}className='date'>{formattedDate}</h1>
                            <div className={!open ? 'hidden': null} >
                                <Players players={match.info.participants}/>
                            </div>
                            
                        </div>
                    )
                })
                : <h1>Loading</h1>
            }
            
        </div>
    );
};

export default MatchDataEntry;