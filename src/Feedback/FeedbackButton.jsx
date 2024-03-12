import "./FeedbackButton.css";
import {Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import db from '../Firebase';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import RateReviewIcon from '@mui/icons-material/RateReview';



const FeedbackButton = () => {
    const [openFeedbackDialog, setOpenFeedbackDialog] = useState(false); 
    const [feedbackText, setFeedbackText] = useState('');


    
   // Toggle feedback dialog visibility
   const handleFeedbackClick = () => {
    setOpenFeedbackDialog(true);
  };

  const handleCloseFeedbackDialog = () => {
    setOpenFeedbackDialog(false);
  };

  const handleFeedbackTextChange = (event) => {
    setFeedbackText(event.target.value);
  };

  const handleFeedbackSubmit = async () => {
    if (!feedbackText.trim()) return; // Don't submit if the feedback is empty
  
    try {
      await addDoc(collection(db, "feedback"), {
        text: feedbackText,
        timestamp: new Date(),
      });
      alert('Feedback submitted successfully!');
      setFeedbackText(''); // Clear the feedback text
      handleCloseFeedbackDialog(); // Close the dialog
    } catch (error) {
      console.error("Error adding document: ", error);
      alert('Error submitting feedback. Please try again.');
    }
  };
    return (
        <>
        <Button variant='contained' color='secondary' className='button-purple' onClick={handleFeedbackClick}>Feedback<RateReviewIcon style={{fontSize:'medium',marginLeft:'4px',marginTop:'3px'}}/></Button>
        <Dialog 
          open={openFeedbackDialog} 
          onClose={handleCloseFeedbackDialog} 
          aria-labelledby="form-dialog-title"
          sx={{ '& .MuiDialog-paper': { width: '400px', height: '250px' } }} // Setting the dialog size
        >
          <DialogTitle id="form-dialog-title">Feedback
          <IconButton
              aria-label="close"
              onClick={handleCloseFeedbackDialog}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="feedback"
              label="Πείτε μας τη γνώμη σας"
              type="text"
              rowsmax={15}
              fullWidth
              multiline
              variant="outlined"
              value={feedbackText}
              onChange={handleFeedbackTextChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleFeedbackSubmit} sx={{textTransform:'none'}} variant="contained" color="success">
              <SendIcon style={{marginRight:'5px'}}/>
              Αποστολή
            </Button>
          </DialogActions>
        </Dialog>
        </>
    );
};  

export default FeedbackButton;