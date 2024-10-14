import input from "./input.js"
//1. Feladat
let year = 2023;
function isLeapYear(year) {
    if(year % 4 == 0){
        if(year % 100 == 0){
            if(year % 400 == 0){
        return true;
        }
        return false;
        }
    return true;
}
    return false;
}
console.log(isLeapYear(year));

//2.Feladat
let number = 90;
function divisors(number) {
    let result = [];
    for(let i = 1; i<=number; i++){
        if(number % i == 0){
            result.push(i);
        }
        
    }
    return result;
    }
console.log(divisors(number))
//3. Feladat
let player1 = 1;
let player2 = 0;
function stonePaperScissorsWinner(player1, player2) {
    if (player1 == player2){
        return "The game is a tie";
    }
    if((player1 == 0 && player2 == 1) || (player1 == 1 && player2 == 2) || (player1 == 2 && player2 == 0)){
        return "The first player wins.";
    }
    else{
        return "The second player wins.";
    }
    } 
console.log(stonePaperScissorsWinner(player1,player2));
//4. Feladat
let score = 70;
let maximum = 100;
function gradeCalculator(score, maximum) {
    let percentage = (score / maximum) * 100;
    if (percentage >= 90){
        return "A";
    }
    else if(percentage>=80){
        return "B";
    }
    else if(percentage>=70){
        return "C";
    }
    else if(percentage>=60){
        return "D";
    }
    else if (percentage>=50){
        return "E";
    }
    else if (percentage>=0){
        return "F";
    }
    }
console.log(gradeCalculator(score,maximum))