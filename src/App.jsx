import HomePage from "./screen/HomePage";
import { DataProvider } from "./context/DataContext";
function App() {
  return (
    <>
      <DataProvider>
        <HomePage />
      </DataProvider>
    </>
  );
}

export default App;
