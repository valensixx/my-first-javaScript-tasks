function check(){
    let text = document.querySelector('#text').value;
    let messageEl = document.querySelector('#message');
    if(text.lenght == 0){
        messageEl.innerHTML = 'Please enter number or a text!';
        return; 
    }
    if(isNaN(text) === true){
        messageEl.innerHTML = 'This is text.';
    }else{
        messageEl.innerHTML = 'This is number.'; 
    }
}