

function SiteBodyAboutPage() {

  const pageStyle ={
    textAlign: "left",
    width: "100%"
  }

  return (
      <div data-testid="about-page" style={pageStyle}>
        <h1 style={{fontSize: "24px"}}>About Me</h1>
        <p>I'm just a dude, grinding out daily quests, trying to level up and become a better version of myself every day.</p>
        <p>I'm not focused on some lofty end goals, and I'm not focused on what others are doing or what they think of me. I care only about challenging myself to incrementally get stronger, healthier, more focused and more loving.</p>
        <p></p>
        <p>I'm sharing my personal experiences and lessons I've learned. While I try to do my research, I may not always be right. You are free to take what you like from my experiences and leave behind anything that doesn't resonate with you.</p>
        <p></p>
        <p>My hope is that through sharing my stories I can help others who want to incrementally level up too but are feeling a little lost.</p>
      </div>
  );
}

export default SiteBodyAboutPage;