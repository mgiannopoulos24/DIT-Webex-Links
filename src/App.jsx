import React, { useState } from 'react';
import './App.css';
import CustomCard from './CustomCard/CustomCard';
import Footer from './footer';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import courseData from './courseData.json';

const App = () => {
  // Initialize courses with an additional isFavorite property set to false
  const initialCourses = courseData.map(course => ({ ...course, isFavorite: false }));
  const [courses, setCourses] = useState(initialCourses);
  const [searchInput, setSearchInput] = useState('');

  const toggleFavorite = (courseKey) => {
    const updatedCourses = courses.map(course => {
      if (course.key === courseKey) {
        // Toggle the isFavorite property
        return { ...course, isFavorite: !course.isFavorite };
      }
      return course;
    });
    setCourses(updatedCourses);
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  // Filter courses based on search input and sort by favorites
  const filteredAndSortedCourses = courses
    .filter(course => 
      course.title.toLowerCase().includes(searchInput.toLowerCase()))
    .sort((a, b) => b.isFavorite - a.isFavorite);

  return (
    <>
      <div className='app'>
        <h1>DIT Webex Links</h1>
        <h3>Εαρινό Εξάμηνο 2024</h3>
        <hr />

        <TextField
          label="Αναζήτηση"
          value={searchInput}
          onChange={handleSearchInputChange}
          size="small"
          sx={{width:'30%', margin:'0 3%'}}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />

        <div className='main'>
          {filteredAndSortedCourses.map(course => (
            <CustomCard
              key={course.key}
              title={course.title}
              schedule={course.schedule}
              webex={course.webex}
              eclass={course.eclass}
              semester={course.semester}
              isFavorite={course.isFavorite}
              toggleFavorite={() => toggleFavorite(course.key)}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
