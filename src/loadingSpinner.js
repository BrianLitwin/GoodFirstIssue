import React from 'react';
import './loadingSpinner.css';

export class LoadingSpinner extends React.Component {
  render() {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    )
  }
}
