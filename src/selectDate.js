import React from "react";

function formatDate(date) {
  function addZero(d) {
    return d < 10 ? "0" + d : d;
  }

  const day = addZero(date.getDay());
  const month = addZero(date.getMonth());
  var year = date.getFullYear();
  return year + "-" + month + "-" + day;
}

export function initMinDate() {
  const threeMonths = 1000 * 60 * 60 * 24 * 180;
  const today = new Date().getTime();
  const threeMonthsAgo = today - threeMonths;
  return formatDate(new Date(threeMonthsAgo));
}

export class SelectDate extends React.Component {
  render() {
    const { value, setDate } = this.props;
    return (
      <div>
        <form>
          <label>Max date: </label>
          <input
            type="date"
            min="2016-01-01"
            value={value}
            onChange={setDate}
          />
        </form>
      </div>
    );
  }
}
