function solution(survey, choices) {
    const character = { RT: 0, CF: 0, JM: 0, AN: 0 }
    
    choices.forEach((choice, index) => {
        const [a, b] = survey[index]
        const ascend = a.localeCompare(b)
        const score = (choice - 4) * ascend
        if(ascend > 0) character[b+a] += score
        else character[a+b] += score
    })
    
    return Object.keys(character).reduce((acc, cur) => {
        if(character[cur] < 0) acc+=cur[1]
        else acc+=cur[0]
        return acc
    }, "")
}