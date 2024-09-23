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

    var valueSelect = document.querySelector("select").value;

    var result = await fetch(
        "https://randomuser.me/api/?results=" + 
        valueSelect + 
        "&nat=br&gender=" + 
        gender
    );

    var infos = await result.json();

    var allUsers = infos.results;
    var name;

    var allFakeUsers = document.querySelector(".allFakeUsers")
    allFakeUsers.innerHTML = "";

    for (i = 0; i < allUsers.length; i++){
        name = allUsers[i].name;
        console.log(name.first + " " + name.last);

        var fakeUser = document.createElement("div");
        fakeUser.classList.add("FakeUsers");

        fakeUser.innerHTML = `
            <div class="image">
                <img class="img" src="${allUsers[i].picture.large}"/> 
            </div>
            <p><b>Nome: </b> <span>${name.first + " " + name.last}</span></p>
            <p><b>Email: </b> <span>${allUsers[i].email}</span></p>
            <p><b>Idade: </b> <span>${allUsers[i].dob.age}</span></p>
            <p><b>Cidade: </b> <span>${allUsers[i].location.city}</span></p>
        `;
        allFakeUsers.appendChild(fakeUser)

    }
}