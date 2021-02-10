import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#ffffff',
        boxShadow: ' 0 0 10px #A0A2AA',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: '6px',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'flex-start',
        },
    },
    group: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        padding: '24px',
        justifyContent: 'space-between',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            padding: '12px 6px'
        },
    },
    block: {
        width: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'flex-start',
        },
    },
    gridOpen: {
        width: '45%',
        right: '24px',
        top: '100px',
        position: 'absolute',
        [theme.breakpoints.down('xs')]: {
            width: '50%',
            left: 0,
            top: '300px'
        },
    },
    gridClosed: {
        display: 'none'
    },
    txt: {
        fontWeight: 'bold',
        fontFamily: "Eina03-SemiBold",
        fontSize: '20px',
        marginLeft: '6px',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '0',
            marginBottom: '16px'
        },
    },
    persons: {
        margin: '0 6px',
        fontFamily: "Eina03-SemiBold",
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
        [theme.breakpoints.down('xs')]: {
            marginBottom: '6px',
            marginLeft: 3,
        },
    },
    clear: {
        fontSize: '20px',
        fontWeight: 'normal',
        textDecoration: 'underline',
        cursor: 'pointer',
        marginLeft: '24px',
        fontFamily: "Eina03-SemiBold",
        padding: '24px 0',
        [theme.breakpoints.down('xs')]: {
            padding: 0,
            marginBottom: '6px',
            marginLeft: 6,
        },
    },
    add: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid #E5E5E5',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start'
        },
    },
    select: {
        border: 'none',
        fontSize: '18px',
        marginRight: '8px',
        fontWeight: 'bold',
    },
    opacity: {
        opacity: '0.4'
    },
    img: {
        cursor: 'pointer'
    }
}));



function Person(props) {
    const classes = useStyles();
    const [person, setPerson] = useState(1);
    return (
        <div className={classes.root}>
            <Grid container className={classes.group}>
                <Grid container className={classes.block}>
                    <img alt='person' src={'/photos/persons.svg'} />
                    <Typography className={classes.txt}>Group Size</Typography>
                </Grid>
                <Grid container className={classes.block}>
                    <img className={person === 1 ? classes.opacity : classes.img} alt='minus' src={'/photos/min.svg'}
                        onClick={() => {
                            if (person > 1) {
                                setPerson(person - 1)
                                let paragraph = document.createElement('Typography');
                                paragraph.className = classes.select;
                                let text = document.createTextNode(person - 1 + ' ' + 'People');
                                if (person === 2) {
                                    text = document.createTextNode('1 Person');
                                }
                                paragraph.appendChild(text);
                                var elem = document.getElementById('1234');
                                elem.replaceChild(paragraph, elem.childNodes[1])
                            }
                        }}
                    />
                    <Typography className={classes.persons}>{person} Person</Typography>
                    <img alt='plus' src={'/photos/plus.svg'} className={classes.img}
                        onClick={() => {
                            setPerson(person + 1)
                            let paragraph = document.createElement('Typography');
                            paragraph.className = classes.select;
                            let text = document.createTextNode(person + 1 + ' ' + 'People');
                            paragraph.appendChild(text);
                            var elem = document.getElementById('1234');
                            elem.replaceChild(paragraph, elem.childNodes[1])

                        }} />
                </Grid>
            </Grid>
            <Grid className={classes.add}>
                <Typography className={person > 1 ? classes.clear : clsx(classes.clear, classes.opacity)}
                    onClick={() => {
                        setPerson(1)
                        let paragraph = document.createElement('Typography');
                        paragraph.className = classes.select;
                        let text = document.createTextNode('1 Person');
                        paragraph.appendChild(text);
                        var elem = document.getElementById('1234');
                        elem.replaceChild(paragraph, elem.childNodes[1])
                    }}
                >Clear all</Typography>
                <Button onClick={props.click} num={person} className={classes.button}>DONE</Button>
            </Grid>
        </div>
    )
}

function PersonFunction(props) {
    const classes = useStyles();
    const show = props.show;
    return (
        <Grid className={show ? classes.gridOpen : classes.gridClosed}>
            <Person click={props.click} />
        </Grid>
    )
}


export default PersonFunction