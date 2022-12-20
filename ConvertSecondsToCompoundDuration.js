function convertToSeconds(sec) {

    function secToUnits(unitInSec) {
        const converted = Math.floor(sec / unitInSec);
        sec -= converted * unitInSec;
        return converted;
    };

    function addComma() {
        return (sec === 0) ? '' : ', ';
    };

    function secToUnitString(time, notation) {
        const converted = secToUnits(time);
        return (converted === 0) ? '' : converted + ' ' + notation + addComma();
    };

    return secToUnitString(604800, 'wk') +
        secToUnitString(86400, 'd') +
        secToUnitString(3600, 'hr') +
        secToUnitString(60, 'min') +
        secToUnitString(1, 'sec');

};

console.log(convertToSeconds(86453));

