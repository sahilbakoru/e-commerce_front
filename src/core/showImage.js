import React from 'react';
import { API } from '../config';
import "../styles.css"

const ShowImage = ({ item, url }) => (
    <div className="card-body">
        <img
            src={`${API}/${url}/photo/${item._id}`}
            alt={item.name} 
            className="mb-3"
            style={{
                height: '200px', width: '200px'
            }}
        >
        </img>
    </div>
)

export default ShowImage;