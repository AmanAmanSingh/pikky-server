function mergeFoodData(func1Data, func2Data, func3Data, func4Data) {
    return {
        foodList: func1Data,
        locations: func2Data,
        nutritionalInfo: func3Data,
        stockOutFoods: func4Data
    };
}

module.exports = {
    mergeFoodData
};