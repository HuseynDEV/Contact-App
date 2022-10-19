import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'



const AddContact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')

  const contacts = useSelector(state => state)


  const dispatch = useDispatch()

  const history = useNavigate()


  const handleSubmit = (e) => {

    const checkEmail = contacts.find(
      contact => contact.email === email
    );

    const checkName = contacts.find(
      contact => contact.name === name
    );
    const checkNumber = contacts.find(
      contact => contact.phone === number
    );

    e.preventDefault()

    if (!name || !email || !number) {
      return toast.warning("Please fill in all fields")
    }

    if (checkEmail) {
      return toast.error('This email already')
    }
    if (checkName) {
      return toast.error('This name already')
    }
    if (checkNumber) {
      return toast.error('This number already')
    }


    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      number
    }


    dispatch({ type: 'ADD_CONTACT', payload: data })
    toast.success('Student Added')
    history('/')
  }

  return (
    <div className='container'>
      <div className="row mt-5">
        <h1 className="display-3 text-center">
          Add Contact
        </h1>
        <div className="col-md-6 mx-auto mt-3">
          <form onSubmit={handleSubmit} >
            <div className="form-group mt-3">
              <input
                className="form-control"
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}

              />
            </div>
            <div className="form-group mt-3">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}

              />
            </div>
            <div className="form-group mt-3">
              <input
                className="form-control"
                type="number"
                placeholder="Phone"
                value={number}
                onChange={(e) => setNumber(e.target.value)}


              />
            </div>
            <div className="form-group mt-3">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Student"
              />
              <Link to="/" className="btn btn-danger ms-3">Cancel</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddContact