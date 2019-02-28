export function daysAgo(stringDate, todaysDate) {
  const ago = new Date(stringDate);
  const diffMS = todaysDate - ago;
  const days = Math.floor(diffMS / (24 * 60 * 60 * 1000));
  return days;
}

export function formatDaysAgo(stringDate, todaysDate) {
  const days = daysAgo(stringDate, todaysDate);
  if (days === 0) {
    return "today";
  } else if (days === 1) {
    return `1 day ago`;
  } else {
    return `${days} days ago`;
  }
}

export function formatDate(date) {
  function addZero(d) {
    return d < 10 ? "0" + d : d;
  }

  const day = addZero(date.getDate());
  const month = addZero(date.getMonth() + 1);
  var year = date.getFullYear();
  return year + "-" + month + "-" + day;
}

export function today() {
  return formatDate(new Date());
}

export function initMinDate() {
  const threeMonths = 1000 * 60 * 60 * 24 * 180;
  const today = new Date().getTime();
  const threeMonthsAgo = today - threeMonths;
  return formatDate(new Date(threeMonthsAgo));
}
