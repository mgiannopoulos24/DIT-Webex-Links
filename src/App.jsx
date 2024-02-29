import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './App.css';
import CustomCard from './CustomCard/CustomCard';
import Footer from './footer';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import courseData from './courseData.json';
import Button from '@mui/material/Button';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const App = () => {
  const [courses, setCourses] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const storedFavorites = Cookies.get('favoriteCourses');
    const favoriteCourses = storedFavorites ? JSON.parse(storedFavorites) : [];

    const initializedCourses = courseData.map(course => ({
      ...course,
      isFavorite: favoriteCourses.includes(course.key),
    }));

    setCourses(initializedCourses);
  }, []);

  const toggleFavorite = (courseKey) => {
    const updatedCourses = courses.map(course => {
      if (course.key === courseKey) {
        return { ...course, isFavorite: !course.isFavorite };
      }
      return course;
    });

    setCourses(updatedCourses);

    const favoriteCoursesKeys = updatedCourses.filter(course => course.isFavorite).map(course => course.key);
    Cookies.set('favoriteCourses', JSON.stringify(favoriteCoursesKeys), { expires: 3650 });
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const clearFavorites = () => {
    Cookies.remove('favoriteCourses');
    const resetCourses = courses.map(course => ({ ...course, isFavorite: false }));
    setCourses(resetCourses);
  };

  const filteredAndSortedCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchInput.toLowerCase())
  ).sort((a, b) => b.isFavorite - a.isFavorite);

  return (
    <>
      <div className='app'>
        
          <h1>DIT Webex Links</h1>
          <h3>Εαρινό Εξάμηνο 2024</h3>
          <hr />
          <TextField
            label="Αναζήτηση μαθήματος"
            variant="outlined"
            value={searchInput}
            onChange={handleSearchInputChange}
            sx={{width:'50%', margin:'0 3%'}}
            size='small'
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}

          />
          <br/>
          <Button variant="contained" color="secondary" onClick={clearFavorites} style={{textTransform:'none'}}>
            <DeleteRoundedIcon/>
            &nbsp;
            Καθαρισμός αγαπημένων
          </Button>
  

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
