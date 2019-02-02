import React from 'react';
import Card from './Card';

//find the day of the week *eyeroll*
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const date = new Date();
let dayOfTheWeek;

const CardList = ({ barList, dealDay }) => {
    //sort to show bars with specials at top of list wrapped in curly brackets for JS
    if(dealDay === ""){
        dayOfTheWeek = days[date.getDay()];
    } else {
        dayOfTheWeek = dealDay
    }

    barList.sort((a) => {
        return (!a[`special${dayOfTheWeek}`]) ? 1 : -1;
    });

    return (
        <div>
            {
                barList.map((user, i) => {
                    return (<Card
                        id={barList[i].ID}
                        barName={barList[i].Bar}
                        number={barList[i].Phone}
                        neighborhood={barList[i].Neighborhood}
                        special={barList[i][`special${dayOfTheWeek}`]}
                        dayOfTheWeek={dayOfTheWeek}
                        />)
                })
            }
        </div>
    );
}

export default CardList;
