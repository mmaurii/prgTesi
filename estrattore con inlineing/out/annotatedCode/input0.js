var input0;
(function (input0) {
    function map(jobs, index) {
        console.log("Mapping jobs for index ".concat(index));
        // Implementa la logica della funzione di mappatura qui
    }
    function reduce(jobs, mapIndex, reduceIndex) {
        console.log("Reducing jobs for mapIndex ".concat(mapIndex, " and reduceIndex ").concat(reduceIndex));
        // Implementa la logica della funzione di riduzione qui
    }
    function PremiumService(param) {
        console.log("Premium service called with param: ".concat(param));
    }
    function BasicService(param) {
        console.log("Basic service called with param: ".concat(param));
    }
    function IsPremiumUser(username) {
        // Logica per determinare se l'utente è premium
        return username === 'premiumUser';
    }
    function VipService(param) {
        console.log("VIP service called with param: ".concat(param));
    }
    function calc() {
        return Math.random() * 1000;
    }
    // miniSL: function calcolaStipendioMensile(calc)
    function calcolaStipendioMensile(calc) {
        // miniSL: call calc()
        return calc();
    }
    // miniSL: end
    // miniSL: function calcolaStipendio(calcolaStipendioMensile,ruolo)
    function calcolaStipendio(calcolaStipendioMensile, ruolo) {
        // miniSL: invoke calcolaStipendioMensile(calc)
        var stp = calcolaStipendioMensile(calc);
        // miniSL: if(ruolo)
        if (ruolo === "manager") {
            // miniSL: invoke calcolaStipendioMensile(calc)
            stp = calcolaStipendioMensile(calc);
            // miniSL: else
        }
        else {
            // miniSL: call calc()
            return calc() > 500;
        }
        // miniSL: end
        console.log("Stipendio calcolato: " + stp);
        return true;
    }
    // miniSL: end
    // miniSL: call main(jobs,m,r,isVipUser,username,param)
    function main(jobs, m, r, isVipUser, param, username) {
        // miniSL: for(i,m)
        for (var i = 0; i < m; i++) {
            // miniSL: call map(jobs,i)
            map(jobs, i);
            // miniSL: for(j,r)
            for (var j = 0; j < r; j++) {
                // miniSL: call reduce(jobs,i,j)
                reduce(jobs, i, j);
            }
            // miniSL: end
        }
        // miniSL: end
        // miniSL: if(isVipUser)
        if (isVipUser) {
            // miniSL: if(IsPremiumUser(username))
            if (IsPremiumUser(username)) {
                // miniSL: call PremiumService(param)
                PremiumService(param);
                // miniSL: else
            }
            else {
                // miniSL: call BasicService(param)
                BasicService(param);
            }
            // miniSL: end
            // miniSL: else
        }
        else {
            // miniSL: call VipService(param)
            VipService(param);
        }
        // miniSL: end
        //passo funzioni a funzioni
        // miniSL: if(calcolaStipendio(calcolaStipendioMensile, manager))
        if (calcolaStipendio(calcolaStipendioMensile, "manager")) {
            console.log("Stipendio calcolato per manager");
        }
        // miniSL: end
        // miniSL: invoke calcolaStipendio(calcolaStipendioMensile, employee)
        calcolaStipendio(calcolaStipendioMensile, "employee");
    }
    // miniSL: end
    // Esempio di utilizzo
    var jobs = ['Job1', 'Job2', 'Job3'];
    var m = 3;
    var r = 2;
    var isPremiumUser = true;
    var param = 'exampleParam';
    var username = "user";
    main(jobs, m, r, isPremiumUser, param, username);
})(input0 || (input0 = {}));
//# sourceMappingURL=input0.js.map