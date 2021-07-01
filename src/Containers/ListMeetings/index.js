import React, { useState, useEffect } from 'react';
import './styles.css';

export default function ListMeetings({ ...props }) {
  const [meetingList, setMeetingList] = useState([]);

  function fetchRoomDetails() {
    //call room details api
    const data = [
      { slot: '1:00:00 PM - 2:00:00PM ' },
      { slot: '1:00:00 PM - 2:00:00PM ' }
    ];
    setMeetingList(data);
    console.log(props);
  }

  return (
    <>
      <h3>Select Room to View Details</h3>
      <div class="listContainer">
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
          <input
            class="buttons"
            type="button"
            value="view"
            onClick={fetchRoomDetails}
          />
        </div>
        {meetingList.length > 0 && (
          <div class="details">
            <table>
              <tr>
                <th> Booked Slots</th>
              </tr>
              {meetingList.map(row => {
                return (
                  <tr>
                    <td>{row.slot}</td>
                    {props.isCancel && (
                      <input class="cancel" value="Cancel" type="button" />
                    )}
                  </tr>
                );
              })}
            </table>
          </div>
        )}
      </div>
    </>
  );
}
