import makeStyles from '@mui/styles/makeStyles';
import backGroundImage from '../../../assets/Backgrond_image2.svg'
import backGround1 from '../../../assets/apple.svg'
import { alpha } from '@material-ui/core/styles/colorManipulator';
const useStyles = makeStyles((theme) => ({
    signInOuterContainer: {
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: `url(${backGroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#2a2a2a',
        backgroundBlendMode: 'multiply',
        paddingTop:130,
    },
    signInContainer: {
        height:'fit-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'space-between',
        width: 600,
    },
    dabba: {
        width: "80%",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
    },
    saman: {
        padding: '6% 8%',
        backgroundColor: alpha('#777',0.3),
        borderRadius: '15px',
    },
    chotaText: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    lekha: {
        color: 'white',
        fontFamily: 'serif',
        fontWeight: 400,
        marginBottom: '20px',
        marginTop: '20px',
        fontSize: '14px',
    },
    nicheBatan: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: '30px',
        padding: '10px',
        borderRadius: '50px',
    }
}));
export default useStyles;