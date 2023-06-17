const chai = require('chai');	
const {expect, assert} = chai

const lottery = {

    buyLotteryTicket(ticketPrice, ticketCount, buy) {
      if (buy === false) {
        throw new Error("Unable to buy lottery ticket!");
      } else {
        if (ticketPrice <= 0 ||  ticketCount < 1 || typeof ticketPrice !== "number" || typeof ticketCount !== "number"|| typeof buy !== "boolean") {
          throw new Error("Invalid input!");
        } else {
          let totalPrice = ticketPrice * ticketCount;
          return `You bought ${ticketCount} tickets for ${totalPrice}$.`;
        }
      }
    },
   checkTicket(ticketNumbers, luckyNumbers) {
      if (!Array.isArray(ticketNumbers) || !Array.isArray(luckyNumbers) || ticketNumbers.length !== 6 || luckyNumbers.length !== 6
      ) {
        throw new Error("Invalid input!");
      }
    
      const uniqueTicketNumbers = ticketNumbers.filter(
        (number, index, array) => array.indexOf(number) === index
      );
      let winningNumbers = 0;
    
      for (const number of uniqueTicketNumbers) {
        if (luckyNumbers.includes(number)) {
          winningNumbers++;
        }
      }
    
      if (winningNumbers >= 3 && winningNumbers < 6) {
        return "Congratulations you win, check your reward!";
      } else if (winningNumbers === 6) {
        return "You win the JACKPOT!!!";
      }
    }
    ,
    secondChance(ticketID, secondChanceWinningIDs) {
      if (typeof ticketID !== "number" || !Array.isArray(secondChanceWinningIDs)) {
        throw new Error("Invalid input!");
      }
      if (secondChanceWinningIDs.includes(ticketID)) {
        return "You win our second chance prize!";
      } else {
        return "Sorry, your ticket didn't win!";
      }
    },
  };
  
  module.exports = lottery;
  
  describe("Lottery", function(){
    describe("buyLotteryTicket",function(){
        it('throw an error if invalid params',function(){
            assert.throw(()=> lottery.buyLotteryTicket(2, 39, false), "Unable to buy lottery ticket!")
            assert.throw(()=> lottery.buyLotteryTicket(0, 39, true), "Invalid input!")
            assert.throw(()=> lottery.buyLotteryTicket(1, 0, true), "Invalid input!")
            assert.throw(()=> lottery.buyLotteryTicket('adw', 0, true), "Invalid input!")
            assert.throw(()=> lottery.buyLotteryTicket(1, 'sdsdad', true), "Invalid input!")
            assert.throw(()=> lottery.buyLotteryTicket(44, 44, 'sds'), "Invalid input!")
        })

        it('correcr params => not error',function(){
            assert.equal(lottery.buyLotteryTicket(10,2, true), 'You bought 2 tickets for 20$.')
        })
    })

    describe('checkTicket',function(){
        it('shoud throw an error if parameters are invalid',function(){
            assert.throw(()=> lottery.checkTicket(0, [1,1,2,3,4,5]), "Invalid input!")
            assert.throw(()=> lottery.checkTicket([1,1,2,3,4,5], 22), "Invalid input!")
            assert.throw(()=> lottery.checkTicket(0, 'sdsd'), "Invalid input!")
            assert.throw(()=> lottery.checkTicket([1,2,3,4,5,6], [1,2,3,4,5]), "Invalid input!")
            assert.throw(()=> lottery.checkTicket([1,2,3,4,5,6], [1,2,3,4,5,6,7]), "Invalid input!")
            assert.throw(()=> lottery.checkTicket([1,2,3,4,5], [1,2,3,4,5,6]), "Invalid input!")
            assert.throw(()=> lottery.checkTicket([1,2,3,4,5,6,7], [1,2,3,4,5,6]), "Invalid input!")
        })

        it('make calculations based on the given parameters', function(){
            assert.equal(lottery.checkTicket([1,2,3,4,5,6],[1,2,3,88,99,99]), 'Congratulations you win, check your reward!')
            assert.equal(lottery.checkTicket([1,2,3,4,5,6],[1,2,3,4,99,99]), 'Congratulations you win, check your reward!')
            assert.equal(lottery.checkTicket([1,2,3,4,5,6],[1,2,3,4,5,99]), 'Congratulations you win, check your reward!')
            assert.equal(lottery.checkTicket([1,2,3,4,5,6],[1,2,3,4,5,6]), 'You win the JACKPOT!!!')
        })
    })

    describe('secondChance',function(){
        it('error output',function(){
            assert.throw(()=> lottery.secondChance('1wed', [1,2,3,4,5,6]), "Invalid input!")
            assert.throw(()=> lottery.secondChance(23, 34), "Invalid input!")
            assert.throw(()=> lottery.secondChance('1wed', {}), "Invalid input!")
        })

        it('corect otput',function(){
            assert.equal(lottery.secondChance(1,[1,2,3]), 'You win our second chance prize!')
            assert.equal(lottery.secondChance(1234,[1,2,3]), "Sorry, your ticket didn't win!")
        })
        
    })
  })