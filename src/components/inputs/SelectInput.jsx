const SelectInput = ({ label, name, value, onChange, options }) => {
  return (
    <div className='mb-4'>
      <label htmlFor={name} className='block font-semibold'>
        {label}
      </label>
      <select
        name={name}
        className='w-full p-2 border rounded-lg'
        value={value}
        onChange={onChange}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;
