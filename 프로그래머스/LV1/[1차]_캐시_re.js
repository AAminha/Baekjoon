function solution(cacheSize, cities) {
    const cache = []
    let result = 0
    
    cities.forEach((city) => {
        city = city.toLowerCase()
        const index = cache.indexOf(city)
        if(index > -1) {
            result += 1
            cache.splice(index, 1)
        } else {
            result += 5
        }
        
        cache.unshift(city)
        
        if(cache.length > cacheSize) {
            cache.pop()
        }
    })
    
    return result
}