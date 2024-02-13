function acao(tipo, valor){
    switch (tipo){
        case 'valor':
            document.getElementById('conteiner_resultado').value += valor

        case 'acao':

        if(valor=='clear'){
            document.getElementById('conteiner_resultado').value =""

        }else if(valor === '-' || valor === '*' || valor === '+' || valor === '/' ){
            document.getElementById('conteiner_resultado').value += valor

        }else if(valor === '='){
            var resultado = eval(document.getElementById('conteiner_resultado').value)
            document.getElementById('conteiner_resultado').value = resultado
        }

    }


}