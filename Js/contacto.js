const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, //Letras, numeros, guion medio y bajo
    apellido: /^[a-zA-ZÀ-ÿ\s]{3,30}$/, //Letras y espacios, inclusive acentos
    nombres: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,  //Letras y espacios, inclusive acentos
    password: /^.{4,12}$/, //4 a 12 dígitos
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 
    telefono: /^\d{7,14}$/ //7 a 14 números
}

const campos = {
	apellido: false,
	nombres: false,
	email: false,
	telefono: false
}

const validarFormulario = (e) => {
	let input_name = e.target.name; //verifico qué input quiero validar

	switch (input_name) {  
		case "apellido":
			validarCampo(expresiones.apellido, e.target, input_name);
		break;
		case "nombres":
			validarCampo(expresiones.nombres, e.target, input_name);
		break;
		// case "password":
		// 	validarCampo(expresiones.password, e.target, 'password');
		// 	validarPassword2();
		// break;
		// case "password2":
		// 	validarPassword2();
		// break;
		case "email":
			validarCampo(expresiones.correo, e.target, input_name);
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, input_name);
		break;
        case "message": 
			alert('');
        break;
	}
};

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){		
		document.getElementById(`form-group-${campo}`).classList.remove('form-group-incorrecto');
		document.getElementById(`form-group-${campo}`).classList.add('form-group-correcto');
		document.querySelector(`#grupo_${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo_${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#form-group-${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo');
		campos[campo] = true;		
	} else {
		document.getElementById(`form-group-${campo}`).classList.add('form-group-incorrecto');
		document.getElementById(`form-group-${campo}`).classList.remove('form-group-correcto');
		document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#form-group-${campo} .formulario_input-error`).classList.add('formulario_input-error-activo');
		campos[campo] = false;
	}
}

/*
const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('.formulario_grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('.formulario_grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('.formulario_grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('.formulario_grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

*/

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario); //evento al presionar tecla
	input.addEventListener('blur', validarFormulario); //evento al perder el input el foco
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	if(campos.apellido && campos.nombres && campos.email && campos.telefono){
		formulario.reset();

		document.getElementById('formulario_mensaje-exito').classList.add('formulario_mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario_mensaje-exito').classList.remove('formulario_mensaje-exito-activo');
		}, 5000); //5 seg

		document.querySelectorAll('.form-group-correcto').forEach((icono) => {
			icono.classList.remove('form-group-correcto');
		});
	} else {
		document.getElementById('formulario_mensaje').classList.add('formulario_mensaje-activo');
	}
});

