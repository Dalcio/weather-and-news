import IconFor from "../icon-for";

function WeatherStatus({ status, isFor, icon, deg = false, className = "" }) {
  return (
    <div className={`Weather-Status ${className}`}>
      <div className="is-for">
        <IconFor isFor={(icon && icon.toLowerCase()) || isFor.toLowerCase()} />
      </div>
      <header>
        {status}
        {deg && <span>&deg;</span>}
      </header>
      <footer>{isFor}</footer>
    </div>
  );
}

export default WeatherStatus;
