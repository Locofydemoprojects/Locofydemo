import { FunctionComponent } from "react";
import styles from "./RecentSearchContainer.module.css";

type RecentSearchContainerType = {
  departure?: string;
  planeIcon?: string;
  arrival?: string;
  departureDate?: string;
};

const RecentSearchContainer: FunctionComponent<RecentSearchContainerType> = ({
  departure,
  planeIcon,
  arrival,
  departureDate,
}) => {
  return (
    <div className={styles.recentSearch}>
      <div className={styles.toAndFrom}>
        <b className={styles.departure}>{departure}</b>
        <img className={styles.planeicon} alt="" src={planeIcon} />
        <b className={styles.arrival}>{arrival}</b>
      </div>
      <div className={styles.departureInfo}>
        <b className={styles.departure}>{`Depart on: `}</b>
        <div className={styles.departure}>{departureDate}</div>
      </div>
    </div>
  );
};

export default RecentSearchContainer;
