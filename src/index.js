module.exports = function towelSort(matrix = []) {

    let cloneMatrix = matrix.map(function (item) {
        return [...item];
    })

    for (let i = 1; i < cloneMatrix.length; i += 2) {
        cloneMatrix[i].reverse();
    }

    return [].concat(...cloneMatrix);
}
