import { IconSquareRoundedXFilled } from "@tabler/icons-react"

const InfoMenssage = ({setIsShowInfoMenssage,isShowInfoMenssage,InfoMenssageData}) => {
  return (
    <section className={`w-[420px] h-[200px] fixed bg-[#fff] bottom-[50%] left-[50%] -translate-x-1/2 z-10 rounded-md border-[rgba(6,74,76,0.18)] border transition-all duration-300 ${isShowInfoMenssage ? 'visible opacity-100' : 'invisible opacity-0'}`} >
        <h3 className="text-[32px] text-[#0F0F2D] font-bold text-center py-4">{InfoMenssageData.title}</h3>
        <button onClick={()=>setIsShowInfoMenssage(false)} type='button' className='text-[#aa076b]  hover:text-[#61045f] transition-colors absolute top-[-8px] right-[-8px]'><IconSquareRoundedXFilled size='30px'/></button>
        <p className="text-[16px] text-[#0F0F2D] font-normal text-center py-4">The user <span className="font-bold ">{InfoMenssageData.fullName}</span> {InfoMenssageData.message}</p>
        <button className='block mx-auto h-[45px] [text-decoration:_none] text-white p-1 rounded-md py-[5px] px-[20px] [background-image:linear-gradient(to_right,_#aa076b,_#61045f)] cursor-pointer [transition:_0.3s] hover:[background-image:linear-gradient(to_right,_#61045f,_#aa076b)]' onClick={()=>setIsShowInfoMenssage(false)}>Aceptar</button>
    </section>
  )
}

export default InfoMenssage
