import Monitor from "../../components/Monitor";
import Navbar from "../../components/navbar";
import { useGetDeviceData } from "../../services/realtime-db.service";
import TimeLogRecords from "./calculation/components/TimeLogRecords";
import VisualMonitor from "./calculation/components/VisualMonitor";

/**
 * The patient dashboard component
 * @returns {React.ReactElement} The patient dashboard component.
 */
export default function PatientDashboard() {
  /**
   * The state of the device data loading. If true, the data is being loaded.
   * If false, the data has finished loading.
   */
  const { isLoading } = useGetDeviceData();

  return (
    <div>
      {/* Renders the navbar component */}
      <Navbar />

      {/* If the device data is being loaded, render a loading spinner */}
      {isLoading ? (
        <>
          <div className="min-h-screen flex items-center justify-center">
            {/* A loading spinner component */}
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        </>
      ) : (
        <>
          {/* If the device data is not being loaded, render the monitor component */}
          <Monitor />
          {/* Renders the time log records component */}
          <TimeLogRecords />
          {/* Renders the visual monitor component */}
          <VisualMonitor />
        </>
      )}
    </div>
  );
}
