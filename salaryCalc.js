
function getPayAsYouEarTax(salary, personalRelief, insuranceRelief, pensionFund, housingRel, ownerOccupier, disabilityExem) {
    const personalReliefLim = 2400
    const insuranceReliefLim = 5000
    const pensionFundLim = 20000
    const housingRelLim = 9000
    const ownerOccupierLim = 25000
    const disabilityExemLim = 150000

    const personalReliefAct = findLim(personalRelief, personalReliefLim)
    const insuranceReliefAct = findLim(insuranceRelief, insuranceReliefLim)
    const pensionFundAct = findLim(pensionFund, pensionFundLim)
    const housingRelAct = findLim(housingRel, housingRelLim)
    const ownerOccupierAct = findLim(ownerOccupier, ownerOccupierLim)
    const disabilityExemAct = findLim(disabilityExem, disabilityExemLim)

    var excemptionsTotal = personalReliefAct + insuranceReliefAct + pensionFundAct + housingRelAct + ownerOccupierAct + disabilityExemAct

    return getPayETaxValue(salary) - excemptionsTotal;
}


function findLim(actualValue, limit) {
    if (actualValue >= limit) {
        return limit
    } else {
        return actualValue
    }
}

function getPayETaxValue(salary) {
    if (salary <= 24000) {
        return salary * 0.1
    } else if (salary <= 32333) {
        return salary * 0.25
    } else {
        return salary * 0.3
    }
}

function nhifDeduction(salary){
    if (salary <= 5999){
      return 150
    }else if (salary <= 7999){
      return 300
    }else if (salary <= 11999){
      return 400
    }else if (salary <= 14999){
      return 500
    }else if (salary <= 19999){
      return 600
    }else if (salary <= 24999){
      return 750
    }else if (salary <= 29999){
      return 850
    }else if (salary <= 34999){
      return 900
    }else if (salary <= 39999){
      return 950
    }else if (salary <= 44999){
      return 1000
    }else if (salary <= 49999){
      return 1100
    }else if (salary <= 59999){
      return 1200
    }else if (salary <= 69999){
      return 1300
    }else if (salary <= 79999){
      return 1400
    }else if (salary <= 89999){
      return 1500
    }else if (salary <= 99999){
      return 1600
    }else {
      return 1600
    }
  }

  function nssfDeduction(salary, otherPension){
    let nssfT1;
    let nssfT2;
    if (salary <= 6000){
          nssfT1 = salary * 0.06
      return nssfT1;
    }else if (salary > 6000 && otherPension > 0){
      nssfT1 = (6000 * 0.06) + otherPension
    }else {
      nssfT1 =  (6000 * 0.06)
      if (salary >= 18000){
        nssfT2 = 12000 * 0.06
        return nssfT1 + nssfT2
      }else{
        nssfT2 = (salary - 6000) * 0.06
        return nssfT1 + nssfT2;
      }
    }
  }
  
  

  function getNetSalary(salary, personalRelief, insuranceRelief, pensionFund, housingRel, ownerOccupier, disabilityExem, otherPension){

    return salary - getPayAsYouEarTax(salary, personalRelief, insuranceRelief, pensionFund, housingRel, ownerOccupier, disabilityExem) - nhifDeduction(salary) - nssfDeduction(salary, otherPension)

  }




console.log(getNetSalary(5000000, 1000, 30000, 20000, 1000, 6000, 200000, 0))