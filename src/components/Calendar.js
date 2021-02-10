import React, { useState } from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '64%',
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    container: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: '100%'
    },
    date: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        padding: '30px 0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    weekday: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: '20px',
        fontFamily: "Eina03-SemiBold"
    },
    wday: {
        width: 'calc((100%/7))',
        color: '#5B6BC8',
        fontSize: '16px',
    },
    days: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    day: {
        width: 'calc((100%/7))',
        display: 'flex',
        fontSize: '16px',
        // padding: '10px 0',
        fontWeight: 'bold',
        cursor: 'default',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "Eina03-SemiBold",
    },

    hover: {
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "&:hover": {
            background: '#5B6BC8',
            color: '#fff',
            transitionDuration: '0.75s'
        },
    },
    hoverr: {
        background: '#5B6BC8',
        color: '#fff',
    },
    icon: {
        color: '#5B6BC8',
        fontSize: '36px'
    },
    display: {
        color: '#FC6C44',
        fontWeight: 'bold',
        marginLeft: '8px',
        fontSize: '24px',
        fontFamily: "Eina03-SemiBold",
    },
    opacity: {
        opacity: 0.2,
        width: 'calc((100%/7))',
        display: 'flex',
        fontSize: '16px',
        // padding: '10px 0',
        fontWeight: 'bold',
        cursor: 'default',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "Eina03-SemiBold",

    },
    today: {
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: 'flex',
        color: '#5B6BC8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    select: {
        border: 'none',
        marginRight: '8px',
        fontWeight: 'bold',
        fontFamily: "Eina03-SemiBold",
        fontSize: '18px'
    },
    opacityNone: {
        padding: '18px 24px',
        fontSize: '20px',
        fontWeight: 'normal',
        textDecoration: 'underline',
        cursor: 'pointer',
        opacity: 1,
        fontFamily: "Eina03-SemiBold",

    }
}));

function Calendar(props) {
    const today = new Date();
    const classes = useStyles();
    let date = new Date();
    let unshift;
    let month = date.getMonth();
    const year = date.getFullYear();
    const day = date.getDate();


    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    const weekdays = [
        'MON',
        'TUE',
        'WED',
        'THU',
        'FRI',
        'SAT',
        'SUN'
    ]
    const [getMonth, setGetMonth] = useState(month);
    const numberOfDays = new Date(year, getMonth + 1, 0).getDate();
    // const [hover, setHover] = useState(false);

    const days = Array.from({ length: numberOfDays }, (_, i) => i + 1);
    const daysList = Array.from({ length: 42 }, (_, i) => i + 1);
    const prevMonth = new Date(year, getMonth, 0).getDate();

    date.setDate(1);
    date.setMonth(getMonth);
    let weekdayNum = date.getDay();
    days.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14);


    if (weekdayNum === 2) {
        unshift = days.unshift(prevMonth)
    }
    else if (weekdayNum === 0) {
        unshift = days.unshift(prevMonth - 5, prevMonth - 4, prevMonth - 3, prevMonth - 2, prevMonth - 1, prevMonth);
        weekdayNum = 7;
    }
    else if (weekdayNum === 3) {
        unshift = days.unshift(prevMonth - 1, prevMonth)
    }
    else if (weekdayNum === 4) {
        unshift = days.unshift(prevMonth - 2, prevMonth - 1, prevMonth)
    }
    else if (weekdayNum === 5) {
        unshift = days.unshift(prevMonth - 3, prevMonth - 2, prevMonth - 1, prevMonth)
    }
    else if (weekdayNum === 6) {
        unshift = days.unshift(prevMonth - 4, prevMonth - 3, prevMonth - 2, prevMonth - 1, prevMonth)
    }


    return (
        <div className={classes.root}>
            <ArrowBackIcon className={classes.icon}
                onClick={() => {
                    if (getMonth > 0) {
                        return setGetMonth(getMonth - 1)
                    }
                }} />
            <Grid container className={classes.container}>
                <Grid className={classes.date}>
                    <img alt="date" src={'/photos/vector.svg'} />
                    <Typography className={classes.display}>{months[getMonth].substring(0, 3)} {year}</Typography>
                </Grid>

                <Grid container className={classes.weekday}>
                    {weekdays.map((row, idx) => (
                        <div className={classes.wday} key={idx}>{row}
                        </div>
                    ))}
                </Grid>
                <Grid className={classes.days}>
                    {daysList.map((row, idx) => (
                        <div className={idx < weekdayNum - 1 || idx > weekdayNum - 2 + numberOfDays ? classes.opacity : classes.day} key={idx}>
                            <div id='active' className={days[idx] === day && getMonth === month ? classes.today : classes.hover}
                                onClick={() => {
                                    // setHover(!hover);
                                    if (idx >= weekdayNum - 1 && idx <= weekdayNum - 2 + numberOfDays) {
                                        let paragraph = document.createElement('Typography');
                                        paragraph.className = classes.select;
                                        let text = document.createTextNode(days[idx] + ' ' + months[getMonth].substring(0, 3));
                                        paragraph.appendChild(text);
                                        var elem = document.getElementById('12345');
                                        elem.replaceChild(paragraph, elem.childNodes[0]);
                                        document.getElementById('clear12').className = classes.opacityNone;
                                    }
                                }}
                            >{days[idx]}</div>
                        </div>
                    ))}
                </Grid>
            </Grid>
            <ArrowForwardIcon className={classes.icon}
                onClick={() => {
                    if (getMonth < 11) {
                        return setGetMonth(getMonth + 1)
                    }
                }} />
        </div >
    )
}



export default Calendar