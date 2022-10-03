const getOrderedList = items => Array.from(items).sort()

function inArray(array1, array2) {
    const itemsIn = new Set()
  
    array1.forEach(item1 => {
      if(array2.some(item2 => item2.includes(item1))) {
        itemsIn.add(item1)
      }
    })

    return getOrderedList(itemsIn)
}

module.exports = inArray