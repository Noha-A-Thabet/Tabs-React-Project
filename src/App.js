import React, { useState, useEffect, Children } from 'react'
import { FaAngleDoubleRight, FaLifeRing } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);

  // fetching Data 
  const fetchUsers = async () => {
    const response = await fetch(url);
    const newUsers = await response.json();
    setUsers(newUsers);
    setLoading(false);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  // for loading 
  if (loading) {
    return (<h1 className='section loading'>Loading...</h1>)
  }


  const { company, title, dates, duties } = users[value]
  return (
    <section className='section'>
      <div className="title">
        <h2>experiensee</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-containe">
          {users.map((item, index) => {
            return <button key={index} onClick={() => {
              setValue(index)
            }} className={`job-btn ${index === value && 'active-btn'}`}>{item.company}</button>
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return <div key={index} className="job-desc">
              <FaAngleDoubleRight className='job-icon' />
              <p>{duty}</p>
            </div>
          })}
        </article>

      </div>

    </section>
  )



}

export default App
