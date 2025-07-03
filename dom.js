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

    getDniLog() {
        return document.getElementById("registerDni").value;
    }

    getPasswordLog() {
        return document.getElementById("registerPassword").value;
    }
    
}
const ui = new UserInterface();