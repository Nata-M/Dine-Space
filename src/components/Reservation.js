import React, { useState } from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import MenuFunction from './Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonFunction from './Person';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: '80px',
        boxShadow: ' 0 2px 6px #A0A2AA',
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]: {
            width: '90%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '98%'
        },
        [theme.breakpoints.down('xs')]: {
            margin: 20,
            flexDirection: 'column',
        },
    },
    container: {
        padding: '24px',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        border: '2px solid #E5E5E5',
        [theme.breakpoints.down('lg')]: {
            padding: '16px'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '12px'
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            marginBottom: '20px',
            border: 'none'
        },
    },
    buttons: {
        width: '50%',
        borderBottom: '1px solid #E6E9ED',
        color: '#494949',
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            width: '100%',
        },
    },
    buttonStyle: {
        width: 'calc(100%/3)',
        padding: '18px',
        display: 'flex',
        cursor: 'pointer',
        justifyContent: 'center',
        background: '#5B6BC8',
        color: '#ffffff',
        borderBottom: '1px solid #2E3D93',
        [theme.breakpoints.down('lg')]: {
            padding: '14px'
        },
        [theme.breakpoints.down('md')]: {
            padding: '8px'
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginBottom: '12px',
            justifyContent: 'flex-start'
        },
    },
    buttonCss: {
        borderBottom: '1px solid #E5E5E5',
        width: 'calc(100%/3)',
        padding: '18px',
        display: 'flex',
        cursor: 'pointer',
        justifyContent: 'center',
        [theme.breakpoints.down('lg')]: {
            padding: '14px'
        },
        [theme.breakpoints.down('md')]: {
            padding: '8px'
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginBottom: '12px',
            justifyContent: 'flex-start'
        },
    },
    txt: {
        marginLeft: '12px',
        fontSize: '18px',
        fontFamily: "Eina03-SemiBold",
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px'
        },
    },
    date: {
        width: '36%',
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
        padding: '16px 22px',
        backgroundColor: '#E4E7F3',
        justifyContent: 'space-between',
        fontFamily: "Eina03-SemiBold",
        cursor: 'pointer',
        marginLeft: '30px',
        '&:hover': {
            background: '#ACB4D8',
        },
        [theme.breakpoints.down('lg')]: {
            padding: '14px'
        },
        [theme.breakpoints.down('md')]: {
            padding: '8px',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '8px 4px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '80%',
            margin: '12px 0',
            justifyContent: 'flex-start'
        },
    },
    select: {
        // width: '60%',
        border: 'none',
        fontSize: '18px',
        marginRight: '8px',
        fontWeight: 'bold',
        fontFamily: "Eina03-SemiBold",
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: '8px'
        },
    },
    secondContainer: {
        width: '50%',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
            flexDirection: 'column',
            width: '100%'
        },
    },
    icons: {
        fontSize: '32px',
        cursor: 'pointer',
    },
    divElement: {
        // width: '60%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
}));

function Reservation() {
    const classes = useStyles();
    const [menuOpen, setMenuOpen] = useState(false);
    const [personOpen, setPersonOpen] = useState(false);
    const [select, setSelect] = useState(1);
    return (
        <div className={classes.root}>
            <Grid container className={classes.container}>
                <Grid className={classes.buttons}>
                    <Grid id='img123' className={select === 1 ? classes.buttonStyle : classes.buttonCss}
                        onClick={() => {
                            setSelect(1)
                        }}>
                        {select === 1 ? <img alt="dine-out" src={'/photos/dineout.svg'} /> : <img alt="dine-out" src={'/photos/dine.svg'} />}
                        <Typography className={classes.txt}>Dine Out</Typography>
                    </Grid>
                    <Grid className={select === 2 ? classes.buttonStyle : classes.buttonCss}
                        onClick={() => {
                            setSelect(2)
                        }}>
                        {select === 2 ? <img alt="reserve" src={'/photos/reserved.svg'} /> : <img alt="reserve" src={'/photos/reservation.svg'} />}
                        <Typography className={classes.txt}>Reservation</Typography>
                    </Grid>
                    <Grid className={select === 3 ? classes.buttonStyle : classes.buttonCss}
                        onClick={() => {
                            setSelect(3)
                        }}
                    >
                        <img alt="take-away" src={'/photos/take-away.svg'} />
                        <Typography className={classes.txt}>Pick Up</Typography>
                    </Grid>
                </Grid>
                <Grid container className={classes.secondContainer}>
                    <Grid id='123' className={classes.date} onClick={() => setMenuOpen(!menuOpen)}>
                        <img alt="date" src={'/photos/vector.svg'} />
                        <div id='12345' className={classes.divElement}>
                            <Typography className={classes.select}>Date & Time</Typography>
                            <Typography></Typography>
                        </div>
                        <ExpandMoreIcon className={classes.icons} />
                    </Grid>
                    <Grid id='1234' className={classes.date} onClick={() => setPersonOpen(!personOpen)}>
                        <img alt="date" src={'/photos/person.svg'} />
                        <Typography className={classes.select}>1 Person</Typography>
                        <ExpandMoreIcon className={classes.icons} />
                    </Grid>
                </Grid>
            </Grid>
            <MenuFunction open={menuOpen} click={() => setMenuOpen(!menuOpen)} />
            <PersonFunction show={personOpen} click={() => setPersonOpen(!personOpen)} />
        </div>
    )
}



export default Reservation