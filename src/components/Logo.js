function Logo() {

  const textStyle = {
    margin: "0px 0px 0px 10px",
    fontSize: "1.3rem",
    fontWeight: "bold",
    wrap: "wrap",
    textAlign: "left",
    verticalAlign: "middle"
  }

  return (
    <div className="flex-container">
      <img src="images/dailyquest-logo.png" alt="Daily Quest Logo" width="20px" height="20px" data-testid='logo-image'/>
      <h1 style={textStyle} data-testid='logo-text'>Daily Quest</h1>
    </div>
)}

export default Logo;