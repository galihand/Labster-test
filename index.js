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
        if (temp.length === 0) {
          temp.push({
            day: DAY_OF_WEEK_NAMES.get(key),
            open: item.getOpen(),
            close: item.getClose()
          })
        } else {
          // console.log(item.getOpen(), temp[temp.length - 1].open)
          if (item.getOpen() === temp[temp.length - 1].open && item.getClose() === temp[temp.length - 1].close) {
            let spliting = temp[temp.length - 1].day.split(' - ')
            if (spliting.length === 2) {
              let newDay = ''
              spliting.splice(1, 1, DAY_OF_WEEK_NAMES.get(key))
              newDay = `${spliting[0]} - ${spliting[spliting.length - 1]}`
              temp.splice(temp.length - 1, 1, {
                day: newDay,
                open: item.getOpen(),
                close: item.getClose()
              })
            } else {
              temp.splice(temp.length - 1, 1, {
                day: `${temp[temp.length - 1].day} - ${DAY_OF_WEEK_NAMES.get(key)}`,
                open: item.getOpen(),
                close: item.getClose()
              })
            }
          } else {
            temp.push({
              day: DAY_OF_WEEK_NAMES.get(key),
              open: item.getOpen(),
              close: item.getClose()
            })
          }
        }
      })
      // console.log(temp)
      let result = temp.map((item, idx) => {
        return `${item.day}: ${item.open}-${item.close}`
      })
      return result.join(', ')
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