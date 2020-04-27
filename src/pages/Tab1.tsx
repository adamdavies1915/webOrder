import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Tab1.css';
import MenuComponent from '../components/MenuComponent';
import ExploreContainer from '../components/ExploreContainer';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu Tab</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Menu Tab</IonTitle>
          </IonToolbar>
        </IonHeader>
        <MenuComponent/>
      </IonContent>
    </IonPage>
  )
};

export default Tab1;
