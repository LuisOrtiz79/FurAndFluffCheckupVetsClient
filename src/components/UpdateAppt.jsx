import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../API_URL';

const UpdateAppt = () => {
  const [showAppt, setShowAppt] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const [editedAppt, setEditedAppt] = useState({
    name: "",
    specie: "",
    gender: "",
    date: "",
    phone: "",
    email: "",
    appointment: "",
    owner: ""
  });

  /* Gets the information from the json on the server */
  const getAllAppts = () => {
    axios
      .get(API_URL + '/appointment/')
      .then((response) => setShowAppt(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllAppts();
  }, [] );

  /* Gets the information that correspond with the id */
  const getSingleAppt = (apptId) => {
    axios
      .get(API_URL + '/appointment/' + apptId)
      .then((response) => {
        setEditedAppt(response.data);
      })
      .catch((error) => {
        console.error('Error getting details:', error);
      });
  };

  const handleEdit = (apptId) => {
    getSingleAppt(apptId);
    setIsEditing(true);
  };

  /* On edit it stores the new information on the json based on the id */
  const editAppt = (e) => {
    e.preventDefault();
    console.log(editedAppt.id)

    axios
      .put(API_URL + '/appointment/' + editedAppt.id, {
        name: editedAppt.name,
        specie: editedAppt.specie,
        gender: editedAppt.gender,
        date: editedAppt.date,
        phone: editedAppt.phone,
        email: editedAppt.email,
        appointment: editedAppt.appointment,
        owner: editedAppt.owner,
      })
      .then((response) => {
        console.log("Updated appointment ===>", response.data);
        navigate('/');
      })
      .catch((error) => console.log(error));
      
    setIsEditing(false);
  };

  const handleTextInput = (e) => {
    setEditedAppt((prev) => ({...prev, [e.target.name]: e.target.value}));
  };

  return (
    <>{ !isEditing ?
        <div className='appts'>
            {showAppt && 
              showAppt.map((appt, index) => {
                return (
                  <div key={index}>
                    <div className='sticky-note'>
                      <h2>{appt.name}</h2>
                      <p>{appt.appointment}</p>
                      <p>{appt.date}</p>

                      <button id='buttons1' className='buttons' onClick={() => handleEdit(appt.id)}>Edit</button>
                    </div>
                  </div>
                )
            })}
        </div>
      :
      <div className='updatePage-form'>
        <form onSubmit={editAppt}>
          <label>
            Name
            <input name='name' type='text' placeholder='New Name' value={editedAppt.name} onChange={handleTextInput} />
          </label>
      
          <label>
            Specie
            <select name='specie' value={editedAppt.specie} onChange={handleTextInput} >
              <option value=''>-- None --</option>
              <option value='Dog'>Dog</option>
              <option value='Cat'>Cat</option>
              <option value='Bird'>Bird</option>
              <option value='Horse'>Horse</option>
              <option value='Reptile'>Reptile</option>
              <option value='Hamster'>Hamster</option>
            </select>

            Gender:
            <select name='gender' value={editedAppt.gender} onChange={handleTextInput} >
              <option value=''>-- None --</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select>
          </label>

          <label>
            Date & Time:
            <input name='date' type='text' placeholder='mm/dd/yy, time' value={editedAppt.date} onChange={handleTextInput} />
          </label>
      
          <label>
            Phone
            <input name='phone' type='text' placeholder='New Phone' value={editedAppt.phone} onChange={handleTextInput} />
          </label>
      
          <label>
            Email
            <input name='email' type='text' placeholder='New Email' value={editedAppt.email} onChange={handleTextInput} />
          </label>
      
          <label>
            Appointment
            <select name='appointment' value={editedAppt.appointment} onChange={handleTextInput} >
              <option value=''>-- None --</option>
              <option value='Checkup'>Checkup</option>
              <option value='Care'>Care</option>
            </select>
          </label>
      
          <label>
            Owner
            <input name='owner' type='text' placeholder='New Owner Name' value={editedAppt.owner} onChange={handleTextInput} />
          </label>

          <button type='submit'>Edit</button>
        </form>
      </div>
      
    }
    </>
  )
}

export default UpdateAppt;

