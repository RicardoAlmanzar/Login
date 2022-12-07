let usuario = (prompt("Inserte su Usuario  "));
let contrasena = (prompt("Inserte su Contraseña "));

if (usuario != "Ricardo" || contrasena != "12345") 
{
    do
    {
        alert("El Usuario y/o Contraseña estan incorrectos");
        usuario = prompt("Inserte su Usuario")
        contrasena = prompt("Inserte su Contraseña")
    }
    while (usuario !="Ricardo" || contrasena !="12345")  
}
else (usuario == "Ricardo" && contrasena == "12345")
{
    alert("El Usuario y la Contraseña estan correctos")
}

