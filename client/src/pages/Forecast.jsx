import Calendar from "../components/Calendar";
import Weather from "../components/Weather";

//  what code would i add to refresh the page?

const Forecast = () => {

  return (
    <div className="container">
      <h1>Today's Forecast</h1>

      <div className="components">
        <Calendar />
        <Weather />
      </div>
    </div>
    
  );
};


export default Forecast;