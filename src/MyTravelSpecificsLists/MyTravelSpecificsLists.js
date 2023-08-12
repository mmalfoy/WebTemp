import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import circles from './circles.svg'; 
import MyTravelCreate from '../MyTravelCreate/MyTravelCreate';

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
  
  /*api 통신 후 받아온 상세 일정정보 */
//   const response = {
//     "result": {
//         "dcId": 1,
//         "spot1": null,
//         "spot2": null,
//         "spot3": null,
//         "spot4": null,
//         "first": null,
//         "second": null,
//         "third": null,
//         "numOfDay": 1,
//         "tid": 1
//     }
// };

// const resultArray = Object.keys(response.result).map(key => {
//     return {
//         key: key,
//         value: response.result[key]
//     };
// });
//console.log(resultArray);

  function TravelCard({ name, category, duration, start, end, setSelectedTravel, setView ,indexNull}) {
  
    const handleDetailClick = () => {
      console.log('Detail button clicked');
      setSelectedTravel({ name, category, duration, start, end });
      setView('specifics');
    };
  
    const handleReviewClick = () => {
      console.log('Review button clicked');
      // 리뷰쓰기
    };
  
    const handleShareClick = () => {
      console.log('Share button clicked');
      // 공유 버튼을 클릭
    };
  
    
  
    return (
        <div className='container'>
          <div>
            <div className="date">안녕</div>
              {indexNull==true?(
                  <div className='travel-card'>
                      <div className='my-travel-emptylists'>
                          항목을 추가하세요
                      </div>
                  </div>

              ):(
                  <div className="travel-card">
                  <div style={{  display: 'flex', flexDirection: 'row', marginTop: '10px', marginBottom: '10px', marginLeft: '40px', alignItems: 'flex-end'}}>
                      <div className="travel-card-name">{name}</div>
                      <div className="travel-card-category">{category}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px', marginBottom: '10px', marginLeft: '40px'}}>
                      <div className="travel-card-duration">{duration}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px', marginBottom: '10px', marginLeft: '40px' }}>
                      <div className="travel-card-text">{start}</div>
                      <div className="travel-card-text">~</div>
                      <div className="travel-card-text">{end}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between',marginTop: '10px', marginBottom: '10px', marginLeft: '40px', marginRight:'40px'}}>
                      <div className="travel-card-button" onClick={handleDetailClick}>상세보기</div>
                      <div className="travel-card-button" onClick={handleReviewClick}>리뷰쓰기</div>
                      <div className="travel-card-button" onClick={handleShareClick}>공유</div>
                  </div>
              </div>
              )}
          </div>

        </div>
      
    );
  }
  
  function MyTravelSpecificsLists(props) {
    const handleEditClick = () => {
      console.log('Edit button clicked');
      if (travels.length == 0){
        props.setShowCreateComponent(true);  // 상태를 true로 설정하기
      }
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
                  travels.map((travel, index) =>
                    <TravelCard key={index} {...travel} />
                  )
                )}
                <button className="edit-button" onClick={handleEditClick}></button>
              </div>
        </div>
    );
  }
  
  export default MyTravelSpecificsLists;
  