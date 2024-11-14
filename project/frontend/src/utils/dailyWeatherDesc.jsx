export const dailyWeatherDesc = (forecastList) => {
  const dailyDescriptions = {};

  // Group descriptions by day and count occurrences
  forecastList.forEach((entry) => {
    const date = entry.dt_txt.split(" ")[0];
    const description = entry.weather[0].description;

    // Initialize the day's description count if it doesn't exist
    if (!dailyDescriptions[date]) {
      dailyDescriptions[date] = {};
    }

    // Count occurrences of each description for the day
    if (dailyDescriptions[date][description]) {
      dailyDescriptions[date][description]++;
    } else {
      dailyDescriptions[date][description] = 1;
    }
  });

  // Get the most common description for each day
  const overallDescriptions = Object.keys(dailyDescriptions).map((date) => {
    const descriptions = dailyDescriptions[date];
    return Object.keys(descriptions).reduce((a, b) =>
      descriptions[a] > descriptions[b] ? a : b
    );
  });

  const temp = overallDescriptions.slice(0, 5); // Return the first 5 days
  console.log(temp);
  return temp;
};
