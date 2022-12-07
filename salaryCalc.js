
function getPayAsYouEarn(salary, personalRelief, insuranceRelief, pensionFund, housingRel, ownerOccupier, disabilityExem) {
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
console.log(getPayAsYouEarn(5000000, 1000, 30000, 20000, 1000, 6000, 200000))