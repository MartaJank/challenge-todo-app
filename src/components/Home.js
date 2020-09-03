import React from 'react';
import { Link } from 'react-router-dom';
import GetTasks from './GetTasks';

function Home() {
  return (
    
    
    <div> 
      <Link to={'/tasks/add'}><button>Add Task</button></Link>
      <GetTasks />
    </div>
  )
}

export default Home;