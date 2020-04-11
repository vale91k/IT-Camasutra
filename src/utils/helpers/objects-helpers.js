export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
  
 return  items.map((x) => {
    if (x[objPropName] === itemId) {
      return { ...x, ...newObjProps};
    }
    return x;
  })
}