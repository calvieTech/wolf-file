import React, { useState } from 'react';
import FileUpload from './FileUpload';
import CreateFolder from './CreateFolder';
import FileList from './FileList';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import './maindashboard.css';

function MainDashboard() {
  return (
    <div className="maindashboard__container">
      <h1>Welcome to Wolf File</h1>
      <div className="maindashboard__controls">
        <FileUpload />
        <CreateFolder />
      </div>
      <div className="maindashboard__list">
        <FileList />
      </div>
    </div>
  );
}

export default MainDashboard;
