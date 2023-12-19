import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from 'axios';
import { API_URL } from '../API_URL';

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const ReactBigCalendar = () => {
  const [eventsData, setEventsData] = useState([]);

  /* Gets the information the information and stores it to be used on the calendar */
  const getAllAppts = () => {
    axios
      .get(API_URL + '/appointment/')
      .then((response) => {
        const appts = response.data.map((appt) => ({
          title: appt.name + ' ' + appt.appointment,
          start: new Date(appt.date),
          end: new Date(appt.date),
          name: appt.name,
          owner: appt.owner,
          appointment: appt.appointment
        }));
        setEventsData(appts);
        })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllAppts();
  }, [] );

  return (
    <div className='calendar'>
        <Calendar
          views={["month"]}
          selectable
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={eventsData}
          style={{
            width: "50vw", 
            height: "50vh",
          }}
          onSelectEvent={(event) => {alert(`Pet: ${event.name} \n Owner: ${event.owner} \n Date&Time: ${event.start} \n Apppointment: ${event.appointment}`)}}
        />
    </div>
  );
}

export default ReactBigCalendar;

