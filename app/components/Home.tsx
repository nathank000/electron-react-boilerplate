import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { red, green } from '@material-ui/core/colors';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import EcoIcon from '@material-ui/icons/Eco';

import routes from '../constants/routes.json';
import styles from './Home.css';
import InitiativeCard from './InitiativeCard';
import { autoUpdater } from 'electron';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    transform: 'translateZ(0px)',
    flexGrow: 1,
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  cardHolder: {
    width: 'auto',
    float: 'left',
    padding: '10px;'
  },
}));

const actions = [
  { icon: <EcoIcon />, name: 'New Initiative' },
  // { icon: <SaveIcon />, name: 'Save' },
  // { icon: <PrintIcon />, name: 'Print' },
  // { icon: <ShareIcon />, name: 'Share' },
  // { icon: <FavoriteIcon />, name: 'Like' },
];

export default function Home(): JSX.Element {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleVisibility = () => {
    setHidden((prevHidden) => !prevHidden);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.container} data-tid="container">
      <div className={classes.root}>
        <h2>Home</h2>
        <div>
          <Link to={routes.COUNTER}>to Counter</Link>
        </div>

        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          className={classes.speedDial}
          hidden={hidden}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          <Backdrop open={open} />
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
        {/* ///////////////////////////////////
        CARDS
        /////////////////////////////////// */}
        <div className={classes.cardHolder}><InitiativeCard /></div>
        <div className={classes.cardHolder}><InitiativeCard /></div>
        <div className={classes.cardHolder}><InitiativeCard /></div>
        <div className={classes.cardHolder}><InitiativeCard /></div>
        <div className={classes.cardHolder}><InitiativeCard /></div>
        <div className={classes.cardHolder}><InitiativeCard /></div>
        <div className={classes.cardHolder}><InitiativeCard /></div>
        <div className={classes.cardHolder}><InitiativeCard /></div>
        <div className={classes.cardHolder}><InitiativeCard /></div>
        <div className={classes.cardHolder}><InitiativeCard /></div>
        {/* //////////////////////////////////////// */}
        {/* <Avatar variant="rounded" className={classes.rounded}>
          S
        </Avatar> */}
        {/* <Button onClick={handleVisibility}>Toggle Speed Dial</Button> */}
      </div>
    </div>
  );
}
