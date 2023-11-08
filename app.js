import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { get_suitable_number } from "./app/check-calc.js";

function get_operators(text = "")
{
    const operators = text.replace(",", "").split("");
    operators[operators.length - 1] = Number(operators[operators.length - 1]);
    return operators;
}

const rl = readline.createInterface({ input, output });
const answer = await rl.question("Input oprators: ");

const operators = get_operators(answer);
console.log( "Result: ", get_suitable_number(operators) );

rl.close();

