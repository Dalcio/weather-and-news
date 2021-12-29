function NoResultFound({ onBlur }) {
  return (
    <div className="no-result-found" onClick={onBlur}>
      <p>No result found</p>
      <p>Try Searching for location / city typing the full name</p>
    </div>
  );
}

export default NoResultFound;
