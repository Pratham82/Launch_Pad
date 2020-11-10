import React from 'react'
import { IonContent, IonPage } from '@ionic/react'
import ProductList from '../components/Product/ProductList'
import SmallHeader from '../components/Header/SmallHeader'
import LargeHeader from '../components/Header/LargeHeader'

const Home = props => {
  return (
    <IonPage>
      <SmallHeader title="Launch Pad" />
      <IonContent color="medium" fullscreen>
        <LargeHeader title="Launch Pad" />
        <br></br>
        <ProductList location={props.location} />
      </IonContent>
    </IonPage>
  )
}

export default Home
