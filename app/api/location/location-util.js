import 'server-only';

const jsonFiles = {
  locationData: () => import('@/lib/location-data.json').then(m => m.default),
};



const getLocations = () => {
    return jsonFiles.locationData();
}

const getLocationByName = async (location) => {
    if(!location) return null;

    const data = await jsonFiles.locationData()
    const found = data.find((item) => item.location.toLowerCase() === location.toLowerCase());

    return found || {};
}

export { getLocations, getLocationByName };