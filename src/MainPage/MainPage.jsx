import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './MainPage.css';
import CustomCard from '../CustomCard/CustomCard';
import Footer from '../footer';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import courseData from '../courseData.json';
import Button from '@mui/material/Button';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Switch, FormControlLabel} from '@mui/material';
import { isLiveNowForItem } from '../LiveNowFunc';


var greekUtils = require('greek-utils');

const MainPage = () => {
  const [courses, setCourses] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [showOnlyStared, setShowOnlyStared] = useState(false);
  const [showLiveOnly, setShowLiveOnly] = useState(false);

  
  
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
    // Convert the stored value to boolean before setting it to state
    setShowOnlyStared(storedShowStaredOnly === 'true');

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
    greekUtils.sanitizeDiacritics(course.title.toLowerCase()).includes(greekUtils.sanitizeDiacritics(greekUtils.toGreek(searchInput.toLowerCase())))
  ).sort((a, b) => b.isFavorite - a.isFavorite);

  const changeShowStaredOnly = (event) => {
    setShowOnlyStared(event.target.checked);
    Cookies.set("showStaredOnly", event.target.checked, {expires : 365})
  };

  const liveCourses = courses.filter(course => {
    const scheduleItems = typeof course.schedule === 'string' ? course.schedule.split(',') : [];
    return scheduleItems.some(item => isLiveNowForItem(item));
  });
  const favoriteCoursesExist = (showLiveOnly ? liveCourses : filteredAndSortedCourses).some(course => course.isFavorite);
  const liveCoursesExist = liveCourses.length > 0;
  const favoriteAndLiveCourses = liveCourses.filter(course => course.isFavorite);

  return (
    <>
      
      <div className='app animate__animated animate__fadeInLeft'>
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

          <FormControlLabel
            control={
              <Switch
                checked={showLiveOnly}
                onChange={(e) => setShowLiveOnly(e.target.checked)}
                name="showLiveOnly"
              />
            }
            label="Ζωντανά τώρα"
          />


        <div className='main'>
          {(favoriteAndLiveCourses.length === 0 && showLiveOnly && showOnlyStared) && (
            <div className='noResult'>
              <h1>Δεν υπάρχουν live αγαπημένα μαθήματα!</h1>
            </div>
          )}
          {(showLiveOnly && !liveCoursesExist) && (
            <div className='noResult'>
              <h1>Δεν υπάρχουν live μαθήματα!</h1>
            </div>
          )}
          {(!showLiveOnly && !favoriteCoursesExist && showOnlyStared) && (
            <div className='noResult'>
              <h1>Δεν βρέθηκε κανένα αποτέλεσμα!</h1>
            </div>
          )}
          {(showLiveOnly ? liveCourses: filteredAndSortedCourses).map(course => {
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
        <Footer />
      </div>
     </>
  );
};

export default MainPage;