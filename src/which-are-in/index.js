function inArray(array1,array2){
    const result = []
  
    array1.forEach(item1 => {
      if(result.includes(item1)) {
        return
      }
      
      if(array2.some(item2 => item2.includes(item1))) {
        result.push(item1)
      }
    })
    
    return result.sort()
  }

module.exports = inArray