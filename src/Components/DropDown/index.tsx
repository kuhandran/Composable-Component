import React, { Dispatch, SetStateAction } from 'react'

interface DropDownProps {
    style: String
}

const DropDown: React.FC<DropDownProps> = ({ style }) => {
    return (
        <input className={`${style}`} />
    )
}

export default DropDown;