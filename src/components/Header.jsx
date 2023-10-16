
const Header = ({handleOpenModal}) => {
  return (
    <header className='flex justify-between p-2 bg-[#44afa8b2] mb-5'>
        <h1 className='text-3xl font-bold text-[#fff]'>USERS</h1>
        <button onClick={handleOpenModal} className=' text-white p-2 px-4 uppercase font-semibold rounded-sm [background-image:linear-gradient(to_right,_#aa076b,_#61045f)] cursor-pointer [transition:_0.3s] hover:[background-image:linear-gradient(to_right,_#61045f,_#aa076b)] transition-colors'>Add Users</button>
    </header>
  )
}

export default Header
