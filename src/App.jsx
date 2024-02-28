import './App.css';
import CustomCard from './CustomCard/CustomCard';


const App = () => {
  return (
    <>
      <div className='app'>

        <h1>DIT Webex Links</h1>
        <h3>Εαρινό Εξάμηνο 2024</h3>
        <hr />

        <div className='main'>
          {/* 2nd Semester */}
          <CustomCard title="Ανάλυση 1" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="uoa.webex.com" semester={2} />
          <CustomCard title="Αρχιτεκτονική Υπολογιστών 1" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="uoa.webex.com" semester={2} />
          <CustomCard title="Δομές Δεδομένων και Τεχνικές Προγραμματισμού (άρτιοι)" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="uoa.webex.com" semester={2} />
          <CustomCard title="Δομές Δεδομένων και Τεχνικές Προγραμματισμού (περιττοί)" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="uoa.webex.com" semester={2} />
          <CustomCard title="Ηλεκτρομαγνητισμός - Οπτική - Σύγχρονη Φυσική" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="uoa.webex.com" semester={2} />

          {/* 4th Semester */}
          <CustomCard title="Αλγόριθμοι και Πολυπλοκότητα (άρτιοι)" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="uoa.webex.com" semester={4} />
          <CustomCard title="Αλγόριθμοι και Πολυπλοκότητα (περιττοί)" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="uoa.webex.com" semester={4} />
          <CustomCard title="Δίκτυα Επικοινωνιών 1" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="uoa.webex.com" semester={4} />
          <CustomCard title="Συστήματα Επικοινωνιών" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="uoa.webex.com" semester={4} />
          <CustomCard title="Σχεδίαση και Χρήση Βάσεων δεδομένων (άρτιοι)" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="uoa.webex.com" semester={4} />
          <CustomCard title="Σχεδίαση και Χρήση Βάσεων δεδομένων (περιττοί)" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="uoa.webex.com" semester={4} />
          <CustomCard title="Εργαστήριο Δικτύων Επικοινωνιών 1" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="uoa.webex.com" semester={4} />

          {/* 6th Semester */}
          <CustomCard title="Αλγόριθμοι-Θεμελιώσεις Μηχανικής Μάθησης" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="uoa.webex.com" semester={4} />
          <CustomCard title="Ανάλυση/Σχεδίαση Συστημάτων Λογισμικού" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="uoa.webex.com" semester={8} />
          <CustomCard title="Επιστημονικοί Υπολογισμοί" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="uoa.webex.com" semester={4} />
          <CustomCard title="Θεωρία Γραφημάτων" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="uoa.webex.com" semester={4} />
          <CustomCard title="Κρυπτογραφία" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="uoa.webex.com" semester={8} />
          <CustomCard title="Λογικός Προγραμματισμός" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="uoa.webex.com" semester={4} />
          <CustomCard title="Μαθηματικά Πληροφορικής" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="uoa.webex.com" semester={4} />
          <CustomCard title="Θεωρία Υπολογισμού" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="uoa.webex.com" semester={4} />

          {/* 8th Semester */}
          

        </div>
      </div>
    </>

  );
}

export default App;
