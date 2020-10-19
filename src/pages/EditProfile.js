import React from "react";
import {
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonRow,
  IonCol,
  IonButtons,
} from "@ionic/react";
import NavHeader from "../components/Header/NavHeader";

const EditProfile = () => {
  return (
    <IonPage>
      <NavHeader title="Edit Profile" />
      <IonContent>
        <IonItem lines="full">
          <IonLabel position="floating">Username</IonLabel>
          <IonInput name="name" type="text" required>
            {" "}
          </IonInput>
        </IonItem>
        <IonItem lines="full">
          <IonLabel position="floating">Email</IonLabel>
          <IonInput name="email" type="text" required>
            {" "}
          </IonInput>
        </IonItem>
        <IonItem lines="full">
          <IonLabel position="floating">New Password</IonLabel>
          <IonInput name="newPassword" type="password" required>
            {" "}
          </IonInput>
        </IonItem>
        <IonItem lines="full">
          <IonLabel position="floating">Current Password</IonLabel>
          <IonInput name="password" type="password" required>
            {" "}
          </IonInput>
        </IonItem>
        <IonRow>
          <IonCol>
            <IonButtons type="submit" color="primary" expand="block">
              Save
            </IonButtons>
          </IonCol>
        </IonRow>{" "}
      </IonContent>
    </IonPage>
  );
};

export default EditProfile;
