import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import PlaceList from './components/Places/PlaceList';
import PlaceCreate from './components/Places/PlaceCreate';
import PlaceEdit from './components/Places/PlaceEdit';
import Home from './components/Home/index';
import Map from './components/Map/index';
import Login from './components/Login/index';
import UserMenu from './components/UserMenu';
import Connections from './components/Connections/index';
import Notifcations from './components/Notifcations/index';
import Chat from './components/Connections/Chat';
import ViewProfile from './components/UserMenu/ViewProfile';
import UpdateProfile from './components/UserMenu/UpdateProfile';

const RouterComponent = () => (
  <Router sceneStyle={{ paddingTop: 0 }}>
    <Scene key="auth">
      <Scene key="login" component={Login} title="Login" hideNavBar="true" />
    </Scene>

    <Scene key="main" hideNavBar="true">

      <Scene key="index" initial hideNavBar="true">
        <Scene key="home" component={Home} initial />
        <Scene
          key="placeList"
          component={PlaceList}
          title="Place List"
        />
        <Scene key="placeCreate" component={PlaceCreate} title="Create Location" />
        <Scene key="placeEdit" component={PlaceEdit} title="Edit Location" />
      </Scene>

      <Scene key="map" component={Map} hideNavBar="true" hideNavBar="true" />

      <Scene key="usermenu" hideNavBar="true">
        <Scene key="mainmenu" component={UserMenu} />
        <Scene key="updateprofile" component={(props) => <UpdateProfile {...props} />} />
        <Scene key="viewprofile" component={(props) => <ViewProfile {...props} />} />
      </Scene>

      <Scene key="connections" hideNavBar="true" >
        <Scene key="connectionsHome" component={Connections} inital />
        <Scene key="chat" component={Chat} />
      </Scene>

      <Scene key="notifications" component={Notifcations} hideNavBar="true" />

    </Scene>
  </Router>
);

export default RouterComponent;
