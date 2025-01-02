import { useState } from "react";
import { useDataContext } from "../../../../context/DataContext";
import LiveDetails from "./LiveDetails";
import PersonalDetails from "./PersonalDetails";
import ClinicalDetails from "./ClinicalDetails";
import LifeStyleDetails from "./LifeStyleDetails";
import { storeData } from "../../../../services/store-db.service";
import { useNavigate } from "react-router";

export default function Form() {
  const { calcData  ,refreshLog} = useDataContext();
  const navigate = useNavigate();
  const [personalDetailsData, setPersonalDetailsData] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    bmi: "",
    pregnancies: "",
    familyHistory: "",
  });

  const [clinicalData, setClinicalData] = useState({
    fastingSugar: "",
    ppSugar: "",
    familyHistory: "",
    insulin: "",
    skinThickness: "",
  });

  const [lifeStyleData, setLifeStyleData] = useState({
    smoking: "",
    drinking: "",
    sleepPattern: "",
    physicalActivity: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const allData = {
      ...personalDetailsData,
      ...clinicalData,
      ...lifeStyleData,
      ...calcData,
    };
    await storeData({ data: allData });
    clearForm();
    refreshLog();
    navigate(-1);
  };

  const clearForm = () => {
    setPersonalDetailsData({
      age: 0,
      gender: "",
      height: 0,
      weight: 0,
      bmi: 0,
      pregnancies: 0,
      familyHistory: "",
    });
    setClinicalData({
      fastingSugar: "",
      ppSugar: "",
      familyHistory: "",
      insulin: "",
      skinThickness: "",
    });
    setLifeStyleData({
      smoking: "",
      drinking: "",
      sleepPattern: "",
      physicalActivity: "",
    });
  };

  const handlePersonalDetailsChange = (e) => {
    setPersonalDetailsData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (e.target.name == "gender" && e.target.value == "Male") {
      setPersonalDetailsData((prev) => ({
        ...prev,
        pregnancies: 0,
      }));
    }
  };
  const handleClinicalDataChange = (e) =>
    setClinicalData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  const HandleLifeStyleDataChange = (e) =>
    setLifeStyleData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  const handleBMI = () => {
    const height = personalDetailsData.height
      ? parseFloat(personalDetailsData.height) / 100
      : 0;
    const weight = personalDetailsData.weight
      ? parseFloat(personalDetailsData.weight)
      : 0;
    const bmi = weight / (height * height);
    setPersonalDetailsData((prev) => ({
      ...prev,
      bmi: bmi.toFixed(2),
    }));
  };
  return (
    <div className="card bg-base-100  shadow-xl mx-auto mt-10 p-10 rounded-md w-full">
      <h2 className="font-bold mx-auto text-center text-3xl mt-3  mb-10">
        Diabetes Prediction using Machine Learning
      </h2>
      <form onSubmit={handleSubmit}>
        <PersonalDetails
          handleBMI={handleBMI}
          personalDetailsData={personalDetailsData}
          handleChange={handlePersonalDetailsChange}
        />
        <LiveDetails calcData={calcData} />
        <ClinicalDetails
          clinicalData={clinicalData}
          handleChange={handleClinicalDataChange}
        />
        <LifeStyleDetails
          lifeStyleData={lifeStyleData}
          handleChange={HandleLifeStyleDataChange}
        />
        <div className="flex flex-col md:flex-row mx-auto justify-center mt-7 gap-10">
          <button
            type="button"
            onClick={clearForm}
            className=" px-10 py-4 w-full  h-fit text-white bg-[#FF6384] rounded-md shadow-md hover:bg-[#FF99CC] text-xl "
          >
            Clear
          </button>
          <button
            type="submit"
            className="text-xl px-10 py-4 w-full h-fit text-white bg-[#FF6384] rounded-md shadow-md hover:bg-blue-600   "
          >
            Diabetes Test Result
          </button>
        </div>
      </form>
    </div>
  );
}
