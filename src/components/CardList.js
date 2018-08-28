import React from 'react'; //imports react library
import Card from './Card'; //imports Card component I made

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const date = new Date();
const dayOfTheWeek = days[date.getDay()];

const CardList = ({ barList }) => { // function declaration with =>
    return ( //functions gotta return something
        <div>
            {
                barList.map((user, i) => {
                    return (<Card
                        id={barList[i].ID}
                        barName={barList[i].Bar}
                        number={barList[i].Phone}
                        neighborhood={barList[i].Neighborhood}
                        special={barList[i][`special${dayOfTheWeek}`]}
                        />)
                })
            }
        </div>
    );
}

export default CardList;
