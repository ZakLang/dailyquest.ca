import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function SiteBodyBlogsPage() {

  const firstPostHeading = `Sharing Personal Experiences on the Path to Self-Improvement: Don't Hit Snooze!`;
  const firstPostDate = `November 30, 2023`;
  const firstPostBody = `
(In progress)
  
When I first started on my personal growth journey recently, I was feeling unproductive, lost and unsure of how to change it. I realized I had no regular positive habits, lacked discipline, and my life was pretty messy as a result. I had been spinning my tires with goals and improvement plans for years but none of them seemed to stick. I was used to flashes of motivation and inspiration. My life was a stream of 30-day fitness spikes that fizzled back into fast food every day, or 30-day budgeting streaks that would soon lie forgotten. I wasn’t sure how to make an impact in my life that actually stuck.

This time I started my journey out with one simple habit, waking up at my alarm without hitting the snooze. By itself it didn’t seem very helpful in saving me money, helping me lose weight, or achieving my other dreams. But in hindsight I realize starting with this daily habit helped me in two powerful and unexpected ways get where I am today.
  
<strong>Following through.</strong> I was a chronic “snoozer”. In fact, I would regularly set an alarm earlier than I was going to wake up knowing that I wasn’t going to listen to it anyway. If I had to wake up at 8, I would set an alarm for 7:30, snooze multiple times, and probably actually get up around 8:30. This would leave me feeling extremely rushed and stressed for my day. What I didn’t realize about this pattern is that I was starting out every day becoming an expert at doing what felt good in the moment (which is a complete anti-pattern to growth). I ignored the goal of waking up at a specific time I had set for myself and wasn't following through with my commitments. Instead, when I started waking up on time for my alarm, I made sure that the first thing I did every day was overcome my feelings of laziness and tiredness and follow through with a goal I set for myself. I believe waking up to my alarm was the first step in learning to listen to myself, even when it's difficult.

<strong>Habit stacking.</strong> The other powerful way I believe this goal helped me is by creating a starting point from which to launch other new habits using a technique called "habit stacking". The power of habit stacking to create lasting changes is written about extensively by renowned authors such as BJ Fogg, PhD (in his book "Tiny Habits"), James Clear (in "Atomic Habits"), and S.J Scott (in "Habit Stacking: 97 Small Life Changes That Take Five Minutes or Less"). The idea of habit stacking is that it is much easier to link a new habit to an existing habit than start a new habit on its own. An example of this is that it’s much easier to start flossing your teeth if you already have a habit to link it with, such as brushing your teeth. Waking up to my alarm started my habit stack which turned into regular meditation, workouts, cleaning room and so on. This also created more sustainable ways to keep those new habits.

If you've ridden a similar rollercoaster on your self-improvement journey, maybe setting a small goal at the beginning of your day could have a significant impact on your personal growth as well.

To everyone else doing the work out there, good luck on your quests.`;

  return (
    <div data-testid="blogs-page">
      <Container fluid>
        <Row>
            <h4 className="text-center text-lg-start">{firstPostHeading}</h4>
        </Row>
        <Row>
          <div className="text-start"><i>{firstPostDate}</i></div>
        </Row>
        <Row>
          <Col>
            <div className="text-start text-pre-wrap" dangerouslySetInnerHTML={{__html: firstPostBody}}></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SiteBodyBlogsPage;