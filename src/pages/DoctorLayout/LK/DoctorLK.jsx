import React from 'react'

import DoctorLkSidebar from './DoctorLkSidebar'

function DoctorLK() {
    return (
        <section className="doc-cabinet">
            <DoctorLkSidebar />
            <div className="doc-cabinet__content"></div>
            <div className="doc-cabinet__history"></div>
        </section>
    )
}

export default DoctorLK
