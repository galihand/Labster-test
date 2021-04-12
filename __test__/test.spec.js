const { OpeningHour, Restaurant } = require("../index.js");

describe("Restaurant", () => {
  it("handle simple case", () => {
    const restaurant = new Restaurant(
      new OpeningHour(8, 16), // Sunday
      new OpeningHour(8, 17), // Monday
      new OpeningHour(8, 18), // Tuesday
      new OpeningHour(8, 19), // Wednesday
      new OpeningHour(8, 20), // Thursday
      new OpeningHour(8, 21), // Friday
      new OpeningHour(8, 22), // Saturday
    );
    const openingHours = restaurant.getOpeningHours();

    expect(openingHours).toBe("Sun: 8-16, Mon: 8-17, Tue: 8-18, Wed: 8-19, Thu: 8-20, Fri: 8-21, Sat: 8-22");
  });

  it("handle single group case", () => {
    const restaurant = new Restaurant(
      new OpeningHour(8, 16), // Sunday
      new OpeningHour(8, 16), // Monday
      new OpeningHour(8, 16), // Tuesday
      new OpeningHour(8, 16), // Wednesday
      new OpeningHour(8, 20), // Thursday
      new OpeningHour(8, 21), // Friday
      new OpeningHour(8, 22), // Saturday
    );
    const openingHours = restaurant.getOpeningHours();

    expect(openingHours).toBe("Sun - Wed: 8-16, Thu: 8-20, Fri: 8-21, Sat: 8-22");
  });

  it("handle multiple group case", () => {
    const restaurant = new Restaurant(
      new OpeningHour(8, 16), // Sunday
      new OpeningHour(8, 16), // Monday
      new OpeningHour(8, 16), // Tuesday
      new OpeningHour(8, 17), // Wednesday
      new OpeningHour(8, 18), // Thursday
      new OpeningHour(8, 20), // Friday
      new OpeningHour(8, 20), // Saturday
    );
    const openingHours = restaurant.getOpeningHours();

    expect(openingHours).toBe("Sun - Tue: 8-16, Wed: 8-17, Thu: 8-18, Fri - Sat: 8-20");
  });

  it("handle edge case", () => {
    const restaurant = new Restaurant(
      new OpeningHour(8, 16), // Sunday
      new OpeningHour(8, 17), // Monday
      new OpeningHour(8, 17), // Tuesday
      new OpeningHour(8, 17), // Wednesday
      new OpeningHour(8, 16), // Thursday
      new OpeningHour(8, 16), // Friday
      new OpeningHour(8, 16), // Saturday
    );
    const openingHours = restaurant.getOpeningHours();

    expect(openingHours).toBe("Sun, Thu - Sat: 8-16, Mon - Wed: 8-17");
  });
});
