import { Button } from "@camome/core/Button";
import { Switch } from "@camome/core/Switch";

import "./App.css";

function App() {
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <Button>Rounded</Button>
      <Switch on="ON" off="OFF" />
    </div>
  );
}

export default App;
