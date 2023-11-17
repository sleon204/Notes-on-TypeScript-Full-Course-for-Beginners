// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear()
// year.setAttribute("dateTime", thisYear)
// year.textContent = thisYear


// let year: HTMLElement|null 

// year = document.getElementById("year")

// let thisYear: string

// thisYear = new Date().getFullYear().toString()

// if (year) {
//   year.setAttribute("dateTime", thisYear)
//   year.textContent = thisYear
// }

// const year = document.getElementById("year") as HTMLSpanElement
// const thisYear: string = new Date().getFullYear().toString()
// year.setAttribute("dateTime", thisYear)
// year.textContent = thisYear

const year = document.getElementById("year")!
const thisYear = (new Date().getFullYear() as unknown) as string
year.setAttribute("dateTime", thisYear)
year.textContent = thisYear