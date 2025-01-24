import { Form, Formik } from "formik"
import CustomInput from "./CustomInput"
import { advancedSchema } from "../schemas"
import CustomSelect from "./CustomSelect"
import CustomCheckbox from "./CustomCheckBox"

const AdvancedForm =  () => {
  const onSubmit = async (values, actions) => {
    await new Promise((r) => setTimeout(r, 1000));
    actions.resetForm()
  }
  return (
    <Formik initialValues={{ username: "", jobType: "", acceptedTos: false }} validationSchema={advancedSchema} onSubmit={onSubmit} >
      {({isSubmitting}) => (
        <Form>
          <CustomInput
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
          />
          <CustomSelect label="Job Type" name="jobType" placeholder="Please select a job">
          <option value="">Please select a job type</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Product Manager</option>
          <option value="other">Other</option>
          </CustomSelect>
          <CustomCheckbox type="checkbox" name="acceptedTos"/>
          <button disabled={isSubmitting} type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default AdvancedForm
