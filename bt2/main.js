function Render(){
    var s1 = document.getElementById('S1').value
    var s2 = document.getElementById('S2').value
    var year = document.getElementById('year').value
    if((s1 < 0 || s1 > 10) || (s2 < 0 || s2 > 10)){
        alert('diem tu 0-10')
        return;
    }
    var heso = Number(year) + 1
    var dtb = (Number(s1) + Number(s2) * heso) / (heso+1)
    dtb = dtb.toFixed(2)
    document.getElementById('summary').innerHTML = dtb
    if(dtb > 9){
        document.getElementById('h2').innerHTML= 'Học sinh xuất sắc'
    }else if(dtb > 8){
        document.getElementById('h2').innerHTML= 'Học sinh giỏi'
    }else if(dtb >6){
        document.getElementById('h2').innerHTML= 'Học sinh khá'
    }else if(dtb >=5){
        document.getElementById('h2').innerHTML= 'Học sinh trung bình'
    }else{
        document.getElementById('h2').innerHTML= 'Học sinh yếu'
    }
}


document.getElementById('ok').onclick = Render