const groupingDoctors = (arr1, arr2) => {
  const result = [];
  const arr1Set = new Set(arr1); // Convert arr1 to a set for faster lookup
  arr2 = arr2.filter((value) => !arr1Set.has(value));
  for (let i = 0; i < arr2.length; i += 3) {
    if (arr2.slice(i, i + 3).length > 0) result.push(arr2.slice(i, i + 3));
  }
  return result;
};

export default groupingDoctors;
