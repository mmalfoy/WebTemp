import React from 'react';
import ReactDOM from 'react-dom';
import MyTravelMap from '../MyTravelMap/MyTravelMap';
import MyTravelSpecificsLists from '../MyTravelSpecificsLists/MyTravelSpecificsLists';

function MyTravelSpecifics(props) {
    return (
    <div style={{ display: 'flex', flexDirection: 'row',justifyContent:'center', height: '62.6vh' }}>
        <div>
            <MyTravelMap/>
        </div>
        
        <div style={{ flexGrow: 1, marginRight: '7vw' }}>
            <MyTravelSpecificsLists/>
        </div>
    </div>
    );
}

export default MyTravelSpecifics;