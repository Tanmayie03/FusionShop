const Form = ({ formControls, onSubmit, formData, setFormData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedFormData = { ...formData };
    formControls.forEach((control) => {
      const fieldValue = e.target[control.name]?.value || "";
      updatedFormData[control.name] = fieldValue;
    });
    onSubmit(e, updatedFormData);
  };
  return (
    <form onSubmit={handleSubmit} className="w-full ">
      <div className="flex flex-col items-center md:w-full gap-3 ">
        {formControls.map((controlItem) => (
          <div className="grid w-80 md:w-96" key={controlItem.name}>
            <label className="mb-1 font-semibold capitalize text-gray-700">
              {controlItem.label}
            </label>
            {controlItem.componentType === "input" && (
              <input
                id={controlItem.name}
                name={controlItem.name}
                type={controlItem.type}
                placeholder={controlItem.placeholder}
                className="p-2 border border-gray-300 rounded outline-none"
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="px-4 py-2 mt-4 font-semibold text-white bg-gray-700  hover:bg-gray-800">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
