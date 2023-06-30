const number = function(busStops){
    // Good Luck!
    let numOnBus = 0;
    busStops.forEach(busStop => {
        numOnBus += busStop[0];
        numOnBus -= busStop[1];
        return numOnBus;
    });
    return numOnBus;
  }