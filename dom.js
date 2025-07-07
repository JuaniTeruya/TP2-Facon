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

    mostrarAccountsPesos(currency, balance, limit, overdraft, alias, cbu) {
        document.getElementsByClassName("row")[1].innerHTML += `
        <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card shadow-sm h-100">
                        <div class="card-body">
                            <h5 class="card-title">Caja de Ahorro en Pesos</h5>
                            <p class="card-text mb-1"><strong>Moneda:</strong> ${currency}</p>
                            <p class="card-text mb-1"><strong>Saldo:</strong> $${balance}</p>
                            <p class="card-text mb-1"><strong>Descubierto disponible:</strong> ${limit}</p>
                            <p class="card-text mb-1"><strong>Descubierto usado:</strong> ${overdraft}</p>
                            <p class="card-text mb-1"><strong>Alias:</strong> ${alias}</p>
                            <p class="card-text mb-3"><strong>CBU:</strong> ${cbu}</p>
                            <div class="d-grid">
                                <button class="btn btn-outline-primary btn-sm">Ver movimientos</button>
                            </div>
                        </div>
                    </div>
                </div>
        `;
        document.getElementById("accounts").hidden = false;
    }


    mostrarAccountsDolares(currency, balance, alias, cbu) {
        document.getElementsByClassName("row")[1].innerHTML += `
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card shadow-sm h-100">
                        <div class="card-body">
                            <h5 class="card-title">Caja de Ahorro en Dólares</h5>
                            <p class="card-text mb-1"><strong>Moneda:</strong>${currency}</p>
                            <p class="card-text mb-1"><strong>Saldo:</strong> U$D${balance}</p>
                            <p class="card-text mb-1"><strong>Alias:</strong> ${alias}</p>
                            <p class="card-text mb-3"><strong>CBU:</strong> ${cbu}</p>
                            <div class="d-grid">
                                <button class="btn btn-outline-primary btn-sm">Ver movimientos</button>
                            </div>
                        </div>
                    </div>
                </div>
        `;
        document.getElementById("accounts").hidden = false;
    }

    selectTarjetasDebito(id,numero,nombre){
        document.getElementById("debitCardAccountSelect").innerHTML += `
            <option value=${id}>${numero}-${nombre}</option>
        `;
        document.getElementById("debitCards").hidden = false;
    }
}
const ui = new UserInterface();
