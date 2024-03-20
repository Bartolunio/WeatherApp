import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
  return (
    <>
      <div className={styles.containerSearchBar}>
        <div className={styles.headerSearchBar}>
          <button className={styles.buttonSearchBar}></button>
          <input
            className={styles.SearchBar}
            type="text"
            placeholder="Search for places..."
          ></input>
        </div>
      </div>

      <div className={styles.bodySearchBar}>
        <img className={styles.iconSearchBar} src ="https://openweathermap.org/img/wn/10d@2x.png" alt="" ></img>
        <h1>12* C</h1>
        <p>
          Monday<span> 16:00</span>
        </p>
      </div>

      <div className={styles.fotterSearchBar}>
        <div>
          <img src="" alt=""></img>
          <p>Mostly Cloudy</p>
        </div>
        <div>
          <img  alt=""></img>
          <p>Rain-30%</p>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
