import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./HotelCardContainer.module.css";

type HotelCardContainerType = {
  image?: string;
  type?: string;
  title?: string;
  price?: string;
  rating?: string;
  reviews?: string;

  /** Style props */
  propMarginBottom?: Property.MarginBottom;
};

const HotelCardContainer: FunctionComponent<HotelCardContainerType> = ({
  image,
  type,
  title,
  price,
  rating,
  reviews,
  propMarginBottom,
}) => {
  const popularHotelCardStyle: CSS.Properties = useMemo(() => {
    return {
      marginBottom: propMarginBottom,
    };
  }, [propMarginBottom]);

  return (
    <div className={styles.popularHotelCard} style={popularHotelCardStyle}>
      <div className={styles.hotelCard}>
        <img className={styles.imageIcon} alt="" src={image} />
        <div className={styles.stayDetails}>
          <div className={styles.stayDetailsRows}>
            <div className={styles.type}>{type}</div>
            <b className={styles.title}>{title}</b>
            <div className={styles.price}>{price}</div>
          </div>
          <button className={styles.video}>
            <img className={styles.videoIcon} alt="" src="/video-icon.svg" />
          </button>
        </div>
        <div className={styles.rating}>
          <div className={styles.stars}>
            <img className={styles.staricon} alt="" src="/staricon.svg" />
            <div className={styles.rating1}>{rating}</div>
          </div>
          <div className={styles.reviews}>{reviews}</div>
        </div>
        <button className={styles.moreDetailsButton}>
          <div className={styles.button}>More details</div>
        </button>
      </div>
    </div>
  );
};

export default HotelCardContainer;
