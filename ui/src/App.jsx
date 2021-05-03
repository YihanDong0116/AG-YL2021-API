import React, { useState } from 'react';
import api from './api';
import logo from './logo.svg';
import './App.css';

function App() {
  const [courses, setCoursesList] = useState('No courses yet!');
  const [loading, setLoading] = useState(false);

  const getCoursesList = () => {
    setLoading(true);
    api.getAllCourses()
      .then((res) => {
        setCoursesList(res);
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <button
          disabled={loading}
          type="button"
          onClick={() => getCoursesList()}
        >
          Get Courses
        </button>
        <p>{JSON.stringify(courses)}</p>
      </header>
    </div>
  );
}

export default App;
