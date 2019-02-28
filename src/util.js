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
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function today() {
  return formatDate(new Date());
}
