import React from 'react'; //imports react library
import Card from './Card'; //imports Card component I made

const CardList = ({ barList }) => { // function declaration with =>
    return ( //functions gotta return something
        <div>
            {
                barList.map((user, i) => {
                    return (<Card
                        id={barList[i].id}
                        barName={barList[i].Bar}
                        number={barList[i].Phone}
                        neighborhood={barList[i].Neighborhood}
                        />)
                })
            }
        </div>
    );
}

export default CardList;
