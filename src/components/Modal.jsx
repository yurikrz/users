import {IconSquareRoundedXFilled} from '@tabler/icons-react'

const Modal = ({isShowModal, handleCloseModal, handleSubmit, register, submit, idUserToUpdate, errors}) => {
   
    return (
        <section className={`fixed top-0 bottom-0 left-0 right-0 [background-image:_linear-gradient(#380036,_#0cbaba)] flex justify-center items-center px-3 transition-all duration-300 ${isShowModal ? 'visible opacity-100' : 'invisible opacity-0'} z-10`}>
            <form onSubmit={handleSubmit(submit)} className='p-7 grid gap-3 w-[min(100%,_400px)] relative 
             rounded-xl overflow-hidden bg-[rgba(0,0,0,0.2)] [box-shadwon:_0_15px_20px rgba(0,0,0,0.6)] sm:w-[min(100%,_640px)] '>
                <h2 className='text-center text-2xl font-bold text-[#fff] pb-2 border-b-[1px] border-[silver]'>{idUserToUpdate ? 'Update' : 'Add'} User</h2>
                <button onClick={handleCloseModal} type='button' className='text-[#aa076b]  hover:text-[#61045f] transition-colors absolute top-2 right-2'><IconSquareRoundedXFilled size='30px'/></button>
                
                <div className='grid gap-4 sm:gap-6'>
                    <div className='grid gap-1 sm:grid-cols-[15%_1fr] sm:grid-rows-[repeat(2,autofill)]'>
                        <label className='font-bold text-[#fff] my-1 mx-0 text-[16px]' htmlFor="first_name">First Name</label>
                        <input className='outline-none px-2 py-3 rounded-md h-[40px] border border-[#ccc]' id="first_name" type="text" autoComplete='off' placeholder='Enter First name.'
                        {...register("first_name",{
                            required: {value: true, message: 'Required Input.'}, 
                            maxLength : {value: 25, message: 'Maximun number of Characters allowed is 25.'},
                        })}/>
                        {errors.first_name && (<span className='text-base text-red-500 sm:col-span-2'>{errors.first_name.message}</span>)}
                    </div>
                    
                    <div className='grid gap-1 sm:grid-cols-[15%_1fr] sm:grid-rows-[repeat(2,autofill)]'>
                        <label className='font-bold w-[95%] text-[#fff] my-1 mx-0 text-[16px]' htmlFor="last_name">Last Name</label>
                        <input className='outline-none px-2 py-3 rounded-md h-[40px] border border-[#ccc]' id="last_name" type="text" autoComplete='off' placeholder='Enter Last name.'
                        {...register("last_name",{
                            required: {value: true, message: 'Required Input.'}, 
                            maxLength : {value: 25, message: 'Maximun number of Characters allowed is 25.'},
                        })}/>
                        {errors.last_name && (<span className='text-base text-red-500 sm:col-span-2'>{errors.last_name.message}</span>)}
                    </div>
                    
                    <div className='grid gap-1 sm:grid-cols-[15%_1fr] sm:grid-rows-[repeat(2,autofill)]'>
                        <label className='font-bold w-[95%] text-[#fff] my-1 mx-0 text-[16px]' htmlFor="email">Email</label>
                        <input className='outline-none px-2 py-3 rounded-md h-[40px] border border-[#ccc]' id="email" type="text" autoComplete='off' placeholder='Enter E-mail address.'
                        {...register("email", {
                            required: {value: true, message: 'Required Input.'}, 
                            maxLength : {value: 150, message: 'Maximun number of Characters allowed is 150.'},
                            pattern: {value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message:'Invalid e-mail..'}
                        })}/>
                        {errors.email && (<span className='text-base text-red-500 sm:col-span-2'>{errors.email.message}</span>)}
                    </div>

                    <div className='grid gap-1 sm:grid-cols-[15%_1fr] sm:grid-rows-[repeat(2,autofill)]'>
                        <label className='font-bold w-[95%] text-[#fff] my-1 mx-0 text-[16px]' htmlFor="password">Password</label>
                        <input className='outline-none px-2 py-3 rounded-md h-[40px] border border-[#ccc]' id="password" type="password" autoComplete='off' placeholder='Enter password.'
                        {...register("password", {
                            required: {value: true, message: 'Required Input.'}, 
                            maxLength : {value: 25, message: 'Maximun number of Characters allowed is 25.'},
                        })}/>
                        {errors.password && (<span className='text-base text-red-500 sm:col-span-2'>{errors.password.message}</span>)}
                    </div>

                    <div className='grid gap-1 sm:grid-cols-[15%_1fr] sm:grid-rows-[repeat(2,autofill)]'>
                        <label className='font-bold w-[95%] text-[#fff] my-1 mx-0 text-[16px]' htmlFor="birthday">Birthday</label>
                        <input className='outline-none px-2 py-3 rounded-md h-[40px] border border-[#ccc]' id="birthday" type="date" autoComplete='off' placeholder='Enter your Birthday.'
                        {...register("birthday",{
                            required: {value: true, message: 'Required Input.'}
                        })}/>
                        {errors.birthday && (<span className='text-base text-red-500 sm:col-span-2'>{errors.birthday.message}</span>)}
                    </div>

                    <div className='grid gap-1 sm:grid-cols-[15%_1fr] sm:grid-rows-[repeat(2,autofill)]'>
                        <label className='font-bold w-[95%] text-[#fff] my-1 mx-0 text-[16px]' htmlFor="image_url">Image URL</label>
                        <input className='outline-none px-2 py-3 rounded-md h-[40px] border border-[#ccc]' id="image_url" type="text" autoComplete='off' placeholder='Enter URL Image.'
                        {...register("image_url",{
                            required: {value: true, message: 'Required Input.'}
                        })}/>
                        {errors.image_url && (<span className='text-base text-red-500 sm:col-span-2'>{errors.image_url.message}</span>)}
                    </div>
                </div>
                
                <div className='my-[15px]'>
                    <button className='text-[#fff] border-none p-[10px] block uppercase text-[20px] font-semibold rounded-md w-full mt-[10px] [background-image:linear-gradient(to_right,_#aa076b,_#61045f)] cursor-pointer [transition:_0.3s] hover:[background-image:linear-gradient(to_right,_#61045f,_#aa076b)]' type='submit'>{idUserToUpdate ? 'Update' : 'Add'}</button>
                </div>
            </form>
        </section>
    )
}

export default Modal
