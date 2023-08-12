import React, { useState } from 'react';
import MyTravelMap from '../MyTravelMap/MyTravelMap';
import MyTravelCreateLists from '../MyTravelCreateLists/MyTravelCreateLists';
import './styles.css';

function MyTravelCreate(props) {
    const [TravelPlanList, setTravelPlanList] = useState([]);

    const addPlan = (plan) => {
        const id = (TravelPlanList.length + 1).toString();  // 기존 리스트 길이 + 1로 id 할당
        const newPlan = { ...plan, id };
        setTravelPlanList(prev => [...prev, newPlan]);
    };

    const handleClick = () => {
        console.log("Add clicked");
    };

    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh'
        }}>
            <div className="group490">
                <h1 className="detailTitle">여행 만들기</h1>
                <p className="subText">
                    나의 여행 일정을 만들어 보세요. 장소와 날짜를 직접 설정하고 일일 계획을 구성할 수 있습니다.
                </p>
                <div className="rectangle"></div>
            </div>
            <div style={{ 
                display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-between', 
                alignItems: 'flex-start',
                height: '62.6vh',
                padding: '0 6vw'
            }}>
                <div style={{marginRight: '6vw'}}>
                    <MyTravelMap TravelPlanList={TravelPlanList}/>
                </div>
                
                <div style={{ flexGrow: 1 }}>
                    <MyTravelCreateLists addPlan={addPlan} />
                </div>
            </div>
            <button className="addButton" onClick={handleClick}>추가하기</button>
        </div>
    );
}

export default MyTravelCreate;