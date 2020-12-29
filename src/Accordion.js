import { useState } from 'react';

export function Accordion() {
    const [ isToggled, serIsToggled ] = useState(false)
    return(
        <div>

            { isToggled  && 
              <h3>Show Me </h3>
            }
            
            <button onClick={ () => serIsToggled(!isToggled)} >Toggle</button>
        </div>
    )
}