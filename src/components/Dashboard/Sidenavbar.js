import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
// import Divider from '@mui/material/Divider';
// import  black   from "@mui/icons-material/Style"
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
// import { useMediaQuery } from '@mui/material';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import Stack from "@mui/material/Stack";
import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
// import { styled } from '@mui/material/styles';
import Badge from "@mui/material/Badge";
import Paper from "@mui/material/Paper";
import {Menu} from "@mui/material";
import { MenuItem } from "@mui/material";
import useAuth from "../Hooks/useAuth";
import {
  Dashboard,
  AppRegistration,
  Accessibility,
  Workspaces,
  ManageAccounts,
  FilterFrames,
  BugReport,
  AddShoppingCart,
  Report,
  Inventory,
  AttachMoney,
  SupervisorAccount,
  Analytics,
  ManageSearch,
  SyncAlt
} from "@mui/icons-material";
import Donut1 from "./Donut1";
import Donut2 from "./Donut2";
import Bar1 from "./Bar1";
import Bar2 from "./Bar2";
import StackedBar from "./StackedBar";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { styled } from "@mui/material/styles";
// import InputBase from "@mui/material/InputBase";
import Image from "./Image";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Input } from "@mui/material";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: (theme.palette.mode = "#e6e6e6"),
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "16rem",
  width: "20rem",
  marginLeft: "4%",
  marginTop: "5%",
  boxShadow: "2px 2px 1px rgba(145, 153, 153, 0.7)",
}));

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({theme}) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//    position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
  
// }));


// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       width: "20ch",
//       backgroundColor:'white',
//       color:'#043752'
//     },
//   },
// }));

const drawerWidth = 260;

function SidenavBar(props) {
  const {logout} = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    logout();
  };

  const drawer = (
    <div
      style={{
        backgroundColor: "#2C566D",
        height: "100vh",
        overflow: "hidden",
        borderRight: "solid 2px #2C66D",
      }}
    >
      <List style={{ paddingTop: "24%", overflow: "none", height: "90%" }}>
        {[
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Dashboard />
            <span style={{ marginLeft: "5%" }}>Dashboard</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <AppRegistration />
            <span style={{ marginLeft: "5%" }}>Registration</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Accessibility />
            <span style={{ marginLeft: "5%" }}>Accussion</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Workspaces />
            <span style={{ marginLeft: "5%" }}>Operations</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <ManageAccounts />
            <span style={{ marginLeft: "5%" }}>User Management</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <FilterFrames />
            <span style={{ marginLeft: "5%" }}>Censor Management</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <BugReport />
            <span style={{ marginLeft: "5%" }}>Test Management</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <AddShoppingCart />
            <span style={{ marginLeft: "5%" }}>Order Management</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Report />
            <span style={{ marginLeft: "5%" }}>Report Management</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Inventory />
            <span style={{ marginLeft: "5%" }}>Inventory</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <AttachMoney />
            <span style={{ marginLeft: "5%" }}>Finance</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <SupervisorAccount />
            <span style={{ marginLeft: "5%" }}>Masters</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Analytics />
            <span style={{ marginLeft: "5%" }}>Analytics</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <ManageSearch />
            <span style={{ marginLeft: "5%" }}>Advance Search</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <SyncAlt />
            <span style={{ marginLeft: "5%" }}>Activity Log</span>
          </div>,
        ].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              style={{
                backgroundColor: "#e6e8ed",
                borderBottom: "1px solid #2C566D",
                color: "#043752",
                height:'2.8rem'
              }}
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex"}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        
      >
        <Toolbar style={{ backgroundColor: "#2C566D" }}>
          <IconButton
          // className="menubutton"
            disableRipple
            // size="small"
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { xs:"inline-block" , sm: "none"  } }}
          >
            <MenuIcon />
          </IconButton>


          <Input
              sx={{ display: { xs: "none", md: "flex" ,marginLeft:'20%'} }}
              style={{ height: "2.2rem", color: "#043752",backgroundColor:"white" }}
                        disableUnderline
                        type="search"
                        startAdornment={
                          <SearchIcon/>
                          
                        }
                        placeholder="Search Anything"/>
                      
          {/* <Stack
            marginLeft='35rem'
            direction="row"
            xs={{ display: { xxs: "flex",  sx:"flex" } }}
          >
            <IconButton
            disableRipple
            aria-label="show 17 new notifications"
              color="inherit"
              display='block'
            >
            <div style={{display:"block"}}>
            <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
              <Typography style ={{fontSize:".7rem"}} sx={{ display: { xs: "none", md: "block" } }} >Notifications</Typography>
              </div>
              </IconButton>
              
              <IconButton
              disableRipple
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              color="inherit"
              >
              <div style={{marginTop:'-.5rem'}}>
               
              <AccountCircle />
              <Typography  style ={{fontSize:".7rem"}} sx={{ display: { xs: "none", md: "block" } }} >Administrator</Typography>
              </div>
              
              
              </IconButton>
              
            <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            >
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu> 
          </Stack>*/}
          
          <Box sx={{ flexGrow: 1 }}/>
          <Box sx={{ display: { xs: "flex", md: "flex" } }}
                marginRight='12rem'
          >
            <IconButton
              disableRipple
              aria-label="show 17 new notifications"
              color="inherit"
              display='block'
            >
              <div style={{display:"block"}}>
                <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
              <Typography style ={{fontSize:".7rem"}} sx={{ display: { xs: "none", md: "block" } }} >Notifications</Typography>
              </div>
            </IconButton>

            <IconButton
              disableRipple
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              color="inherit"
              >
             <div style={{marginTop:'-.5rem'}}>
               
              <AccountCircle />
              <Typography  style ={{fontSize:".7rem"}} sx={{ display: { xs: "none", md: "block" } }} >Administrator</Typography>
             </div>
              
              
            </IconButton>

            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              >
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            </Box>
      </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "flex" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)`, marginTop: "7%" },
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              // rowGap: "3rem",
              width: "100%",
              // columnGap:"-1rem",
              height: "100",
            }}
          >
            <Grid item xs={12} md={6} lg={4}>
              <Item>
                <Donut1 />
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Item>
                <Donut2 />
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Item>
                <Bar1 />
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Item>
                <StackedBar />
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Item>
                <Image />
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Item>
                <Bar2 />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

SidenavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SidenavBar;
