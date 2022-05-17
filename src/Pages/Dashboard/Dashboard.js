import * as React from 'react';
import './Dashboard.css';
// import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import DashHome from './DashHome/DashHome';
import Notice from '../Notice/Notice';
import Routine from './Routine/Routine';
import Payment from '../Payment/Payment';
import MyProfile from '../MyProfile/MyProfile';
import AddFaculty from '../AddFaculty/AddFaculty';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManAllstudents from './ManAllstudents/ManAllstudents';
import ManageFaculties from './ManageFaculties/ManageFaculties';
import AddTeacher from './AddTeacher/AddTeacher';
import AddSubjects from './AddSubjects/AddSubjects';
import TestScores from './TestScores/TestScores';


const drawerWidth = 200;

function Dashboard(props) {
    let { path, url } = useRouteMatch();
    const { user, logout, admin } = useAuth()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (

        <div>
            <Toolbar />
            <Divider />
            {
                admin ? <Box >
                    <br />
                    <Link to={`${url}/makeadmin`}>
                        <Button variant="contained" color="success"> Make-Admin</Button>

                    </Link>
                    <br /><br />
                    <Link to={`${url}/addfaculty`}>
                        <Button variant="contained" color="success">Add-Faculty</Button>

                    </Link>
                    <br /><br />
                    <Link to={`${url}/routine`}>
                        <Button variant="contained" color="success">Add-Routine</Button>
                    </Link>
                    <br /><br />

                    <Link to={`${url}/notice`}>
                        <Button variant="contained" color="success">Write-Notice</Button>
                    </Link>
                    <br /><br />
                    <Link to={`${url}/managefaculties`}>
                        <Button variant="contained" color="success">Manage-Faculties</Button>

                    </Link>
                    <br /><br />
                    <Link to={`${url}/manageteachers`}>
                        <Button variant="contained" color="success">Manage-Teachers</Button>

                    </Link>
                    <br /><br />
                    <Link to={`${url}/manageallstudents`}>
                        <Button variant="contained" color="success">Manage-Students</Button>
                    </Link>
                    <br /><br />
                    <Link to={`${url}/managesubjects`}>
                        <Button variant="contained" color="success">Manage-Subjects</Button>
                    </Link>
                    <br /><br />
                    <Link to="/attendence">
                        <Button variant="contained" color="success">take-attendence</Button>
                    </Link>
                    <br /><br />
                    <Link to="/givemarks">
                        <Button variant="contained" color="success">Give-Marks</Button>
                    </Link>
                    <br /><br />
                    <br /><br />
                </Box>
                    : <Box>
                        <br /><br />
                        <Link to="/">
                            <Button variant="contained" color="success"> Home Page</Button>

                        </Link>
                        <br /><br />
                        <Link to="/subjects">
                            <Button variant="contained" color="success">See-Subjects</Button>

                        </Link>
                        <br /><br />
                        <Link to="/seeclassmates">
                            <Button variant="contained" color="success">See-classmates</Button>

                        </Link>
                        <br /><br />
                        <Link to={`${url}/testscores`}>
                            <Button variant="contained" color="success">TestScores</Button>

                        </Link>
                        <br /><br />
                        <Link to={`${url}/myprofile`}>
                            <Button variant="contained" color="success">Your Profile</Button>

                        </Link>
                        <br /><br />
                    </Box>
            }
            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box style={{ height: '100vh' }} sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar style={{ backgroundColor: "" }}
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard Menu
                    </Typography>
                    <div style={{ paddingLeft: "40%" }}>
                        {
                            user?.email &&
                            <Typography>
                                <Button style={{ textDecoration: 'none', color: 'white' }} color="inherit">Hi"{user.displayName}"</Button>
                                <Button style={{ textDecoration: 'none', color: 'white' }} onClick={logout} color="inherit">Logout</Button>
                            </Typography>
                        }
                    </div>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                style={{ backgroundColor: 'rgb(9, 6, 22)', backgroundSize: 'cover' }}
                className=""
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Typography paragraph >
                    <Switch>
                        <Route exact path={path}>
                            <DashHome></DashHome>
                        </Route>
                        <Route path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/addfaculty`}>
                            <AddFaculty></AddFaculty>
                        </Route>
                        <Route path={`${path}/payment/:orderId`}>
                            <Payment></Payment>
                        </Route>
                        <Route path={`${path}/managefaculties`}>
                            <ManageFaculties></ManageFaculties>
                        </Route>
                        <Route path={`${path}/myProfile`}>
                            <MyProfile></MyProfile>
                        </Route>

                        <Route path={`${path}/manageallstudents`}>
                            <ManAllstudents></ManAllstudents>
                        </Route>
                        <Route path={`${path}/managesubjects`}>
                            <AddSubjects></AddSubjects>
                        </Route>
                        <Route path={`${path}/manageteachers`}>
                            <AddTeacher></AddTeacher>
                        </Route>
                        <Route path={`${path}/notice`}>
                            <Notice></Notice>
                        </Route>
                        <Route path={`${path}/routine`}>
                            <Routine></Routine>
                        </Route>
                        <Route path={`${path}/testscores`}>
                            <TestScores></TestScores>
                        </Route>

                    </Switch>
                </Typography>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {

    window: PropTypes.func,
};

export default Dashboard;
