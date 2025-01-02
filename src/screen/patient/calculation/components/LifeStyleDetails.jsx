import PropTypes from "prop-types";

export default function LifeStyleDetails({ lifeStyleData, handleChange }) {
  const optionsData = ["Low", "Modern", "High"];

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-left my-10">Clinical Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="label">
            <span className="label-text font-bold text-xl">Smoking</span>
          </label>
          <select
            name="smoking"
            value={lifeStyleData.smoking}
            onChange={handleChange}
            className="bg-gray-100 rounded-md p-3 text-lg"
          >
            <option value="">Select an option</option>
            {optionsData.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="label">
            <span className="label-text font-bold text-xl">Drinking</span>
          </label>
          <select
            name="drinking"
            value={lifeStyleData.drinking}
            onChange={handleChange}
            className="bg-gray-100 rounded-md p-3 text-lg"
          >
            <option value="">Select an option</option>
            {optionsData.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="label">
            <span className="label-text font-bold text-xl">Sleep Pattern</span>
          </label>
          <select
            name="sleepPattern"
            value={lifeStyleData.sleepPattern}
            onChange={handleChange}
            className="bg-gray-100 rounded-md p-3 text-lg"
          >
            <option value="">Select an option</option>
            {optionsData.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="label">
            <span className="label-text font-bold text-xl">
              Physical Activity
            </span>
          </label>
          <select
            name="physicalActivity"
            value={lifeStyleData.physicalActivity}
            onChange={handleChange}
            className="bg-gray-100 rounded-md p-3 text-lg"
          >
            <option value="">Select an option</option>
            {optionsData.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

LifeStyleDetails.propTypes = {
  lifeStyleData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};
