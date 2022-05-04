
var dataList= [];
let i=0;


const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



form.addEventListener('submit', e => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

    let usernameflag, emailflag, passwordflag , password2flag  = 0;
	
	
	if(usernameValue === '') {
		setErrorFor(username, 'Name cannot be blank');
	} else {
		setSuccessFor(username);
        usernameflag = 1;
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
        emailflag = 1;
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
        passwordflag = 1;
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
        password2flag = 1;
	}

    if(usernameflag && emailflag && passwordflag && password2flag  === 1){
        //console.log(usernameValue, emailValue);
        dataList[i]= [usernameValue, emailValue];
		i++;
		console.log(JSON.stringify(dataList));
		//localStorage.setItem("name", JSON.stringify(usernameValue))
		//localStorage.setItem("pass", JSON.stringify(passwordValue))
    }
    else{
        console.log('Invalid inputs');
    }
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'f1 error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'f1 success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

/*function check() {
    var name1 = document.getElementById('name').value;
    var pass1 = document.getElementById('pass').value;
    
	let checkList=[name1, pass1];
	localStorage.getItem("name");
	localStorage.getItem("pass");
	for(let i=0; i<= dataList.length; i++){

		if (dataList[i]=== checkList) {
			alert('Login Successful!');
		}
		else {
			alert('Please enter valid credentials.')
		}
	}
    
}
*/












