import React from 'react';
import { useParams } from 'react-router-dom';
function Images() {
    let { imageId, secImageId } = useParams();
    return (
    <div><h2>Image ID is {imageId} and second is {secImageId}</h2></div>
    );
}
export default Images;