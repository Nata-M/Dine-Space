import React, { useState } from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import { TimerSharp } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '32%',
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: '6px',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    date: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        padding: '30px 0',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dateTxt: {
        color: '#FC6C44',
        fontWeight: 'bold',
        marginLeft: '8px',
        fontSize: '24px',
        fontFamily: "Eina03-SemiBold"
    },
    time: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '22px',
        fontWeight: 'bold',
        fontFamily: "Eina03-SemiBold",
        overflowY: 'auto'
    },
    timeList: {
        margin: '4px 0',
        width: '56%',
        opacity: '17%',
        padding: '12px 28px',
        fontFamily: "Eina03-SemiBold"
    },
    active: {
        borderTop: '3px solid #5B6BC8',
        borderBottom: '3px solid #5B6BC8',
        opacity: '1',
        fontFamily: "Eina03-SemiBold"
    },
    select: {
        border: 'none',
        marginRight: '8px',
        fontWeight: 'bold',
        fontFamily: "Eina03-SemiBold",
        fontSize: '18px'
    },

}));

function Arrival() {
    var x = 15; //minutes interval
    var times = []; // time array
    var tt = 0; // start time
    // var ap = ['AM', 'PM']; // AM-PM

    //loop to increment the time and push results in array
    for (var i = 0; tt < 24 * 60; i++) {
        var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
        var mm = (tt % 60); // getting minutes of the hour in 0-55 format
        times[i] = ("0" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2); // pushing data in array in [00:00 - 12:00 AM/PM format]
        tt = tt + x;
    }


    const num = [1, 2, 3, 4, 5];
    let date = new Date();
    let currentMinutes = date.getMinutes();
    let minutes = [0, 15, 30, 45]
    if (currentMinutes <= 15) {
        currentMinutes = 15
    }
    else if (currentMinutes <= 30) {
        currentMinutes = 30
    }
    else if (currentMinutes <= 45) {
        currentMinutes = 45
    }
    else if (currentMinutes > 45) {
        currentMinutes = 0
    }
    let currentTime = date.getHours() + ':' + currentMinutes;

    const timeList = ['ASAP', times[0], times[1], times[2], times[3], '14:00']
    const zero = 0;
    const [time, setTime] = useState(zero);

    window.onLoad = function () {
        document.getElementById('time123').addEventListener('scroll', () => {
            console.log('jjj')
        }, true);
    }
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container className={classes.container}>
                <Grid className={classes.date}>
                    <img alt="date" src={'/photos/clock.svg'} />
                    <Typography className={classes.dateTxt}>Arrival Time</Typography>
                </Grid>
                <Grid className={classes.time}
                >
                    {num.map((row, idx) => (
                        <div id='time123' className={idx === 2 ? clsx(classes.timeList, classes.active) : classes.timeList} key={idx}
                            onClick={() => {
                                setTime(zero + idx);
                                let paragraph = document.createElement('Typography');
                                paragraph.className = classes.select;
                                let text = document.createTextNode(times[idx]);
                                paragraph.appendChild(text);
                                var elem = document.getElementById('12345');
                                elem.replaceChild(paragraph, elem.childNodes[1])
                            }}
                        // onScroll={window.onload = function () { document.getElementById('time123').style.backgroundColor = 'red' }}
                        >{times[idx]}
                        </div>
                    ))}
                </Grid>
            </Grid>
        </div >
    )
}



export default Arrival