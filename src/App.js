import Header from "./components/header/Header";
import Searchbar from "./components/searchbar/Searchbar";
import WeatherForecastView from "./components/weatherForecastView/WeatherForecastView";
import ForecastList from "./components/forecastList/ForecastList";
import EmptyState from "./components/emptyState/EmptyState";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
      <div className="App">
        <div className="container">
          <Header />
          <Searchbar />
          <WeatherForecastView />
          <ForecastList />
          {false && <EmptyState />}
          <Footer />
        </div>
      </div>
  );
}