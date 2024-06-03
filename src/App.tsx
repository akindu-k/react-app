import Button from "./Components/Button";
import Alert from "./Components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
      <Button onClick={() => setAlertVisibility(true)}>
        Akindu <span>made a button!</span>
      </Button>
    </div>
  );
}

export default App;
