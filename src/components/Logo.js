function Logo() {
  const containerStyle ={
    padding: "10px"
  }
  const textStyle = {
    margin: "0px 0px 0px 10px",
    maxWidth: "70px",
    fontSize: "1.4rem",
    fontWeight: "bold",
    wrap: "wrap",
    textAlign: "left",
    verticalAlign: "middle"
  }
  return (
    <div className="flex-container" style={containerStyle}>
      <img src="images/dailyquest-logo.png" alt="Daily Quest Logo" width="50px" height="50px" data-testid='logo-image'/>
      <h1 style={textStyle} data-testid='logo-text'>Daily Quest</h1>
    </div>
)}

export default Logo;