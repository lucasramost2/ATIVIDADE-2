function verificarTamanho(str) {
    if (str.length > 10) {
        console.log("A string tem mais de 10 caracteres.");
    } else {
        console.log("A string tem 10 caracteres ou menos.");
    }
}
verificarTamanho("Hello World");   // Saída: "A string tem mais de 10 caracteres."
verificarTamanho("JavaScript");    // Saída: "A string tem 10 caracteres ou menos."
verificarTamanho("Short");         // Saída: "A string tem 10 caracteres ou menos."
