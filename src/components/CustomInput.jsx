import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
    const [field, meta ] = useField(props);
    console.log("field",field)
    console.log("meta",meta)
    return (
      <>
          <label>{label}</label>
            <input {...props} {...field} className={meta.touched && meta.error ? "input-error" : ""} />
            {meta.touched && meta.error ? <span className="error">{meta.error}</span> : null}
      </>
  )
}

export default CustomInput