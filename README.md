# TK5 calc input

For the [minigame in *Taiko Risshiden V DX*](https://wikiwiki.jp/taikou5dx/%E3%83%9F%E3%83%8B%E3%82%B2%E3%83%BC%E3%83%A0#k6908934).

See also [tcmrst/TaikouRisshiden-sanjutsu](https://github.com/tcmrst/TaikouRisshiden-sanjutsu).

## Install

Type `npm install`.

## Commands

* `npm test`: Test if the program is correct.
* `npm start`: The main program.

## Usage

Input three oprators and the last input must a number result. It will return an array with suitable numbers.

### Oprators

| Input | Oprator |
| ------ | ------ |
| + | + |
| - | − |
| * | × |
| / | ÷ |

### Examples

| Input | Output | Calculation |
| ----------- | ----------- |  ----------- |
| +-*1 | [1,6,2,3] | 1 + 6 − 2 × 3 = 1 |
| ++*9 | [2,3,1,4] | 2 + 3 + 1 × 4 = 9 |
| -/+3 | [1,6,2,5] | 1 − 6 ÷ 2 + 5 = 3 |
