import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Calendar from './Calendar';
import { Button } from '@material-ui/core';
import Arrival from './Arrival';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#ffffff',
        boxShadow: ' 0 0 10px #A0A2AA',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: '6px',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        padding: '0 24px',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            flexDirection: 'column',

        },
    },
    footer: {
        marginTop: '40px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        borderTop: '1px solid #E5E5E5',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    txt: {
        padding: '36px 24px',
        fontSize: '20px',
        fontWeight: 'normal',
        textDecoration: 'underline',
        cursor: 'pointer',
        opacity: '0.5',
        fontFamily: "Eina03-SemiBold"
    },
    txt2: {
        padding: '18px 24px',
        fontSize: '20px',
        fontWeight: 'normal',
        textDecoration: 'underline',
        cursor: 'pointer',
        opacity: '0.5',
        fontFamily: "Eina03-SemiBold"
    },
    font: {
        fontFamily: "Eina03-SemiBold"
    },
    button: {
        fontSize: '18px',
        padding: '12px 64px',
        marginRight: '24px',
        backgroundColor: '#FC6C44',
        fontFamily: "Eina03-SemiBold",
        color: '#ffffff',
        '&:hover': {
            background: '#FC6C44',
        },
    },
    none: {
        backgroundColor: 'red'
    },
    select: {
        border: 'none',
        fontSize: '18px',
        marginRight: '8px',
        fontWeight: 'bold',
        fontFamily: "Eina03-SemiBold",
    }
}));

function Date(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid className={classes.flex}>
                <Calendar />
                <Arrival />
            </Grid>
            <Grid className={classes.footer}>
                <Typography id='clear12' className={classes.txt}
                    onClick={() => {
                        let paragraph = document.createElement('Typography');
                        let txt = document.createElement('Typography');
                        let t = document.createTextNode('');
                        let text = document.createTextNode('Date & Time');
                        paragraph.appendChild(text);
                        paragraph.className = classes.select;
                        txt.appendChild(t);
                        var element = document.getElementById('12345');
                        element.replaceChild(paragraph, element.childNodes[0]);
                        element.replaceChild(txt, element.childNodes[1]);
                        document.getElementById('clear12').className = classes.txt2;
                    }}
                >Clear all</Typography>
                <Button onClick={props.click} className={classes.button}> Done</Button>
            </Grid>
        </div>
    )
}



export default Date