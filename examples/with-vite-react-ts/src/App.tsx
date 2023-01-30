import { Button } from "@camome/core/Button";
import { Switch } from "@camome/core/Switch";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Button>Rounded</Button>
      <Switch />
    </div>
  );
}

export default App;
