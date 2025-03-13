from typing import List, Any, Callable

def map(jobs: List[Any], index: int) -> None:
    print(f"Mapping jobs for index {index}")
    # Implementa la logica della funzione di mappatura qui

def reduce(jobs: List[Any], map_index: int, reduce_index: int) -> None:
    print(f"Reducing jobs for mapIndex {map_index} and reduceIndex {reduce_index}")
    # Implementa la logica della funzione di riduzione qui

def PremiumService(param: Any) -> None:
    print(f"Premium service called with param: {param}")

def BasicService(param: Any) -> None:
    print(f"Basic service called with param: {param}")

def IsPremiumUser(username: str) -> bool:
    # Logica per determinare se l'utente è premium
    return username == 'premiumUser'

def VipService(param: Any) -> None:
    print(f"VIP service called with param: {param}")

def calcolaStipendio(calcola_stipendio_mensile: Callable[[int], float], ruolo: str) -> bool:
    stp = calcola_stipendio_mensile(12)
    if ruolo == "manager":
        stp = calcola_stipendio_mensile(14)
    else:
        return False
    print("Stipendio calcolato: " + str(stp))
    return True

def calcolaStipendioMensile(mensilita: int) -> float:
    return 36 / mensilita

# miniSL: call(jobs,m,r,isVipUser,username,param)
def main(jobs: List[Any], m: int, r: int, isVipUser: bool, param: Any, username: str) -> None:
    # miniSL: for(i,m)
    for i in range(m):
        # miniSL: call map(jobs,i)
        map(jobs, i)
        # miniSL: for(j,r)
        for j in range(r):
            # miniSL: call reduce(jobs,i,j)
            reduce(jobs, i, j)
        # miniSL: end
    # miniSL: end
    
    # miniSL: if(isVipUser)
    if isVipUser:
        # miniSL: if(IsPremiumUser(username))
        if IsPremiumUser(username):
            # miniSL: call PremiumService(param)
            PremiumService(param)
            # miniSL: else
        else:
            # miniSL: call BasicService(param)
            BasicService(param)
        # miniSL: end
        # miniSL: else
    else:
        # miniSL: call VipService(param)
        VipService(param)
    # miniSL: end
    
    # miniSL: if(calcolaStipendio(calcolaStipendioMensile(), manager))
    if calcolaStipendio(calcolaStipendioMensile, "manager"):
        print("Stipendio calcolato per manager")
    # miniSL: end
    
    # miniSL: call calcolaStipendio(calcolaStipendioMensile(), employee)
    calcolaStipendio(calcolaStipendioMensile, "employee")
    # miniSL: end

# Esempio di utilizzo
jobs = ['Job1', 'Job2', 'Job3']
m = 3
r = 2
is_premium_user = True
param = 'exampleParam'
username = "user"

main(jobs, m, r, is_premium_user, param, username)
