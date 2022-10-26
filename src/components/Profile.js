import React from 'react'
import profile__img from '../images/IMG_0408.jpg'

function Profile() {
    return (
        <div className="text-center fw-bold">
            <img 
                src={profile__img} 
                alt="profile__img" 
                id="profile__img"
                className="m-4"
            />
            <p id="twitter" className="mb-4">Destiny Arupi</p>
            {/* <p id="slack">Destiny Arupi</p> */}
        </div>
    )
}

export default Profile