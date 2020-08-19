import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, calendarOutline, statsChartOutline, mapOutline, cashOutline, informationCircleOutline } from 'ionicons/icons';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Status from './pages/Status';
import Fares from './pages/Fares';
import Maps from './pages/Maps';
import About from './pages/About';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/schedule" component={Schedule} exact={true} />
          <Route path="/status" component={Status} exact={true} />
          <Route path="/fares" component={Fares} exact={true} />
          <Route path="/maps" component={Maps} exact={true} />
          <Route path="/about" component={About} exact={true} />
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="schedule" href="/schedule">
            <IonIcon icon={calendarOutline} />
            <IonLabel>Schedule</IonLabel>
          </IonTabButton>
          <IonTabButton tab="status" href="/status">
            <IonIcon icon={statsChartOutline} />
            <IonLabel>Status</IonLabel>
          </IonTabButton>
          <IonTabButton tab="fares" href="/fares">
            <IonIcon icon={cashOutline} />
            <IonLabel>Fares</IonLabel>
          </IonTabButton>
          <IonTabButton tab="maps" href="/maps">
            <IonIcon icon={mapOutline} />
            <IonLabel>Maps</IonLabel>
          </IonTabButton>
          <IonTabButton tab="about" href="/about">
            <IonIcon icon={informationCircleOutline} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
