import './App.css';
import CustomCard from './CustomCard/CustomCard';
import Footer from './footer';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const App = () => {
  const [favoriteCourses, setFavoriteCourses] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);

  const toggleFavorite = (courseTitle) => {
    if (favoriteCourses.includes(courseTitle)) {
      setFavoriteCourses(favoriteCourses.filter(course => course !== courseTitle));
    } else {
      setFavoriteCourses([...favoriteCourses, courseTitle]);
    }
  };

  const handleSearchInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
    // Perform filtering based on the input value
    const filtered = courseData.filter(course => course.title.toLowerCase().includes(inputValue.toLowerCase()));
    setFilteredCourses(filtered);
  };

  const sortedCourses = (courses) => {
    return courses.sort((a, b) => {
      const aIsFavorite = favoriteCourses.includes(a.title);
      const bIsFavorite = favoriteCourses.includes(b.title);
      if (aIsFavorite && !bIsFavorite) {
        return -1; // a comes before b
      }
      if (!aIsFavorite && bIsFavorite) {
        return 1; // b comes before a
      }
      return 0; // no change in order
    });
  };

  const courseData = [
    //{/* 2nd Semester */}
    {
      key: "1",
      title: "Ανάλυση 1",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "",
      semester: 2
    },
    {
      key: "2",
      title: "Αρχιτεκτονική Υπολογιστών 1",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 2
    },
    {
      key: "3",
      title: "Δομές Δεδομένων και Τεχνικές Προγραμματισμού (άρτιοι)",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 2
    },
    {
      key: "4",
      title: "Δομές Δεδομένων και Τεχνικές Προγραμματισμού (περιττοί)",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 2
    },
    {
      key: "5",
      title: "Ηλεκτρομαγνητισμός - Οπτική - Σύγχρονη Φυσική",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 2
    },
    // {/* 4th Semester */}
    {
      key: "6",
      title: "Αλγόριθμοι και Πολυπλοκότητα (άρτιοι)",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 4
    },
    {
      key: "7",
      title: "Αλγόριθμοι και Πολυπλοκότητα (περιττοί)",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 4
    },
    {
      key: "8",
      title: "Δίκτυα Επικοινωνιών 1",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 4
    },
    {
      key: "9",
      title: "Συστήματα Επικοινωνιών",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 4
    },
    {
      key: "10",
      title: "Σχεδίαση και Χρήση Βάσεων δεδομένων (άρτιοι)",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 4
    },
    {
      key: "11",
      title: "Σχεδίαση και Χρήση Βάσεων δεδομένων (περιττοί)",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 4
    },
    {
      key: "12",
      title: "Εργαστήριο Δικτύων Επικοινωνιών 1",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 4
    },
    // {/* 6th Semester */}
    {
      key: "13",
      title: "Αλγόριθμοι-Θεμελιώσεις Μηχανικής Μάθησης",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 6
    },
    {
      key: "14",
      title: "Αναγνώριση Προτύπων–Μηχανική Μάθηση",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 6
    },
    {
      key: "15",
      title: "Ανάλυση/Σχεδίαση Συστημάτων Λογισμικού",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 6
    },
    {
      key: "16",
      title: "Ασύρματα Δίκτυα Αισθητήρων",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 6
    },
    {
      key: "17",
      title: "Διαχείριση Δικτύων",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 6
    },
    {
      key: "18",
      title: "Ειδικά Θέματα Επικοινωνιών και Επεξεργασίας Σήματος – Πολυμέσα και Ασύρματη Δικτύωση",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 6
    },
    {
      key: "19",
      title: "Επεξεργασία Στοχαστικών Σημάτων",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 6
    },
    {
      key: "20",
      title: "Επιστημονικοί Υπολογισμοί",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 6
    },
    {
      key: "21",
      title: "Ηλεκτρονική",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 6
    },
    {
      key: "22",
      title: "Θεωρία Πληροφορίας και Κωδίκων",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 6
    },
    {
      key: "23",
      title: "Θεωρία Υπολογισμού",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 6
    },
    {
      key: "24",
      title: "Λογικός Προγραμματισμός",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 6
    },

    {
      key: "25",
      title: "Μαθηματικά Πληροφορικής",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 6
    },
    {
      key: "26",
      title: "Μεταγλωττιστές",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 6
    },
    {
      key: "27",
      title: "Προγραμματισμός Συστήματος",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 6
    },
    {
      key: "28",
      title: "Τεχνικές Εξόρυξης Δεδομένων",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 6
    },
    {
      key: "29",
      title: "Τεχνολογίες Εφαρμογών Διαδικτύου",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 6
    },
    // {/*8th Semester */}
    {
      key: "30",
      title: "Αλγοριθμική Επίλυση Προβλημάτων",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 8
    },
    {
      key: "31",
      title: "Ανάπτυξη Υλικού-Λογισμικού για Ενσωματωμένα Συστήματα",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 8
    },
    {
      key: "32",
      title: "Ασύρματες Zεύξεις",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 8
    },
    {
      key: "33",
      title: "Διοίκηση Έργων και Τεχνικές Παρουσίασης και Συγγραφής Επιστημονικών Εκθέσεων",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 8
    },{
      key: "34",
      title: "Ειδικά Θέματα Επικοινωνιών και Επεξεργασίας Σήματος: Γραμμές μεταφοράς, κυματοδηγοί και οπτικές ίνες",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 8
    },
    {
      key: "35",
      title: "Ειδικά Θέματα Θεωρητικής Πληροφορικής: Αλγόριθμοι Δομικής Βιοπληροφορικής",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 8
    },
    {
      key: "36",
      title: "Ειδικά Θέματα Υπολογιστικών Συστημάτων και Εφαρμογών",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 8
    },
    {
      key: "37",
      title: "Ειδικά Θέματα Υπολογιστικών Συστημάτων και Εφαρμογών: Υπολογιστικά Συστήματα Μεγάλης Κλίμακας",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 8
    },
    {
      key: "38",
      title: "Επεξεργασία Εικόνας",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 8
    },
    {
      key: "39",
      title: "Επεξεργασία Ομιλίας και Φυσικής Γλώσσας",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 8
    },
    {
      key: "40",
      title: "Επεξεργασία Στοχαστικών Σημάτων",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 8
    },
    {
      key: "41",
      title: "Θεωρία Γραφημάτων",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 8
    },
    {
      key: "42",
      title: "Ιστορία της Πληροφορικής και των Τηλεπικοινωνιών",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 8
    },
    {
      key: "43",
      title: "Καινοτομία και Επιχειρηματικότητα",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 8
    },
    {
      key: "44",
      title: "Κρυπτογραφία",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 8
    },
    {
      key: "45",
      title: "Μικροοικονομική Ανάλυση",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 8
    },
    {
      key: "46",
      title: "Μουσική Πληροφορική",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 8
    },
    {
      key: "47",
      title: "Παράλληλοι Αλγόριθμοι",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 8
    },
    {
      key: "48",
      title: "Προστασία και Ασφάλεια Υπολογιστικών Συστημάτων",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 8
    },
    {
      key: "49",
      title: "Σημασιολογία Γλωσσών Προγραμματισμού",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 8
    },
    {
      key: "50",
      title: "Σχολική Τάξη & Μικροδιδασκαλία",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 8
    },
    {
      key: "51",
      title: "Τεχνολογία Λογισμικού",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 8
    },
    {
      key: "52",
      title: "Υπολογιστική Γεωμετρία",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 8
    },
    {
      key: "53",
      title: "Υπολογιστική Θεωρία Μηχανικής Μάθησης",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 8
    },
    {
      key: "54",
      title: "Φωτονική",
      schedule: "Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00",
      webex: "webex_link_here",
      eclass: "eclass_link_here",
      semester: 8
    },
  ];

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
        {(filteredCourses.length > 0 ? sortedCourses(filteredCourses) : sortedCourses(courseData))
          .map((course) => (
            <CustomCard
              key={course.key}
              title={course.title}
              schedule={course.schedule}
              webex={course.webex}
              eclass={course.eclass}
              semester={course.semester}
              isFavorite={favoriteCourses.includes(course.title)}
              toggleFavorite={toggleFavorite}
            />
        ))}
        </div>
        <Footer/>
      </div>
    </>

  );
}

export default App;
