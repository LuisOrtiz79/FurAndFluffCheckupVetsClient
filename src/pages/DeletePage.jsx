import DeleteAppt from '../components/DeleteAppt';
import Sidebar from '../components/Sidebar';

const DeletePage = () => {
  return (
    <div className='appt-container'>
      <div className='sidebar-appt'>
        <Sidebar />
      </div>

      <div className='deletePage'>
        <h1>Delete Appointments</h1>

        <DeleteAppt />
      </div>
    </div>
  )
}

export default DeletePage;
