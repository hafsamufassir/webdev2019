const getSleepHours = day => {
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 7;
    } else if (day === 'wednesday') {
      return 5;
    } else if (day === 'thursday') {
      return 9;
    } else if (day === 'friday') {
      return 10;
    }
  };
  
  console.log(getSleepHours('tuesday'));
  
  const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday')+ getSleepHours('thursday')+ getSleepHours('friday');
  };
  
  const getIdealSleepHours = () => {
    var idealHours = 9;
    return idealHours * 5;
  };
  
  console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week
  
  console.log(getIdealSleepHours()); // if idealHours is 8, should print 56
  
  const calculateSleepDebt = () => {
      const actualSleepHours = getActualSleepHours();
      const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
    console.log('GREAT!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('Sleep less!');
  } else {
    console.log('Sleep more!');
  }
    if (actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  }
  };
  calculateSleepDebt();