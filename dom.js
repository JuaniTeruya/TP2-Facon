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

/*==========================================
LUQUI A PARTIR DE ACA DEJAS DE ENTENDER
==========================================*/

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
    }

    selectTarjetasDebito(id,numero,nombre){
        document.getElementById("debitCardAccountSelect").innerHTML += `
            <option value=${id}>${numero}-${nombre}</option>
        `;
    }

    selectCuentaTransferencias(id,alias){
        document.getElementById("transferOrigin").innerHTML += `
            <option value=${id}>${alias}</option>
        `;
    }

    selectCuentaTransferencias2(id,alias){
        document.getElementById("transferDestinysSelect").innerHTML += `
            <option value=${id}>${alias}</option>
        `;
    }

    selectCuentaPesosDolares(id,alias){
        document.getElementById("pesosAccount").innerHTML += `
            <option value=${id}>${alias}</option>
        `;
    }

    selectCuentaPesosDolares2(id,alias){
        document.getElementById("dollarsAccount").innerHTML += `
            <option value=${id}>${alias}</option>
        `;
    }

    selectTarjetasCredito(id,numero,nombre){
        document.getElementById("creditCardSelect").innerHTML += `
            <option value=${id}>${numero}-${nombre}</option>
        `;
    }

    selectTarjetas(id,numero,nombre,tipo){
        document.getElementById("paymentMethodSelect").innerHTML += `
            <option value=${id}>${numero}-${nombre}-${tipo}</option>
        `;
    }

    borrarTodo() {
        let selects = document.getElementsByTagName("select");
        for(let i = 0; i < selects.length; i++) {
            selects[i].innerHTML = "";
        }
    }

    selectInversiones(alias,id){
        document.getElementById("investmentAccountSelect").innerHTML += `
            <option value=${id}>${alias}</option>
        `;
    }

    logOut(){
        document.getElementsByClassName("navbar-toggler")[0].style.display = "none";
        document.getElementById("logeo2").style.display = "";
        document.getElementById("banco").style.display = "none";
    }

    ocultarLogeo(){
        document.getElementsByClassName("navbar-toggler")[0].style.display = "";
        document.getElementById("logeo2").style.display = "none";
    }

    mostrarBanco(){
        document.getElementById("banco").style.display = "";
    }
}
const ui = new UserInterface();
