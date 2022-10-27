// Criar um objeto com 5 qualidades,ao rodar o programa onde a pessoa deve ser maior de idade se brasileiro e estar aprovado para a vaga///

const personone ={ name: "Damião", age: "20", sex: "Masculine", nationality: "Brasileiro", Profession: "programmer"}
    if ( personone.age >= "18" && (personone.nationality === "Brasileiro" || personone.nationality === "Brasileira" )) {
        console.log("You were approved")
    }
    else {
        console.log ("You weren't approved")
    }


const persontwo ={ name: "Thannity", age: "16", sex:"Feminine", nationality: "Brasileira", Profission: "teacher"}
if (persontwo.age >=18 && (persontwo.nationality === "Brasileiro" || persontwo.nationality === "Brasileira" )) {
    console.log ("you were Approved")
}
else {
    console.log ("you weren't Approved")
}
