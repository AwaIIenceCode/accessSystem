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
function checkAge(userAge, minAge) 
{ 
    return userAge >= minAge; 
}

//method for verifying the ability to purchase alcohol
function buyAlcohol(userAge)
{
    if (checkAge(userAge,21))
    {
        console.log("Alcohol allowed");
    }

    else 
    {
        console.log("Alcohol forbidden");
    }
}

//method for checking driving ability
function driveCar(userAge)
{
    if (checkAge(userAge,18))
    {
        console.log("Driving allowed");
    }

    else 
    {
        console.log("Driving forbidden");
    }
}

//method for checking video playback capability
function watchMovie(userAge)
{
    if (checkAge(userAge, 14))
    {
        console.log("Watching allowed");
    }

    else 
    {
        console.log("Watching forbidden");
    }
}

//method for checking the ability to write comments
function writeComments()
{
    if (checkAge(userAge, 16))
        {
            console.log("Writing allowed");
        }
    
        else 
        {
            console.log("Writing forbidden");
        }
}

//function for initiating actions and checks
function runAction(actionFun)
{
    const userAge = enterUserAge();
    actionFun(userAge);
}

//the main method that delegates the entire program
function main()
{
    console.log("\nWelcome in the control applcation");
    console.log("This program receives data and, depending on that data, displays a restriction or permission");

    let userChoise;

    while(true)
    {
        console.log(
            "\nPress \"1\" to check if you can buy alcohol.\n" +
            "Press \"2\" to check if you can drive a car.\n" +
            "Press \"3\" to check if you can watch movie.\n" +
            "Press \"4\" to check if you can write comments.\n" +
            "Press \"5\" for exit with program."
          );
          

        userChoise = Number(prompt("\nEnter your choise -> "));

        switch (userChoise)
        {
            case 1:
                {
                    runAction(buyAlcohol);
                    break;
                }
            
            case 2:
                {
                    runAction(driveCar);
                    break;
                }

            case 3:
                {
                    runAction(watchMovie);
                    break;
                }
            case 4:
                {
                    runAction(writeComments);
                    break;
                }

            case 5:
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