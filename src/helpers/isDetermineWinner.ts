const isContained = (combination: number[], searchCombination: number[]) => {
    let res = []
    for (let i = 0; i < searchCombination.length; i++) {
        !combination.includes(searchCombination[i]) ? res.push(false) : res.push(true)
    }
    return !res.includes(false)
}

export const isDetermineWinner = (combination: number[], winnerCombination: number[][]) => {
    let res = []
    for (let i = 0; i < winnerCombination.length; i++) {
        isContained(combination, winnerCombination[i]) ? res.push(true) : res.push(false)
    }
    return res.includes(true)
}
