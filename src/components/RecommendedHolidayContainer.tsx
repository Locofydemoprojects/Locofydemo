import { FunctionComponent } from "react";
import styles from "./RecommendedHolidayContainer.module.css";

type RecommendedHolidayContainerType = {
  image?: string;
  destination?: string;
  duration?: string;
  price?: string;
};

const RecommendedHolidayContainer: FunctionComponent<
  RecommendedHolidayContainerType
> = ({ image, destination, duration, price }) => {
  return (
    <button className={styles.recommendedHolidayCard}>
      <img className={styles.imageIcon} alt="" src={image} />
      <div className={styles.holidayDetails}>
        <div className={styles.frameParent}>
          <div className={styles.destinationParent}>
            <div className={styles.destination}>{destination}</div>
            <div className={styles.duration}>{duration}</div>
          </div>
          <div className={styles.price}>{price}</div>
        </div>
      </div>
    </button>
  );
};

export default RecommendedHolidayContainer;
