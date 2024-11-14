export const getFirstEightEntries = (data) => {
  const timeArray = [];
  const descriptionArray = [];
  const tempArray = [];

  // Loop through the first 8 entries
  for (let i = 0; i < 8; i++) {
    const entry = data.list[i];

    // Extract time in 12-hour format
    const time = new Date(entry.dt * 1000).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    // Push values to respective arrays
    timeArray.push(time);
    descriptionArray.push(entry.weather[0].description);
    tempArray.push(entry.main.temp);
  }

  return {
    timeArray,
    descriptionArray,
    tempArray,
  };
};

// Example of using the function with data
