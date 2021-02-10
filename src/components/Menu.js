import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Date from './Date';

const useStyles = makeStyles((theme) => ({
    gridOpen: {
        width: '56%',
        right: 'calc(25.2% - 32px)',
        top: '100px',
        position: 'absolute',
        [theme.breakpoints.down('lg')]: {
            width: '60%'
        },
        [theme.breakpoints.down('md')]: {
            width: '70%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '80%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            left: 0,
            top: '250px'
        },
    },
    gridClosed: {
        display: 'none'
    }
}));



function Menu(props) {
    return (
        <div>
            <Date click={props.click} num={props.num}
            />
        </div>
    )
}

function MenuFunction(props) {
    const classes = useStyles();
    const open = props.open;
    return (
        <Grid className={open ? classes.gridOpen : classes.gridClosed}>
            <Menu click={props.click} num={props.num} />
        </Grid>
    )
}


export default MenuFunction