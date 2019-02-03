import React from 'react';

export function LabelPicker(props) {
  return(
    <select style={{layout:'inline'}} multiple='multiple'>
      { props.labels.map((label) => {
        return <option value={label.label}>{label.label}</option>
      })}
    </select>
  )
}
