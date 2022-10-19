import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {

    const contacts = useSelector(state => state)
    const dispatch=useDispatch()

    const deleteContact=(item)=>{
        dispatch({type:'DELETE_CONTACT', payload:item})
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 my-5 text-end">
                    <Link to='/add' className='btn btn-outline-dark'>
                        Add Contact
                    </Link>
                </div>
                <div className="col-md-6 mx-auto">
                    <table className="table table-hover">
                        <thead className="table-header bg-dark text-white">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts.map((contact, id) => (
                                    <tr>
                                        <td>{contact.id}</td>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.number}</td>
                                        <td>
                                            <Link to={`/edit/${contact.id}`}  className='btn btn-primary'>Edit</Link>
                                        <button className='btn btn-danger ms-2' onClick={()=>deleteContact(contact.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home