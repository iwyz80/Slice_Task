const _ = require("lodash");

 const checkInputFormat = (input) => {
    // check basics
    if (
        !input ||
        !input.length ||
        input.indexOf("(") < 0 ||
        input.indexOf(")") < 0
    )
        return false;

    // check 5x5
    let grid = input.slice(0, 4).split("");

    if (!_.isEmpty(grid)) {
        grid.forEach((gd, index) => {
            if (
                (index === 0 && !Number.isInteger(Number(gd))) ||
                (index === 1 && gd !== "x") ||
                (index === 2 && !Number.isInteger(Number(gd))) ||
                (index === 3 && gd !== " ")
            )
                return false;
        });
    }

    // check coords
    input = input.slice(4);
    if (input[0] !== "(" || input[input.length - 1] !== ")") return false;

    let openIndex = 0;
    for (let i = 1; i < input.length; i++) {
        if (
            (i === openIndex + 1 && !Number.isInteger(Number(input[i]))) ||
            (i === openIndex + 2 && input[i] !== ",") ||
            (i === openIndex + 3 && input[i] !== " ") ||
            (i === openIndex + 4 && !Number.isInteger(Number(input[i]))) ||
            (i === openIndex + 5 && input[i] !== ")") ||
            (i === openIndex + 6 && input[i] !== " ")
        )
            return false;

        if (input[i] === "(") {
            openIndex = i;
        }
    }

    return true;

}


module.exports = { checkInputFormat }
