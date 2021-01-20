import React from 'react'
import {Button} from 'antd'

import './DocCabSearchSubmit.scss'

function DocCabSearchSubmit({additionalClass, text, onClick}) {
    return (
        <Button className={`docCabSearchBtn ${additionalClass}`} onClick={onClick}>{text}</Button>
    )
}

export default DocCabSearchSubmit
