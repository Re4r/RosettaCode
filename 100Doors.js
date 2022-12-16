function getFinalOpenedDoors(numDoors) {
    const doors = [];
    let i = 1;
    let ii = i * i;

    while (ii <= numDoors) {
        doors.push(ii);
        i++; 
        ii = i * i;
    }
    return doors;
}

console.log(getFinalOpenedDoors(100));