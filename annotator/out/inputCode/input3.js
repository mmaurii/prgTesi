var input0;
(function (input0) {
    function map(jobs, index) {
        console.log(`Mapping jobs for index ${index}`);
        // Implementa la logica della funzione di mappatura qui
    }
    function reduce(jobs, mapIndex, reduceIndex) {
        console.log(`Reducing jobs for mapIndex ${mapIndex} and reduceIndex ${reduceIndex}`);
        // Implementa la logica della funzione di riduzione qui
    }
    function PremiumService(param) {
        console.log(`Premium service called with param: ${param}`);
    }
    function BasicService(param) {
        console.log(`Basic service called with param: ${param}`);
    }
    function IsPremiumUser(username) {
        // Logica per determinare se l'utente è premium
        return username === 'premiumUser';
    }
    function VipService(param) {
        console.log(`VIP service called with param: ${param}`);
    }
    function calc() {
        return Math.random() * 1000;
    }
    function calcolaStipendio(calcolaStipendioMensile, flag) {
        let stp = calcolaStipendioMensile(calc);
        if (flag) {
            stp = calcolaStipendioMensile(calc);
        }
        else {
            return calc() > 500;
        }
        console.log("Stipendio calcolato: " + stp);
        return true;
    }
    function calcolaStipendioMensile(calc) {
        return calc();
    }
    function main(jobs, m, r, isVipUser, param, username) {
        for (let i = 0; i < m; i++) {
            map(jobs, i);
            for (let j = 0; j < r; j++) {
                reduce(jobs, i, j);
            }
        }
        if (isVipUser) {
            if (IsPremiumUser(username)) {
                PremiumService(param);
            }
            else {
                BasicService(param);
            }
        }
        else {
            VipService(param);
        }
        calcolaStipendio(calcolaStipendioMensile, true);
    }
    // Esempio di utilizzo
    const jobs = ['Job1', 'Job2', 'Job3'];
    const m = 3;
    const r = 2;
    const isPremiumUser = true;
    const param = 'exampleParam';
    const username = "user";
    main(jobs, m, r, isPremiumUser, param, username);
})(input0 || (input0 = {}));
//# sourceMappingURL=input3.js.map