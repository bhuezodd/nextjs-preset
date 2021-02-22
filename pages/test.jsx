import Default from '../layouts/Default'
import UserList from '@/components/UserList'
import Head from 'next/head'
import {useState, useEffect} from 'react'
import axios from 'axios'

const test = () => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({
    name: '',
    email: ''
  });

  useEffect(() => {
    fetchUsers();
  }, [])


  const fetchUsers = async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    setUsers(data);
  }

  // Function
  const handleChange = ({target: {name, value}}) => {
    setUser({
      ...user,
      [name]: value
    })
  }

  const handleAddUser = () => {
    users.push(user)
    setUsers([...users])
  }

  const handleDelete = (i) => {
    users.splice(i, 1)
    setUsers([...users])
  }

  return (
    <>
      <Head>
        <title>Test</title>
      </Head>
      <Default>
        <div className="flex w-full h-16 space-x-4">
          <input type="text" className="h-8 border w-36"
            name="name" value={user.name} onChange={handleChange} />
          <input type="text" className="h-8 border w-36"
            name="email" value={user.email} onChange={handleChange} />
          <button
            onClick={handleAddUser}
            className="w-64 h-8 bg-indigo-300 rounded-lg">
            Agregar
          </button>
        </div>
        <UserList users={users} handleDelete={handleDelete} />
      </Default>
    </>
  )

}

export async function getServerSideProps({req}) {
  console.log(req.headers.cookie)
  return {
    props: {}
  }
}

export default test
