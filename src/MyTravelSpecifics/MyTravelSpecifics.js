import React from 'react';
import ReactDOM from 'react-dom';
import MyTravelMap from '../MyTravelMap/MyTravelMap';
import MyTravelSpecificsLists from '../MyTravelSpecificsLists/MyTravelSpecificsLists';
import './styles.css';

function MyTravelSpecifics(props) {
    return (
        <div>
            <div className="group490">
                <h1 className="detailTitle">여행 상세보기</h1>
                <p className="subText">여행 일정을 확인해보세요!</p>
                <div className="rectangle"></div>
            </div>
            <div style={{ 
                display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-between', 
                alignItems: 'center',
                height: '62.6vh',
                padding: '0 6vw',
                marginRight : '7vw'
                }}>
                <div style={{marginRight: '6vw'}}>
                    <MyTravelMap/>
                </div>
                
                <div style={{ flexGrow: 1 }}>
                    <MyTravelSpecificsLists/>
                </div>
            </div>
        </div>
    );
}

export default MyTravelSpecifics;