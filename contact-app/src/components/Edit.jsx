import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Edit = () => {
    const { id } = useParams()
    const history = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {

        const checkEmail = contacts.find(
            contact => contact.id !== parseInt(id) && contact.email === email
        );

        const checkName = contacts.find(
            contact => contact.id !== parseInt(id) &&  contact.name === name
        );
        const checkNumber = contacts.find(
            contact => contact.id !== parseInt(id) &&  contact.phone === number
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
            id: parseInt(id),
            name,
            email,
            number
        }


        dispatch({ type: 'UPDATE_CONTACT', payload: data })
        toast.success('Student Added')
        history('/')
    }


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')

    const contacts = useSelector(state => state)
    const currentContact = contacts.find(contact => contact.id === parseInt(id))

    useEffect(() => {
        setName(currentContact.name)
        setEmail(currentContact.email)
        setNumber(currentContact.number)
    }, currentContact)


    return (
        <div className="container">
            {currentContact ?
                (<div className="row d-flex flex-column">
                    <button
                        className="btn btn-dark ml-auto my-5"

                    >
                        Go back
                    </button>
                    <div className="col-md-6 mx-auto shadow p-5">

                        <form onSubmit={handleSubmit} >
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    value={name}
                                    placeholder={"Name"}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    placeholder={"Email"}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}

                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    value={number}
                                    placeholder={"Phone"}
                                    onChange={(e) => setNumber(e.target.value)}


                                />
                            </div>
                            <div className="form-group d-flex align-items-center justify-content-between my-2">
                                <input type="submit" className='btn btn-dark' />
                                <Link to="/" className="btn btn-danger ms-2">
                                    Cancel
                                </Link>
                            </div>
                        </form>

                    </div>
                </div>) :
                (
                    <h1>Studnet with id {id} not exist</h1>
                )}
        </div>
    )
}

export default Edit