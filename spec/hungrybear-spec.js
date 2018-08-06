// import { HungryBear } from './../js/hungrybear.js';
//
// describe('HungryBear', function(){
//   let fuzzy = new HungryBear("Fuzzy");
//
//   beforeEach(function() {
//     jasmine.clock().install();
//     fuzzy.setHunger();
//   });
import { bear } from './../js/hungrybear.js';

describe('HungerBear', function() {
  let fuzzy = bear;

  beforeEach(function() {
    jasmine.clock().install();
    fuzzy.foodLevel = 10;
    fuzzy.sleepLevel = 0;
    fuzzy.name = "Fuzzy";
    fuzzy.setHunger();
    fuzzy.setSleepiness();
  });


  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level if 10 when it is created', function(){
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });

  it('should have a food level of 7 after 3001 milliseconds', function (){
    jasmine.clock().tick(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops belew zero', function(){
    fuzzy.foodLevel = 0;
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function(){
    jasmine.clock().tick(10001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should return that the bear ate blueberries and the food level should go up 5', function() {
    expect(fuzzy.eatSmall("blueberries")).toEqual("The bear ate the blueberries! Food level goes up 5!");
    console.log(fuzzy.foodLevel);
    expect(fuzzy.foodLevel).toEqual(15);
  });

  it('should return that the bear ate honey and the food level should go up 5', function() {
    expect(fuzzy.eatSpecialBonus("honey")).toEqual("The bear ate the honey! Food level goes up 100!");
    console.log(fuzzy.foodLevel);
    expect(fuzzy.foodLevel).toEqual(110);
  });

  it('should return that the bear ate a steak and the food level should go up 15 at 9 seconds', function() {
    expect(fuzzy.eatLarge("steak")).toEqual("The bear ate the steak! Food level goes up 15!");
    jasmine.clock().tick(9001);

    console.log(fuzzy.foodLevel);
    expect(fuzzy.foodLevel).toEqual(16);
  });

  it('should have a sleepy level of 2 after 4001 milliseconds', function (){
    jasmine.clock().tick(4001);
    expect(fuzzy.sleepLevel).toEqual(2);
    console.log(fuzzy.sleepLevel);
  });

  it('should have a sleepy level of 2 after 4001 milliseconds', function (){
    jasmine.clock().tick(82001);
    expect(fuzzy.sleepyBear()).toEqual(true);
    console.log(fuzzy.sleepLevel);
  });

  // it('should return that the bear ate a weird thing and the food level should go up some random number', function() {
  //   let test = fuzzy.eatWeirdThing("weird thing");
  //   if (test > 1){
  //     return true;
  //   }
  //   expect(test).toEqual(true);
  //   console.log(fuzzy.foodLevel);
  // });

  // it('should have a food level of ten if it is fed', function(){
  //   jasmine.clock().tick(9001);
  //   fuzzy.feed();
  //   console.log(fuzzy.foodLevel);
  //
  //   expect(fuzzy.foodLevel).toEqual(10);
  // });
});
