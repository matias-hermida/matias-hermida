document.getElementById("rightBtn").addEventListener("click", submitContent);
document.getElementById("leftBtn").addEventListener("click", clearContent);

function submitContent () {
    let name = document.getElementById("name").value;
    if (name == '') {
        alert("Escribir Nombre");
    }  
    else{  
        let surname = document.getElementById("surname").value;
        if (surname == '') {
            alert("Escribir Apellido");
        }
        else {
            let email = document.getElementById("email").value;
            if (email == '') {
                alert("Escribir email");
            }
            else {
                let people = document.getElementById("people").value;
                if (people == '') {
                    alert("Escribir cantidad de Personas");
                }
                else {
                    let job = document.getElementById("job").value;

                    const TaPagar = document.getElementById("TaPagar");
                    let y = TaPagar.value;
                    
                    let precioNormal = 200

                    if (job == "Normal")
                    {
                        let x = people * precioNormal;
                        TaPagar.innerHTML = "Total a Pagar: $ " + x;
                    }
                    if (job == "Estudiante")
                    {
                        let x = people * precioNormal * 0.2;
                        TaPagar.innerHTML = "Total a Pagar: $ " + x;
                    }
                    if (job == "Trainee")
                    {
                        let x = people * precioNormal * 0.5;
                        TaPagar.innerHTML = "Total a Pagar: $ " + x;
                    }
                    if (job == "Junior")
                    {
                        let x = people * precioNormal * 0.85;
                        TaPagar.innerHTML = "Total a Pagar: $ " + x;
                    }
                }
            }
        }
    }   
}
function clearContent () {
    const name = document.getElementById("name");
    name.value = '';
    const surname = document.getElementById("surname");
    surname.value = '';
    const email = document.getElementById("email");
    email.value = '';
    const people = document.getElementById("people");
    people.value = '';
    const job = document.getElementById("job");
    job.value = 'Estudiante';
}
