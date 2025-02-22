import React from 'react'
import './AdminDashboard.css'
import { RiAccountCircleFill } from "react-icons/ri";
import { useFetchInfoQuery } from '../redux/features/info/infoApi';

const AdminDashboard = () => {
    const {data, error, isLoading} = useFetchInfoQuery();
  return (
    <div className='dashboard'>
        <div className='dashboard-container'>
        <div className='dashboard-right'>
            <div className='dashboard-right-top'>
                <RiAccountCircleFill />
            <h3>Dashboard</h3>
            </div>
            <div>
                <hr />
                <button className='dashboard-btn'>Logout</button>
            </div>
        </div>
        <table>
            <thead>
                <tr className='dashboard-head-roll'>
                    <th className='th-one'>No:</th>
                    <th className='th-two'>Email</th>
                    <th className='th-two'>Password</th>
                </tr>
            </thead>
            <tbody>
            {data?.posts?.map((post, index) => (
                        <tr key={post._id} className='tr-body'>
                            <td>{index + 1}</td>
                            <td>{post.email}</td>
                            <td>{post.password}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default AdminDashboard