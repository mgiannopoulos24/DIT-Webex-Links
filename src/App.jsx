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
          <CustomCard title="Ανάλυση 1" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={2} />
          <CustomCard title="Αρχιτεκτονική Υπολογιστών 1" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={2} />
          <CustomCard title="Δομές Δεδομένων και Τεχνικές Προγραμματισμού (άρτιοι)" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={2} />
          <CustomCard title="Δομές Δεδομένων και Τεχνικές Προγραμματισμού (περιττοί)" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={2} />
          <CustomCard title="Ηλεκτρομαγνητισμός - Οπτική - Σύγχρονη Φυσική" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="uoa.webex.com" semester={2} />

          {/* 4th Semester */}
          <CustomCard title="Αλγόριθμοι και Πολυπλοκότητα (άρτιοι)" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={4} />
          <CustomCard title="Αλγόριθμοι και Πολυπλοκότητα (περιττοί)" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={4} />
          <CustomCard title="Δίκτυα Επικοινωνιών 1" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={4} />
          <CustomCard title="Συστήματα Επικοινωνιών" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={4} />
          <CustomCard title="Σχεδίαση και Χρήση Βάσεων δεδομένων (άρτιοι)" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={4} />
          <CustomCard title="Σχεδίαση και Χρήση Βάσεων δεδομένων (περιττοί)" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={4} />
          <CustomCard title="Εργαστήριο Δικτύων Επικοινωνιών 1" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={4} />

          {/* 6th Semester */}
          <CustomCard title="Αλγόριθμοι-Θεμελιώσεις Μηχανικής Μάθησης" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={6} />
          <CustomCard title="Αναγνώριση Προτύπων–Μηχανική Μάθηση" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={6} />
          <CustomCard title="Ανάλυση/Σχεδίαση Συστημάτων Λογισμικού" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={6} />
          <CustomCard title="Ασύρματα Δίκτυα Αισθητήρων" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={6} />
          <CustomCard title="Διαχείριση Δικτύων" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={6} />
          <CustomCard title="Ειδικά Θέματα Επικοινωνιών και Επεξεργασίας Σήματος – Πολυμέσα και Ασύρματη Δικτύωση" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={6} />
          <CustomCard title="Επεξεργασία Στοχαστικών Σημάτων" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={6} />
          <CustomCard title="Επιστημονικοί Υπολογισμοί" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={6} />
          <CustomCard title="Ηλεκτρονική" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={6} />
          <CustomCard title="Θεωρία Πληροφορίας και Κωδίκων" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={6} />
          <CustomCard title="Θεωρία Υπολογισμού" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={6} />
          <CustomCard title="Λογικός Προγραμματισμός" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={6} />
          <CustomCard title="Μαθηματικά Πληροφορικής" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={6} />
          <CustomCard title="Μεταγλωττιστές" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={6} />
          <CustomCard title="Προγραμματισμός Συστήματος" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={6} />
          <CustomCard title="Τεχνικές Εξόρυξης Δεδομένων" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={6} />
          <CustomCard title="Τεχνολογίες Εφαρμογών Διαδικτύου" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={6} />

          {/*8th Semester */}
          <CustomCard title="Αλγοριθμική Επίλυση Προβλημάτων" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={8} />
          <CustomCard title="Ανάπτυξη Υλικού-Λογισμικού για Ενσωματωμένα Συστήματα" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={8} />
          <CustomCard title="Ασύρματες Zεύξεις" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={8} />
          <CustomCard title="Διοίκηση Έργων και Τεχνικές Παρουσίασης και Συγγραφής Επιστημονικών Εκθέσεων" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={8} />
          <CustomCard title="Ειδικά Θέματα Επικοινωνιών και Επεξεργασίας Σήματος: Γραμμές μεταφοράς, κυματοδηγοί και οπτικές ίνες" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={8} />
          <CustomCard title="Ειδικά Θέματα Θεωρητικής Πληροφορικής: Αλγόριθμοι Δομικής Βιοπληροφορικής" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={8} />
          <CustomCard title="Ειδικά Θέματα Υπολογιστικών Συστημάτων και Εφαρμογών" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={8} />
          <CustomCard title="Ειδικά Θέματα Υπολογιστικών Συστημάτων και Εφαρμογών: Υπολογιστικά Συστήματα Μεγάλης Κλίμακας" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={8} />
          <CustomCard title="Επεξεργασία Εικόνας" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={8} />
          <CustomCard title="Επεξεργασία Ομιλίας και Φυσικής Γλώσσας" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={8} />
          <CustomCard title="Επεξεργασία Στοχαστικών Σημάτων" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={8} />
          <CustomCard title="Θεωρία Γραφημάτων" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={8} />
          <CustomCard title="Ιστορία της Πληροφορικής και των Τηλεπικοινωνιών" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={8} />
          <CustomCard title="Καινοτομία και Επιχειρηματικότητα" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={8} />
          <CustomCard title="Κρυπτογραφία" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={8} />
          <CustomCard title="Μικροοικονομική Ανάλυση" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={8} />
          <CustomCard title="Μουσική Πληροφορική" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={8} />
          <CustomCard title="Παράλληλοι Αλγόριθμοι" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={8} />
          <CustomCard title="Προστασία και Ασφάλεια Υπολογιστικών Συστημάτων" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={8} />
          <CustomCard title="Σημασιολογία Γλωσσών Προγραμματισμού" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={8} />
          <CustomCard title="Σχολική Τάξη & Μικροδιδασκαλία" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={8} />
          <CustomCard title="Τεχνολογία Λογισμικού" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={8} />
          <CustomCard title="Υπολογιστική Γεωμετρία" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={8} />
          <CustomCard title="Υπολογιστική Θεωρία Μηχανικής Μάθησης" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={8} />
          <CustomCard title="Φωτονική" schedule="Δευτέρα 00:15 - 02:00, Τετάρτη 11:15 - 13:00" link="" semester={8} />



        </div>
      </div>
    </>

  );
}

export default App;
