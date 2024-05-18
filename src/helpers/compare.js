/**
 * Deeply compares if two objects are equal.
 * @param {any} obj1 - First object to compare.
 * @param {any} obj2 - Second object to compare.
 * @return {boolean} - Returns true if obj1 and obj2 are deeply equal, otherwise false.
 */
export const areObjectsEqual = (obj1, obj2) => {
  // If same reference, they are equal
  if (obj1 === obj2) {
    return true;
  }

  // If not an object or null, Objects are no equal
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // If the number of keys is different, objects are not equal
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check each key deeply
  return keys1.every((key) => {
    // If the key doesn't exist in the other object, they are not equal
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }

    //Recursively check if the values of the corresponding keys are not deeply equal, objects are not equal
    return areObjectsEqual(obj1[key], obj2[key]);
  });
};

/**
 * Memo custom comparison function to compare deeply the old and new props
 * @param {object} oldProps - Old component's props.
 * @param {object} newProps - Newly received component's props.
 * @return {boolean} - Returns true if oldProps and newProps are deeply equal, otherwise false.
 */
export const arePropsEqual = (oldProps, newProps) => {
  return areObjectsEqual(oldProps, newProps);
};
