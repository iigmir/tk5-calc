export const check_format = (opreators = [], numbers = []) =>
{
    // Array format check
    const array_failed = !Array.isArray(opreators) || !Array.isArray(numbers);
    if( array_failed ) return false;

    // Length check
    const correct_array_length = 4;
    const filtered_numbers = [...new Set(numbers)];
    const length_failed = opreators.length !== correct_array_length || filtered_numbers.length !== correct_array_length;
    if( length_failed ) return false;

    // Last opreators must be a number
    const last_opreator = Number(opreators[correct_array_length - 1]);
    if( isNaN(last_opreator) ) return false;

    // const opreator_checks = opreators;

    // Otherwise return true
    return true;
};

/**
 * check_result( ["+","*","-",8], [1,6,2,5] ) => Return true since 1 + 6 * 2 - 5 = 8
 * check_result( ["-","*","+",7], [2,4,1,9] ) => Return true since 2 - 4 * 1 + 9 = 7
 * @param {Array} operators The first, second, and the third element must be "+", "-", "*", "/". The last element must always the result number.
 * @param {Array} numbers All numbers.
 * @returns 
 */
export const check_result = (operators = [], numbers = []) =>
{
    if( !check_format(operators, numbers) )
    {
        return false;
    }
    const expression = numbers.map( (num, idx, ary) => idx === ary.length - 1 ? `${num}` : `${num} ${operators[idx]}` ).join(" ");
    /**
     * @see [Never use eval()!](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!)
     */
    const executed_result = eval?.(`"use strict";${expression}`);
    const expected_result = operators[ operators.length - 1 ];
    return executed_result === expected_result;
};

export const get_permutation = () =>
{
    const source_array = Array.from({ length: 10000 }, (_, index) => index + 1);
    const get_unique_numbers = number => /^(?!.*(\d).*\1)(?!.*0)\d+$/g.test(String(number));
    const filtered_array = source_array.filter( get_unique_numbers ).filter( number => number > 999 );
    return filtered_array.map( number => String( number ).split( "" ).map( t => Number(t) ) );
};

/**
 * 
 * @param {Array} operators The first, second, and the third element must be "+", "-", "*", "/". The last element must always the result number.
 * @returns 
 */
export const get_suitable_number = (operators = []) =>
{
    const main = (operators = [], permutation = [], index = 0) =>
    {
        if( !check_format(operators, permutation[index]) )
        {
            console.warn("Format invalid");
            return [];
        }
        else if( index > permutation.length )
        {
            console.warn("No suitable result");
            return [];
        }
        else if( check_result(operators, permutation[index]) )
        {
            return permutation[index];
        }
        return main( operators, permutation, index + 1 );
    };
    return main( operators, get_permutation(), 0 );
};
