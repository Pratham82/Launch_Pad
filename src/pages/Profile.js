import React from "react";
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardContent,
  IonList,
  IonIcon,
  IonItem,
  IonLabel,
  IonRow,
  IonCol,
  IonButton,
  IonGrid,
} from "@ionic/react";
import { personCircleOutline, mailOutline } from "ionicons/icons";
import UserContext from "../contexts/UserContext";
import firebase from "../firebase";
import { toast } from "../utils/toast";
import SmallHeader from "../components/Header/SmallHeader";
import LargeHeader from "../components/Header/LargeHeader";

const Profile = (props) => {
  const { user } = React.useContext(UserContext);

  async function logoutUser() {
    try {
      await firebase.logout();
      props.history.push("/");
      toast("You have been logged out successfully");
    } catch (err) {
      console.log("Logout Error", err);
      toast(err.message);
    }
  }

  return (
    <IonPage>
      <SmallHeader title="Profile" />
      <IonContent fullscreen>
        <LargeHeader title="Profile" />
        {user ? (
          <>
            <IonCard>
              <IonCardContent>
                {" "}
                <IonList lines="none">
                  <IonItem>
                    <IonIcon icon={personCircleOutline} slot="start"></IonIcon>
                    <IonLabel>
                      <strong>{user.displayName}</strong>
                      <p>Username</p>
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonIcon icon={mailOutline} slot="start"></IonIcon>
                    <IonLabel>
                      {" "}
                      <strong>{user.email}</strong>
                      <p>Email</p>
                    </IonLabel>
                  </IonItem>
                </IonList>{" "}
              </IonCardContent>
            </IonCard>
            <IonRow>
              <IonCol>
                <IonButton
                  expand="block"
                  routerLink={"/edit-profile"}
                  color="primary"
                  fill="outline"
                >
                  Edit Profile
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  expand="block"
                  color="primary"
                  file="outline"
                  onClick={logoutUser}
                >
                  Log Out
                </IonButton>
              </IonCol>
            </IonRow>
          </>
        ) : (
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton
                  expand="block"
                  routerLink={"/register"}
                  color="primary"
                  fill="outline"
                >
                  Sign Up
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton expand="block" routerLink={"/login"} color="primary">
                  Login
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Profile;
