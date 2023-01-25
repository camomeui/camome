import { Button } from "@camome/core/Button";
import { Switch } from "@camome/core/Switch";

// Default theme: import "@camome/system/dist/theme.css"
import "./theme.css";
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
