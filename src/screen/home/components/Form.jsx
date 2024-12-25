import { useState } from "react";

export default function Form() {
  const [data, setData] = useState({
    pregnancies: "",
    glucose: "",
    bloodPressure: "",
    skinThickness: "",
    insulin: "",
    bmi: "",
    diabetesPedigreeFunction: "",
    age: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const clearForm = () => setData({
    pregnancies: "",
    glucose: "",
    bloodPressure: "",
    skinThickness: "",
    insulin: "",
    bmi: "",
    diabetesPedigreeFunction: "",
    age: "",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  return (
    <div className="card bg-base-100  shadow-xl mx-auto mt-10 p-10 rounded-md w-full">
      <h2 className="font-bold mx-auto text-center text-3xl mt-3  mb-10">
        Diabetes Prediction using Machine Learning
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col gap-2">
            <label className="label">
              <span className="label-text font-bold text-xl">
                Number of Pregnancies
              </span>
            </label>
            <input
              type="number"
              name="pregnancies"
              value={data.pregnancies}
              onChange={handleChange}
              className="bg-gray-100 rounded-md p-3 text-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="label">
              <span className="label-text font-bold text-xl">
                Glucose Level
              </span>
            </label>
            <input
              type="number"
              name="glucose"
              value={data.glucose}
              onChange={handleChange}
              className="bg-gray-100 rounded-md p-3 text-lg"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="label">
              <span className="label-text font-bold text-xl">
                BloodPressure Value
              </span>
            </label>
            <input
              type="number"
              name="bloodPressure"
              value={data.bloodPressure}
              onChange={handleChange}
              className="bg-gray-100 rounded-md p-3 text-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="label">
              <span className="label-text font-bold text-xl">
                SkinThickness Value
              </span>
            </label>
            <input
              type="number"
              name="skinThickness"
              value={data.skinThickness}
              onChange={handleChange}
              className="bg-gray-100 rounded-md p-3 text-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="label">
              <span className="label-text font-bold text-xl">
                Insulin Value
              </span>
            </label>
            <input
              type="number"
              name="insulin"
              value={data.insulin}
              onChange={handleChange}
              className="bg-gray-100 rounded-md p-3 text-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="label">
              <span className="label-text font-bold text-xl">BMI Value</span>
            </label>
            <input
              type="number"
              step="0.1"
              name="bmi"
              value={data.bmi}
              onChange={handleChange}
              className="bg-gray-100 rounded-md p-3 text-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="label">
              <span className="label-text font-bold text-xl">
                DiabetesPedigreeFunction Value
              </span>
            </label>
            <input
              type="number"
              name="diabetesPedigreeFunction"
              value={data.diabetesPedigreeFunction}
              onChange={handleChange}
              className="bg-gray-100 rounded-md p-3 text-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="label">
              <span className="label-text font-bold text-xl">Age</span>
            </label>
            <input
              type="number"
              name="age"
              value={data.age}
              onChange={handleChange}
              className="bg-gray-100 rounded-md p-3 text-lg"
            />
          </div>
        </div>
        <div className="flex justify-center mt-3 gap-10">
          <button
            type="button"
            onClick={clearForm}
            className=" px-10 py-4 w-full mx-10 h-fit text-white bg-[#FF6384] rounded-md shadow-md hover:bg-[#FF99CC] text-xl "
          >
            Clear
          </button>
          <button
            type="submit"
            className="text-xl px-10 py-4 w-full mx-10 h-fit text-white bg-[#FF6384] rounded-md shadow-md hover:bg-blue-600   "
          >
            Diabetes Test Result
          </button>
        </div>
      </form>
    </div>
  );
}
