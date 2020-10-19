import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import SmallHeader from "../components/Header/SmallHeader";
import LargeHeader from "../components/Header/LargeHeader";

const Home = () => {
  return (
    <IonPage>
      <SmallHeader title="App Hunt" />
      <IonContent fullscreen>
        <LargeHeader title="App hunt" />
      </IonContent>
    </IonPage>
  );
};

export default Home;
