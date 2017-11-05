const togglePasswordBtn = document.getElementById('toggle-password');
const inputPassword = document.getElementById('password');
const formSetNewPassword = document.getElementById('form-set-new-password');

if(togglePasswordBtn && inputPassword) {
	togglePasswordBtn.addEventListener('click', (e) => {
		e.preventDefault();
		handleTogglePassword(togglePasswordBtn, inputPassword);
	});
}

if(formSetNewPassword) {
	formSetNewPassword.addEventListener('submit', (e) => {
		e.preventDefault();
		alert('form sent!');
	});
}

function handleTogglePassword(el, input) {
	if(input.getAttribute('type') && input.getAttribute('type') == 'password') {
		showPassword(el, input);
	} else {
		hidePassword(el, input);
	}
}

function showPassword(button, input) {
	if(input) {
		input.setAttribute('type', 'text');
	}
	if(button) {
		let icon = button.querySelector('.Icon');
		if(icon) {
			icon.classList.add('Icon-eyeBlocked');
			icon.classList.remove('Icon-eye');
		}
	}
}

function hidePassword(button, input) {
	if(input) {
		input.setAttribute('type', 'password');
	}
	if(button) {
		let icon = button.querySelector('.Icon');
		if(icon) {
			icon.classList.add('Icon-eye');
			icon.classList.remove('Icon-eyeBlocked');
		}
	}
}