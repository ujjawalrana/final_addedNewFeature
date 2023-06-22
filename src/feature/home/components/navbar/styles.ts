import makeStyles from '@mui/styles/makeStyles';
import backGroundImage from '../../../assets/signInBackground.jpg'

const useStyles = makeStyles((theme) => ({
    searchBar: {
        width:'30%',
        color:'white',
        backgroundColor:'grey',
        borderRadius:10,
        borderWidth:0,
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white',
          },
          '& input::placeholder': {
            color: 'white',
          },
        },
      },
}));
export default useStyles;