import Players from "./Players";

import { useState } from "react";
import { hidden } from "kleur";

const MatchDataEntry = (props) => {

    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open)

    const matches = props.data;
    // console.log(matches);

    const players = [];

    let classList = 'hidden';

    if(open) {
        classList = 'shown'
    } else {
        classList = 'hidden'
    }

    // console.log(props);
    return (
        <div>
            {matches 
                ? matches.map((match) => {


                    const milliseconds = match.info.game_datetime;

                    const date = new Date(milliseconds);

                    const formattedDate = date.toLocaleString();

                    return (
                        <div onClick={() => toggle(!open)} key={match.metadata.match_id}>
                            <h1>{formattedDate}</h1>
                            <div className={classList}>
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