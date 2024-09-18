async function getUser(){
    var inputsRadio = document.getElementsByTagName("input");
    var gender = "";

    if(inputsRadio[0].checked){
        gender = inputsRadio[0].value;
    }else if(inputsRadio[1].checked){
        gender = inputsRadio[1].value;
    }else if(inputsRadio[2].checked){
        gender = inputsRadio[2].value;
    }

    //https://radomuser.me/api/?results=1&nat=br&gender=

    var result = await fetch("https://randomuser.me/api/?results=100&nat=br&gender=");

    var infos = await result.json();

    var allUsers = infos.results;
    var name;

    for (i = 0; i < allUsers.length; i++){
        name = allUsers[i].name;
        console.log(name.first + " " + name.last);
    }
}