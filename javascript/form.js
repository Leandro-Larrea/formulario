	const parts = document.querySelectorAll(".form__item");
	const inputs = document.querySelectorAll(".form__input");
	expressions={
		usuario: /^[a-zA-Z0-9._-]{6,20}$/,
		nombre: /^[a-zA-ZÁ-ÿ\s]{6,40}$/, 
		contraseña:/^.{7,12}$/,
		email: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, 
		telefono:/^[\d-\s]{7,16}$/
	}
	
	
	
	const formValidationSwitch = (input) => {
		if(comprobar() === 6 && document.querySelector(".checkbox").checked){
    	document.querySelector(".form__item-error-msj").classList.remove("form__item-error-msj-active")
    }
   
		switch (input.target.name){
			case "user":
			formValidation(expressions.usuario, input.target.value, "user")
		
			break;
		
			case "nombre":
			formValidation(expressions.nombre, input.target.value, "nombre");

			break;

			case "password":
			if(password.value !== password2.value){
				formValidation(expressions.contraseña, "3", "password2")}
				else{formValidation(expressions.contraseña, input.target.value, "password2")
			}
			formValidation(expressions.contraseña, input.target.value, "password")


			break;

			case "password2":
			if(password.value !== password2.value){
				formValidation(expressions.contraseña, "3", "password2")
			}
			else{
			formValidation(expressions.contraseña, input.target.value, "password2")
			}	

			break;

			case "email":
			formValidation(expressions.email, input.target.value, "email");

			break;

			case "phone":
			formValidation(expressions.telefono, input.target.value, "phone");

			break;
		}

}
	const formValidation = (conterExpression, value, field) =>{
		if(conterExpression.test(value)){
			document.getElementById(`form__${field}`).classList.add("form__item-ok");
			document.getElementById(`form__${field}`).classList.remove("form__item-wrong");
			document.querySelector(`#form__${field} .form__item-validation`).classList.add("fa-check");
			document.querySelector(`#form__${field} .form__item-validation`).classList.remove("fa-xmark");
		}
		else {
			document.querySelector(`#form__${field} .form__item-validation`).classList.remove("fa-check");
			document.querySelector(`#form__${field} .form__item-validation`).classList.add("fa-xmark");
			document.getElementById(`form__${field}`).classList.remove("form__item-ok");
			document.getElementById(`form__${field}`).classList.add("form__item-wrong");
		}
	}

	inputs.forEach((a) =>{
		
		a.addEventListener("change", formValidationSwitch);
		a.addEventListener("keyup", formValidationSwitch);
		
	})

	let comprobar = () =>{
		let x = 0;
		parts.forEach((a) => {
			if(a.classList.contains("form__item-ok"))
				{ x++;
           			 }
            	}
            )
        return (x);
    }

	

	form.addEventListener("submit",(e) => {
		e.preventDefault();
		if(comprobar() === 6 && document.querySelector(".checkbox").checked){
			form.reset();
			/*it´s imposible to aply a .remove to each class with querySelectorAll
			cuz querySelectorAll it´s returning an array therefore if u wanna 
			work with each element u have to use arrays functions or maybe an iteration 
			over it*
			document.querySelectorAll(".form__item")[1].classList.remove("form__item-ok")
			*/
			document.querySelectorAll(".form__item").forEach((i) =>{
				i.classList.remove("form__item-ok");
			})
			document.querySelector(".form__item-error-msj").classList.remove("form__item-error-msj-active")
			document.querySelector(".form__item-succes-msj").classList.add("form__item-succes-msj-active");
			setTimeout(() => {
			document.querySelector(".form__item-succes-msj").classList.remove("form__item-succes-msj-active")
			}, 5000);

		}	
		else {
			document.querySelector(".form__item-error-msj").classList.add("form__item-error-msj-active")
		}
          
})
	