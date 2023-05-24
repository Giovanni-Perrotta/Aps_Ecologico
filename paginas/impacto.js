array1 = new Array ("../imgs/Rio1.jpg", "../imgs/Rio2.jpg", "../imgs/Rio3.jpg")

function comeco(){
document.getElementById('imgId').src = array1[0]
document.form.texto.value="0"
}

function mais(){
document.form.texto.value = Math.floor (1+ 1 - 2 + (document.form.texto.value) * 1 + 1)
if (document.form.texto.value > 2)
{document.form.texto.value = 0}
}

function menos(){
document.form.texto.value = Math.floor (1+ 1 - 2 + (document.form.texto.value) * 1 -1)
if (document.form.texto.value < 0)
{document.form.texto.value = 2}
}

function regular(){
document.getElementById('imgId').src = array1[document.form.texto.value];
setTimeout("regular()", 1)
}