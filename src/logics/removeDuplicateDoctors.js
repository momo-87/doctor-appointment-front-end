const removeDuplicateDoctors = (arr1, arr2) => {
  const arr1Set = new Set(arr1); // Convert arr1 to a set for faster lookup
  arr2 = arr2.filter((value) => !arr1Set.has(value));
  return arr2;
};

export default removeDuplicateDoctors;
