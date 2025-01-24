import { useField } from "formik";

const CustomSelect = ({ label  , ...props}) => {
        const [field, meta ] = useField(props);
    return (
        <>
            <label>{label}</label>
            <select {...props} {...field} className={meta.touched && meta.error ? "input-error" : ""} />
            {meta.touched && meta.error ? <span className="error">{meta.error}</span> : null}
        </>
    );
};

export default CustomSelect;
