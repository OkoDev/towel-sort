// You should implement your task here.

module.exports = towelSort = (matrix) =>
    Array.isArray(matrix) ?
        matrix.map((elem, i) =>
            i % 2 !== 0 ? elem.reverse() : elem).flat(2)
        : [];





