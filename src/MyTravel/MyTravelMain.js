import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './MyTravelMain.css';
import MyTravelProfile from '../MyTravelProfile/MyTravelProfile';
import MyTravelSpecifics from '../MyTravelSpecifics/MyTravelSpecifics';
import BtnMyTravelMenu from '../BtnMyTravelMenu/BtnMyTravelMenu';
import MyTravelLists from '../MyTravelLists/MyTravelLists';
import profileTest from './profileTest.png'

function MyTravelMain() {
  const [view, setView] = useState('list'); 
  const [selectedTravel, setSelectedTravel] = useState(null);

  const handleDetailClick = (travel) => {
    setSelectedTravel(travel);
    setView('specifics');
  };
  return (
    <div>
      {view === 'list' && (
        <div style={{ display: 'flex', flexDirection: 'row',justifyContent:'center', height: '62.6vh' }}>
          <div className='my-travel-profile'>
            <MyTravelProfile imgSrc={profileTest} name='라이언' numTravel={8} numLiked={20} date='2023.07.03' />
          </div>
          <div style={{ flexGrow: 1, marginRight: '7vw' }}>
            <MyTravelLists setSelectedTravel={setSelectedTravel} setView={setView} />
          </div>
        </div>
      )}

      {view === 'specifics' && (
        <div>
          <div style={{ flexGrow: 1, marginRight: '7vw' }}>
            <MyTravelSpecifics travel={selectedTravel} />
          </div>
        </div>
      )}
      
      <div style={{ position: 'absolute', left: '2.2vw', bottom: '3.1vh' }}>
        <BtnMyTravelMenu/>
      </div>
    </div>
  );
}

export default MyTravelMain;
