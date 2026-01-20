const prompt = require("prompt-sync")();

//method for entering userAge
function enterUserAge()
{
    let userAge;

    while (isNaN(userAge))
    {
        userAge = Number(prompt("\nEnter your age, to check your eligibility -> "));

        if (isNaN(userAge) || userAge <= 0 || userAge >= 150) { console.log("Must be a number in the range from 0 to 150, try again!"); continue; }
    }

    return userAge;
}

//method for verifying the user's age
function checkAge()
{
    let resultLegalAge;
    
    if (userAge < 18) { resultLegalAge = "isFalse"; }
    if (userAge >= 18) { resultLegalAge = "isTrue"; } 

    return resultAge;
}

//method for verifying the ability to purchase alcohol
function buyAlcohol()
{
    if (resultLegalAge === "isTrue") { console.log(``); }
    if (resultLegalAge === "isFalse") { console.log(``); }
}

//method for checking driving ability
function driveCar()
{
    if (resultLegalAge === "isTrue") { console.log(``); }
    if (resultLegalAge === "isFalse") { console.log(``); }
}

//method for verifying a subscription
function checkSubscription()
{

}

//method for checking video playback capability
function watchMovie()
{

}

//method for checking the ability to write comments
function writeComments()
{

}

//function for initiating actions and checks
function runAction()
{

}

//the main method that delegates the entire program
function main()
{
    console.log("\nWelcome in the control applcation");
    console.log("This program receives data and, depending on that data, displays a restriction or permission");

    let userChoise;

    while(true)
    {
        console.log("Press \"1\" to check if you can buy alcohol.\nPress \"2\" to check if you are can drive a car.\n");
        userChoise = Number(prompt("\n\tEnter your choise -> "));

        switch (userChoise)
        {
            case 1:
                {
                    break;
                }
            
            case 2:
                {
                    break;
                }

            case 3:
                {
                    break;
                }

            case 4:
                {
                    console.log("\nYou have exited the program. Have a nice day!");           
                    return;
                }

            default:
                {
                    console.log("There is no such answer option. Please try again...");
                    break;
                }
        }
    }
}

main();