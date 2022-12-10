import React from 'react'
import defaultImg from '../../assets/dafault.png'
import { Link } from 'react-router-dom'
import { emojiIcon, galleryIcon, likeFill, likeOutline } from '../../assets/svgIcons';
import { useEffect } from 'react';
import { useState } from 'react';
import { api } from '../../Interceptor/apiCall';
import { url } from '../../baseUrl';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth'

export default function ChatBox({ roomId }) {
    const [RoomName, setRoomName] = useState('')
    const context = useContext(AuthContext)

    useEffect(() => {
        async function findRoomId() {
            api.get(`${url}/chat/${roomId}`).then(res => {
                const nameArr = res.data.people.filter(id => id !== context.auth._id)
                return api.get(`${url}/user/get/${nameArr[0]}`).then((res) => {
                    setRoomName(res.data.name);
                })
            }).then((resp => {
                console.log(resp.data);
                setRoomName(resp.data.name)
            })).catch(err => console.log(err))
        }
        findRoomId()
    }, [context.auth._id, roomId])
    return (
        <div style={{ width: '100%', position: 'relative', height: '100%' }}>
            <div className="header_chat" style={{ width: '100%', borderBottom: '1px solid #dbdbdb', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link to={`/${""}`} >
                    <div className="info_user_chat" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '28px' }}>
                        <img src={defaultImg} style={{ width: '40px', borderRadius: '50%' }} alt="" />
                        <p style={{ marginLeft: '10px' }}>{RoomName}</p>
                    </div>
                </Link>
                <div className="svg_info" style={{ marginRight: '18px' }}>
                    <Link to={`/${""}`} className='no_style' style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg aria-label="View thread details" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><circle cx="11.819" cy="7.709" r="1.25"></circle><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="10.569" x2="13.432" y1="16.777" y2="16.777"></line><polyline fill="none" points="10.569 11.05 12 11.05 12 16.777" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline></svg>
                    </Link>

                </div>
            </div>
            <div className="chat_content" style={{ width: '100%' }}>
                <div className="converstaions " style={{ height: '72vh', overflowY: 'scroll', padding: '20px 0px', width: '100%' }}>
                    <div className="my_text" style={{ marginLeft: 'auto', width: 'fit-content', marginRight: '18px', backgroundColor: '#7c3aed', color: 'white', padding: '10px 16px', borderRadius: '22px', marginTop: '18px' }}>
                        Hello
                    </div>
                    <div className="my_text" style={{ marginLeft: 'auto', width: 'fit-content', marginRight: '18px', backgroundColor: '#7c3aed', color: 'white', padding: '10px 16px', borderRadius: '22px', marginTop: '18px' }}>
                        Hey
                    </div>

                    <div className="other_partytext" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '18px', }}>
                        <img style={{ width: '30px', borderRadius: '50%', marginBottom: '-7px', marginLeft: '18px' }} src={defaultImg} alt="" />
                        <div className="other_text" style={{ width: 'fit-content', marginLeft: '12px', backgroundColor: '#dbdbdb', color: 'black', padding: '10px 16px', borderRadius: '22px' }}>
                            Heyaa
                        </div>
                    </div>
                    <div className="other_partytext" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '18px', }}>
                        <img style={{ width: '30px', borderRadius: '50%', marginBottom: '-7px', marginLeft: '18px' }} src={defaultImg} alt="" />
                        <div className="other_text" style={{ width: 'fit-content', marginLeft: '12px', color: 'black', padding: '10px 16px', borderRadius: '22px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '22px' }}>
                            {likeFill}
                        </div>
                    </div>

                </div>

                <div className="input_container" style={{ width: '100%', position: 'absolute', bottom: '8px', zIndex: '22' }}>
                    <div className="input_box" style={{ width: '95%', display: 'flex', flexDirection: 'row', alignItems: 'center', border: '1px solid #dbdbdb', margin: 'auto', height: '48px', borderRadius: '19px', justifyContent: 'space-evenly' }}>
                        {emojiIcon}
                        <input style={{ width: '80%', height: '100%', border: 'none', marginLeft: '5px', outline: 'none' }} type="text" placeholder='Message...' />
                        {galleryIcon}
                        {likeOutline}
                    </div>
                </div>
            </div>

        </div>
    )
}
