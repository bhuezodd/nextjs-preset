import Default from "@/layouts/Default"
import {useEffect} from "react"
import {useDispatch, useSelector} from 'react-redux'
import {fetchUserSuccess} from '../redux/actions/UsersAction'

const redux = () => {
  const dispatch = useDispatch()
  const {users} = useSelector(state => state.users)

  useEffect(() => {
    dispatch(fetchUserSuccess());
  }, [])

  return (
    <Default>
      <div>
        {users && users.map((x, i) => {
          return (
            <code key={i}>{x.name}</code>
          )
        })}
      </div>
    </Default>
  )
}

export async function getServerSideProps({req}) {
  console.log(req.headers.cookie)
  return {
    props: {}
  }
}

export default redux
