import React from 'react';

export class LabelPicker extends React.Component {

  render() {
    const {hidden, labels, handleSubmit, newLabel, handleChange} = this.props

    return(
      <div hidden={hidden}>
        <ul>
          {labels.map((label) => (<li key={label}>{label}</li>))}
        </ul>
        <form onSubmit={handleSubmit}>
          <input className='label-input' value={newLabel} onChange={handleChange}/>
          <button>Add</button>
        </form>
      </div>
    )
  }
}
