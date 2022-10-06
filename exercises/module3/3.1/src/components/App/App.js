import { useState } from "react";

const StatisticLine = ({ value, text }) => (
  <p>
    {text} {value}
  </p>
);

const Statistics = ({ good, bad, neutral }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedback given</p>;
  }
  const all = good + neutral + bad;
  return (
    <div>
      <StatisticLine value={good} text="good" />
      <StatisticLine value={neutral} text="neutral" />
      <StatisticLine value={bad} text="bad" />
      <StatisticLine value={all} text="all" />
      <StatisticLine value={(good - bad) / all} text="average" />
      <StatisticLine value={(good * 100) / all} text="positive" />
    </div>
  );
};

const Loading = ({ loading }) => {
  if (loading === false) {
    return <h1>chargement...</h1>;
  }
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      setTimeout(
      <Loading loading={setLoading(true)} />, 3000)
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
