function baitap5(){
    var n = document.getElementById('numbern').value
    if(n<1){
        alert('N khong phai la so nguyen to')
        return
    }
    for(var i = 2;i<=n;i++){
        if(test(i)){
            document.getElementById('result').style.display='block'
            document.getElementById('out').innerHTML += i + " "
        } 
        
    }
}
function test(x){
    if(x<2) return false
    for(var j = 2;j<=Math.sqrt(x);j++){
        if(x%j===0){
            return false
        }
    }
    return true
}
