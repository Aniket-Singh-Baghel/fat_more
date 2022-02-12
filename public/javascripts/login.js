var state = false
function toggle(){
    if(state){
        document.getElementById('passwrd').setAttribute('type','password')
        state = false
    }
    else{
        document.getElementById('passwrd').setAttribute('type','text')
        state = true
    }
}