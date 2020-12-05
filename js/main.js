
function clicou(){
    document.getElementById("agradece").innerHTML = "<i>Obrigada, pessoa cliqueira</i>";
    //console.log(document.getElementById("agradece"));
}

function redirecionar(){
    window.open("https://www.google.com/search?sxsrf=ALeKk01h9XXaOKsYQMd_ax30RYZcHhCnDw%3A1607198818691&source=hp&ei=YujLX-WAKJjK5OUPk4ykCA&q=cliqueira&oq=cliqueira&gs_lcp=CgZwc3ktYWIQAzICCAA6BAgjECc6CAgAELEDEIMBOgUILhCxAzoFCAAQsQM6AgguOg0IABCxAxCDARBGEIACOgQIABAKUJIyWNU-YOVAaABwAHgAgAGBAYgB8geSAQMxLjiYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwjlua2V0rftAhUYJbkGHRMGCQEQ4dUDCAc&uact=5");
    //window.location.href = "https://www.google.com/search?sxsrf=ALeKk01h9XXaOKsYQMd_ax30RYZcHhCnDw%3A1607198818691&source=hp&ei=YujLX-WAKJjK5OUPk4ykCA&q=cliqueira&oq=cliqueira&gs_lcp=CgZwc3ktYWIQAzICCAA6BAgjECc6CAgAELEDEIMBOgUILhCxAzoFCAAQsQM6AgguOg0IABCxAxCDARBGEIACOgQIABAKUJIyWNU-YOVAaABwAHgAgAGBAYgB8geSAQMxLjiYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwjlua2V0rftAhUYJbkGHRMGCQEQ4dUDCAc&uact=5";
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigada, pessoa passadeira"
    elemento.innerHTML = "Obrigada, pessoa passadeira"
    //alert("trocar texto")
}
function destrocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if(idade >=18){
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));

alert(soma(5, 10));
function substituir(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(substituir("Vai Japão!", "Japão", "Brasil"))

var d = new Date();
alert(d.getDate());

var count;
for (count = 0; count <= 5; count++){
    alert(count);
}

var count = 0;
while(count <= 5){
    alert(count);
    count++;
}

var idade = prompt("Qual sua idade?");
if(idade>=18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}

var frutas = [{nome: "maçã", cor:"vermelha"}, {nome: "uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].cor);

var lista = ["maçã","pera","laranja"];
lista.push("uva");
//lista.pop("laranja");
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" com "));

var nome = "Nivea Sabino";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
//alert (nome + " tem " + idade + " anos.");
//alert (idade + idade2);
console.log(nome);
console.log(n1*n2);
console.log(frase.toLowerCase());
alert(frase.replace("Japão", "Brasil"));
*/
