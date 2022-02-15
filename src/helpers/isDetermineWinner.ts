const isContained = (combination: number[], searchCombination: number[]) => {
    for (let i = 0; i < searchCombination.length; i++) {
        if (!combination.includes(searchCombination[i])) return false
    }
    return true
}

export const isDetermineWinner = (combination: number[], winnerCombination: number[][]) => {
    for (let i = 0; i < winnerCombination.length; i++) {
        if (isContained(combination, winnerCombination[i])) return true
    }
    return false
}
