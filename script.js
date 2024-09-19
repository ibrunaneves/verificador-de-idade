function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano") // Captura o ano de nasc
    var fname = document.getElementById("txtnome") // Captura o nome 
    var res = document.querySelector("div#res") // O resultado

    if (fano.value.length == 0 || fname.value.length == 0 || Number(fano.value) > ano) { // Verifica se o campo de ano está vazio, o nome está vazio, ou o ano informado é maior que o ano atual
        window.alert("[ERRO] Verifique se você preencheu todos os dados e tente novamente!") // Exibe uma mensagem de alerta se qualquer uma das condições acima for verdadeira
    } else {
        var fsex = document.getElementsByName("radsex") // Captura o sexo
        var idade = ano - Number(fano.value) // Calcula a idade subtraindo o ano de nascimento do ano atual
        var genero = "" // Inicializa uma variável para armazenar o gênero
        var img = document.createElement("img") // Cria a imagem
        var name = fname.value // Armazena o nome digitado pelo usuário

        if (fsex[0].checked) { 
            genero = "homem"
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "Imagens/bebemas.png") 
            } else if (idade < 21) {
                img.setAttribute("src", "Imagens/jovemmas.png") 
            } else if (idade < 50) {
                img.setAttribute("src", "Imagens/adultomas.png") 
            } else {
                img.setAttribute("src", "Imagens/idosomas.png") 
            }
        } else if (fsex[1].checked) {
            genero = "mulher"
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "Imagens/bebefem.png") 
            } else if (idade < 21) {
                img.setAttribute("src", "Imagens/jovemfem.png")
            } else if (idade < 50) {
                img.setAttribute("src", "Imagens/adultofem.png") 
            } else {
                img.setAttribute("src", "Imagens/idosofem.png") 
            }
        }
    
        res.innerHTML = '' // Limpa qualquer conteúdo anterior dentro do elemento <div> com id "res"
        res.appendChild(img) // Adiciona a nova imagem ao elemento <div> com id "res"
        res.innerHTML += `<p>${name}, você é ${genero} e tem ${idade} anos!</p>` // Mensagem final
    }
}
