Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 1500)), 
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 500))
]).then((results) => {
console.log(results[0]);
console.log(results[1]);
console.log(results[2]);
});
