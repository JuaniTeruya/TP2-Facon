class UserInterface {
    getDniLog() {
        return document.getElementById("loginDni").value;
    }

    getPasswordLog() {
        return document.getElementById("loginPassword").value;
    }

    getEmailReg() {
        return document.getElementById("registerEmail").value;
    }

   
    getNombreReg() {
        return document.getElementById("registerName").value;
    }

    getApellidoReg() {
        return document.getElementById("registerLastName").value;
    }

    getDniReg() {
        return document.getElementById("registerDni").value;
    }

    getPasswordReg() {
        return document.getElementById("registerPassword").value;
    }
    
    showModal(title, body) {
        document.getElementById("modalTitle").textContent = title;
        document.getElementById("modalBody").textContent = body;

        const modal = new bootstrap.Modal('#modal', {
            keyboard: true,
            focus: true
        });

        modal.show();
    }
}
const ui = new UserInterface();
