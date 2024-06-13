//get the text area
document.getElementById('size').value = '16';
const editableText = document.getElementById('textarea');

//bold
document.getElementById('bold').addEventListener('click', function(){
    if(editableText.style.fontWeight!=='bold'){
        editableText.style.fontWeight = 'bold';
    }
    else{
        editableText.style.fontWeight = 'normal';
    }
})

//italic
document.getElementById('italic').addEventListener('click', function(){
    if(editableText.style.fontStyle!=='italic'){
        editableText.style.fontStyle = 'italic';
    }
    else{
        editableText.style.fontStyle = 'normal';
    }
})

//underline
document.getElementById('underline').addEventListener('click', function(){
    if(editableText.style.textDecoration!== 'underline'){
        editableText.style.textDecoration = 'underline';
    }
    else{
        editableText.style.textDecoration = 'none';
    }
})

//text align left
document.getElementById('left').addEventListener('click', function(){
    editableText.style.textAlign = 'left';
})

//text align center
document.getElementById('center').addEventListener('click', function(){
    editableText.style.textAlign = 'center';
})

//text align right
document.getElementById('right').addEventListener('click', function(){
    editableText.style.textAlign = 'right';
})

//text align justify
document.getElementById('justify').addEventListener('click', function(){
    editableText.style.textAlign = 'justify';
})

//font size
document.getElementById('size').addEventListener('blur', function(){
    const size = document.getElementById('size').value;
    editableText.style.fontSize = size+'px';
})

//text color
document.getElementById('color').addEventListener('input', function(){
    const color = document.getElementById('color').value;
    editableText.style.color = color;
})