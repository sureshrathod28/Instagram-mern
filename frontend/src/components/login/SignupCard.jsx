import React from 'react'
import logo from '../../assets/logo.png'


export const SignupCard = () => {
    return (
        <div className="right-login">
            <div className="signup-box border">
                <img style={{ width: '60%', margin: '35px 0', marginBottom: '25px', }} src={logo} alt="" />
                <p style={{ marginTop: '0px', color: 'gray', fontSize: '15px' ,marginBottom:'25px',width:'70%',textAlign:'center',fontWeight:'bold'}}>Sign up to see photos and videos from your friends</p>

                <input className='border' style={{ marginTop: '0px', width: '75%', height: '37px', fontSize: '13px', backgroundColor: '', padding: '0 9px', outline: 'none' }} type="text" placeholder='Email  address' />
                <input className='border' style={{ marginTop: '15px', width: '75%', height: '37px', fontSize: '13px', backgroundColor: '', padding: '0 9px', outline: 'none' }} type="text" placeholder='Full Name' />
                <input className='border' style={{ marginTop: '15px', width: '75%', height: '37px', fontSize: '13px', backgroundColor: '', padding: '0 9px', outline: 'none' }} type="text" placeholder='Username' />
                <input className='border' style={{ marginTop: '15px', width: '75%', height: '37px', fontSize: '13px', backgroundColor: '', padding: '0 9px', outline: 'none' }} type="password" placeholder='Password' />
                <button style={{ border: 'none', outline: 'none', background: 'blue', padding: '5px 9px', borderRadius: '5px', color: 'white', backgroundColor: '#2196f3', marginTop: '18px', fontSize: '13px', width: '75%',fontWeight:'bold' }}>Sign Up</button>
            </div>
            <div className="signup-action-box border" style={{ textAlign: 'center' }}>
            <p style={{ color: 'gray', fontSize: '14px' }}>Have an account ?<span style={{ color: '#2196f3', fontWeight: 'bold', marginLeft: '6px' }}>Log in</span></p>
            </div>
        </div>
    )
}