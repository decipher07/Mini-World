import React from 'react'
import './SidebarOption.css'

// Icon will be a component 
function SidebarOption({title, Icon}) {
    return (
        <div className="sidebarOption">
            <p>{title}</p>
        </div>
    )
}

export default SidebarOption
