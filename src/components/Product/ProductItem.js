import React from "react";
import { withRouter } from "react-router-dom";
import {
  IonItem,
  IonLabel,
  IonCard,
  IonCardContent,
  IonThumbnail,
  IonList,
  IonImg,
  IonIcon,
  IonButton,
  IonText,
} from "@ionic/react";
import {
  chevronUpCircleOutline,
  chatbubbleEllipsesOutline,
  personCircleOutline,
  timeOutline,
  caretUp,
} from "ionicons/icons";
import UserContext from "../../contexts/UserContext";
import productService from "../../services/product";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import "./ProductItem.css";

const ProductItem = ({ product, url, history, browser }) => {
  const { user } = React.useContext(UserContext);
  const addUpvote = (e) => {
    e.preventDefault();
    e.stopPropagation();
    productService.addUpvote(user, product.id).catch(() => {
      history.push("/login");
    });
  };

  const ifLiked = () => {
    const currentUser = user && user.uid;
    const likedArr = product.votes.map((v) => v.votedBy.id);
    const result = likedArr.includes(currentUser);
    return result;
  };

  return (
    <IonCard routerLink={url} onClick={browser} button>
      <IonCardContent class="ion-no-padding">
        <IonList lines="none">
          <IonItem>
            <IonThumbnail slot="start">
              <IonImg src={product.thumbnail} />
            </IonThumbnail>
            <IonLabel>
              <div className="ion-text-wrap">
                <strong style={{ fontSize: "1rem" }}>{product.title}</strong>
              </div>

              <div className="ion-text-wrap" style={{ fontSize: "0.8rem" }}>
                {product.description}
              </div>
              <p
                style={{
                  alignItems: "center",
                  fontSize: "0.8rem",
                  fontWeight: "normal",
                }}
              >
                <IonIcon
                  icon={chevronUpCircleOutline}
                  style={{
                    verticalAlign: "middle",
                  }}
                />{" "}
                <IonText
                  style={{
                    verticalAlign: "middle",
                  }}
                >
                  {product.voteCount} points
                </IonText>
                {" | "}
                <IonIcon
                  icon={personCircleOutline}
                  style={{
                    verticalAlign: "middle",
                  }}
                />{" "}
                <IonText
                  style={{
                    verticalAlign: "middle",
                  }}
                >
                  {product.postedBy.name}
                </IonText>
                {" | "}
                <IonIcon
                  icon={timeOutline}
                  style={{
                    verticalAlign: "middle",
                  }}
                />{" "}
                <IonText
                  style={{
                    verticalAlign: "middle",
                  }}
                >
                  {formatDistanceToNow(product.created)}
                </IonText>
                {product.comments.length > 0 && (
                  <>
                    {" | "}
                    <IonIcon
                      icon={chatbubbleEllipsesOutline}
                      style={{
                        verticalAlign: "middle",
                      }}
                    />{" "}
                    <IonText
                      style={{
                        verticalAlign: "middle",
                      }}
                    >
                      {product.comments.length === 1
                        ? `${product.comments.length} comment`
                        : `${product.comments.length} comments`}
                    </IonText>
                  </>
                )}{" "}
              </p>
            </IonLabel>
            <IonButton
              slot="end"
              onClick={addUpvote}
              size="large"
              disabled={ifLiked() === true}
            >
              <div className="upvote-button__inner">
                <IonIcon icon={caretUp} />
                {product.voteCount}
              </div>
            </IonButton>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export default withRouter(ProductItem);
