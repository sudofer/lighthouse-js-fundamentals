const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];




function chooseStations (stations){
  let destination = [];
  for (let station of stations){
    if (station[1] >= 20 && station[2] !== 'restaurant'){
      destination.push(station[0]);
    }
  }
return destination;
}

console.log(chooseStations(stations));