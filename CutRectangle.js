function cutRectangle(w, h) {
    if (w % 2 === 1 && h % 2 === 1) {
        return;
    }

    let dirs = [[0, -1], [-1, 0], [0, 1], [1, 0]];
    let grid = new Array(h);
    const stack = [];

    for (let i = 0; i < grid.length; i++) {
        grid[i] = new Array(w);
    }

    let half = Math.floor((w * h) / 2);
    let bits = Math.pow(2, half) - 1;
    let result = 0;

    for (; bits > 0; bits -= 2) {
        for (let i = 0; i < half; i++) {
            let r = Math.floor(i / w);
            let c = i % w;
            grid[r][c] = (bits & (1 << i)) != 0 ? 1 : 0;
            grid[h - r - 1][w - c - 1] = 1 - grid[r][c];
        }
        stack.push(0);
        grid[0][0] = 2;
        let count = 1;

        while (stack.length != 0) {
            let pos = stack.pop();
            let r = Math.floor(pos / w);
            let c = pos % w;

            for (let dir of dirs) {
                let nextR = r + dir[0];
                let nextC = c + dir[1];

                if (nextR >= 0 && nextR < h && nextC >= 0 && nextC < w) {
                    if (grid[nextR][nextC] === 1) {
                        stack.push(nextR * w + nextC);
                        grid[nextR][nextC] = 2;
                        count++;
                    }
                }
            }
        }
        if (count === half) {
            result++;
        }
    }
    return result;
};

console.log(cutRectangle(7, 4));