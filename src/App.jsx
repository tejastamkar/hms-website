import HomePage from "./screen/HomePage";
import { DataProvider } from "./context/DataContext";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <DataProvider>
        <HomePage />
      </DataProvider>
      <ToastContainer />
    </>
  );
}

export default App;
