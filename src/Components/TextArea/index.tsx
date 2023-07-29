import React, { Dispatch, SetStateAction } from 'react'

interface TextAreaProps {
    style: String
}

const TextArea: React.FC<TextAreaProps> = ({ style }) => {
    return (
        <input className={`${style}`} />
    )
}

export default TextArea;