import Default from "@layouts/Default"
import Input from '@components/Input'
import Button from '@components/Button'
import {useState} from "react"
import {useDispatch} from "react-redux"
import {register} from "redux/actions/AuthAction"

const Register = () => {

  const [options, setOptions] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })
  const dispath = useDispatch()

  const handleRegister = (e) => {
    e.preventDefault();
    dispath(register(options))
  }

  return (
    <Default name="Register">
      <div className="flex items-center justify-center h-full">
        <form onSubmit={handleRegister} className="w-1/2 card">
          <h1 className="mb-4 text-2xl font-bold text-indigo-500">
            Register
          </h1>
          <div className="px-2 mb-6">
            <label htmlFor="">Full Name:</label>
            <Input value={options.name} onChange={({target: {value}}) => setOptions({name: value})} />
          </div>
          <div className="px-2 mb-6">
            <label htmlFor="">Email:</label>
            <Input></Input>
          </div>
          <div className="px-2 mb-6">
            <label htmlFor="">Password:</label>
            <Input></Input>
          </div>
          <div className="px-2 mb-6">
            <label htmlFor="">Password Confirmation:</label>
            <Input></Input>
          </div>
          <div className="flex justify-center mt-4">
            <Button>
              Register
            </Button>
          </div>
        </form>
      </div>
    </Default>
  )
}

export default Register
