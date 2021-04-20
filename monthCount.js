let constant = require('./Gambler')

class MonthlyCompute{
    constructor(){}

    compute(){
        
        if(constant.monthly_stake > constant.monthly_investment) {

            let total = constant.monthly_stake - constant.monthly_investment ;
            console.log(`\nGambler Won $${total} in this month`)
        } else {
            
            let total =  constant.monthly_investment - constant.monthly_stake ;
            console.log(`\nGambler Loss $${ total } in this month`) 
        }
    }
}

module.exports = MonthlyCompute;