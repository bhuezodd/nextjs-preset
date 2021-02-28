import Default from "@layouts/Default"
import Input from '@components/Input'
import Button from '@components/Button'
import {useState} from "react"
import {useDispatch} from "react-redux"
import {login} from "redux/actions/AuthAction"

const Login = () => {

  const [options, setOptions] = useState({
    email: '',
    password: '',
  })
  const dispath = useDispatch()
  const changeEmail = ({target: {value}}) => {
    setOptions({
      ...options,
      email: value
    })
  }

  const changePassword = ({target: {value}}) => {
    setOptions({
      ...options,
      password: value
    })
  }

  const handleRegister = (e) => {
    e.preventDefault();
    dispath(login(options))
  }

  return (
    <Default name="Register">
      <div className="flex items-center justify-center h-full">
        <form onSubmit={handleRegister} className="w-1/2 card">
          <h1 className="mb-4 text-2xl font-bold text-indigo-500">
            Login
          </h1>
          <div className="px-2 mb-6">
            <label htmlFor="">Email:</label>
            <Input type="email" value={options.name} onChange={changeEmail} ></Input>
          </div>
          <div className="px-2 mb-6">
            <label htmlFor="">Password:</label>
            <Input type="password" value={options.password} onChange={changePassword} ></Input>
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

export default Login
