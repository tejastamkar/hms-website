import Monitor from "../../components/Monitor";
import Navbar from "../../components/navbar";
import { useGetDeviceData } from "../../services/realtime-db.service";
import TimeLogRecords from "./calculation/components/TimeLogRecords";
import VisualMonitor from "./calculation/components/VisualMonitor";

export default function PatientDashboard() {
  const { isLoading } = useGetDeviceData();

  return (
    <div>
      <Navbar />
      {isLoading ? (
        <>
          <div className="min-h-screen flex items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        </>
      ) : (
        <Monitor />
      )}
      <TimeLogRecords />
      <VisualMonitor />
    </div>
  );
}
