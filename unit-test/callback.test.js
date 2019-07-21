function fetchData(callback) {
    const btn = document.createElement('bottom')
    btn.addEventListener('click', callback)
    btn.value = 'peanut butter'
    btn.click()
}

test.only('calback', next => {
    fetchData((e) => {
        expect(e.target.value).toBe('peanut butter');
        next();
    });    
});

