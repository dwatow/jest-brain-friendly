function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('peanut butter'), 100)
    })
}

function fetchData1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('error'), 100)
    })
}

module.exports = {
    fetchData,
    fetchData1
}