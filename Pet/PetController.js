//Good luck reading the code
var Mood = 70;
var Food = 70;
var Money = 10;
var Dead = false;
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}
var Name = getUrlVars()["Name"];
function Say(Message, From) {
    var TextArea = document.getElementById("Messages");
    if (From == "pet") {
        TextArea.innerHTML = TextArea.innerHTML + "\n" + Name + ": " + Message;
        TextArea.scrollTop = TextArea.scrollHeight;
    } else if (From == "sys") {
        TextArea.innerHTML = TextArea.innerHTML + "\n" + "> " + Message;
        TextArea.scrollTop = TextArea.scrollHeight;
    } else if (From == "Action") {
        TextArea.innerHTML = TextArea.innerHTML + "\n" + Name + " " + Message;
        TextArea.scrollTop = TextArea.scrollHeight;
    }
}
function ChangeFood(Amount) {
    var Status = document.getElementById("Status");
    Food = Food + Amount;
    if (Food < 0) {
        Die();
    }
    Status.innerHTML = "Hunger: " + Food + "% Mood: " + Mood + "%";
}
function ChangeMood(Amount, Mode) {
    var Status = document.getElementById("Status");
    if (Mode == "set") {
        Mood = Amount
        Status.innerHTML = "Hunger: " + Food + "% Mood: " + Mood + "%";
    } else if (Mode == "change") {
        Mood = Mood + Amount;
        if (Mood > 100) {
            Mood = 100
            Status.innerHTML = "Hunger: " + Food + "% Mood: " + Mood + "%";
        } else {
            Status.innerHTML = "Hunger: " + Food + "% Mood: " + Mood + "%";
        }
    }
}
function ChangeMoney(Amount) {
    var MoneyE = document.getElementById("Money");
    Money = Money + Amount;
    MoneyE.innerHTML = "Money: " + Money;
}
function Die() {
    document.getElementById("PetImg").src = "/Pet/Assets/Images/tombstone.gif";
    document.getElementById("PetImg").style.width = "100px";
    Dead = true;
    Say("died from starvation", "Action")
}
window.onload = function () {
    //get URL vars
    var PetUrl = getUrlVars()["pet"];
    var Birthdate = getUrlVars()["Birthdate"];
    var PetScale = getUrlVars()["PetScale"];
    var BGColor = getUrlVars()["BGColor"];
    var BGColorToggle = getUrlVars()["BGColorToggle"];
    var BGUrl = getUrlVars()["BGUrl"];
    var BGMode = getUrlVars()["BGMode"];
    var BGPosX = getUrlVars()["BGPosX"];
    var BGPosY = getUrlVars()["BGPosY"];
    var BGScale = getUrlVars()["BGScale"];
    var CustomPetPosition = getUrlVars()["CustomPetPosition"];
    var PetPosX = getUrlVars()["PetPosX"];
    var PetPosY = getUrlVars()["PetPosY"];
    var UIColor = getUrlVars()["UIColor"];
    var UIColorToggle = getUrlVars()["UIColorToggle"];
    var UIImageUrl = getUrlVars()["UIImageUrl"];
    var UIOutlineColor = getUrlVars()["UIOutlineColor"];
    var TextColor = getUrlVars()["TextColor"];
    var ButtonColor = getUrlVars()["ButtonColor"];
    var ButtonOutlineColor = getUrlVars()["ButtonOutlineColor"];
    var ButtonTextColor = getUrlVars()["ButtonTextColor"]; 
    //get elements
    var Background = document.getElementById("PetContainer");
    var UI = document.getElementsByClassName("UI");
    var Button = document.getElementsByTagName("button");
    var Pet = document.getElementById("PetImg");
    //change static elements content
    Pet.src = PetUrl;
    Pet.style.width = PetScale + "px";
    document.getElementById("Birthdate").innerHTML = "Birthdate: " + Birthdate;
    document.getElementById("Name").innerHTML = "Name: " + Name;
    if (UIColorToggle == "false") {
        for (let i = 0; i < UI.length; i++) {
            UI[i].style.backgroundColor = UIColor;
        }
    } else {
        for (let i = 0; i < UI.length; i++) {
            UI[i].style.backgroundImage = "url("+UIImageUrl+")";
        }
    }
    for (let i = 0; i < UI.length; i++) {
        UI[i].style.borderColor = UIOutlineColor;
    }
    for (let i = 0; i < UI.length; i++) {
        UI[i].style.color = TextColor;
    }
    for (let i = 0; i < Button.length; i++) {
        Button[i].style.backgroundColor = ButtonColor;
    }
    for (let i = 0; i < Button.length; i++) {
        Button[i].style.borderColor = ButtonOutlineColor;
    }
    for (let i = 0; i < Button.length; i++) {
        Button[i].style.color = ButtonTextColor;
    }
    if (BGColorToggle == "false") {
        Background.style.backgroundColor = BGColor;
    } else {
        Background.style.backgroundImage = "url(" + BGUrl + ")";
        if (BGMode == "repeated") {
            Background.style.backgroundRepeat = "repeat";
        } else if (BGMode == "stretched") {
            Background.style.backgroundSize = "100% 100%";
            Background.style.backgroundRepeat = "no-repeat";
        } else if (BGMode == "custom") {
            Background.style.backgroundPosition = BGPosX + "px " + BGPosY + "px";
            Background.style.backgroundRepeat = "no-repeat";
            Background.style.backgroundSize = BGScale + "%";
        }
    }
    if (CustomPetPosition == "true") {
        Pet.style.margin = "0px"
        Pet.style.position = "absolute";
        Pet.style.left = PetPosX + "px";
        Pet.style.top = PetPosY + "px";
    } else {
        Pet.style.display = "block";
        Pet.style.margin = "auto";
        Pet.style.marginTop = "25%";
    }
    ChangeMoney(0);
    Say("Hello!", "pet");
    //main game loop
    setInterval(function () {
        if (Dead == false) {
            if (Math.floor(Math.random() * 20) == 0) {
                ChangeMood(-1, "change");
            }
            if (Math.floor(Math.random() * 10) == 1) {
                ChangeFood(-1, "change");
            }
            if (Math.floor(Math.random() * 20) == 1) {
                ChangeMoney(1);
            }
            if (Food < 40 && Food > 20) {
                if (Math.floor(Math.random() * 20) == 1) {
                    Say("Im hungry", "pet")
                }
            }
            if (Food < 20) {
                if (Math.floor(Math.random() * 10) == 1) {
                    Say("Im starving", "pet")
                }
            }
            if (Mood < 40) {
                Say("Im bored", "Pet");
            }
        } else {
            ChangeMood(0, "set")
        }
    }, 1000);
}
//onclick functions
function Buy(Item) {
    if (Dead == false) {
        if (Item == "Food") {
            if (Money < 5) {
                Say("Cannot afford", "sys");
            } else {
                if (Food > 90) {
                    Say("Im too full!"), "pet";
                } else {
                    ChangeFood(10);
                    ChangeMood(2);
                    ChangeMoney(-5);
                    Say("Yummy!", "pet");
                }
            }
        }
        if (Item == "Treat") {
            if (Money < 10) {
                Say("Cannot afford", "sys");
            } else {
                if (Food > 95) {
                    Say("Im too full!", "pet");
                } else {
                    ChangeFood(5);
                    ChangeMood(10);
                    ChangeMoney(-10);
                    Say(":O Treats!", "pet");
                }
            }
        }
        if (Item == "Soda") {
            if (Money < 5) {
                Say("Cannot afford", "sys");
            } else {
                if (Food > 98) {
                    Say("Im too full!"), "pet";
                } else {
                    ChangeFood(2);
                    ChangeMood(5);
                    ChangeMoney(-5);
                    Say("BUUUURP", "pet");
                }
            }
        }
    }
}
function Action(Action) {
    if (Action == "Play") {
        ChangeFood(-2);
        ChangeMood(3, "change");
        ChangeMoney(1);
    }
    if (Action == "Pet") {
        ChangeMood(2, "change");
        Say("I love pets <3", "pet")
    }
}