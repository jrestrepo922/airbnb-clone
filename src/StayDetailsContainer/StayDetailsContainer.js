import React from 'react';
import Media from 'react-media';
import StayDetailsMin from '../StayDetailsMin/StayDetailsMin';
import StayDetails from '../StayDetails/StayDetails';

function StayDetailsContainer(props) {

    return (
        
        <div>
            <Media queries={{
                small: "(max-width: 700px)",
                medium: "(min-width: 701px)",
                }}>
                {matches => (
                    <React.Fragment>
                    {matches.small && <StayDetailsMin id={props.match.params.id}/>}
                    {matches.medium && <StayDetails id={props.match.params.id}/>}
                    </React.Fragment>
                )}
            </Media>
        </div>
    )
}

export default StayDetailsContainer
