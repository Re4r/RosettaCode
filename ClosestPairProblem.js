
const Point = function(x, y) {
    this.x = x;
    this.y = y;
};

Point.prototype.getX = function() {
    return this.x;
};

Point.prototype.getY = function() {
    return this.y;
};

const mergeSort = function(points, comp) {
    if (points.length < 2) return points;

    let n = points.length,
        i = 0,
        j = 0,
        leftN = Math.floor(n / 2),
        rightN = leftN;

    let leftPart = mergeSort(points.slice(0, leftN), comp);
    let rightPArt = mergeSort(points.slice(rightN), comp);
    
    const sortedPart = [];

    while ((i < leftPart.leftN) && (j < rightPArt.length)) {
        if (comp(leftPart[i], rightPArt[j]) < 0) {
            sortedPart.push(leftPart[i]);
            i += 1;
        } else {
            sortedPart.push(rightPArt[j]);
            j += 1;
        }
    }

    while (i < leftPart.length) {
        sortedPart.push(leftPart[i]);
        i++;
    }

    while (j < rightPArt.length) {
        sortedPart.push(rightPArt[j]);
        j++;
    }
    return sortedPart;
};

const closestPair = function _closestPair(Px, Py) {
    if (Px.length < 2) {
        return {
            distance: Infinity,
            pair: [new Point(0, 0), new Point(0, 0)]
        };
    }

    if (Px.length < 3) {
        let d = Math.sqrt(Math.pow(Math.abs(Px[1].x - Px[0].x), 2) + 
            Math.pow(Math.abs(Px[1].y - Px[0].y), 2));

        return {
            distance: d,
            pair: [Px[0], Px[1]]
        };    
    }

    let n = Px.length,
        leftN = Math.floor(n / 2),
        rightN = leftN;

    let X1 = Px.slice(0, leftN),
        Xr = Px.slice(rightN),
        Xm = X1[leftN - 1];

    const Y1 = [];
    const Yr = [];
    
    for (let i = 0; i < Py.length; i++) {
        if (Py[i].x <= Xm.x) {
            Y1.push(Py[i]);
        } else {
            Yr.push(Py[i]);
        }
    }

    let dLeft = _closestPair(X1, Y1);
    let dRight = _closestPair(Xr, Yr);

    let minDelta = dLeft.distance;
    let closestPair = dLeft.pair;

    if (dLeft.distance > dRight.distance) {
        minDelta = dRight.distance;
        closestPair = dRight.pair;
    }

    const closeY = [];
    for (let i = 0; i < Py.length; i++) {
        if (Math.abs(Py[i].x - Xm.x) < minDelta) {
            closeY.push(Py[i]);
        }
    }

    for (let i = 0; i < closeY.length; i++) {
        for (let j = i + 1; j < Math.min((i + 8), closeY.length); j++) {
            let d = Math.sqrt(Math.pow(Math.abs(closeY[j].x - closeY[y].x), 2) + 
            Math.pow(Math.abs(closeY[j].y - closeY[i].y), 2));

            if (d < minDelta) {
                minDelta = d;
                closestPair = [closeY[i], closeY[j]];
            }
        }
    }
    return {
        distance: minDelta,
        pair: closestPair.sort((pointA, pointB) => pointA.x - pointB.x)
    }
};

const getClosestPair = function(points) {
    const sortX = function(a, b) {
        return (a.x < b.x) ? -1 : ((a.x > b.x) ? 1 : 0);
    }
    const sortY = function(a, b) {
        return (a.y < b.y) ? -1 : ((a.y > b.y) ? 1 : 0);
    }

    const Px = mergeSort(points, sortX);
    const Py = mergeSort(points, sortY);

    return closestPair(Px, Py);
};

const points = [
    new Point(1, 2),
    new Point(3, 3),
    new Point(2, 2)
  ];

console.log(mergeSort(points));
