import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import AuthProvider from './Context/AuthProvider/AuthProvider';
import Notfound from './Pages/Notfound/Notfound';
import Home from './Pages/Home/Home';
import AllFaculties from './Pages/AllFaculties/AllFaculties';
import PlaceAdmit from './Pages/PlaceAdmit/PlaceAdmit';
import Login from './Pages/LoginPage/Login/Login';
import Register from './Pages/LoginPage/Register/Register';
import PrivateRoute from './Pages/LoginPage/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import StudentsUpdate from './Pages/Dashboard/StudentsUpdate/StudentsUpdate';
import MyProfile from './Pages/MyProfile/MyProfile';
import ShowTeacher from './Pages/ShowTeacher/ShowTeacher';
import SeeSubjects from './Pages/Dashboard/SeeSubjects/SeeSubjects';
import SeeClassmates from './Pages/Dashboard/SeeClassmates/SeeClassmates';
import ChatInterface from './Pages/ChatInterface/ChatInterface';
import SeeMasseges from './Pages/SeeMasseges/SeeMasseges';
import TakeAttendence from './Pages/Dashboard/TakeAttendence/TakeAttendence';
import GiveMarks from './Pages/Dashboard/GiveMarks/GiveMarks';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/teacher">
              <ShowTeacher></ShowTeacher>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/myprofile">
              <MyProfile></MyProfile>
            </PrivateRoute>
            <PrivateRoute path="/subjects">
              <SeeSubjects></SeeSubjects>
            </PrivateRoute>
            <PrivateRoute path="/attendence">
              <TakeAttendence></TakeAttendence>
            </PrivateRoute>
            <PrivateRoute path="/givemarks">
              <GiveMarks></GiveMarks>
            </PrivateRoute>
            <PrivateRoute path="/chat/:id">
              <ChatInterface></ChatInterface>
            </PrivateRoute>
            <PrivateRoute path="/yourmasseges">
              <SeeMasseges></SeeMasseges>
            </PrivateRoute>
            <PrivateRoute path="/seeclassmates">
              <SeeClassmates></SeeClassmates>
            </PrivateRoute>
            <PrivateRoute path="/students/update/:id">
              <StudentsUpdate></StudentsUpdate>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/placeadmit/:id">
              <PlaceAdmit></PlaceAdmit>
            </PrivateRoute>
            <PrivateRoute path="/allfaculties">
              <AllFaculties></AllFaculties>
            </PrivateRoute>
            <Route exact path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
