import navStyle from '../styles/navbar.module.css'
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import StarIcon from '@material-ui/icons/Star';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

const Navbar = () => {

  const classes = useStyles();
  return (
    <div className={navStyle.navbar_container}>
      <ul>
        <li>
          <div className={navStyle.nav_item}>
            <div className={navStyle.nav_icon}>
              <HomeIcon />
            </div>
            <div className={navStyle.nav_text}>Add KeyWords</div>
          </div>
        </li>
        <li>
          <div className={navStyle.nav_item}>
            <div className={navStyle.nav_icon}>
              <PeopleIcon />
            </div>
            <div className={navStyle.nav_text}>Matches</div>
          </div>
        </li>
        <li>
          <div className={navStyle.nav_item}>
            <div className={navStyle.nav_icon}>
              <CreditCardIcon />
            </div>
            <div className={navStyle.nav_text}>Manage Sources</div>
          </div>
        </li>
        <li>
          <div className={navStyle.nav_item}>
            <div className={navStyle.nav_icon}>
              <CreditCardIcon />
            </div>
            <div className={navStyle.nav_text}>Intigration</div>
          </div>
        </li>
        <li>
          <div className={navStyle.nav_item}>
            <div className={navStyle.nav_icon}>
              <CreditCardIcon />
            </div>
            <div className={navStyle.nav_text}>Alerts</div>
          </div>
        </li>
      </ul>

      <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <StarIcon style={{"marginRight":"20px"}} />
          <Typography className={classes.heading}>Settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <ul>
                <li  className={navStyle.dropdown}><a href="#">Billings</a></li>
            </ul>
        </AccordionDetails>
      </Accordion>

      </div>
    </div>
  );
};

export default Navbar;
