import "./CustomCard.css";
import Button from "@mui/material/Button";

const CustomCard = ({ title, schedule, link, semester }) => {
    // Define an object to map semesters to colors
    const semesterColors = {
        2: 'lightblue',
        4: 'yellow',
        6: 'orange',
        8: 'magenta'
    };

    // Get the color based on the semester
    const headerColor = semesterColors[semester];

    // Style for the header with dynamic background color
    const headerStyle = {
        backgroundColor: headerColor,
        padding: '16px',
        textAlign: 'center'
    };

    // Split the schedule string into an array of time slots
    const scheduleItems = schedule.split(', ');

    return (
        <div className="card">
            <div className="header" style={headerStyle}>
                <h1>{title}</h1>
            </div>
            <div className="schedule-section">
                <h3 style={{textDecoration:"underline"}}>Πρόγραμμα:</h3>
                <ul style={{listStyle:"none",textAlign:"center"}}>
                    {scheduleItems.map((item, index) => (
                        <li style={{marginRight: "15%"}}key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="button-section">
                <Button variant="contained" color="primary" onClick={() => window.location.href = 'YOUR_ECLASS_LINK_HERE'}>E-Class</Button>
                <Button variant="contained" color="secondary" onClick={() => window.open(link, "_blank")}>Link</Button>
            </div>
        </div>
    );
}

export default CustomCard;
