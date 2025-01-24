import {useFormik} from 'formik'
import { basicSchema } from '../schemas'
const BasicForm = () => {
  const onSubmit = async(values , actions) => {
    console.log(values )
    console.log(actions)
    await new Promise((r) => setTimeout(r, 1000));
    actions.resetForm()
  }
    const {values ,errors,handleBlur,handleChange ,isSubmitting, handleSubmit , touched} = useFormik({
        initialValues: {
        email: '',
        age: '',
        password: '',
        confirmPassword: '',
      },
      validationSchema: basicSchema,
      onSubmit,
    })
  console.log(errors)
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      
      <label htmlFor="email">Email</label>
      <input value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" id="email" placeholder="Enter your email" className={errors.email && touched.email ? "input-error" : ""} />    
      {errors.email && touched.email && <span className="error">{errors.email}</span>}
      
          <label htmlFor="age">Age</label>
      <input className={errors.age && touched.age? "input-error" : ""} value={values.age} onChange={handleChange} onBlur={handleBlur} type="number" id="age" placeholder="Enter your age" />   
      {errors.age && touched.age && <span className="error">{errors.age}</span>}

          <label htmlFor="password">Password</label>
      <input className={errors.password && touched.password? "input-error" : ""} value={values.password} onChange={handleChange} onBlur={handleBlur} type="password" id="password" placeholder="Enter your password" />  
      {errors.password && touched.password && <span className="error">{errors.password}</span>}

          <label htmlFor="confirmPassword">Confirm Password</label>
      <input className={errors.confirmPassword && touched.confirmPassword? "input-error" : ""} value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} type="password" id="confirmPassword" placeholder="Confirm Password" />  
      {errors.confirmPassword && touched.confirmPassword && <span className="error">{errors.confirmPassword}</span>}

      <button disabled={isSubmitting} type='submit'>Submit</button>
     
    </form>
  )
}

export default BasicForm
