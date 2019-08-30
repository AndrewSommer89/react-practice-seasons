import "./Seasons.css"
import React from 'react';

const seasonConfig = {
    winter: {
        text: "It's hockey season!!",
        text2: "FIGHT! FIGHT! FIGHT!",
        iconName: 'hockey puck'
    },
    spring: {
        text: 'It is basketball seaon!!',
        text2: "SLAMMM DUNK!!",
        iconName: 'basketball ball'
    },
    summer: {
        text: 'It is baseball season!',
        text2: 'HOME RUN!!!!',
        iconName: 'baseball ball'
    },
    fall: {
        text: 'It is football season!',
        text2: 'TOUCHDOWN!!',
        iconName: 'football ball'
    }
}

const getSeason = (lat, month) => {
    if(month > 10 || month < 2 ){
        return lat > 0 ? 'winter' : 'summer';
    } 
    if(month > 1 && month < 5){
        return lat > 0 ? 'spring' : 'fall';
    }
    if(month > 4 && month < 8){
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'fall' : 'spring';
    }
}

const Seasons = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-top-left massive ${iconName} icon`} />
            <i className={`icon-top-right massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-bottom-left massive ${iconName} icon`} />
            <i className={`icon-bottom-right massive ${iconName} icon`} />
        </div>
    )
}

export default Seasons;