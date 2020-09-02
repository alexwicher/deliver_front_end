export function concatAux(arr1, arr2) {
    if (arr1 === undefined && arr2 === undefined) {
        return [];
    }
    if (arr1 === undefined || arr2 === undefined) {
        return arr1 === undefined ? arr2 : arr1;
    }
    return arr1.concat(arr2);
}