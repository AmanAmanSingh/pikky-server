async function getAvailableLocations() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const locations = [
                { id: 1, name: 'Restaurant A', location: 'Goa, India' },
                { id: 2, name: 'Restaurant B', location: 'Mumbai, India' },
            ];
            resolve(locations);
        }, 2 * 60 * 1000);
    });
}

module.exports = {
    getAvailableLocations
};
