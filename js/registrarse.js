const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	validationServer01: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos. (nombre)
    validationServer02: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos. (apellido)
    inputState: Option, //pais
    usuario: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //mail
	validationServer06: /^.{4,12}$/, // 4 a 12 digitos. (contraseña)
    validationServer07: /^.{4,12}$/, // 4 a 12 digitos. (contraseña2)
	
	
}

const campos = {
    validationServer01: false,
    validationServer02: false,
	usuario: false,
    inputState: true,
	validationServer06: false, 
	validationServer07:false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "validationServer01":
			validarCampo(expresiones.validationServer01, e.target, 'validationServer01');
		break;
		case "validationServer06":
			validarCampo(expresiones.validationServer06, e.target, 'validationServer06');
		break;
		case "validationServer07":
			validarCampo(expresiones.validationServer07, e.target, 'validationServer07');
			validarPassword2()
		break;
		case "validationServer02":
			validarCampo(expresiones.validationServer02, e.target, 'validationServer02');
		break;
		case "inputState":
			inputState();
	}
}
const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){		
		document.getElementById(`${campo}`).classList.remove('is-invalid');
		document.getElementById(`${campo}`).classList.add('is-valid');
		// document.getElementById(`${campo}`).classList.add(' is-valid');
		// document.getElementById(`${campo}`).classList.add(' is-invalid');
		campos[campo] = true;
	}
	else{
		document.getElementById(`${campo}`).classList.add('is-invalid');
		document.getElementById(`${campo}`).classList.remove('is-valid');
		// document.getElementById(`${campo}`).classList.add(' is-valid');
		// document.getElementById(`${campo}`).classList.add(' is-invalid');
		campos[campo] = false;
	}
	console.log("test");
}


const validarPassword= (e) => {
switch (e.target.name){
	    case "validationServer06":
			validarCampo(expresiones.validationServer06, e.target, 'validationServer06');
			validarPassword2();
		break;
		case "validationServer07":
			validarPassword2();
		break;
}
}
        
//Ambas contraseñas deben coincidir:

const validarPassword2 = () => {
	const inputvalidationServer06 = document.getElementById('validationServer06');
	const inputvalidationServer07 = document.getElementById('validationServer07');

	if(inputvalidationServer06.value !== inputvalidationServer07.value){
		document.getElementById(`validationServer07`).classList.add('is-invalid');
		document.getElementById(`validationServer07`).classList.remove('is-valid');
		campos['validationServer06'] = false;
	} else {
		document.getElementById(`validationServer07`).classList.add('is-valid');
		document.getElementById(`validationServer07`).classList.remove('is-invalid');
		campos['validationServer06'] = true;
	}
}
//tipeo

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

//GUARDAR DATOS EN EL LOCALSTORAGE

function guardarUsuario(){
    const nombre=document.getElementById('validationServer01').value;
    const apellido=document.getElementById('validationServer02').value;
    const usuario=document.getElementById('usuario').value;
    const pais=document.getElementById('inputState').value;
    const contraseña=document.getElementById('validationServer06').value;
    let usuarios= JSON.parse(localStorage.getItem('usuarios'))
    if (usuarios==null){
        usuarios=[]
    }
    const newUsuario={
        id: usuarios.length+1,
        nombre: nombre,
        director: apellido,
        genero: usuario,
        categoria: pais,
        año: contraseña,
        
    }
 
    usuarios.push(newUsuario)
    let usuarioLS=JSON.stringify(usuarios)
    localStorage.setItem('usuarios',usuarioLS)
    document.getElementById('formulario').reset()
        
    }

//FIN DEL LOCALSTORAGE

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.validationServer01 && campos.validationServer02 && campos.validationServer06
		 && campos.validationServer07 && campos.inputState && terminos.checked ){
		formulario.reset();

		document.getElementById('Formulario').classList.add('valid-feedback');
		setTimeout(() => {
			document.getElementById('Formulario').classList.remove('');
		}, 5000);

		document.querySelectorAll('.valid-feedback').forEach((icono) => {
			icono.classList.remove('');
		});
	} else {
		document.getElementById('checkFormulario').classList.add('');
	}
});
