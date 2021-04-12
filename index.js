class Restaurant {
  constructor(sunday, monday, tuesday, wednesday, thursday, friday, saturday) {
    if (sunday && monday && tuesday && wednesday && thursday && friday && saturday) {
      this.openingHours = new Map([
        [DAY_OF_WEEK.sunday, sunday],
        [DAY_OF_WEEK.monday, monday],
        [DAY_OF_WEEK.tuesday, tuesday],
        [DAY_OF_WEEK.wednesday, wednesday],
        [DAY_OF_WEEK.thursday, thursday],
        [DAY_OF_WEEK.friday, friday],
        [DAY_OF_WEEK.saturday, saturday],
      ]);
    }
  }

  getOpeningHours() {
    //console.log("INI COSOLE",this.openingHours.get('sunday').getOpen())
    let temp = []

    if (this.openingHours) {
      this.openingHours.forEach((item, key) => {
        temp.push(`${DAY_OF_WEEK_NAMES.get(key)}: ${item.getOpen()}-${item.getClose()}`)
      })
      return temp.join(', ')
    }

    throw new Error("Todo, add implementation");
  }
}

class OpeningHour {
  constructor(openingHour, closingHour) {
    this.openingHour = openingHour;
    this.closingHour = closingHour;
  }

  getOpen() {
    return this.openingHour
  }

  getClose() {
    return this.closingHour
  }
}

//Sun - Wed: 8-16, Thu: 8-20, Fri: 8-21, Sat: 8-22


const DAY_OF_WEEK = {
  sunday: 'sunday',
  monday: 'monday',
  tuesday: 'tuesday',
  wednesday: 'wednesday',
  thursday: 'thursday',
  friday: 'friday',
  saturday: 'saturday',
}

const DAY_OF_WEEK_NAMES = new Map([
  [DAY_OF_WEEK.sunday, "Sun"],
  [DAY_OF_WEEK.monday, "Mon"],
  [DAY_OF_WEEK.tuesday, "Tue"],
  [DAY_OF_WEEK.wednesday, "Wed"],
  [DAY_OF_WEEK.thursday, "Thu"],
  [DAY_OF_WEEK.friday, "Fri"],
  [DAY_OF_WEEK.saturday, "Sat"],
]);
//console.log(DAY_OF_WEEK_NAMES.get('sunday'))


module.exports = { Restaurant, OpeningHour }