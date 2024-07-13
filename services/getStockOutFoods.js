async function getStockOutFoods() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const stockOutFoods = [
                { id: 1, name: 'Ice Cream', reason: 'Out of stock' },
                { id: 2, name: 'Salad', reason: 'Out of stock' },
            ];
            resolve(stockOutFoods);
        }, 100);
    });
}

module.exports = {
    getStockOutFoods
};
