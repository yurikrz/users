import { IconEditCircle, IconTrash } from '@tabler/icons-react'

const User = ({userInfo, deleteUser,handleClickUpdate}) => {
  console.log(userInfo.image_url)
  return (
    <article className='relative w-[300px] h-[400px] bg-[#fff] rounded-2xl overflow-hidden [transition:_0.5s] hover:[box-shadow:_0_5px_15px_rgba(3,89,92,0.5)] hover:translate-y-[15px]'>
    
      <div className='h-[125px] w-full relative'>
        <div className='absolute w-[300px] h-[300px] rounded-full [background-image:linear-gradient(to_top,#5ee7df_0%,#b490ca_100%)] bottom-0'></div>
        <div className='w-[150px] h-[150px] absolute bg-[#fff] p-1 rounded-full bottom-[-30%] left-[50%] -translate-x-1/2'>
          <img src={userInfo.image_url} alt='foto' className='w-full h-full rounded-full object-cover'/>
        </div>
      </div>
      
      <div className='h-[200px] p-[20px] pt-[40px] border-b-[rgba(6,74,76,0.18)] border-b-[1px] text-center '>
        <h3 className='text-black font-bold text-xl mb-2'>{userInfo.first_name} {userInfo.last_name}</h3>
        <ul className='text-black font-semibold text-l'>
          <li><span className='text-[#aa076b]'>Email: </span>{userInfo.email}</li>
          <li><span className='text-[#aa076b]'>Password: </span>{userInfo.password}</li>
          <li><span className='text-[#aa076b]'>Birthday: </span>{userInfo.birthday}</li>
        </ul>
      </div>
        
      <div className='w-full h-[75px] flex justify-center items-center gap-2'>
          <button className='flex gap-1 h-[45px] justify-center items-center [text-decoration:_none] text-white p-1 rounded-md py-[5px] px-[20px] [background-image:linear-gradient(to_right,_#aa076b,_#61045f)] cursor-pointer [transition:_0.3s] hover:[background-image:linear-gradient(to_right,_#61045f,_#aa076b)]' onClick={()=>handleClickUpdate(userInfo)} ><IconEditCircle/>Update</button>
          <button className='flex gap-1 h-[45px] justify-center items-center [text-decoration:_none] text-white p-1 rounded-md py-[5px] px-[20px] [background-image:linear-gradient(to_right,_#aa076b,_#61045f)] cursor-pointer [transition:_0.3s] hover:[background-image:linear-gradient(to_right,_#61045f,_#aa076b)]' onClick={()=>deleteUser(userInfo)} ><IconTrash/>Delete</button>
      </div>
    </article>
  )
}

export default User
