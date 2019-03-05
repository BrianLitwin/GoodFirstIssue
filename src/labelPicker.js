import React from "react";

export class LabelPicker extends React.Component {
  render() {
    const {
      hidden,
      labels,
      handleSubmit,
      newLabel,
      handleChange,
      removeLabel
    } = this.props;

    return (
      <div hidden={hidden}>
        <form onSubmit={handleSubmit}>
          <input
            className="label-input"
            value={newLabel}
            onChange={handleChange}
          />
          <button>Add</button>
        </form>
        <ul
          style={{
            listStyle: "none",
            listStylePosition: "none",
            margin: "0",
            padding: "0"
          }}
        >
          {labels.map((label, i) => (
            <li key={i}>
              <button
                style={{ marginRight: "8px" }}
                onClick={() => removeLabel(i)}
              >
                X
              </button>
              {label}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
