import React from 'react'; //imports react library
import Card from './Card'; //imports Card component I made

const CardList = ({ robots }) => { // function declaration with =>
    return ( //functions gotta return something
        <div>
            {
                robots.map((user, i) => {
                    return (<Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}
                        />)
                })
            }
        </div>  
    );
}

export default CardList;

/* so the function above is returning a div {} (curly brackets) are indicating
* that the react engine is supposed to use javascript
* the code is a function that maps through the robots array and spits out the 
* and email of the user @ id
*/