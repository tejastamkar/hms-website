import Monitor from "./home/components/Monitor";
import TimeLogRecords from "./home/components/TimeLogRecords";
import VisualMonitor from "./home/components/VisualMonitor";
import { useGetDeviceData } from "../services/realtime-db.service";
import Form from "./home/components/Form";

export default function HomePage() {
  const { isLoading } = useGetDeviceData();

  return (
    <>
      <h1 className="text-6xl font-bold text-center my-10">
        Welcome to SMART-CARE
      </h1>
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
      <Form />
    </>
  );
}
