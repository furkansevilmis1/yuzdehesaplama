function hesapla() {
    let number = parseFloat(document.getElementById('number').value);
    let percentage = parseFloat(document.getElementById('percentage').value);
    
    if (isNaN(number) || isNaN(percentage)) {
        document.getElementById('result').innerHTML = "Lütfen geçerli bir sayı girin.";
        return;
    }
    
    let result = number * (percentage / 100);
    document.getElementById('result').innerHTML = "Sonuç: " + result.toFixed(2);
}

