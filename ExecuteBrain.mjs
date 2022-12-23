import {fib, hello, bye} from './ExecuteBrainInput.mjs';

function brain(prog) {
    let output = '';
    let code;
    let ip = 0;
    let nest = 0;
    const ahead = [];

    const data = [0];
    let dp = 0;

    let inp = 0;
    let quit = 0;

    const commands = {
        '>': () => {if (++dp >= data.length) data[dp] = 0},
        '<': () => {if (--dp < 0) quit++},
        '+': () => {++data[dp]},
        '-': () => {--data[dp]},
        '[': () => {if (!data[dp]) ip = ahead[ip]; else ++nest},
        ']': () => {if (data[dp]) ip = ahead[ip]; else --nest},
        ',': () => {
            let c = document.getElementById('input').value.charCodeAt(inp++);
            data[dp] = isNaN(c) ? 0 : c;
        },
        '.': () => {output += String.fromCharCode(data[dp])}
    }


    let ar = prog.split('');
    const st = [];
    let back;
    let error = -1;
    for (ip = 0; ip < ar.length; ip++) {
        switch (ar[ip]) {
            case '[':
                st.push(ip);
                break;
            case ']':
                if (st.length === 0) error = ip;
                back = st.pop();
                ahead[ip] = back;
                ahead[back] = ip;
                break;    
        }
    }

    for (ip = 0; ip < ar.length; ip++) {
        if (commands.hasOwnProperty(ar[ip])) commands[ar[ip]]();
    }

    return output;
};

console.log(brain(fib));








