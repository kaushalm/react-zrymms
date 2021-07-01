import React, { useState, useEffect } from 'react';
import './style.css';
import BookMeeting from './Containers/BookMeeting/index';
import ListMeetings from './Containers/ListMeetings/index';

export default function App() {
  const [selectedOption, setSelectedOption] = useState('');

  //useEffect(() => {}, [selectedOption]);

  function selectedOptionChange() {
    console.log(event.target.id);
    setSelectedOption(event.target.id);
    console.log(selectedOption);
  }

  return (
    <div>
      <h1>Meeting Booking Portal</h1>
      <input
        class="buttons"
        type="button"
        value="Book Meeting"
        id="book"
        onClick={selectedOptionChange}
      />
      <input
        class="buttons"
        type="button"
        value="View Room Details"
        id="view"
        onClick={selectedOptionChange}
      />

      <input
        class="buttons"
        type="button"
        value="Cancel"
        id="cancel"
        onClick={selectedOptionChange}
      />
      {selectedOption == 'book' && <BookMeeting />}

      {selectedOption == 'view' && <ListMeetings />}

      {selectedOption == 'cancel' && <ListMeetings isCancel />}
    </div>
  );
}
