import makeStyles from '@mui/styles/makeStyles';
import Background_image2 from '../../../assets/Background_image2.svg'

import homeBack from '../../../assets/homeBack.png'
const useStyles = makeStyles((theme) => ({
  signInOuterContainer: {
    // backgroundImage: `url(${homeBack})`,
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    // height: '100vh',
    // width: '100vw',
    backgroundColor: '#2a2a2a',
    // backgroundBlendMode: 'multiply',
    position:'absolute',
  },
    line: {
        width: '100%',
        height: '1px',
        backgroundColor: 'gray',
        opacity:'0.6'
      },
}));
export default useStyles;