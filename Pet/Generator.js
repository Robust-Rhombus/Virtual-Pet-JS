function Generate() {
    var Output = document.getElementById("Output");
    var Preview = document.getElementById("Preview");
    var Pet = document.getElementById("PetLink").value;
    var PetScale = document.getElementById("PetScale");
    var Birthdate = document.getElementById("Birthdate").value;
    var BorderStyle = document.getElementById("BorderStyle").value;
    var BorderWidth = document.getElementById("BorderWidth").value;
    var BorderColor = document.getElementById("BorderColor").value;
    var Name = document.getElementById("Name").value;
    var BGColor = document.getElementById("BGColor").value;
    var BGColorToggle = document.getElementById("BGColorToggle").checked;
    var BGUrl = document.getElementById("BGUrl").value;
    var BGMode = document.getElementById("BGMode").value;
    var BGPosX = document.getElementById("BGPosX");
    var BGPosY = document.getElementById("BGPosY");
    var BGScale = document.getElementById("BGScale");
    var CustomPetPosition = document.getElementById("CustomPetPosition").checked;
    var PetPosX = document.getElementById("PetPosX");
    var PetPosY = document.getElementById("PetPosY");
    var UIColor = document.getElementById("UIColor").value;
    var UIColorToggle = document.getElementById("UIColorToggle").checked;
    var UIImageUrl = document.getElementById("UIImageUrl").value;
    var UIOutlineColor = document.getElementById("UIOutlineColor").value;
    var TextColor = document.getElementById("TextColor").value;
    var ButtonColor = document.getElementById("ButtonColor").value;
    var ButtonOutlineColor = document.getElementById("ButtonOutlineColor").value;
    var ButtonTextColor = document.getElementById("ButtonTextColor").value;
    var Border = 'style="border-style:' + BorderStyle + ' ; border-width:' + BorderWidth + 'px; border-color:' + BorderColor + ';"';
    var Code = '<iframe ' + Border + ' width="300px" height="300px" src="/Pet/iframe.html?pet=' + Pet + '&PetScale=' + PetScale.value + '&Birthdate=' + Birthdate + '&Name=' + Name + '&BGColor=' + BGColor + '&BGColorToggle=' + BGColorToggle + '&BGUrl=' + BGUrl + '&BGMode=' + BGMode + '&BGPosX=' + BGPosX.value + '&BGPosY=' + BGPosY.value + '&BGScale=' + BGScale.value + '&CustomPetPosition=' + CustomPetPosition + '&PetPosY=' + PetPosY.value + '&PetPosX=' + PetPosX.value + '&UIColor='+UIColor+'&UIColorToggle='+UIColorToggle+'&UIImageUrl='+UIImageUrl+'&UIOutlineColor='+UIOutlineColor+'&TextColor='+TextColor+'&ButtonColor='+ButtonColor+'&ButtonOutlineColor='+ButtonOutlineColor+'&ButtonTextColor='+ButtonTextColor+'"></iframe>';
    Output.innerHTML = Code;
    Preview.innerHTML = Code;
    PetScale.oninput = function () {
        Generate()
    }
    BGPosX.oninput = function () {
        Generate()
    }
    BGPosY.oninput = function () {
        Generate()
    }
    BGScale.oninput = function () {
        Generate()
    }
    PetPosX.oninput = function () {
        Generate()
    }
    PetPosY.oninput = function () {
        Generate()
    }
}