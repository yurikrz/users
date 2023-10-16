import User from './User'

const UserList = ({users,deleteUser,handleClickUpdate}) => {
  return (
    <section className='grid grid-cols-[repeat(auto-fit,_300px)] justify-center gap-4 max-w-[1000px] mx-auto' >
      {
        users.map(user => <User key={user.id} userInfo={user} deleteUser={deleteUser} handleClickUpdate={handleClickUpdate}/>)
      }
    </section>
  )
}

export default UserList
