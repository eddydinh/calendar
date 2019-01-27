import React from 'react';

import './UploadButton.css'
const UploadButton = (props) => {
  return (
    <div className={'uploadWrapper'}>
      
          <label className={'uploadButton'}>+<input onChange={props.handleUploadedFile} type="file"/></label>
    
  
    </div>
  );
}

export default UploadButton;