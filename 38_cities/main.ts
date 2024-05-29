function describe_city(city: string, country:string = 'Default country.'){
    console.log('${city} is in ${country}');
}
describe_city('Karachi', 'Palistan');

describe_city('Tokyo', 'Japan');

describe_city('Paris');
