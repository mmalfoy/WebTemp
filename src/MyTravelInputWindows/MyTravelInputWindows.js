import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import './styles.css'

const MyTravelInputWindows = ({ onTravelInfoSubmit, isFromEdit }) => {
    const [name, setName] = useState("");
    const [placeName, setPlaceName] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [startDatePicker, setStartDatePicker] = useState(null);
    const [endDatePicker, setEndDatePicker] = useState(null);
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);


    const handleExampleComponent = () => {
    // Example 컴포넌트를 호출하고 값을 받아오는 로직 구현 필요
    // 예시: 
    // const { returnedPlaceName, returnedLatitude, returnedLongitude } = Example();
    // setPlaceName(returnedPlaceName);
    // setLatitude(returnedLatitude);
    // setLongitude(returnedLongitude);
    };

    const handleDateInput = (type) => {
        if (type === "start") {
            setShowStartDatePicker(true);
        } else {
            setShowEndDatePicker(true);
        }
    };

    const handleDateChange = (date, type) => {
        if(type === "start") {
            setStartDatePicker(date);
            setStartDate(date);
        } else if(type === "end") {
            setEndDatePicker(date);
            setEndDate(date);
        }
    };

    const handleSubmit = () => {
        if (typeof onTravelInfoSubmit === "function") {
            const travelInfo = [name, placeName, latitude, longitude, startDate, endDate];
            onTravelInfoSubmit(travelInfo);
        } else {
            console.error("onTravelInfoSubmit is not a function. It is:", typeof onTravelInfoSubmit);
        }
    };

    const getSpanClass = (date) => {
        if(date) return "calender-text"; // 날짜가 있으면 calender-text 스타일
    return "calender-empty-text";    // 날짜가 없으면 calender-empty-text 스타일 적용
    };

    // 날짜 포맷 변환 함수
    const formatDate = (date) => {
        if (!date) return null;
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}년 ${month}월 ${day}일`;
    };

    return (
        <>
            <div className="container">
                <div className="input-window" style={{marginRight:'1.79vw'}}>
                    <h3 className="title">여행 코스 이름</h3>
                    <input className="input" 
                    placeholder='여행 코스 이름'
                    type="text" onChange={e => setName(e.target.value)} />
                    {/* 키보드 입력을 활성화하는 버튼 로직 구현 필요 */}
                    <button  className="pencil-button" ></button>
                </div>

                <div className="input-window" style={{marginRight:'1.79vw'}}>
                    <h3 className="title">어디로?</h3>
                    <input type="text" className="input" 
                    placeholder='지도로 확인하세요.' value={placeName} readOnly />
                    <button className="location-button" 
                    onClick={handleExampleComponent}></button>
                </div>

                <div className="input-window" >
                    <h3 className="title">언제?</h3>
                    <div className='date'>
                        <div className='date-section'>
                            <span>출발</span>
                            <span className={getSpanClass(startDate)} 
                            data-placeholder="2023년 00월 00일">
                            {formatDate(startDate) || "2023년 00월 00일"}
                        </span>
                        {showStartDatePicker && (
                            <DatePicker
                                calendarClassName="datepicker-calendar" 
                                inline
                                selected={startDatePicker} 
                                onChange={(date) => handleDateChange(date, "start")} 
                                placeholderText="2023년 00월 00일"
                                dateFormat="yyyy년 MM월 dd일"
                                onSelect={() => setShowStartDatePicker(false)} // 선택 후 숨기기
                            />
                        )}
                        <button className="calendar-button"  onClick={() => handleDateInput("start")}></button>
                    </div>
                    <div className='date-section'>
                        <span>도착</span>         
                        <span className={ getSpanClass(endDate)} 
                            data-placeholder="2023년 00월 00일">
                            {formatDate(endDate) || "2023년 00월 00일"}
                        </span>
                        {showEndDatePicker && (
                            <DatePicker 
                                calendarClassName="datepicker-calendar"
                                inline
                                selected={endDatePicker} 
                                onChange={(date) => handleDateChange(date, "end")} 
                                placeholderText="2023년 00월 00일"
                                dateFormat="yyyy년 MM월 dd일"
                                onSelect={() => setShowEndDatePicker(false)} // 선택 후 숨기기
                            />
                        )}
                        <button className="calendar-button"  onClick={() => handleDateInput("end")}></button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="button-container">
                <button className='button' onClick={handleSubmit}>{isFromEdit?"여행 편집 완료":"여행 만들기"}</button>
            </div>
            
        </>
        
    );
}

export default MyTravelInputWindows;