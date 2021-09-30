const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');



const nameOfDate = ()=>{

    let date = new Date();
    let weekDay = date.getDay()
    
    switch(weekDay) {
        case 0: 
            nameOfDay = 'Sunday';
            break;
        case 1:
            nameOfDay = 'Monday'; 
            break;
        case 2:
            nameOfDay = 'Tuesday';
            break;
        case 3:
            nameOfDay = 'Wednesday'; 
            break;
        case 4:
            nameOfDay = 'Thursday';
            break;
        case 5:
            nameOfDay = 'Friday';
            break;
        case 6:
            nameOfDay = 'Saturday';
            break;
        
    }
    
    return nameOfDay;
}

Given(/today is (Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)/, function (day) {
     assert.strictEqual(nameOfDate(), day)
    // console.log("It is not", day);
  });

// When('I ask whether it\'s Friday yet', function () {
//            // Write code here that turns the phrase above into concrete actions
//            return 'pending';
//          });

// Then('I should be told {string}', function (string) {
//          // Write code here that turns the phrase above into concrete actions
//           return 'pending';
// });
          