export let bear = {
  foodLevel: 10,
  sleepLevel: 0,

  setHunger: function() {
    const hungerInterval = setInterval(() => {
      this.foodLevel--;
      if (this.didYouGetEaten() == true){
        clearInterval(hungerInterval);
        return "You got eaten!";
      }
    }, 1000);
  },

  didYouGetEaten: function(){
    if (this.foodLevel > 0){
      return false;
    } else {
      return true;
    }
  },

  feed: function(amount){
    let that = this;
    return function(food) {
      that.foodLevel += amount
      return `The bear ate the ${food}! Food level goes up ${amount}!`
    }
  },

  setSleepiness: function() {
    const sleepinessInterval = setInterval(() => {
      this.sleepLevel++;
      if (this.sleepyBear() == true){
        clearInterval(sleepinessInterval);
        return "Bear fell asleep";
      }
    }, 2000);
  },

  sleepyBear: function(){
    if (this.sleepLevel > 40) {
      return true;
    }
  }

};

bear.eatSmall = bear.feed(5);
bear.eatMedium = bear.feed(10);
bear.eatLarge = bear.feed(15);
bear.eatYuck = bear.feed(-10);
bear.eatPowerUp = bear.feed(50);
bear.eatSpecialBonus = bear.feed(100);
bear.eatWeirdThing = bear.feed(Math.floor((Math.random() * 20) + 1));
//
// export class HungryBear{
//   constructor(name){
//     this.name = name;
//     this.foodLevel = 10;
//   }
//
//   setHunger() {
//     setInterval(() => {
//       this.foodLevel--;
//     },1000);
//   }
//
//   didYouGetEaten() {
//     if (this.foodLevel > 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }
//
//   feed() {
//     this.foodLevel = 10;
//   }
// }
