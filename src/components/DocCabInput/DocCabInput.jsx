import React from 'react'
import {Input} from 'antd'

import './DocCabInput.scss'

function DocCabInput({id, additionalClass, placeholder, onFocus, onChange, onKeyDown}) {
    return (
        <Input className={`docCabInput ${additionalClass}`} onFocus={onFocus} onChange={onChange} onKeyDown={onKeyDown} id={id} placeholder={placeholder} />
    )
}

export default DocCabInput
