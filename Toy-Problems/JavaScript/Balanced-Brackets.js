/*

Balanced Brackets

A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].

Two brackets are considered to be a matched pair if the opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().

Given n strings of brackets, determine whether each sequence of brackets is balanced. If a string is balanced, print YES on a new line; otherwise, print NO on a new line.

*/

function main(array) {
    let results = array.map(c => {
            let history = [];
            let ref = {
                braces: { 
                    open: '{', 
                    closed: '}' 
                },
                parenthesis: { 
                    open: '(', 
                    closed: ')' 
                },
                brackets: { 
                    open: '[', 
                    closed: ']' 
                }    
            }
        for (let i = 0; i < c.length; i++) {
            let historyLastValue = history[history.length - 1];
            let curr = c[i];
            let temp = null;
            // if it's a closing bracket, check for corresponding opening bracket
            if (curr === ref.braces.closed)
                if (historyLastValue !== ref.braces.open)
                    return 'NO';
                else
                    temp = history.pop();
            if (curr === ref.parenthesis.closed)
                if (historyLastValue !== ref.parenthesis.open)
                    return 'NO';
                else
                    temp = history.pop();
            if (curr === ref.brackets.closed)
                if (historyLastValue !== ref.brackets.open)
                    return 'NO';
                else
                    temp = history.pop();
            if (temp === null) 
                history.push(curr);
        }
        if (history.length !== 0)
            return 'NO'
        else
            return 'YES'
    });    
    let finalResult = results.reduce((string, result) => {
        return `${string}\n${result}`
    });
    return finalResult;
}


console.log(main(['{[()]}', '{[(])}', '{{[[(())]]}}']));
