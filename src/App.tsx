import Button from "./Components/Button";
import Alert from "./Components/Button";

function App() {
  return (
    <div>
      <Button  onClick={() => console.log("Clicked")}>
        Akindu <span>made a button!</span>
      </Button>
    </div>
  );
}

export default App;
