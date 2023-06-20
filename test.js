const chai = require('chai');	
const {expect, assert} = chai

const findNewApartment = {
    isGoodLocation(city, nearPublicTransportation) {
      if (typeof city !== "string" || typeof nearPublicTransportation !== "boolean"){
          throw new Error("Invalid input!");
      }
      if (city !== "Sofia" && city !== "Plovdiv" && city !== "Varna") {
          return "This location is not suitable for you.";
      }else {
          if (nearPublicTransportation == true) {
              return "You can go on home tour!";
          }
          else {
              return "There is no public transport in area.";
          }
      }
    },
    isLargeEnough(apartments, minimalSquareMeters) {
      let resultArr = [];
      if (!Array.isArray(apartments) || typeof minimalSquareMeters !== "number" || apartments.length == 0) {
        throw new Error("Invalid input!");
      }
      apartments.map((apartment) => {
        if (apartment >= minimalSquareMeters) {
          resultArr.push(apartment);
        }
      });
      return resultArr.join(', ');
    },
    isItAffordable(price, budget) {
      if (typeof price !== "number" || typeof budget !== "number"
       || price <= 0 || budget <= 0) {
        throw new Error("Invalid input!");
      }
      let result = budget - price;
      if (result < 0) {
        return "You don't have enough money for this house!";
      } else {
        return "You can afford this home!";
      }
    },
  };
  
  describe('findNewApartment', function() {
    describe('isGoodLocation',function(){
        it('error couse of invalid input',function(){
            assert.throw(()=> findNewApartment.isGoodLocation(1, true), "Invalid input")
            assert.throw(()=> findNewApartment.isGoodLocation('dsd', '100'), "Invalid input")
            assert.throw(()=> findNewApartment.isGoodLocation(1, '100'), "Invalid input")
        })

        it('chech the location',function(){
            assert.equal(findNewApartment.isGoodLocation('pernik',true), "This location is not suitable for you.")
            assert.equal(findNewApartment.isGoodLocation('Sofia',true), "You can go on home tour!")
            assert.equal(findNewApartment.isGoodLocation('Sofia',false), "There is no public transport in area.")
            assert.equal(findNewApartment.isGoodLocation('Plovdiv',true), "You can go on home tour!")
            assert.equal(findNewApartment.isGoodLocation('Plovdiv',false), "There is no public transport in area.")
            assert.equal(findNewApartment.isGoodLocation('Varna',true), "You can go on home tour!")
            assert.equal(findNewApartment.isGoodLocation('Varna',false), "There is no public transport in area.")
        })
    })

    describe('isLargeEnough',function(){
       it('invalid parameters => error',function(){
        assert.throw(()=> findNewApartment.isLargeEnough(1, '100'), "Invalid input")
        assert.throw(()=> findNewApartment.isLargeEnough([], '100'), "Invalid input")
        assert.throw(()=> findNewApartment.isLargeEnough(['sds'], '100'), "Invalid input")
        assert.throw(()=> findNewApartment.isLargeEnough(1, 1), "Invalid input")
       })

       it('corect parameters => NOT error',function(){
        assert.equal(findNewApartment.isLargeEnough([10,50,40],40), '50, 40')
        assert.equal(findNewApartment.isLargeEnough([10,30,39],40), '')
        assert.equal(findNewApartment.isLargeEnough([120,302,41],40), '120, 302, 41')
       })
    })

    describe('isItAffordable',function(){
        it('invalid parameters => error AGAIN',function(){
         assert.throw(()=> findNewApartment.isItAffordable('a', '100'), "Invalid input")
         assert.throw(()=> findNewApartment.isItAffordable(-1, '100'), "Invalid input")
         assert.throw(()=> findNewApartment.isItAffordable(1 ,-100), "Invalid input")
         assert.throw(()=> findNewApartment.isLargeEnough(-1, -1), "Invalid input")
        })
 
        it('corect parameters => NOT error AGAIN',function(){
         assert.equal(findNewApartment.isItAffordable(40,20), "You don't have enough money for this house!")
         assert.equal(findNewApartment.isItAffordable(10,30),  "You can afford this home!")
         assert.equal(findNewApartment.isItAffordable(10,10), "You can afford this home!")
        })
     })
    
  })