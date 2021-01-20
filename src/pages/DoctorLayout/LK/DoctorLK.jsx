import React from 'react'

import DoctorLkSidebar from './DoctorLkSidebar'
import DoctorSearchBar from './DoctorSearchBar'

function DoctorLK() {
    return (
        <section className="doc-cabinet">
            <DoctorLkSidebar />
            <div className="doc-cabinet__content">
                <DoctorSearchBar />
            </div>
        </section>
    )
}

export default DoctorLK
