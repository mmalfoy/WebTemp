import React,{useState} from 'react';
import './styles.css';

function MyTravelProfileEdit() {

    const [showPopup, setShowPopup] = useState(false);

    const handleDelete = () => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
    };

    const handleEditButtonClick = () => {
        // 버튼 클릭시 수행할 작업을 여기에 작성
        console.log('Image edit button clicked!');
    };

    return (
    <div className="profile-edit-container">
        <h1 className="profile-title">내 프로필</h1>
        
        <div className="profileEdit-image"></div>

        <button className="edit-button" onClick={handleEditButtonClick}></button>

        
        <h2 className="profile-subtitle">닉네임</h2>
        
        <input type="text" className="nickname-input" />

        <div className="buttons-container">
            <button className="save-button">저장하기</button>
            <button className="delete-button" onClick={handleDelete}>삭제하기</button>
        </div>
        {showPopup && (
            <div className="popup-overlay">
            <div className="popup-content">
                <div className="popup-icon"></div>
                <span className="popup-text">탈퇴가 완료되었습니다. 감사합니다.</span>
            </div>
            </div>
        )}
    </div>
    );
}

export default MyTravelProfileEdit;