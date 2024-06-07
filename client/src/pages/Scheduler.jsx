import Calendar from "../components/Calendar";
import Weather from "../components/Weather";

//  what code would i add to refresh the page?

const Scheduler = () => {

  return (
    <div className="container">
      <h1>Schedule Your Day!</h1>

      <div className="components">
        <Calendar />
        <Weather />
      </div>
    </div>
    
  );
};


export default Scheduler;