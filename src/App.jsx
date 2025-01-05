import { DataProvider } from "./context/DataContext";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CalculationPage from "./screen/patient/calculation/CalculationPage";
import LoginPage from "./screen/Auth/Login";
import SignUpPage from "./screen/Auth/Signup";
import { UserProvider } from "./context/userContext";
import DoctorDashboard from "./screen/doctor/dashboard";
import AdminDashboard from "./screen/admin/dashboard";
import PatientDashboard from "./screen/patient/dashboard";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <DataProvider>
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/patient/dashboard" element={<PatientDashboard />} />
              <Route
                path="/patient/calculation/:test"
                element={<CalculationPage />}
              />
              <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/login" element={<LoginPage />} />

              <Route path="/signup" element={<SignUpPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <ToastContainer />
        </UserProvider>
      </DataProvider>
    </>
  );
}

export default App;
