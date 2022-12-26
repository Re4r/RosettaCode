function hashJoin(hash1, hash2) {
    const hJoin = (tblA, tblB, strJoin) => {
      const [jA, jB] = strJoin.split('=');
      const M = tblB.reduce((a, x) => {
        const id = x[jB];
        return (
          a[id] ? a[id].push(x) : (a[id] = [x]),
          a
        );
      }, {});
  
      return tblA.reduce((a, x) => {
        const match = M[x[jA]];
        return match ? (
                  a.concat(match.map(row => dictConcat(x, row)))
              ) : a;
      }, []);
    };
  
    const dictConcat = (dctA, dctB) => {
      const ok = Object.keys;
      return ok(dctB).reduce(
              (a, k) => (a[`B_${k}`] = dctB[k]) && a,
              ok(dctA).reduce(
                  (a, k) => (a[`A_${k}`] = dctA[k]) && a, {}
              )
          );
    };
  
    return hJoin(hash1, hash2, 'name=character');
  };

const hash1 = [
    { age: 27, name: 'Jonah' },
    { age: 18, name: 'Alan' },
    { age: 28, name: 'Glory' },
    { age: 18, name: 'Popeye' },
    { age: 28, name: 'Alan' }
];

const hash2 = [
    { character: 'Jonah', nemesis: 'Whales' },
    { character: 'Jonah', nemesis: 'Spiders' },
    { character: 'Alan', nemesis: 'Ghosts' },
    { character: 'Alan', nemesis: 'Zombies' },
    { character: 'Glory', nemesis: 'Buffy' },
    { character: 'Bob', nemesis: 'foo' }
];

console.table(hashJoin(hash1, hash2));

