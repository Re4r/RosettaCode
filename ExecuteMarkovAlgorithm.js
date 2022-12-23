function markov(rules, data) {
    let pattern = new RegExp('^([^#]*?)\\s+->\\s+(\\.?)(.*)');
    let originData = data;
    const captures = [];

    rules.forEach((rule) => {
        let m = pattern.exec(rule);
        for (let j = 0; j < m.length; j++) {
            m[j] = m[j + 1];
        }
        captures.push(m);
    });

    data = originData;
    let copy = data;
    for (let j = 0; j < captures.length; j++) {
        let c = captures[j];
        data = data.replace(c[0], c[2]);
        if (c[1] === '.') break;
        if (data !== copy) {
            j = -1;
            copy = data;
        }
    }
    return data;
};

let rules=[["A -> apple","B -> bag","S -> shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],
            ["A -> apple","B -> bag","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],
            ["A -> apple","WWWW -> with","Bgage -> ->.*","B -> bag","->.* -> money","W -> WW","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],
            ["_+1 -> _1+","1+1 -> 11+","1! -> !1",",! -> !+","_! -> _","1*1 -> x,@y","1x -> xX","X, -> 1,1","X1 -> 1X","_x -> _X",",x -> ,X","y1 -> 1y","y_ -> _","1@1 -> x,@y","1@_ -> @_",",@_ -> !_","++ -> +","_1 -> 1","1+_ -> 1","_+_ -> "],
            ["A0 -> 1B","0A1 -> C01","1A1 -> C11","0B0 -> A01","1B0 -> A11","B1 -> 1B","0C0 -> B01","1C0 -> B11","0C1 -> H01","1C1 -> H11"]];

let datas=["I bought a B of As from T S.",
            "I bought a B of As from T S.",
            "I bought a B of As W my Bgage from T S.",
            "_1111*11111_",
            "000000A000000"];

let outputs=["I bought a bag of apples from my brother.",
            "I bought a bag of apples from T shop.",
            "I bought a bag of apples with my money from T shop.",
            "11111111111111111111",
            "00011H1111000"];


console.log(markov(rules[1], datas[1]));            

