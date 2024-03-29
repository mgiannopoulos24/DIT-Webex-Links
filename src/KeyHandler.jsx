import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const KeyPressHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (event) => {
      console.log('Key pressed:', event.key);
      if (event.key === '3') { // If the user presses the 'Numpad 3' key he gets redirected to the MemeCorner
        navigate('/MemeCorner');
      }
    };
    

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [navigate]);

  return null; // Since this component doesn't render anything, return null
};

export default KeyPressHandler;