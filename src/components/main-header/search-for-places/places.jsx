function Places({ data, onClick, onBlur }) {
  return (
    (data.length > 0 && (
      <ul className="places" onBlur={onBlur}>
        {data.map(({ lat, lon, name, country }, index) => (
          <li key={`${lat}${lon}${name}`} onClick={() => onClick(data[index])}>
            <p>{name}</p>
            <p>{country}</p>
          </li>
        ))}
      </ul>
    )) || <></>
  );
}

export default Places;
