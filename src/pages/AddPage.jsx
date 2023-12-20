import AddAppt from '../components/AddAppt';
import Sidebar from '../components/Sidebar';

const AddPage = () => {
  return (
    <div className='appt-container'>
      <div className='sidebar-appt'>
        <Sidebar />
      </div>

      <div className='addPage'>
        <h1>Add Appointment</h1>

        <AddAppt />
      </div>
    </div>
   
  )
}

export default AddPage;
