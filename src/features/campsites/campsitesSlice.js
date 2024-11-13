import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectAllCampsites = () => {
    return CAMPSITES
};

export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
};

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured);
};

//export const selectRandomCampsite = () => {
  //  return CAMPSITES[Math.floor(CAMPSITES.length *  Math.random())];
//}

// Write the code to retrieve a random object from the CAMPSITES array, and return it from selectRandomCampsite
// use Math.random(), Math.floor(), and CAMPSITES.length