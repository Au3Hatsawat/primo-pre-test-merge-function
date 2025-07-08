export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const collection3Reversed: number[] = [];
  for (let i = collection_3.length - 1; i >= 0; i--) {
    collection3Reversed.push(collection_3[i]);
  }


  function mergeTwoArrays(arr1: number[], arr2: number[]): number[] {
    const result: number[] = [];
    let i = 0,
      j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        result.push(arr1[i++]);
      } else {
        result.push(arr2[j++]);
      }
    }
    // push remaining
    while (i < arr1.length) {
      result.push(arr1[i++]);
    }
    while (j < arr2.length) {
      result.push(arr2[j++]);
    }
    return result;
  }

  const mergedFirstTwo = mergeTwoArrays(collection_1, collection_2);
  return mergeTwoArrays(mergedFirstTwo, collection3Reversed);
}
