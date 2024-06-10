import inquirer from "inquirer";

const atm_pin:number = 1234;

const myBalance:number = 50000;

let answer = await inquirer.prompt([{
name:"Q1",
message:"Enter Your four digit ATM Pin!",
type:"number"
}])


if (answer.Q1 == atm_pin){

let answer1 = await inquirer.prompt([{
  name:"Q2",
  message:"Select Type of Account",
  type:"list",
  choices:["Current Account","Savings Account"]  
},
{
    name:"Q3",
    message:"Select an operation!",
    type:"list",
    choices:["Cash Withdrawal","Balance Inquiry","Funds Transfer","Utility Bills Payment"]
}])

    switch(answer1.Q3)
    {
    case "Cash Withdrawal":

let answer2 = await inquirer.prompt([{

    name:"Q4",
    message:"Select the Amount",
    type:"list",
    choices:["5000","10000","20000","OtherAmount"]
}])
 if(answer2.Q4 =="OtherAmount"){
        
    let answer3 = await inquirer.prompt([{
        name:"Q5",
        message:"Enter the Amount:",
        type:"number"
        
    }]) 
    if(answer3.Q5 <1000 ||answer3.Q5>20000 || answer3.Q5 % 500 !== 0){
        console.log("Please enter a valid amount!");
    }
    else if(answer2.Q4 > myBalance){
        console.log("Insufficient Balance!");
    }      
    else {
    myBalance - answer2.Q4
    console.log ("Thankyou for using ATM!");
    } }
break;
case "Balance Inquiry":
    console.log(myBalance);
    console.log ("Thankyou for using ATM!");
break;
case "Funds Transfer":
let answer4 = await inquirer.prompt([{
    name:"Q6",
    message:"Enter the Acccount No.",
    type:"input"
},
{
    name:"Q7",
    message:"Enter the amount:",
    type:"number"
}])
if( answer4.Q7 > myBalance){
    console.log("Insufficient Balance!");
}
else{
    console.log(`${answer4.Q7} has been transferred to ${answer4.Q6}`);
    myBalance - answer4.Q7;
    console.log ("Thankyou for using ATM!");
}
break;
case "Utility Bills Payment":
    console.log("Sorry! This service is not available at the moment.");
break;
}
}
else {
         console.log("Sorry! You entered the wrong ATM Pin");
     }

    
