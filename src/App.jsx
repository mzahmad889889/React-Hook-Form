import { useForm } from "react-hook-form"
import "./App.css"

export default function App() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)


  return (
    <>
    <h1>Form of React-Hook</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input placeholder="First Name" {...register("firstName", { required: true, maxLength: 20 })} />
      <label>Last Name</label>
      <input placeholder="Last Name" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <label>Age</label>
      <input placeholder="18-99" type="number" {...register("age", { min: 18, max: 99 })} />
      <select {...register("gender")}>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Other">Other</option>
      </select>
      <input type="submit" />
    </form>
    </>
  )
}