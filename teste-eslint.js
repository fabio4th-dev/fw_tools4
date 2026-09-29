// Teste do ESLint
var x = 10;
console.log(x);

function teste() {
    var y = 20;
    console.log(y);
    
    // Erro proposital
    if (x = 30) {
        console.log("erro");
    }
}
// Teste do ESLint