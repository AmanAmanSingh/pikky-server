// services/func3Service.js

async function getNutritionalInfo() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const nutritionalInfo = [
                { id: 1, name: 'Pizza', calories: 800, carbs: 60, protein: 20 },
                { id: 2, name: 'Burger', calories: 600, carbs: 50, protein: 25 },
            ];
            resolve(nutritionalInfo);
        }, 300);
    });
}

module.exports = {
    getNutritionalInfo
};
