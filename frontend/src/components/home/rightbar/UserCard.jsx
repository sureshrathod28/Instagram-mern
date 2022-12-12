import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { url } from '../../../baseUrl'
import { api } from '../../../Interceptor/apiCall'

export function UserCard({ avatar, username, name, userId }) {
    const [iFollow, setIFollow] = useState(false)
    async function handleFollow() {
        api.get(`${url}/user/handlefollow/${userId}`).then((res) => {
            if (res.data) {
                setIFollow(prev => !prev)
            }
        })
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '19px' }}>
            <div className="left" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div className="user-img" style={{ marginRight: '14px' }}>
                    <Link to={`/${username}`}>
                        <img src={avatar && avatar} style={{ width: '39px', borderRadius: '50%', }} alt="" />
                    </Link>
                </div>
                <div className="username" style={{ display: 'flex', flexDirection: 'column', marginTop: '-4px' }}>
                    <Link to={`/${username}`} style={{ fontSize: '12.75px', marginLeft: '9px', marginTop: '0px', fontWeight: 'bold', textDecoration: 'none' }}>{username && username}</Link>
                    <Link to={`/${username}`} style={{ fontSize: '10.85px', marginLeft: '9px', color: 'gray', marginTop: '3.7px', textDecoration: 'none' }}>{name}</Link>
                </div>
            </div>
            <div className="follow-btn">
                <button onClick={() => handleFollow()} className='no-style'><p style={{ color: !iFollow ? '#0095F6' : 'rgb(200 40 17)', fontSize: '12.55px' }}>{iFollow ? "Unfollow" : "Follow"}</p></button>
            </div>
        </div>
    )
}
