import React from 'react';
import './PhotoGrid.css';
import Photo from './Photo';

const photoGrid = props => {
    return (
        <div className='photo-grid'>
            {props.photos.map(photo => {
                return <Photo url={photo.urls.thumb} />
            })}
        </div>
    );
}

export default photoGrid;