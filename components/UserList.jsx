import {useEffect} from "react"

const UserList = ({users, handleDelete}) => {
    useEffect(() => {
        console.log('Rendering')
    }, [users])
    useEffect(() => {
        console.log('First rendering')
    }, [])

    return (
        <div className="flex flex-wrap w-full mt-6">
            {
                users.map((user, i) =>
                (
                    <div key={i} className="w-3/12 p-4">
                        <div className="flex items-center justify-between w-full h-16 px-4 border rounded-lg shadow">
                            {user.name}
                            <button className="px-4 py-2 text-white bg-red-500 rounded-lg" onClick={() => handleDelete(i)}>
                                delete
                  </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default UserList
