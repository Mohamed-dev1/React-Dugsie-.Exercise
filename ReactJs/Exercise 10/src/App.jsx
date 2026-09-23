import UserList from './UserList';

const App =()=>{
  const users= [{
    id:1,
    name:"moahem",
    email:"mohamed8@gamil.com",

  },
  {
    id:2,
    name:"u.omar",
    email:":omartood@gamil.com",

  },]

  return(
    <>
    <UserList users ={users}/>
    </>
  )
}
export default App
