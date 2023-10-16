import { IconSquareRoundedXFilled } from "@tabler/icons-react"

const WarningMenssage = ({setIsShowWarningMenssage,isShowWarningMenssage,setWarningMenssageResult}) => {
  const handleClick = (status)=>{
    setWarningMenssageResult(status)
    setIsShowWarningMenssage(false)
  }

  return (
    <section className={`fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center px-3 transition-all duration-300 ${isShowWarningMenssage ? 'visible opacity-95' : 'invisible opacity-0'} z-20 [background-image:linear-gradient(to_top,#fff1eb_0%,#ace0f9_100%)]`} >
        <div className='w-[420px] h-[200px] rounded-md border-[rgba(6,74,76,0.18)] border relative bg-[#fff]'>
          <h3 className="text-[32px] text-[#0F0F2D] font-bold text-center py-4">Are you sure you want to delete this user?</h3>
          <button onClick={()=>handleClick(false)} type='button' className='text-[#aa076b]  hover:text-[#61045f] transition-colors absolute top-[-8px] right-[-8px]'><IconSquareRoundedXFilled size='30px'/></button>
          <div className="flex gap-2">
            <button className='block mx-auto h-[45px] [text-decoration:_none] text-white p-1 rounded-md py-[5px] px-[20px] [background-image:linear-gradient(to_right,_#aa076b,_#61045f)] cursor-pointer [transition:_0.3s] hover:[background-image:linear-gradient(to_right,_#61045f,_#aa076b)]' onClick={()=> handleClick(false)}>Cancel</button>
            <button className='block mx-auto h-[45px] [text-decoration:_none] text-white p-1 rounded-md py-[5px] px-[20px] [background-image:linear-gradient(to_right,_#aa076b,_#61045f)] cursor-pointer [transition:_0.3s] hover:[background-image:linear-gradient(to_right,_#61045f,_#aa076b)]' onClick={()=>handleClick(true)}>Delete</button>
          </div>
        </div>
    </section>
  )
}

export default WarningMenssage
