import moment from "moment";
import { useDataContext } from "../../../context/DataContext";
import { useGetData } from "../../../services/store-db.service";

export default function TimeLogRecords() {
  const { logData, getLogData } = useDataContext();
  const { isLoading } = useGetData();
  const header = [
    "Sr No.",
    "Time",
    "Date",
    "Heart Rate",
    "SpO2",
    "BP",
    "Acetone",
    // "Cholesterol",
    "Temperature",
  ];

  return (
    <div className="p-10 mt-10 w-full">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl my-5">Monitoring History</h2>

        <button
          onClick={() => getLogData()}
          className=" px-10 py-2 w-fit h-fit text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600  text-lg "
        >
          Log Data
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full border-separate border-spacing-y-2">
          <thead>
            <tr>
              {header.map((item, index) => (
                <th className="text-center text-lg" key={index}>
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-center">
            {logData.map((item, index) => (
              <tr key={index} className="text-center w-full text-lg">
                <th className="">{index + 1}</th>
                <td>{moment(item.dateTime).format("hh:mm A")}</td>
                <td>{moment(item.dateTime).format("DD-MM-YYYY")}</td>
                <td>{item.acetone}</td>
                <td>{item.bp}</td>
                <td>{item.heartRate}</td>
                <td>{item.sp2}</td>
                <td>{item.temperature}</td>
              </tr>
            ))}
            {isLoading &&
              [1, 2, 3, 4, 5].map((_, index) => (
                <tr key={index} className="text-center">
                  <td>
                    <div className="skeleton bg-slate-300 h-6 w-10" />
                  </td>
                  <td>
                    <div className="skeleton bg-slate-300 h-6 w-14" />
                  </td>
                  <td>
                    <div className="skeleton bg-slate-300 h-6 w-14" />
                  </td>
                  <td>
                    <div className="skeleton bg-slate-300 h-6 w-14" />
                  </td>
                  <td>
                    <div className="skeleton bg-slate-300 h-6 w-14" />
                  </td>
                  <td>
                    <div className="skeleton bg-slate-300 h-6 w-14" />
                  </td>
                  <td>
                    <div className="skeleton bg-slate-300 h-6 w-14" />
                  </td>
                  <td>
                    <div className="skeleton bg-slate-300 h-6 w-14" />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
