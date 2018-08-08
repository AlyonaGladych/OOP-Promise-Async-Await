console.log(`1`);
console.log(`2`);

new Promise((resolve, reject) => setTimeout(() => {
    console.log(`3`);
    resolve();
}, 1000)).then(() => {
    console.log(`4`);
});

