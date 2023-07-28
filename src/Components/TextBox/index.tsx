import React, { Dispatch, SetStateAction } from 'react'

interface TextBoxProps {
    style: String
}

const TextBox: React.FC<TextBoxProps> = ({ style }) => {
    return (
        <input className={`${style}`} />
    )

}

export default TextBox;