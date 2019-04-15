let raceNumber = Math.floor(Math.random() * 1000);
const registered = false;
var age = 18;
if(age > 18 && registered) {
  raceNumber += 1000;
}
 if(age > 18 && registered){
   console.log(`You will race at 9.30 am and your race number is: ${raceNumber}`);
 }else if(age > 18 && !registered){
   console.log(`Late adults run at 11:00 am and their race number is: ${raceNumber}`);
 }else if(age < 18){
   console.log(`Youth registrants run at 12:30 pm and their race number is: ${raceNumber}`);
 }else{
   console.log("See the registration desk.")
 }