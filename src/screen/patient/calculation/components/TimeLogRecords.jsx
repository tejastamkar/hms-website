import moment from "moment";
import { useDataContext } from "../../../../context/DataContext";
import { useGetData } from "../../../../services/store-db.service";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function TimeLogRecords() {
  const { logData, getLogData } = useDataContext();
  const [showData, setShowData] = useState([]);
  const { isLoading } = useGetData();
  const navigate = useNavigate();
  const [totalPages, setTotalPages] = useState(0);
  const dataInEachPage = 5;
  const header = [
    "Sr No.",
    "Time",
    "Date",
    "Heart Rate",
    "SpO2",
    "BP",
    "Acetone",
    "Activity",
    "Humidity",
    "Weather",
    "Temperature",
  ];
  const [active, setActive] = useState(1);
  useEffect(() => {
    setShowData(logData.slice((active - 1) * dataInEachPage, active * dataInEachPage));
  }, [active, logData]);
  useEffect(() => {
    const totalPages = Math.ceil(logData.length / dataInEachPage);
    setTotalPages(totalPages);
  }, [logData]);
  const next = () => {
    if (active === 10) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };
  return (
    <div className="p-10 mt-10 w-full">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl my-5">Monitoring History</h2>

        <button
          onClick={() => {
            getLogData();

            navigate("/patient/calculation");
          }}
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
            {showData.map((item, index) => (
              <tr key={index} className="text-center w-full text-lg">
                <th className="">{index + 1}</th>
                <td>{moment(item.dateTime).format("hh:mm A")}</td>
                <td>{moment(item.dateTime).format("DD-MM-YYYY")}</td>
                <td>{item.heartRate}</td>
                <td>{item.spo2}</td>
                <td>{item.acetone}</td>
                <td>{item.activity ? "Yes" : "No"}</td>
                <td>
                  {item.systolic} | {item.diastolic}
                </td>
                <td>{item.humidity}</td>
                <td>{item.weather}</td>
                <td>{item.temperature}</td>
              </tr>
            ))}
            {isLoading &&
              [1, 2, 3, 4, 5].map((_, index) => (
                <tr key={index} className="text-center  w-full  ">
                  {header.map((_, index) => (
                    <td className="mx-auto" key={index}>
                      <div className="skeleton bg-slate-300 h-6 w-10 mx-auto" />
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
        {!isLoading && (
          <div className="flex items-center gap-8 justify-center">
            <IconButton
              size="sm"
              variant="outlined"
              onClick={prev}
              disabled={active === 1}
            >
              <FaArrowLeftLong strokeWidth={2} className="h-4 w-4" />
            </IconButton>
            <Typography color="gray" className="font-normal">
              Page <strong className="text-gray-900">{active}</strong> of{" "}
              <strong className="text-gray-900">{totalPages}</strong>
            </Typography>
            <IconButton
              size="sm"
              variant="outlined"
              onClick={next}
              disabled={active === totalPages}
            >
              <FaArrowRightLong strokeWidth={2} className="h-4 w-4" />
            </IconButton>
          </div>
        )}
      </div>
    </div>
  );
}
