import "./CustomCard.css";
import Button from "@mui/material/Button";
import StarIcon from '@mui/icons-material/StarRounded';
import StarBorderIcon from '@mui/icons-material/StarBorderRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

const CustomCard = ({ title, schedule, webex, eclass, semester, isFavorite, toggleFavorite }) => {
  const semesterColors = {
    2: '#59D5E0',
    4: '#F5DD61',
    6: '#FAA300',
    8: '#F4538A'
  };

  const headerColor = semesterColors[semester];

  const headerStyle = {
    backgroundColor: headerColor,
    padding: '16px',
    textAlign: 'center',
  };


  const scheduleItems = schedule.split(', ');

  const handleFavoriteToggle = () => {
    toggleFavorite(title);
  };



  return (
    <div className="card" style={{ flex: '1', margin: '0.5%', minWidth: '300px', display: 'flex', flexDirection: 'column' }}>
      <div className="header" style={headerStyle}>
        <h1>{title}</h1>
      </div>
      <div className="content" style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <h6 style={{ fontWeight: "bold", fontSize: 18 }}>Εξάμηνο: {semester}ο</h6>
        <div className="schedule-section">
          <h4 style={{ textDecoration: "underline", textAlign: "center" }}>Πρόγραμμα:</h4>
          <ul style={{ listStyle: "none", padding: "0", textAlign: "center" }}>
            {scheduleItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="button-section" style={{ textAlign: 'center', marginBottom: '16px' }}>
          <Button variant="contained" color="primary" href={eclass}>
            <HomeRoundedIcon />
            &nbsp;
            eClass
          </Button>
          <Button variant="contained" color="success" href={webex}>
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