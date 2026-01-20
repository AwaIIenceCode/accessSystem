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

}

//method for verifying the ability to purchase alcohol
function buyAlcohol()
{

}

//method for checking driving ability
function driveCar()
{

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
    let userChoise;

    while(true)
    {
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