

function SiteBodyAboutPage() {

  const aboutHeading = "About Me"
  const aboutBody = `I'm just a dude, grinding out daily quests, trying to level up and become a better version of myself every day.
I'm not focused on some lofty end goals, and I'm not focused on what others are doing or what they think of me. I care only about challenging myself to incrementally get stronger, healthier, more focused and more loving.

I'm sharing my personal experiences and lessons I've learned. While I try to do my research, I may not always be right. You are free to take what you like from my experiences and leave behind anything that doesn't resonate with you.

My hope is that through sharing my stories I can help others who want to incrementally level up too but are feeling a little lost.`

  const pageStyle ={
    textAlign: "left",
    width: "100%"
  }

  return (
      <div data-testid="about-page" style={pageStyle}>
        <h4>{aboutHeading}</h4>
        <div className="text-block">{aboutBody}</div>
      </div>
  );
}

export default SiteBodyAboutPage;