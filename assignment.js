
// Function 1 - Kilometer To Meter Converter
function kilometerToMeter(meter){
    //checking if the value is valid
    if(meter < 0){
        return 'Distance can not be negative';
    }else{
        // converting kilometer to meter
        var kilometer = meter * 1000; // 1000 meter = 1 kilometer
        return kilometer;
    }
}
var value = kilometerToMeter(2.5);
console.log(value);


// Function 2 - Budget Calculator
function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop){
    // checking if value is valid
    if(numberOfWatch < 0 || numberOfPhone < 0 || numberOfLaptop < 0){
        return 'Please give a valid value';
    }else{
        // total cost 
        var totalCost = numberOfWatch * 50 + numberOfPhone * 100 + numberOfLaptop * 500;
        return totalCost;
    }
}

var total = budgetCalculator(2, 5, 4);
console.log(total);


// Function 3 - Hotel Cost Calculator
function hotelCost(stayingDays){
    // setting the initial value
    var totalRent = 0;

    // checking if value is valid
    if(stayingDays < 0){
        return 'Please give a valid value';
    } else if(stayingDays <= 10){
        // if stays within 10 days
        totalRent = stayingDays * 100;
    } else if(stayingDays <= 20){
        // if stays within 20 days
        var firstTenCost = 10 * 100;
        var remainingDays = 20 - stayingDays;
        var remainingDaysCost = remainingDays * 80;
        totalRent = firstTenCost + remainingDaysCost;
    } else{
        // if stays more than 20 days
        var firstTenCost = 10 * 100;
        var secondTenCost = 10 * 80;
        var remainingDays = stayingDays - 20;
        var remainingDaysCost = remainingDays * 50;
        totalRent = firstTenCost + secondTenCost + remainingDaysCost;
    }
    return totalRent;
}

var rentCost = hotelCost(85);
console.log(rentCost);

// Function 4 - Mega Friend || Finding the longest string
function megaFriend(arr){
    // Checking is the array empty
    if(arr.length == 0){
        return 'Array can not be empty';
    } else{
        // finding the longest string
        var longest = ''; // initial value
        for (var i = 0; i < arr.length; i++){
            var friend = arr[i].length;
            if (friend > longest){
                longest = friend;
                var longestName = arr[i]; // The longest string
            }
        }
        return longestName;
    }
}

var friends = ['Kamal', 'Jhuma', 'Mala', 'Shimul', 'Mim', 'Gita', 'Paru', 'Shorotchondro', 'Milon', 'Dipu'];
var result = megaFriend(friends);
console.log(result);