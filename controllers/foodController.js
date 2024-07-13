const { getFoodList } = require('../services/getFoodList');
const { getAvailableLocations } = require('../services/getFoodLocation');
const { getNutritionalInfo } = require('../services/getNutritionalFood');
const { getStockOutFoods } = require('../services/getStockOutFoods');
const { mergeFoodData } = require('../utils/mergeUtils');

async function getFoodDetails(req, res) {
    try {

        const func1Data = await getFoodList();
        const func2Data = await getAvailableLocations();
        const func3Data = await getNutritionalInfo();
        const func4Data  = await getStockOutFoods();
 

        const mergedData = mergeFoodData(func1Data, func2Data, func3Data, func4Data);

        // console.log(res.json(mergedData));
    } catch (err) {
        console.error('Error fetching food details:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    getFoodDetails
};
