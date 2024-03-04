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
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Switch, FormControlLabel} from '@mui/material';
import Cat from "./Cat/Cat"
import FartButton from './FartButton/FartButton';

const App = () => {
  const [courses, setCourses] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [showOnlyStared, setShowOnlyStared] = useState(false);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode; // Calculate the new dark mode state first
    setDarkMode(newDarkMode); // Update the dark mode state
    
    // Set a cookie to remember the user's preference
    Cookies.set('darkMode', newDarkMode ? 'enabled' : 'disabled', { expires: 365 });

    if (newDarkMode) {
      document.body.classList.add('dark-mode'); // Apply dark mode class
    } else {
      document.body.classList.remove('dark-mode'); // Remove dark mode class
    }
  };

  useEffect(() => {

    const userPrefersDark = Cookies.get('darkMode');
    if (userPrefersDark === 'enabled') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    } else if (userPrefersDark === 'disabled') {
      setDarkMode(false);
      document.body.classList.remove('dark-mode');
    }
    
    const storedFavorites = Cookies.get('favoriteCourses');
    const favoriteCourses = storedFavorites ? JSON.parse(storedFavorites) : [];

    const storedShowStaredOnly = Cookies.get("showStaredOnly");
    setShowOnlyStared(storedShowStaredOnly);

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

  const normalizeString = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const filteredAndSortedCourses = courses.filter(course => 
    normalizeString(course.title.toLowerCase()).includes(normalizeString(searchInput.toLowerCase()))
  ).sort((a, b) => b.isFavorite - a.isFavorite);

  const changeShowStaredOnly = (event) => {
    setShowOnlyStared(event.target.checked);
    Cookies.set("showStaredOnly", event.target.checked, {expires : 365})
  };

  return (
    <>
      
      <div className='app'>
        <div className='dark-mode-toggle' onClick={toggleDarkMode}>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </div>
          <h1>DIT Webex Links</h1>
          <h3>Εαρινό Εξάμηνο 2024</h3>
          <hr />
          
          <TextField
            label="Αναζήτηση μαθήματος"
            variant="outlined"
            value={searchInput}
            onChange={handleSearchInputChange}
            sx={{width:'70%', margin:'0 3%',
            '& .MuiInputLabel-root': {
              color: darkMode ? '#ffffff' : 'rgba(0, 0, 0, 0.54)', // Set label color
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: darkMode ? '#ffffff' : 'rgba(0, 0, 0, 0.23)', // Set border color
              },
              '& input': {
                color: darkMode ? '#ffffff' : 'rgba(0, 0, 0, 0.87)', // Set text color
              },
            },
            '& .MuiSvgIcon-root': {
              color: darkMode ? '#ffffff' : 'rgba(0, 0, 0, 0.54)', // Set search icon color
            },          
            }}
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
          <Button variant="contained" color="error" onClick={clearFavorites} style={{textTransform:'none'}}>
            <DeleteRoundedIcon/>
            &nbsp;
            Καθαρισμός αγαπημένων
          </Button>

          <FormControlLabel
            control={
              <Switch
                checked={showOnlyStared}
                onChange={changeShowStaredOnly}
                name="checkedSwitch"
              />
            }
            label="Μόνο αγαπημένα"
          />

        <div className='main'>
          {filteredAndSortedCourses.map(course => {
            if(showOnlyStared)
            {
              if(course.isFavorite)
              {
                return (<CustomCard
                  key={course.key}
                  title={course.title}
                  schedule={course.schedule}
                  webex={course.webex}
                  eclass={course.eclass}
                  semester={course.semester}
                  isFavorite={course.isFavorite}
                  toggleFavorite={() => toggleFavorite(course.key)}
                  darkMode={darkMode}
                />)              
              }
              else
              {
                return (<></>);
              }
            }
            else
            {
              return (<CustomCard
                key={course.key}
                title={course.title}
                schedule={course.schedule}
                webex={course.webex}
                eclass={course.eclass}
                semester={course.semester}
                isFavorite={course.isFavorite}
                toggleFavorite={() => toggleFavorite(course.key)}
                darkMode={darkMode}
              />)
            }
          }
          )}
        </div>
        <FartButton />
        <Cat darkMode={darkMode} />
        <footer className='footer'>
          <Footer />
        </footer>
        
      </div>
     </>
  );
};

export default App;
