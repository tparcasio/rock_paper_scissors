$(document).ready(function() {

    //Set up our variables to use later
    var computerChoice;

    //Get a random value for the computer choice
    var computerChoiceVal = Math.random();

    //Turn the random value into a choice for the computer
    if (computerChoiceVal < 0.34) {
        computerChoice = "rock";
    } else if (computerChoiceVal <= 0.67 && computerChoiceVal > 0.34) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    //Now we have access to the computer's choice via the computerChoice variable

    $(document).on("click", ".choice", function() {

        //Grab name of choice
        var playerChoice = $(this).attr("id");

        //Tie
        if (playerChoice === computerChoice)
            {
                $("#result").html("Tie");
            }
            //Player choses Rock
            else
            {
                if(playerChoice === "rock")
                    {
                        if(computerChoice === "scissors")
                            {
                                $(this).addClass("success green-background");
                                $("#result").html("Rock beats Scissors. You Win!");
                            }
                        else
                            {
                                $(this).addClass("red-background");
                                $("#result").html("Paper beats Rock. You Lose.");
                            }
                    }
                //Player choses Paper
                else
                {
                    if(playerChoice === "paper")
                        {
                             if(computerChoice === "rock")
                                {
                                     $(this).addClass("success green-background");
                                     $("#result").html("Paper beats Rock. You Win!");
                                } else
                                  {
                                      $(this).addClass("red-background");
                                      $("#result").html("Scissors beats rock. You Lose");
                                  }
                        }
                    if(playerChoice === "scissors")
                        {
                             if(computerChoice === "paper")
                                {
                                    $(this).addClass("success green-background");
                                    $("#result").html("Scissors beat Paper. You Win!");
                                }
                            else
                                {
                                    $(this).addClass("red-background");
                                    $("#result").html("Rock beats Scissors. You Lose");
                                }

                        }
                }
            }



    });


});
