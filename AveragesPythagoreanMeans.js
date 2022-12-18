function pythagoreanMeans(rangeArr) {
    
    const arithmeticMean = xs =>
      foldl((sum, n) => sum + n, 0, xs) / length(xs);
  
    const geometricMean = xs =>
      raise(foldl((product, x) => product * x, 1, xs), 1 / length(xs));
  
    const harmonicMean = xs =>
      length(xs) / foldl((invSum, n) => invSum + (1 / n), 0, xs);
  
    const ap = (fs, xs) => //
      Array.prototype.concat(...fs.map(f => //
        Array.prototype.concat(...xs.map(x => [f(x)]))));
  
    const foldl = (f, a, xs) => xs.reduce(f, a);
  
    const length = xs => xs.length;
  
    const mapFromList = kvs =>
      foldl((a, [k, v]) =>
        (a[(typeof k === 'string' && k)] = v, a), {}, kvs);
  
    const raise = (n, e) => Math.pow(n, e);
  
    const zip = (xs, ys) =>
      xs.slice(0, Math.min(xs.length, ys.length))
        .map((x, i) => [x, ys[i]]);
  
    const mean = mapFromList(zip(
      ['Arithmetic', 'Geometric', 'Harmonic'],
      ap([arithmeticMean, geometricMean, harmonicMean], [
        rangeArr
      ])
    ));
  
    return {
      values: mean,
      test: `is A >= G >= H ? ${mean.Arithmetic >= mean.Geometric &&
        mean.Geometric >= mean.Harmonic ? 'yes' : 'no'}`
    };
  }

console.log(pythagoreanMeans([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));