import { useState} from 'react';
import 'react-calendar/dist/Calendar.css';
import homeLogo from '../assets/homePage-img.jpg';
import ReactBigCalendar from '../components/ReactBigCalendar';

const HomePage = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className='homePage'>
      <h1>Welcome to Fur & Fluff Checkup Vets</h1>
      <img src={homeLogo} alt='homeLogo' className='homeLogo' />
      
      <br />

      <div className="calendar-container">
        <ReactBigCalendar />
      </div>
      <div className="text-center">
          Todays date: {date.toDateString()}
      </div>

    </div>
  )
}

export default HomePage;
