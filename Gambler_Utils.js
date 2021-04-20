let constant = require('./Gambler')
let monthCompute = require('./monthCount')
let compute = new monthCompute(constant)

class Gamblar{
    constructor(){ }

    randomCheck(){
        let rand = Math.floor(Math.random() * 10) % 2 + 1;
        return rand;
    }

    checkResult() {

        for (let day = 1; day <= constant.MONTHLY_DAYS; day++) {
        let result = constant.STACK_AMOUNT;
        while (result > constant.gambler_stack_loose && result < constant.gambler_stack_win) {
        if (this.randomCheck() == constant.BETTING_AMOUNT) {

                result = result + constant.BETTING_AMOUNT;
                //console.log(`Score: ${result}`);
            } else {
                result = result - constant.BETTING_AMOUNT;
                //console.log(`Score: ${result}`);
                }
            }  
            if (result > constant.gambler_stack_loose ) {
                console.log(`Game win day ${day} amount : $${result}`);
            } else {
                console.log(`Game loss day ${day} amount : $${result}`);
            }
            constant.monthly_investment += constant.STACK_AMOUNT;
            constant.monthly_stake += result;
        }
        compute.compute();
    }
}
module.exports = new Gamblar();