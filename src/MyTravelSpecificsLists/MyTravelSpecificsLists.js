import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import circles from './circles.svg'; 
import MyTravelCreate from '../MyTravelCreate/MyTravelCreate';



  function TravelCard({  spot1, spot2, spot3, spot4, first, second, third, start, end, setView,...props }) {
  
  
    const convertDistance = (distance) => {
      if (distance >= 1000) {
        return `${distance / 1000}km`;
      }
      return `${distance}m`;
    };
    
    console.log("start데이는:",start);

    function convertToDate(inputString) {
      if (!inputString) return null;
      const year = `20${inputString.substring(0, 2)}`;
      const month = inputString.substring(2, 4);
      const day = inputString.substring(4, 6);
    
      return new Date(`${year}-${month}-${day}`);
    }
    
    function formatDate(inputDate) {
      if (!inputDate) return null;
      const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
      const month = inputDate.getMonth() + 1;
      const day = inputDate.getDate();
      const weekday = weekdays[inputDate.getDay()];
    
      return `${month}/${day}(${weekday})`;
    }

    function addDays(date, days) {
      let result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
  }

    const SpotDisplay = ({ num, spot, distance }) => (
      <div className='spot-wrapper'>
        <div className='spot-container'>
          <div className="num-box">{`${num}`}</div>
          <div className="travel-card-category">{spot}</div>
        </div>
        {distance && 
          <div className="distance-container">
            <div className="travel-card-line">|</div>
            <div className="travel-card-distance">{convertDistance(distance)}</div>
          </div>
        }
    </div>
    );
  
    return (
      <div className='container'>
        <div className="travel-card-header">
          <span>{props.numOfDay}일차</span>
          <div className='date'>{formatDate(convertToDate(start))}</div>
        </div>
          
        <SpotDisplay num="1" spot={spot1} />
        {spot2 && <SpotDisplay num="2" spot={spot2} distance={first} />}
        {spot3 && <SpotDisplay num="3" spot={spot3} distance={second} />}
        {spot4 && <SpotDisplay num="4" spot={spot4} distance={third} />}
      </div>
    );
  }
  
  function MyTravelSpecificsLists({ travels, ...props }) {
    const handleEditClick = () => {
      console.log('Edit button clicked');
      if (travels.courses.length == 0){
        props.setShowCreateComponent(true);  // 상태를 true로 설정하기
      }
    };

    console.log("travel.start_date데이는:", travels.start_date);
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
                  travels.courses
                    .sort((a, b) => a.numOfDay - b.numOfDay)  // 오름차순으로 정렬
                    .map((travel, index) => 
                        <TravelCard key={index} {...travel} start={travels.start_date} end={travel.end_date} />
                    )
                )}
                <button className="edit-button" onClick={handleEditClick}></button>
              </div>
        </div>
    );
  }
  
  export default MyTravelSpecificsLists;
  