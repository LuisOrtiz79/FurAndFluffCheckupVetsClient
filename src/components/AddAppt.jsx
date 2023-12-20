import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../API_URL';

const AddAppt = () => {
  const navigate = useNavigate();

  const [newAppt, setNewAppt] = useState({
    name: "",
    specie: "",
    gender: "",
    date: "",
    phone: "",
    email: "",
    appointment: "",
    owner: ""
  })

  const handleTextInput = (e) => {
    setNewAppt((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  /* It put on the json server the new information added by the user */
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(API_URL + '/appointment/' + '?_embed=', {
        name: newAppt.name,
        specie: newAppt.specie,
        gender: newAppt.gender,
        date: newAppt.date,
        phone: newAppt.phone,
        email: newAppt.email,
        appointment: newAppt.appointment,
      })
      .then((response) => { 
        navigate('/');

        setNewAppt({
          name: "",
          specie: "",
          gender: "",
          date: "",
          phone: "",
          email: "",
          appointment: "",
          owner: ""
        });
      })
      .catch((error) => console.log(error));

  };

  return (
    <div className='AddAppt'>
      <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input name='name' type='text' placeholder='Name' value={newAppt.name} onChange={handleTextInput} />
          </label>

          <label>
            Specie:
            <select name='specie' value={newAppt.specie} onChange={handleTextInput} >
              <option value=''>-- None --</option>
              <option value='Dog'>Dog</option>
              <option value='Cat'>Cat</option>
              <option value='Bird'>Bird</option>
              <option value='Horse'>Horse</option>
              <option value='Reptile'>Reptile</option>
              <option value='Hamster'>Hamster</option>
            </select>

            Gender:
            <select name='gender' value={newAppt.gender} onChange={handleTextInput} >
              <option value=''>-- None --</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select>
          </label>

          <label>
            Date & Time:
            <input name='date' type='text' placeholder='mm/dd/yy, time' value={newAppt.date} onChange={handleTextInput} />
          </label>

          <label>
            Phone:
            <input name='phone' type='text' placeholder='Phone' value={newAppt.phone} onChange={handleTextInput} />
          </label>

          <label>
            Email:
            <input name='email' type='text' placeholder='Email' value={newAppt.email} onChange={handleTextInput} />
          </label>

          <label>
            Appointment:
            <select name='appointment' value={newAppt.appointment} onChange={handleTextInput} >
              <option value=''>-- None --</option>
              <option value='Checkup'>Checkup</option>
              <option value='Care'>Care</option>
            </select>
          </label>

          <label>
            Owner:
            <input name='owner' type='text' placeholder='Owner Name' value={newAppt.owner} onChange={handleTextInput} />
          </label>

          <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddAppt;
