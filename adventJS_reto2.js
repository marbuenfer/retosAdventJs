function countHours(year, holidays) {
  let siCuenta = false;
  let hours = 0;

  holidays.forEach((holiday) => {
    const date = new Date(holiday + "/" + year);
    console.log(date);
    if (![0, 6].includes(date.getDay())) {
      hours += 2;
    }
  });
  return hours;
}

const year = 2022;
const holidays = ["01/06", "04/01", "12/25"]; // format MM/DD
let totalHoras = countHours(year, holidays);

//mostrar info sobre las horas extras
//console.log("\n", totalHoras, " horas extra en el año");
