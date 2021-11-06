const fetchData = ms => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('peanut butter');
    }, ms);
});

fetchData(1000).then(console.log);
