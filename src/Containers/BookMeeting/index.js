import React from 'react';
import './styles.css';

export default function BookMeeting() {
  function handleBooking() {
    //validate data
    //call api to book
    console.log('calling api');
  }

  return (
    <>
      <h3>Book Your Meeting</h3>
      <div class="booking_container">
        <div>
          Select Room:
          <select class="rooms" name="rooms" id="rooms">
            <option value="room 1">Room 1</option>
            <option value="room 2">Room 2</option>
            <option value="room 3">Room 3</option>
            <option value="auroom 4di">Room 4</option>
          </select>
        </div>
        <div>
          <span>Start Time: </span>
          <input class="slots" type="time" />
          <span>End Time: </span>
          <input class="slots" type="time" />
        </div>
        <div>
          <input
            value="Book Meeting"
            type="button"
            class="buttons"
            onClick={handleBooking}
          />
        </div>
      </div>
    </>
  );
}
