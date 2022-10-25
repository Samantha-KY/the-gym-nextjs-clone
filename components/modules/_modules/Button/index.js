import React from 'react'

function Button({ className = "bg-primary-green rounded-xsm text-white py-2 h-11 w-40 font-bold", title }) {
    return (
        <button className={className}>{title}</button>
    )
};

export default Button;