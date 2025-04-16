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
    // miniSL: function calcolaStipendio(calcolaStipendioMensile,flag)
    function calcolaStipendio(calcolaStipendioMensile, flag) {
        // miniSL: invoke calcolaStipendioMensile(calc)
        let stp = calcolaStipendioMensile(calc);
        // miniSL: if(flag)
        if (flag) {
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
    // miniSL: function calcolaStipendioMensile(calc)
    function calcolaStipendioMensile(calc) {
        // miniSL: call calc()
        return calc();
    }
    // miniSL: end
    // miniSL: function main(jobs,m,r,isVipUser,username,param)
    function main(jobs, m, r, isVipUser, param, username) {
        // miniSL: for(i,m)
        for (let i = 0; i < m; i++) {
            // miniSL: call map(jobs,i)
            map(jobs, i);
            // miniSL: for(j,r)
            for (let j = 0; j < r; j++) {
                // miniSL: call reduce(jobs,i,j)
                reduce(jobs, i, j);
            }
            // miniSL: end
        }
        // miniSL: end
        // miniSL: if(5 == 5)
        if (isVipUser) {
            // miniSL: if(IsPremiumUser((username && true)||param))
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
        // miniSL: invoke calcolaStipendio(calcolaStipendioMensile, true)
        calcolaStipendio(calcolaStipendioMensile, true);
    }
    // miniSL: end
    // Esempio di utilizzo
    const jobs = ['Job1', 'Job2', 'Job3'];
    const m = 3;
    const r = 2;
    const isPremiumUser = true;
    const param = 'exampleParam';
    const username = "user";
    // miniSL: invoke main(jobs, m, r, isPremiumUser, param, username)
    main(jobs, m, r, isPremiumUser, param, username);
    // TEST FOR IF GUARD EXPRESSION
    //- miniSL: if(true && false)
    //- miniSL: if(5 > 3)
    //- miniSL: if(10 + 5)
    //- miniSL: if(x * y - 2)
    //- miniSL: if((a > b) && (c < d))
    //- miniSL: if(x > 10 + 5)
    //- miniSL: if(3+x > 10 + 5)
    //- miniSL: if(3+x > 10 + 5 < 3 +2)
    //- miniSL: if(3+x > 10 + 5 && 3+x > 10 + 5 < 3 +2)
    //- miniSL: if(5 * (x || y))
    //- miniSL: if(true + 1)
    //- miniSL: if(!((a + b) > (c * 2)) || (d - 3 < e / 2))
    //- miniSL: if(!(((a + b) == (b+c)) + (c * 2)) || (d - 3 < e / 2))
    //- miniSL: if(!((a + b == b+c) < (c * 2)) || (d - 3 < e / 2))
    //- miniSL: if(invalid syntax)
    // TEST FOR ITERATOR GUARD EXPREXION
    //- miniSL: for(i,3)
    //- miniSL: for(i,3*2)
    //- miniSL: for(i,3+2*1) 
    //- miniSL: for(i,(3+2)*1)
    //- miniSL: for(i1,3+2*1)  
    //- miniSL: for(ik,3+2*1)  
    //- miniSL: for(,3+2*1)  
    //- miniSL: for(1,3+2+1)  
    //- miniSL: for(iKj(),3+2+1)  
    //- miniSL: for(12JKk,3+2-1)
    //- miniSL: for(KKK,3+2/1)  
})(input0 || (input0 = {}));
//# sourceMappingURL=input3.js.map