import classes from './Input.module.css';

const Input = (props) => {
  const {
    id,
    label,
    type,
    placeholder,
    name,
    handleChange,
    errorMessage,
    isValid,
    value,
    handleBlur
   } = props;

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        className="form-control"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
       {errorMessage && !isValid && <span className={classes.error}>{errorMessage}</span>}
    </div>
  );
};

export default Input;
