import "./App.css";
import "./theme.css";
// Default theme: import "@camome/system/theme.css"
import { Button } from "@camome/core/Button";
import { Switch } from "@camome/core/Switch";

function App() {
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <Button>Rounded</Button>
      <Switch on="ON" off="OFF" />
    </div>
  );
}

export default App;
