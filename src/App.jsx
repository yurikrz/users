import { useEffect } from 'react'
import './App.css'
import { BASE_URL, EMPTY_FORM_VALUES } from './constants/users'
import { useState } from 'react'
import Modal from './components/Modal'
import axios from 'axios'
import Header from './components/Header'
import { useForm } from 'react-hook-form'
import UserList from './components/UserList'
import swal from 'sweetalert'

function App() {
  const [isShowModal,setIsShowModal] = useState(false)
  const [idUserToUpdate,setIdUserToUpdate] = useState(null)
  const [users,setUsers] = useState([])
  const {handleSubmit, register, reset, formState: {errors}} = useForm()

  const submit = (data) => {
    idUserToUpdate ? updateUser(data) : createUser(data)
  }

  const handleOpenModal = () => {
    setIsShowModal(true)
  }

  const handleCloseModal = () =>{
    setIsShowModal(false)
    reset(EMPTY_FORM_VALUES)
    setIdUserToUpdate(null)
  }


  const createUser = (data) => {
    axios
      .post(`${BASE_URL}/users/`,data)
      .then(() => {
        swal({
          title: 'Add User',
          text:  'User ' + data.first_name + ' ' + data.last_name + ' was added successfully',
          icon: 'success',
          button: 'Acept'
        })
        handleCloseModal()
        getAllUser()
      })
      .catch((err) => console.log(err))
  }

  const deleteUser = (data) => {
    swal({
      title: 'Delete User',
      text:  'Are you sure you want to delete this user?',
      icon: 'warning',
      buttons: ['Cancel','Delete']
    }).then(response =>{
      if (response){
        axios
        .delete(`${BASE_URL}/users/${data.id}/`)
        .then(() => {
          swal({
            title: 'Delete User',
            text:  'User ' + data.first_name + ' ' + data.last_name + ' was deleted successfully',
            icon: 'success',
            button: 'Acept'
          })
          getAllUser()
        })
        .catch((err) => console.log(err))
      }
    })
  }

  const updateUser = (data) => {
    axios
      .put(`${BASE_URL}/users/${idUserToUpdate}/`,data)
      .then(() => {
        swal({
          title: 'Update User',
          text:  'User ' + data.first_name + ' ' + data.last_name + ' was updated successfully',
          icon: 'success',
          button: 'Acept'
        })
        getAllUser()
        handleCloseModal()
      })
      .catch((err) => console.log(err))
  }

  const getAllUser = () => {
    axios
      .get(BASE_URL + '/users/')
      .then(({data}) => setUsers(data))
      .catch((err) => console.log(err))
  }

  const handleClickUpdate = (carToUpdate) =>{
    handleOpenModal()
    reset(carToUpdate)
    setIdUserToUpdate(carToUpdate.id)
  }

  useEffect(()=>{
    getAllUser()
  },[])

  return (
    <main className='min-h-screen [background-image:linear-gradient(to_top,#fff1eb_0%,#ace0f9_100%)]'>
      <Header handleOpenModal={handleOpenModal}/>
      <Modal isShowModal={isShowModal} handleCloseModal={handleCloseModal} handleSubmit={handleSubmit} register={register} submit={submit} idUserToUpdate={idUserToUpdate} errors={errors}/>
      <UserList users={users} deleteUser={deleteUser} handleClickUpdate={handleClickUpdate}/>
    </main>
  )
}

export default App
