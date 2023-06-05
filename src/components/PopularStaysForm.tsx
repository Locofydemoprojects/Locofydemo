import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HotelCardContainer from "./HotelCardContainer";
import styles from "./PopularStaysForm.module.css";
const PopularStaysForm: FunctionComponent = () => {
  const navigate = useNavigate();

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <div className={styles.popularStays}>
      <div className={styles.popularStaysHeader}>
        <div className={styles.popularStaysTitle}>
          <b className={styles.popularStays1}>Popular Stays</b>
        </div>
        <button
          className={styles.viewAllStaysButton}
          onClick={onViewAllStaysButtonClick}
        >
          <div className={styles.viewAllStays}>View all stays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright1.svg"
          />
        </button>
      </div>
      <div className={styles.hotelCards}>
        <HotelCardContainer
          image="/unsplashrlwe8f8anoc@2x.png"
          type="Entire bungalow"
          title="Matterhorn Suites"
          price="$575/night"
          rating="4.9"
          reviews="(60 reviews)"
        />
        <HotelCardContainer
          image="/unsplashrlwe8f8anoc1@2x.png"
          type="2-Story beachfront suite"
          title="Discovery Shores"
          price="$360/night"
          rating="4.8"
          reviews="(116 reviews)"
          propMarginBottom="16px"
        />
        <HotelCardContainer
          image="/unsplashrlwe8f8anoc2@2x.png"
          type="Single deluxe hut"
          title="Arctic Hut "
          price="$420/night"
          rating="4.7"
          reviews="(78 reviews)"
          propMarginBottom="16px"
        />
        <HotelCardContainer
          image="/unsplashrlwe8f8anoc3@2x.png"
          type="Deluxe King Room"
          title="Lake Louise Inn"
          price="$244/night"
          rating="4.6"
          reviews="(63 reviews)"
          propMarginBottom="unset"
        />
      </div>
      <div className={styles.mobileViewAllStays}>
        <div className={styles.viewAllStays1}>View all stays</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright.svg" />
      </div>
    </div>
  );
};

export default PopularStaysForm;
