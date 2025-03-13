namespace input0 {
    type Job = any; // Sostituisci con un tipo specifico se conosci la struttura dei job

    function map(jobs: Job[], index: number): void {
        console.log(`Mapping jobs for index ${index}`);
        // Implementa la logica della funzione di mappatura qui
    }

    function reduce(jobs: Job[], mapIndex: number, reduceIndex: number): void {
        console.log(`Reducing jobs for mapIndex ${mapIndex} and reduceIndex ${reduceIndex}`);
        // Implementa la logica della funzione di riduzione qui
    }

    function PremiumService(param: any): void {
        console.log(`Premium service called with param: ${param}`);
    }

    function BasicService(param: any): void {
        console.log(`Basic service called with param: ${param}`);
    }

    function IsPremiumUser(username: string): boolean {
        // Logica per determinare se l'utente è premium
        return username === 'premiumUser';
    }

    function VipService(param: any): void {
        console.log(`VIP service called with param: ${param}`);
    }

    function calc(): number {
        return Math.random() * 1000;
    }



    // miniSL: function calcolaStipendio(calcolaStipendioMensile,ruolo)
    function calcolaStipendio(calcolaStipendioMensile: (calc: () => number) => number, ruolo: string): boolean {
        // miniSL: invoke calcolaStipendioMensile(calc)
        let stp = calcolaStipendioMensile(calc);
        // miniSL: if(ruolo)
        if (ruolo === "manager") {
            // miniSL: invoke calcolaStipendioMensile(calc)
            stp = calcolaStipendioMensile(calc);
            // miniSL: else
        } else {
            // miniSL: call calc()
            return calc() > 500;
        }
        // miniSL: end
        console.log("Stipendio calcolato: " + stp);
        return true;
    }
    // miniSL: end

        // miniSL: function calcolaStipendioMensile(calc)
        function calcolaStipendioMensile(calc: () => number): number {
            // miniSL: call calc()
            return calc();
        }
        // miniSL: end
        
    // miniSL: call main(jobs,m,r,isVipUser,username,param)
    function main(jobs: Job[], m: number, r: number, isVipUser: boolean, param: any, username: string): void {
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

        // miniSL: if(isVipUser)
        if (isVipUser) {
            // miniSL: if(IsPremiumUser(username))
            if (IsPremiumUser(username)) {
                // miniSL: call PremiumService(param)
                PremiumService(param);
                // miniSL: else
            } else {
                // miniSL: call BasicService(param)
                BasicService(param);
            }
            // miniSL: end
            // miniSL: else
        } else {
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
    const jobs: Job[] = ['Job1', 'Job2', 'Job3'];
    const m = 3;
    const r = 2;
    const isPremiumUser = true;
    const param = 'exampleParam';
    const username = "user";

    main(jobs, m, r, isPremiumUser, param, username);
}