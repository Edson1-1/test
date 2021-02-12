
function App() {
  const lm = window.LinkMink('pub_live_f9c8ZYTqgAarabIQAriU');
  
  const lm_data = window.location.href.includes('lmref') && lm.getReferralData() || null;
  console.log(lm_data);
  console.log(window.location.href);
  return (
    <div className="App">
      <h1>Hello</h1>
      <span>lmData: {lm_data}</span>
    </div>
  );
}

export default App;
