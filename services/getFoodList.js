async function getFoodList() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const foodList = [
                { id: 1, name: 'Pizza', description: 'Delicious pizza with cheese', price: 10.99 },
                { id: 2, name: 'Burger', description: 'Juicy burger with  sauce', price: 8.49 },
            ];
            resolve(foodList);
        }, 115);
    });
}

module.exports = {
    getFoodList
};
