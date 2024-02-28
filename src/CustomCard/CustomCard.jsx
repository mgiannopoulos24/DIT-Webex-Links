import "./CustomCard.css";
import Button from "@mui/material/Button";

const CustomCard = ({ title, schedule, link, semester }) => {
    const semesterColors = {
        2: 'lightblue',
        4: 'yellow',
        6: 'orange',
        8: 'magenta'
    };

    const headerColor = semesterColors[semester];

    const headerStyle = {
        backgroundColor: headerColor,
        padding: '16px',
        textAlign: 'center'
    };

    const scheduleItems = schedule.split(', ');

    return (
        <div className="card" style={{ flex: '1', margin: '0.5%', minWidth: '300px', display: 'flex', flexDirection: 'column' }}>
            <div className="header" style={headerStyle}>
                <h1>{title}</h1>
            </div>
            <div className="content" style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div className="schedule-section">
                    <h3 style={{ textDecoration: "underline", textAlign: "center" }}>Πρόγραμμα:</h3>
                    <ul style={{ listStyle: "none", padding: "0", textAlign: "center" }}>
                        {scheduleItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="button-section" style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <Button variant="contained" color="primary" onClick={() => window.location.href = 'YOUR_ECLASS_LINK_HERE'}>eClass</Button>
                    <Button variant="contained" color="success" onClick={() => window.open(link, "_blank")}>Webex</Button>
                </div>
            </div>
        </div>
    );
}

export default CustomCard;