import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.asidePanel}>
      <div className={styles.containerSearchBar}>
        <div className={styles.headerSearchBar}>
          <button className={styles.buttonSearchBar}></button>
          <input
            className={styles.SearchBar}
            type="text"
            placeholder="Search for places..."
          ></input>
          <div className={styles.locationIcon}></div>
        </div>
      </div>

      <div className={styles.bodySearchBar}>
        <img
          className={styles.iconSearchBar}
          src="https://openweathermap.org/img/wn/11d@4x.png"
        ></img>
        <h1 className={styles.celcius}>12°C</h1>
        <p className={styles.dayAndTime}>
          Monday,<span> 16:00</span>
        </p>
      </div>

      <div className={styles.fotterSearchBar}>
        <div className={styles.weather}>
          <img src="https://openweathermap.org/img/wn/03d@2x.png"></img>
          <p>Mostly Cloudy</p>
        </div>
        <div className={styles.weather}>
          <img src="https://openweathermap.org/img/wn/10d@2x.png"></img>
          <p>Rain -30%</p>
        </div>
      </div>
      <div className={styles.containerCity}>
        <h1 className={styles.cityBacground}><p>New York, NY, USA</p></h1>
      </div>
    </div>
  );
};

export default SearchBar;
