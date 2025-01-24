import { useField } from "formik";

const CustomCheckbox = ({ label  , ...props}) => {
        const [field, meta ] = useField(props);
    return (
        <>
            <div className="checkbox">
            <input {...props} {...field} className={meta.touched && meta.error ? "input-error" : ""} />
            <span>I accept terms of services</span>
            </div>
            {meta.touched && meta.error ? <span className="error">{meta.error}</span> : null}

        </>
    );
};

export default CustomCheckbox;
