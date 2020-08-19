import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">About</IonTitle>
          </IonToolbar>
        </IonHeader>
        <p>SamuelVille Transit is SamuelVille national transit agency, operating dozens of routes in 4 SamuelVille cities and the West Coast of the United States.</p>
        <p>Our routes carry millions of people to all the great things SamuelVille has to offer.</p>
        <p>Contact us at <a href="mailto:sv@samuelsharp.com">sv@samuelsharp.com</a>.</p>
        <p>Like what you see? Our website is built with Ionic Angular and <a href="https://github.com/SISBEST/samuelville-transit">open source</a>.</p>
      </IonContent>
    </IonPage>
  );
};

export default About;
