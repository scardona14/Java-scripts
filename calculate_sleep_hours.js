// This is a simple program that calculates the amount of sleep 
// you have gotten in a week and compares it to the ideal amount of sleep you should have gotten in a week.
// The program uses a function that takes a day of the week as an argument and returns the number of hours you slept that day.
// The program then uses another function that calculates the actual amount of sleep you have gotten in a week.

//Author: Sean Cardona
// From: Codecademy

const getSleepHours = day => {

    switch(day) {
      case 'monday':
        return 8
        break;
      case 'tuesday':
        return 7
        break;
      case 'wednesday':
        return 10
        break;
      case 'thursday':
        return 9
        break;
      case 'friday':
        return 4
        break;
      case 'saturday':
        return 2
        break;
      case 'sunday':
        return 12
        break;
      default:
        return 'Error!'
      }
    };
    
    const getActualSleepHours = () => 
      getSleepHours('monday') +
      getSleepHours('tuesday') +
      getSleepHours('wednesday') + 
      getSleepHours('thursday') +
      getSleepHours('friday') +
      getSleepHours('saturday') +
      getSleepHours('sunday');  
    
    console.log(getSleepHours('monday'));
    console.log(getActualSleepHours());
    
    const getIdealSleepHours = () => {
      let idealHours = 8;
      return idealHours * 7;
    };
    
    const calculateSleepDebt = () => {
      const actualSleepHours = getActualSleepHours();
      const idealSleepHours = getIdealSleepHours();
    
      if(actualSleepHours === idealSleepHours) {
        console.log('You have got the perfect amount of sleep!');
      }
      else if(actualSleepHours > idealSleepHours) {
        console.log('You have got' + (idealSleepHours - actualSleepHours) + 'more hours of sleep this week. ');
      }
      else if(actualSleepHours < idealSleepHours){
        console.log('You should get some rest because you have slept ' + (idealSleepHours - actualSleepHours) + ' hours less than you should have this week. ');
      }
      else {
        console.log('Error! Something went wrong, check your code! ');
      }
    };
    
    calculateSleepDebt();