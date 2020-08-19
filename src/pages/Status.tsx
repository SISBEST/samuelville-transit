import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Status: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Status</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Status</IonTitle>
          </IonToolbar>
        </IonHeader>
        <iframe src="https://samuelvilletransit.freshstatus.io/" title="status" slot="fixed" style={{
          width: "100%",
          height: "100%",
          border: "none",
          position: "fixed",
          top: 0,
          left: 0
        }}></iframe>
      </IonContent>
    </IonPage>
  );
};

export default Status;
