// These were just test variables for debugging
// let thedate = 3;
// let themonth = "January";
// let theyear = 2030;

/* So for some reason the code only returns an output whenever I put the
switch inside one of the if/else loops. I don't know if this is because
it somehow skips the swick after it goes through the if/else loops or
some other reason but yh. **Tried doing this** I made the switch its own function and then
just placed it in the if/else expressions. Didn't work cos variables defined
in loads of diff places so just placed the switch in the if/else loop.  */

function HowManyDaysTillChristmas(date, month, year) {
    if (year % 4 === 0) {
        if (year % 100) {
            if (year % 400 === 0) {
                let Jan = 31;
                let Feb = 29;
                let Mar = 31;
                let Apr = 30;
                let May = 31;
                let Jun = 30;
                let Jul = 31;
                let Aug = 31;
                let Sep = 31;
                let Oct = 31;
                let Nov = 30;
            } else {
                let Jan = 31;
                let Feb = 28;
                let Mar = 31;
                let Apr = 30;
                let May = 31;
                let Jun = 30;
                let Jul = 31;
                let Aug = 31;
                let Sep = 31;
                let Oct = 31;
                let Nov = 30;
                // Currently goes through this branch for the 1 Jan 2020
                switch (month) {
                    case "January":
                        let daysTillChristmas =
                            Jan -
                            date +
                            Feb +
                            Mar +
                            Apr +
                            May +
                            Jun +
                            Jul +
                            Aug +
                            Sep +
                            Oct +
                            Nov +
                            25;
                        console.log(daysTillChristmas);
                        break;
                    case "February":
                        let daysTillChristmas2 =
                            Feb -
                            date +
                            Mar +
                            Apr +
                            May +
                            Jun +
                            Jul +
                            Aug +
                            Sep +
                            Oct +
                            Nov +
                            25;
                        console.log(daysTillChristmas2);
                        break;
                    case "March":
                        let daysTillChristmas3 =
                            Mar -
                            date +
                            Apr +
                            May +
                            Jun +
                            Jul +
                            Aug +
                            Sep +
                            Oct +
                            Nov +
                            25;
                        console.log(daysTillChristmas3);
                        break;
                    case "April":
                        let daysTillChristmas4 =
                            Apr -
                            date +
                            May +
                            Jun +
                            Jul +
                            Aug +
                            Sep +
                            Oct +
                            Nov +
                            25;
                        console.log(daysTillChristmas4);
                        break;
                    case "May":
                        let daysTillChristmas5 =
                            May - date + Jun + Jul + Aug + Sep + Oct + Nov + 25;
                        console.log(daysTillChristmas5);
                        break;
                    case "June":
                        let daysTillChristmas6 =
                            Jun - date + Jul + Aug + Sep + Oct + Nov + 25;
                        console.log(daysTillChristmas6);
                        break;
                    case "July":
                        let daysTillChristmas7 =
                            Jul - date + Aug + Sep + Oct + Nov + 25;
                        console.log(daysTillChristmas7);
                        break;
                    case "August":
                        let daysTillChristmas8 =
                            Aug - date + Sep + Oct + Nov + 25;
                        console.log(daysTillChristmas8);
                        break;
                    case "September":
                        let daysTillChristmas9 = Sep - date + Oct + Nov + 25;
                        console.log(daysTillChristmas9);
                        break;
                    case "October":
                        let daysTillChristmas10 = Oct - date + Nov + 25;
                        console.log(daysTillChristmas10);
                        break;
                    case "December":
                        if (date <= 25) {
                            let daysTillChristmas11 = 25 - date;
                            console.log(daysTillChristmas11);
                        } else {
                            if ((year + 1) % 4 === 0) {
                                if ((year + 1) % 100) {
                                    if ((year + 1) % 400 === 0) {
                                        let daysTillChristmas12 =
                                            31 - date + 359;
                                        console.log(daysTillChristmas12);
                                    } else {
                                        let daysTillChristmas13 =
                                            31 - date + 358;
                                        console.log(daysTillChristmas13);
                                    }
                                } else {
                                    let daysTillChristmas14 = 31 - date + 359;
                                    console.log(daysTillChristmas14);
                                }
                            } else {
                                let daysTillChristmas15 = 31 - date + 358;
                                console.log(daysTillChristmas15);
                            }
                        }
                }
            }
        } else {
            let Jan = 31;
            let Feb = 29;
            let Mar = 31;
            let Apr = 30;
            let May = 31;
            let Jun = 30;
            let Jul = 31;
            let Aug = 31;
            let Sep = 31;
            let Oct = 31;
            let Nov = 30;
            // Doesn't go through this branch
        }
    } else {
        let Jan = 31;
        let Feb = 28;
        let Mar = 31;
        let Apr = 30;
        let May = 31;
        let Jun = 30;
        let Jul = 31;
        let Aug = 31;
        let Sep = 31;
        let Oct = 31;
        let Nov = 30;
        // Doesn't go through this branch
    }
}

HowManyDaysTillChristmas(1, "January", 2020);
