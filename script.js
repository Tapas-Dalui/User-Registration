let message = document.getElementById('message');
let profile = document.getElementById('hi');
let form =document.getElementById('login_form');
let u_name = document.getElementById('u_name');


function register() {

    var uname = document.getElementById('uname');
    var uemail = document.getElementById('uemail');
    var pwd = document.getElementById('pwd');
    var cpwd = document.getElementById('cpwd');

    if(pwd.value != cpwd.value){
        alert("Error: Password and Confirm Password doesn't matched :( ");
    }
   else if((uname.value.length  && uemail.value.length)> 0 && (pwd.value === cpwd.value) ){
        var uname = uname.value;
        var uemail = uemail.value;
        var pwd = pwd.value;
        var cpwd = cpwd.value;
        
        let data = new Array();
        data = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")):[]

        if(data.some((v)=>{
            return v.email== uemail;
        })){
            alert('Error:: Please Register With New Email');
        }
        else{
            data.push({
                'name': uname,
                'email': uemail,
                'password': pwd
            });
            localStorage.setItem('users', JSON.stringify(data));
            alert("Success:: You have Registered Successfully!!");
        }    
    }
       
}


function login(){
    var uemail = document.getElementById('uemail').value;
    var pwd = document.getElementById('pwd').value;

    let data = new Array();
    data = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")):[]

    if(data.some((v)=>{
        return v.email== uemail && v.password==pwd;
    })){  
    
        let current_user = data.filter((v)=>
        {
            return v.email==uemail && v.password==pwd
        })[0];

        localStorage.setItem('name',current_user.name);
        localStorage.setItem('email',current_user.email);
        localStorage.setItem('password',current_user.password);
     
        window.location.href="profile.html"

    }
    else{
       
        alert('Invalid Credentials: Please Enter correct Email and Password');
        
    }

}


function logout(){
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('password');

    window.location.href="login.html"
}
function delete_account(){
    
    let data = new Array();
    var email = localStorage.getItem('email')
    data = data.filter(rec => rec.email !== email)

    window.location.href="index.html";
}


