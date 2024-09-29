function ListGroup() {
  let customCss = "error";
  const isLoggedIn = true;
  const greeting = isLoggedIn ? <p>Welcome back</p> : <p>Please login </p>
  const items = ["apple", "orange", "banana", "graps", "pinaplle"]
  return (
    <>
      <div>
        <h1 className="color">Tamizh</h1>
        <p style={{fontSize:'25px',fontStyle:'italic'}}>learn more be smart</p>

        {/* expression */}
        <p className={customCss}>23 + 7 = {23+7}</p>

        {/* conditional rendering */}
        {greeting}

        {/* list with jsx */}
        <ul>
          {items.map((item,index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      </div>
    </>
  );
}

export default ListGroup;
