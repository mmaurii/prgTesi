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



    function calcolaStipendio(calcolaStipendioMensile: (calc: () => number) => number, flag: boolean): boolean {
        let stp = calcolaStipendioMensile(calc);
        if (flag) {
            stp = calcolaStipendioMensile(calc);
        } else {
            return calc() > 500;
        }
        console.log("Stipendio calcolato: " + stp);
        return true;
    }

        function calcolaStipendioMensile(calc: () => number): number {
            return calc();
        }
        
    function main(jobs: Job[], m: number, r: number, isVipUser: boolean, param: any, username: string): void {
        for (let i = 0; i < m; i++) {
            map(jobs, i);
            for (let j = 0; j < r; j++) {
                reduce(jobs, i, j);
            }
        }

        if (isVipUser) {
            if (IsPremiumUser(username)) {
                PremiumService(param);
            } else {
                BasicService(param);
            }
        } else {
            VipService(param);
        }

        calcolaStipendio(calcolaStipendioMensile, true);
    }

    // Esempio di utilizzo
    const jobs: Job[] = ['Job1', 'Job2', 'Job3'];
    const m = 3;
    const r = 2;
    const isPremiumUser = true;
    const param = 'exampleParam';
    const username = "user";

    main(jobs, m, r, isPremiumUser, param, username);
}