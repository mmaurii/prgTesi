// Sostituisci con un tipo specifico se conosci la struttura dei job
    // miniSL: function map(jobs,  index)
    // miniSL: end

    // miniSL: function reduce(jobs,  mapIndex,  reduceIndex)
    // miniSL: end

    // miniSL: function PremiumService(param)
    // miniSL: end

    // miniSL: function BasicService(param)
    // miniSL: end

    // miniSL: function IsPremiumUser(username)
    // miniSL: end

    // miniSL: function VipService(param)
    // miniSL: end

    // miniSL: function calc()
    // miniSL: end

    // miniSL: function calcolaStipendio(calcolaStipendioMensile,  flag)
         // miniSL: invoke calcolaStipendioMensile(calc)
        // miniSL: if(flag)
         // miniSL: invoke calcolaStipendioMensile(calc)
        // miniSL: else
         // miniSL: invoke calc()
        // miniSL: end
    // miniSL: end

        // miniSL: function calcolaStipendioMensile(calc)
     // miniSL: invoke calc()
        // miniSL: end
        
    // miniSL: function main(jobs,  m,  r,  isVipUser,  param,  username)
        // miniSL: for(i, m)
            // miniSL: invoke map(jobs, i)
            // miniSL: for(j, r)
                // miniSL: call service1(jobs, i, j)
            // miniSL: end
        // miniSL: end

        // miniSL: if(isVipUser)
            // miniSL: if(IsPremiumUser(username))
                // miniSL: invoke PremiumService(param)
             // miniSL: else
                // miniSL: invoke BasicService(param)
            // miniSL: end
         // miniSL: else
            // miniSL: invoke VipService(param)
        // miniSL: end


        // miniSL: invoke calcolaStipendio(calcolaStipendioMensile, true)
    // miniSL: end

    // Esempio di utilizzo
    // miniSL: invoke main(jobs, m, r, isPremiumUser, param, username)