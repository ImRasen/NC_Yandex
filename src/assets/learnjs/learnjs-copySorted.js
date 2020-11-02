function copySorted(arr) {
    let copyArray = arr.map( (a) => a );
    copyArray.sort();
    return copyArray;
}