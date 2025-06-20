

var monthChoose = document.querySelector(".month");

var dateInput = document.querySelector(".date");

var buttonSign = document.querySelector(".sign-checker");

function zodaicSignChecker() {

    var month = monthChoose.value;
    var date = parseInt(dateInput.value);

    
    switch (true) {
        case (month === 'January' && (date >= 20 && ! (date > 31))):
            case (month === 'February' && (date <= 18 && (date >= 1))):
                addEventListener("click", function() {
                    document.querySelector("div").textContent = "Your Zodaic sign is Aquarius"
    });
            break;
    
        case (month === 'February' && (date >= 19 && ! (date > 29))):
            case (month === 'March' && (date <= 20 && (date >= 1))):
                addEventListener("click", function() {
                    document.querySelector("div").textContent ="Your Zodaic sign is Pisces"
    });
            break;
    
        case (month === 'March' && (date >= 21 && ! (date > 31))):
            case (month === 'April' && (date <= 19 && (date >= 1))):
                addEventListener("click", function() {
                    document.querySelector("div").textContent = "Your Zodaic sign is Aries"
    });
            break;

        case (month === 'April' && (date >= 20 && ! (date > 30))):
            case (month === 'May' && (date <= 20 && (date >= 1))):
                addEventListener("click", function() {
                    document.querySelector("div").textContent = "Your Zodaic sign is Taurus"
    });
            break;

        case (month === 'May' && (date >= 21 && ! (date > 31))):
            case (month === 'June' && (date <= 20 && (date >= 1))):
                addEventListener("click", function() {
                    document.querySelector("div").textContent = "Your Zodaic sign is Gemini"
    });
            break;

        case (month === 'June' && (date >= 21 && ! (date > 30))):
            case (month === 'July' && (date <= 22 && (date >= 1))):
                addEventListener("click", function() {
                    document.querySelector("div").textContent = "Your Zodaic sign is Cancer"
    });
            break;

        case (month === 'July' && (date >= 23 && ! (date > 31))):
            case (month === 'August' && (date <= 22 && (date >= 1))):
                addEventListener("click", function() {
                    document.querySelector("div").textContent = "Your Zodaic sign is Leo"
    });
            break;

        case (month === 'August' && (date >= 23 && ! (date > 31))):
            case (month === 'September' && (date <= 22 && (date >= 1))):
                addEventListener("click", function() {
                    document.querySelector("div").textContent = "Your Zodaic sign is Virgo"
    });
            break;

        case (month === 'September' && (date >= 23 && ! (date > 31))):
            case (month === 'October' && (date <= 22 && (date >= 1))):
                addEventListener("click", function() {
                    document.querySelector("div").textContent = "Your Zodaic sign is Libra"
    });
            break;

        case (month === 'October' && (date >= 23 && ! (date > 31))):
            case (month === 'November' && (date <= 21 && (date >= 1))):
                addEventListener("click", function() {
                    document.querySelector("div").textContent = "Your Zodaic sign is Scorpio"
    });
            break;

        case (month === 'November' && (date >= 22 && ! (date > 31))):
            case (month === 'December' && (date <= 21 && (date >= 1))):
                addEventListener("click", function() {
                    document.querySelector("div").textContent = "Your Zodaic sign is Sagittarius"
    });
            break;

        case (month === 'December' && (date >= 22 && ! (date > 31))):
            case (month === 'January' && (date <= 19 && (date >= 1))):
                addEventListener("click", function() {
                    document.querySelector("div").textContent = "Your Zodaic sign is Capricon"
    });
            break;

        default:
        if (date < 1 || date === null) {
            addEventListener("click", function() {
                    document.querySelector("div").textContent = "Invalid Date"
        });
        } else if (date > 31) {
            addEventListener("click", function() {
                    document.querySelector("div").textContent = "Invalid Date"
        });
        } else {
            addEventListener("click", function() {
                document.querySelector("div").textContent = "Input Date";
        });
            
    }
}

}

var zodaicButtonChecker = document.querySelector(".sign-checker");
zodaicButtonChecker.addEventListener("click", zodaicSignChecker);


