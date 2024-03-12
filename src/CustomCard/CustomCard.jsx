import "./CustomCard.css";
import Button from "@mui/material/Button";
import StarIcon from '@mui/icons-material/StarRounded';
import StarBorderIcon from '@mui/icons-material/StarBorderRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import Cookies from 'js-cookie';
import { Circle } from "@mui/icons-material";
import { isLiveNowForItem } from "../LiveNowFunc";

const CustomCard = ({ title, schedule, webex, eclass, semester, isFavorite, toggleFavorite,darkMode }) => {

  const darkModeStatus = Cookies.get('darkMode') ;

  const semesterColors = {
    2: '#add8e6',
    4: '#F5DD61',
    6: '#FAA300',
    8: '#ffb6c1'
  };

  const semesterColortDark = {
    2: '#0d47a1',
    4: '#af941d',
    6: '#f57c00',
    8: '#e91e63'
  };

  const headerColor = darkModeStatus === "enabled" ? semesterColortDark[semester] : semesterColors[semester];

  const headerStyle = {
    backgroundColor: headerColor,
    // padding: '16px',
    textAlign: 'center',
  };


  // Define scheduleItems based on the 'schedule' prop
  const scheduleItems = typeof schedule === 'string' ? schedule.split(',') : [];

  const handleFavoriteToggle = () => {
    toggleFavorite(title);
  };

  
  
  
  const isLiveNow = () => {
    return scheduleItems.some(isLiveNowForItem);
  };  

  
  const live = isLiveNow();

  let titleLength = title.length > 30;


  return (
    <div className="card" style={{ flex: '1', margin: '0.5%', minWidth: '300px', display: 'flex', flexDirection: 'column' }}>
      <div className="header" style={{ ...headerStyle}}>
        <h1 style={{fontSize: titleLength ? 14 : 16 }} >
          {title}
        </h1>
      </div>
      <div className="content" style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <h6 style={{ fontWeight: "bold", fontSize: 18 }}>Εξάμηνο: {semester}ο</h6>
        <div className="live-section" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ display: 'flex' }}>
            {live ? <Circle style={{ color: 'red', fontSize: '1em' }}/> : <Circle style={{ fontSize: '1em', color: 'gray' }}/>}
          </span>
          <p style={{ marginLeft: "8px", color: live ? 'red' : 'gray' }}>
            {live ? 'Ζωντανά τώρα' : 'Eκτός σύνδεσης'}
          </p>
        </div>

        <div className="schedule-section">
          <h4 style={{ textDecoration: "underline", textAlign: "center" }}>Πρόγραμμα:</h4>
          <ul style={{ listStyle: "none", padding: "0", textAlign: "center" }}>
            {scheduleItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="button-section" style={{ textAlign: 'center', marginBottom: '16px' }}>
          <Button variant="contained" color="primary" href={eclass} target="_blank">
            <SchoolRoundedIcon />
            &nbsp;
            eClass
          </Button>
          <Button variant="contained" color="success" href={webex} target="_blank">
            <VideocamRoundedIcon />
            &nbsp;
            Webex
          </Button>
        </div>
        <div className="favorite-section">
          <Button variant="text" color="info" onClick={handleFavoriteToggle}>
            {isFavorite ? <StarIcon /> : <StarBorderIcon />}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CustomCard;