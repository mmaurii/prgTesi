var input1;
(function (input1) {
    function map(jobs, index) {
        console.log("Mapping jobs for index ".concat(index));
        // Implementa la logica della funzione di mappatura qui
    }
    function reduce(jobs, mapIndex, reduceIndex) {
        console.log("Reducing jobs for mapIndex ".concat(mapIndex, " and reduceIndex ").concat(reduceIndex));
        // Implementa la logica della funzione di riduzione qui//
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
    // miniSL: function calcolaStipendioMensile(calc())//
    function calcolaStipendioMensile(mensilità) {
        // miniSL: call calc()//
        return 36 / mensilità;
    }
    // miniSL: end//
    // miniSL: function calcolaStipendio(calcolaStipendioMensile(),ruolo)//
    function calcolaStipendio(calcolaStipendioMensile, ruolo) {
        // miniSL: call calcolaStipendioMensile(calc)//
        var stp = calcolaStipendioMensile(12);
        // miniSL: if(ruolo)//
        if (ruolo === "manager") {
            // miniSL: call calcolaStipendioMensile(calc)//
            stp = calcolaStipendioMensile(14);
            // miniSL: else//
        }
        else {
            return false;
        }
        // miniSL: end//
        console.log("Stipendio calcolato: " + stp);
        return true;
    }
    // miniSL: end//
    // miniSL: call main(jobs,m,r,isVipUser,username,param)//
    function main(jobs, m, r, isVipUser, param, username) {
        // miniSL: for(i,m)//
        for (var i = 0; i < m; i++) {
            // miniSL: call map(jobs,i)//
            map(jobs, i);
            // miniSL: for(j,r)//
            for (var j = 0; j < r; j++) {
                // miniSL: call reduce(jobs,i,j)//
                reduce(jobs, i, j);
            }
            // miniSL: end//
        }
        // miniSL: end//
        // miniSL: if(isVipUser)//
        if (isVipUser) {
            // miniSL: if(IsPremiumUser(username))//
            if (IsPremiumUser(username)) {
                // miniSL: call PremiumService(param)//
                PremiumService(param);
                // miniSL: else//
            }
            else {
                // miniSL: call BasicService(param)//
                BasicService(param);
            }
            // miniSL: end//
            // miniSL: else//
        }
        else {
            // miniSL: call VipService(param)//
            VipService(param);
        }
        // miniSL: end//
        //passo funzioni a funzioni
        //la guardia non essendo un'espressione booleana o aritmetica viene interpretata come call avendo le parenesi 
        // miniSL: if(calcolaStipendio(calcolaStipendioMensile, manager))//
        if (calcolaStipendio(calcolaStipendioMensile, "manager")) {
            console.log("Stipendio calcolato per manager");
        }
        // miniSL: end//
        // miniSL: call calcolaStipendio(calcolaStipendioMensile, employee)//
        calcolaStipendio(calcolaStipendioMensile, "employee");
    }
    // miniSL: end//
    // Esempio di utilizzo
    var jobs = ['Job1', 'Job2', 'Job3'];
    var m = 3;
    var r = 2;
    var isPremiumUser = true;
    var param = 'exampleParam';
    var username = "user";
    main(jobs, m, r, isPremiumUser, param, username);
})(input1 || (input1 = {}));
//# sourceMappingURL=input1.js.map