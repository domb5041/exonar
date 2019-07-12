import React from 'react';
import './Photo.css';

const photo = props => {
    return (
        <div className='photo'>
            <img src={props.url} />
        </div>
    );
}

export default photo;