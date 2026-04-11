function Star({maxRating = 5}) {
  return (
    <>
      <div className="flex gap-3 items-center">
        <div className="flex gap-1" >
          {Array.from({ length: maxRating }, (_, i ) => (
            <span>⭐{i + 1}</span>
          ))}
        </div>
        <div className="m-0" >10</div>
      </div>
      
    </>
    
  );
}


export default Star;
