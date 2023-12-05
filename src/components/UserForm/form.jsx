// Form.jsx


function Form({ name, value, onChange }) {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default Form;