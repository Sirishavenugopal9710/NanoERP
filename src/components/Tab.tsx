import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Stocks } from './Stocks';
import InvoicePage from './InvoicePage';
import './Tab.scss'

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    
  },
}));

export const Tabin=() =>{
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Invoice" {...a11yProps(0)} />
      
          <Tab label="Stocks" {...a11yProps(1)} />
          <Tab label="Dasboard" {...a11yProps(2)} />
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Vendor Management
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} ><a href="/general" style={{textDecoration:'none'}}>General</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="/onetime" style={{textDecoration:'none'}}>One Time</a></MenuItem>
       
      </Menu>
   {/* <div className="dropdown">
  <button className="dropbtn">Dropdown</button>
  <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div> */}
      
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Customer Management
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} ><a href="/general" style={{textDecoration:'none'}}>General</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="/onetime" style={{textDecoration:'none'}} >One Time</a></MenuItem>
       
      </Menu>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <InvoicePage/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Stocks/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}




