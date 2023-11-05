let getValue = () => {

    const inputIds = ["day", "month", "year"];
    const dateReqs = inputIds.map(id => document.getElementById(id).value);
    const dayArr = inputIds.map(date => document.getElementById("warning-" + date));
    const [dateDayReq, dateMonthReq, dateYearReq] = dateReqs;

    if (dateDayReq === "" && dateMonthReq === "" && dateYearReq === "") {
        dayArr.forEach(day => {
            day.classList.add("required");
            day.innerHTML = "This field is required";
        });
    }

    // Made so the year can't exceed current year
    let currentYear = new Date().getFullYear();
    //Must be a valid date
    if (dateDayReq > 31) {
        let dayNew = document.getElementById("warning-day");
        dayNew.classList.add("required");
        dayNew.innerHTML = "Must be a valid day";
    } else if (dateMonthReq < 0 || dateMonthReq > 12) {
        let dayMonth = document.getElementById("warning-month");
        dayMonth.classList.add("required");
        dayMonth.innerHTML = "Must be a valid month";
    } else if (dateYearReq < 1900 || dateYearReq > currentYear) {
        let dayYear = document.getElementById("warning-year");
        dayYear.classList.add("required");
        dayYear.innerHTML = "Must be a valid year";
    }

        //Oude stijl, maar te omslachtig, maps aangeleerd
        // const element = document.getElementsByClassName("warning");
        // warningDay.classList.add("required");
        // warningDay.classList.add("required");
        // warningDay.classList.add("required");
        // docs.innerHTML = "This field is required";
    // element.style.display = 'block';

    else {
        //date
        const inputDate = ["day", "month", "year"];
        const allDates = inputDate.map(date => parseInt(document.getElementById(date).value, 10));
        const [dateDay, dateMonth, dateYear] = allDates;
        let dob = new Date(dateYear, dateMonth - 2, dateDay);


        //Oude methode
        // let dateDay = parseInt(document.getElementById("day").value, 10);
        // let dateMonth = parseInt(document.getElementById("month").value, 10);
        // let dateYear = parseInt(document.getElementById("year").value, 10);
        // let dob = new Date(dateYear, dateMonth - 2, dateDay);

        //calculate month difference from current date in time
        let month_diff = Date.now() - dob.getTime();

        //convert the calculated difference in date format
        let age_dt = new Date(month_diff);

        //Convert the month
        let month = age_dt.getMonth();

        //Convert the day;
        let days = age_dt.getDay();

        //extract year from date
        let year = age_dt.getUTCFullYear();


        //now calculate the age of the user
        let age = Math.abs(year - 1970);

        //display the calculated age
        document.getElementById("year-now").innerHTML = age;
        document.getElementById("months-now").innerHTML = month;
        document.getElementById("days-now").innerHTML = days;

        //Clear the input elements
        dayArr.forEach(day => {
                day.classList.remove("required");
                day.innerHTML = "";
            }
        );
    }
}
