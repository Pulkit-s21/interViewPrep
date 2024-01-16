import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchUsers } from "../features/user/userSlice"

export const UserView = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div>
      <h2>List of Users</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error && <div>Error... {user.error}</div>}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user) => {
            return <li key={user.id}>{user.name}</li>
          })}
        </ul>
      ) : null}
    </div>
  )
}
