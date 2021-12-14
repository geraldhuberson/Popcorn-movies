
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}   

class User {
	constructor(name, lastname, email, password, admin) {
	this.name = name;
	this.lastname = lastname;
	this.email = email;
	this.password = password;
	this.admin = admin;
	}
}

let users = [
	new User('Administrador','Popcorn Movies','ad.popcorn.movies2021@gmail','12345678', true),
	new User('juan','portillo','juanpablo.portillo2@gmail.com','12345678', false)
	
]



function loginCheck(event) {
	event.preventDefault();
	
	let email = document.querySelector('#email').value;
	let pass = document.querySelector('#pass').value;
	let userLogged = users.find(User=>User.email == email);
	if(userLogged && userLogged.password == pass){
		window.location.assign('index.html');
	}else {
		let dataError = document.createElement('div');
		dataError.innerText='Los datos ingresados no son correctos';
		dataError.classList.add('alert','alert-danger','mt-3', 'text-center')
		let form = document.querySelector('#login');
		form.appendChild(dataError);
		setTimeout(function(){
			form.removeChild(dataError);
		}, 5000)
	}
}
