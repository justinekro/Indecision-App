let count = 0
const addOne = () => {
  count ++;
  renderCounterApp()
}
const minusOne = () => { count --;  renderCounterApp()}
const resetCount = () => { count = 0;renderCounterApp() }
ReactDOM.render(template, document.getElementById("app"))




const renderCounterApp = () => {
  const template =
  <div>
    <h1> Count : {count} </h1>
    <button onClick= {addOne} > + 1 </button>
    <button onClick= {minusOne} > - 1 </button>
    <button onClick= {resetCount} >Reset button</button>
  </div>;

  ReactDOM.render(template, document.getElementById("app"))
}

renderCounterApp();
