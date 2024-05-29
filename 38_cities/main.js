"use strict";
function describe_city(city, country = 'Default country.') {
    console.log('${city} is in ${country}');
}
describe_city('Karachi', 'Palistan');
describe_city('Tokyo', 'Japan');
describe_city('Paris');
