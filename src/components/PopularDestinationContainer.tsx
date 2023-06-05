import { FunctionComponent } from "react";
import styles from "./PopularDestinationContainer.module.css";

type PopularDestinationContainerType = {
  cardImage?: string;
  destination?: string;
  price?: string;
};

const PopularDestinationContainer: FunctionComponent<
  PopularDestinationContainerType
> = ({ cardImage, destination, price }) => {
  return (
    <button className={styles.popularDestinationCard}>
      <div className={styles.pariscard}>
        <img className={styles.cardimageIcon} alt="" src={cardImage} />
        <div className={styles.destinationDetails}>
          <b className={styles.destination}>{destination}</b>
          <div className={styles.details}>
            <div className={styles.from}>from</div>
            <div className={styles.price}>{price}</div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default PopularDestinationContainer;
