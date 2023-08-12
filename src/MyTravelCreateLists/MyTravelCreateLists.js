import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MyTravelMap from '../MyTravelMap/MyTravelMap';
import circles from './circles.svg'; 
import './styles.css';

const travels = [
    // { name: '하나 여행', category: '개인맞춤', duration: "3박4일", start: '7/1', end: '7/4' },
    // { name: '둘 여행', category: '개인맞춤', duration: "3박4일", start: '7/1', end: '7/4' },
    // { name: '셋 여행', category: '개인맞춤', duration: "3박4일", start: '7/1', end: '7/4' },
    // { name: '넷 여행', category: '개인맞춤', duration: "3박4일", start: '7/1', end: '7/4' },
    // { name: '다섯 여행', category: '개인맞춤', duration: "3박4일", start: '7/1', end: '7/4' },
    // { name: '여섯 여행', category: '개인맞춤', duration: "3박4일", start: '7/1', end: '7/4' },
    // { name: '일곱 여행', category: '개인맞춤', duration: "3박4일", start: '7/1', end: '7/4' },
    // { name: '여덟 여행', category: '개인맞춤', duration: "3박4일", start: '7/1', end: '7/4' },
    // { name: '아홉 여행', category: '개인맞춤', duration: "3박4일", start: '7/1', end: '7/4' },
    // { name: '열 여행', category: '개인맞춤', duration: "3박4일", start: '7/1', end: '7/4' },
];


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
            height: '100vh'}}>
            <div style={{ flexGrow: 1 }}>
                    <MyTravelCreateLists addPlan={addPlan} />
                </div>
        </div>
    );
}

function MyTravelCreateLists({ addPlan }) {
    const [search, setSearch] = useState("");
    // TODO: 장소 검색 API 통신을 위한 로직
    // 검색 결과가 있다면 addPlan을 사용하여 TravelPlanList에 추가
    
    const handleSearch = () => {
        // 여기에서 검색 API를 호출하고 결과를 받아온다면:
        const result = {
            latitude: "37.5665",  // 예시: 서울의 위도
            longitude: "126.9780", // 예시: 서울의 경도
            placeName: "서울"
        };
        addPlan(result);
    };

    return (

        <div>
              <div className="image-container">
                <img src={circles} alt="Circles Decoration"  />
              </div>
              <div className="my-travel-lists">
                {travels.length === 0 ? (
                    <div className='container'>
                        <div className="date">안녕</div>
                        <div className='travel-card'>
                            <div className='travel-card-empty'>
                            항목을 추가하세요
                            </div>
                        </div>
                    </div>
                ) : (
                //   travels.map((travel, index) =>
                //     <TravelCard key={index} {...travel} />
                    <div>
                    </div>
                )
                }
                <div>
                    <input 
                        type="text" 
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="장소 검색..."
                    />
                    <button onClick={handleSearch}>검색</button>
                    {/* 검색 결과 및 기타 UI 추가 */}
                </div>
            </div>
        </div>

    );
}

export default MyTravelCreate;