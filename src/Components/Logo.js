import React from 'react';
import'../Images/bg-removebg-preview.png'
import '../Styles/Logo.css'

export const Logo = ({alt, src, spinSpeed}) => {
    return (
        <div className={`Logo-container ${spinSpeed}`}>
            <img className='Logo' alt={alt} src={src} />
        </div>
    )
}

export default Logo;