import { strictEqual } from "assert";
import { check_format, check_result } from "../app/check-calc.js";

describe("ClacApp", () => {
    describe("Check format", () => {
        it("should refuse non array format", () => {
            strictEqual( check_format( null, 3 ), false );
        });
        it("should refuse incorrect opreators", () => {
            const result = check_format( ["+","*",8], [1,6,2,5] );
            strictEqual( result, false );
        });
        it("should refuse incorrect numbers", () => {
            const result = check_format( ["+","-","-",1], [0,2] );
            strictEqual( result, false );
        });
        it("should refuse depucliate input", () => {
            const no_same_input = check_format( ["+","-","*",0], [1,9,9,1] );
            strictEqual( no_same_input, false );
        });
        it("Last opreators must be a number", () => {
            strictEqual( check_format(
                ["+","*","-","="],
                [1,6,2,5],
            ), false );
        });
        it("can ckeck correct input", () => {
            strictEqual( check_format(
                ["+","*","-",8],
                [1,6,2,5],
            ), true );
        });
    });

    describe("Check calcuation", () => {
        it("returns false for incorrect inpus", () => {
            strictEqual( check_result( undefined, undefined ), false );
        });
        it("can get ckeck result", () => {
            strictEqual( check_result( ["+","*","-",8], [1,6,2,5] ), true );
            strictEqual( check_result( ["-","*","+",7], [2,4,1,9] ), true );
        });
    });
});