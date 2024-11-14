export const convertTo12HourFormat = (timestamp) => {
  const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true, // 12-hour format
  });
  return time;
};
