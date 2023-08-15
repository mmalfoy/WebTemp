import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const travels = [
  { name: '하나 여행', category: '개인맞춤', duration: "3박4일", start: '7/1', end: '7/4' },
  { name: '둘 여행', category: '개인맞춤', duration: "3박4일", start: '7/1', end: '7/4' },
  { name: '셋 여행', category: '개인맞춤', duration: "3박4일", start: '7/1', end: '7/4' },
  { name: '넷 여행', category: '개인맞춤', duration: "3박4일", start: '7/1', end: '7/4' },
  { name: '다섯 여행', category: '개인맞춤', duration: "3박4일", start: '7/1', end: '7/4' },
  { name: '여섯 여행', category: '개인맞춤', duration: "3박4일", start: '7/1', end: '7/4' },
  { name: '일곱 여행', category: '개인맞춤', duration: "3박4일", start: '7/1', end: '7/4' },
  { name: '여덟 여행', category: '개인맞춤', duration: "3박4일", start: '7/1', end: '7/4' },
  { name: '아홉 여행', category: '개인맞춤', duration: "3박4일", start: '7/1', end: '7/4' },
  { name: '열 여행', category: '개인맞춤', duration: "3박4일", start: '7/1', end: '7/4' },
];

function TravelCard({ name, category, duration, start, end, setView, isEditMode, setIsEditMode, onDelete }) {

  const handleDetailClick = () => {
    console.log('Detail button clicked');
    setView('specifics');
  };

  const handleReviewClick = () => {
    console.log('Review button clicked');
    setView('review');
  };

  const handleShareClick = () => {
    console.log('Share button clicked');
    setView('share');
  };

  const handleEditClick = () => {
    console.log('Edit button clicked');
    setIsEditMode(false)
    setView('edit');
  };

  const handleDeleteClick = () => {
    console.log('Delete button clicked');
    onDelete(name);
  };

  return (
    <div>
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
          {isEditMode ? (
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginTop: '10px', marginBottom: '10px', marginLeft: '450px', marginRight: '40px' }}>
              <div className="travel-card-category" onClick={handleEditClick}>편집</div>
              <div className="travel-card-category" onClick={handleDeleteClick}>삭제</div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between',marginTop: '10px', marginBottom: '10px', marginLeft: '40px', marginRight:'40px'}}>
              <div className="travel-card-button" onClick={handleDetailClick}>상세보기</div>
              <div className="travel-card-button" onClick={handleReviewClick}>리뷰쓰기</div>
              <div className="travel-card-button" onClick={handleShareClick}>공유</div>
            </div>
        )}
        </div>
    </div>
    
  );
}

function MyTravelLists({ setSelectedTravel, setView, isEditMode,setIsEditMode }) {

  const [travelList, setTravelList] = useState(travels);
  const handleDelete = (name) => {
    const updatedList = travelList.filter(travel => travel.name !== name);
    setTravelList(updatedList);
  };

  return (
    <div className="my-travel-lists">
      {travels.map((travel, index) =>
        <TravelCard key={index} {...travel} setSelectedTravel={setSelectedTravel} 
        setView={setView} isEditMode={isEditMode} onDelete={handleDelete}
        setIsEditMode={setIsEditMode}/>)}
    </div>
  );
}

export default MyTravelLists;

