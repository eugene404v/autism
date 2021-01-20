import React from 'react'

import {DocCabInput, DocCabSearchSubmit} from 'components'

function DoctorSearchBar() {
    const [searchValue, setSearchValue] = React.useState()

    const searchEnterHandler = (e) => {
        if (e.keyCode === 13) {
            alert(e.target.value)
        }
    }

    const searchClickHandler = () => {
        alert(searchValue)
    }

    const searchChangeHandler = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <div className='doc-cabinet__searchbar'>
            <label htmlFor="doctorSearchBar">Поиск пациентов :</label>
            <DocCabInput id="doctorSearchBar" onKeyDown={searchEnterHandler} onChange={searchChangeHandler} placeholder='Введите ID пациента' />
            <DocCabSearchSubmit text='Поиск' onClick={searchClickHandler} />
        </div>
    )
}

export default DoctorSearchBar
