import { FunctionComponent } from "react";
import BookingOptionsCard from "./BookingOptionsCard";
import styles from "./FilterContainer.module.css";
const FilterContainer: FunctionComponent = () => {
  return (
    <div className={styles.searchFilters}>
      <div className={styles.resultsSummary}>
        <div className={styles.results}>10 out of 177 Results</div>
        <img className={styles.seperatorIcon} alt="" src="/seperator.svg" />
      </div>
      <BookingOptionsCard sectionTitle="Stops" />
      <BookingOptionsCard sectionTitle="Booking Options" propGap="0" />
      <BookingOptionsCard sectionTitle="Flight Experience" propGap="16px" />
      <img className={styles.seperatorIcon} alt="" src="/seperator.svg" />
      <BookingOptionsCard sectionTitle="Airlines" propGap="16px" />
    </div>
  );
};

export default FilterContainer;
