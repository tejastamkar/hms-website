import { useNavigate } from "react-router";
import Form from "./components/Form";

export default function CalculationPage() {
  const navigate = useNavigate();

  return (
    <div className="p-10">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => navigate(-1)}
      >
        Back
      </button>

      <Form />
    </div>
  );
}
