import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchButton.module.css";
const SearchButton: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSearchButtonClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  return (
    <button className={styles.searchButton} onClick={onSearchButtonClick}>
      <div className={styles.searchFlights}>SEARCH FLIGHTS</div>
    </button>
  );
};

export default SearchButton;
