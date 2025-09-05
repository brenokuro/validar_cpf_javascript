const cpf = ['123.456.789-09', '123.456.9-08', '123.456.789-07', '123.456.789-06', '123.456.789-05'];

let numeros_validos = [];

for (let i = 0; i < cpf.length; i++) {
    const soNumeros = cpf[i].replace(/\D/g, '');
    if (soNumeros.length === 11) {
        numeros_validos.push(soNumeros);
    }
    else {
        console.log(`O CPF ${cpf[i]} não é válido.`);
        continue;}
}

console.log("Os CPF válidos são: " + numeros_validos.join(", ") + ".");


