import ListGroup from "./Components/ListGroup"


function App(){
  let items = ["New York", "Colombo", "London", "Paris", "Tokyo"];

  return <div><ListGroup items={items} heading = "Cities"/></div>;

}

export default App;