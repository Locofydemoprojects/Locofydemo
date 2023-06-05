import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./TripMenuItemContainer.module.css";

type TripMenuItemContainerType = {
  iconVector?: string;
  text?: string;

  /** Style props */
  propBackgroundColor?: Property.BackgroundColor;
};

const TripMenuItemContainer: FunctionComponent<TripMenuItemContainerType> = ({
  iconVector,
  text,
  propBackgroundColor,
}) => {
  const iconStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <button className={styles.tripMenuItem}>
      <div className={styles.icon} style={iconStyle}>
        <img className={styles.iconVector} alt="" src={iconVector} />
      </div>
      <div className={styles.text}>{text}</div>
    </button>
  );
};

export default TripMenuItemContainer;
