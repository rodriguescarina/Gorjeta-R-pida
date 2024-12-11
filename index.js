function formatMoney(value){
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return String('R$ ') + value
    }
    
    function formatPerson(value){
        if (value == 1) return value + String(' Pessoa')
        return value + String(' Pessoas')
    }
    
    function update(){
        let conta = Number(document.getElementById('suaConta').value)
        let porcentagemGorjeta = document.getElementById('tipInput').value
        let divisaoPessoa = document.getElementById('splitInput').value
        
        let gorjetaValor = conta * (porcentagemGorjeta / 100)
        let contaTotal = conta + gorjetaValor;
        let valorPessoa = contaTotal / divisaoPessoa;
        
        document.getElementById('tipPercent').innerHTML = porcentagemGorjeta + String(' %')
        document.getElementById('tipValue').innerHTML =formatMoney(gorjetaValor)
        document.getElementById('totalWithTip').innerHTML = formatMoney(contaTotal)
        document.getElementById('splitValue').innerHTML = formatPerson(divisaoPessoa)
        document.getElementById('billEach').innerHTML = formatMoney(valorPessoa)
    }