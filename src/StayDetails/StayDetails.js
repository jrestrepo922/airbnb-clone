import React from 'react'

function StayDetails(props) {
    return (
        <div>
            {props.match.params.id}
        </div>
    )
}

export default StayDetails
