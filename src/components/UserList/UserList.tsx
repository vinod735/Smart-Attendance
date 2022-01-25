import { useUserListQuery } from '../../graphql'
// https://blog.logrocket.com/crud-react-graphql-examples/

const UserList = () => {
  const { data, loading } = useUserListQuery()
  console.log(data, "this is just for testing");

  return (
    <div>
      <h1 className="text-1xl font-bold underline">
        Hello world!
      </h1>
      {loading ? "Loading" : "User List"}
    </div>
  )
}

export default UserList
