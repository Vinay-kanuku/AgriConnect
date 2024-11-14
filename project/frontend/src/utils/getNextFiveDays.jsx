export const getNextFiveDays = () => {
  const locale = "en";
  const today = new Date();
  const upcomingDays = [];

  for (let i = 0; i < 5; i++) {
    const futureDate = new Date(today); // Create a new Date object each time
    futureDate.setDate(today.getDate() + i); // Get the future date by adding i days

    const day = futureDate.getDate(); // Day of the month
    const month = futureDate
      .toLocaleDateString(locale, { month: "short" })
      .toUpperCase(); // Month in short form
    const weekday = futureDate.toLocaleDateString(locale, { weekday: "long" }); // Weekday name

    upcomingDays.push(`${day}  ${month}  ${weekday}`);
  }
  console.log(upcomingDays);
  return upcomingDays;
};
