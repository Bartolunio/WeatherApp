import SearchBar from "./components/SearchBar/SearchBar";
import Navigation from "./components/Navigation/Navigation";

function App() {
  //  const url = https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=55a87c582d5006d93d25ab8a9b6564d0

  return (
    <div className="App">
      <SearchBar />
      <Navigation />
    </div>
  );
}

export default App;
