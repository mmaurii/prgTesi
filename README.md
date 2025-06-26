# MiniSL Processor

Un sistema completo per l'elaborazione del linguaggio MiniSL composto da tre componenti principali: **Annotator**, **Extractor** e **Checker**.

## Struttura del Progetto

```
prgTesi/
├── extractor/          # Componente per l'estrazione del codice MiniSL
├── annotator/          # Componente per l'annotazione automatica
├── miniSLChecker/      # Componente per la verifica del codice MiniSL
├── package.json        # Configurazione principale del progetto
├── Makefile           # Automazione con Make
├── build.bat          # Script batch per Windows
└── README.md          # Questo file
```

## Installazione

### Prerequisiti
- Node.js (versione 16 o superiore)
- npm
- Make (opzionale, per Linux/macOS) o Windows con batch script

### Setup Rapido

**Usando Make (Linux/macOS/Windows con Make):**
```bash
make setup
```

**Usando batch script (Windows):**
```cmd
build.bat setup
```

**Manuale:**
```bash
npm install
npm run install-all
npm run build
```

## Componenti

### 1. Extractor
Estrae il codice MiniSL dal codice annotato TypeScript.

**Uso singolo:**
```bash
# Con Make
make build-extractor
make extract INPUT_FILE=./path/to/file.ts ENTRY_POINT=main

# Diretto
cd extractor
npm run build
node dist/extractor.js main ./annotatedCode/overviewExample.ts
```

### 2. Annotator
Genera automaticamente le annotazioni MiniSL per il codice TypeScript.

**Uso singolo:**
```bash
# Con Make
make build-annotator
make annotate INPUT_FILE=./path/to/file.ts

# Diretto
cd annotator
npm run build
node dist/annotator.js ./inputCode/overviewExample.ts ./output.ts
```

### 3. Checker
Verifica la correttezza sintattica del codice MiniSL.

**Uso singolo:**
```bash
# Con Make
make build-checker
make check

# Diretto
cd miniSLChecker
npm run build
node dist/checker.js ./miniSLCode.txt
```

## Pipeline Completa

Il sistema MiniSL segue questa pipeline integrata:

### Flusso di Lavoro Principale
```
File TypeScript            File TypeScript            Codice MiniSL
parzialmente annotato  →    completamente annotato  →  + Checking
(solo call/defCall)         (tutte le annotazioni)      (output console)
       ↓                           ↓                         ↓
   ANNOTATOR               →     EXTRACTOR           →    RISULTATO
```

Esegue tutti e tre i componenti in sequenza:

**Usando Make:**
```bash
make pipeline INPUT_FILE=./my-partial-annotated.ts ENTRY_POINT=main
```

**Usando batch script:**
```cmd
build.bat pipeline
```

**Manuale:**
```bash
# Step 1: Annotazione completa (partial → complete annotations)
npm run annotate

# Step 2: Estrazione con checking integrato (complete annotations → MiniSL)
npm run extract
```

## Comandi Make Disponibili

| Comando | Descrizione |
|---------|-------------|
| `make help` | Mostra l'aiuto |
| `make install` | Installa tutte le dipendenze |
| `make build` | Compila tutti i componenti |
| `make clean` | Pulisce i file di build |
| `make setup` | Installazione + build completo |
| `make pipeline` | Esegue la pipeline completa (annotate → extract) |
| `make extract` | Esegue l'extractor con checking integrato |
| `make annotate` | Esegue l'annotator (partial → complete) |
| `make check` | Esegue il checker standalone |

## Comandi NPM Disponibili

| Comando | Descrizione |
|---------|-------------|
| `npm run build` | Compila tutti i componenti |
| `npm run annotate` | Esegue l'annotator (partial → complete) |
| `npm run extract` | Esegue l'extractor con checking integrato |
| `npm run check` | Esegue il checker standalone |
| `npm run pipeline` | Esegue la pipeline completa |
| `npm run clean` | Pulisce i file di build |

## Parametri Personalizzabili

Puoi specificare file di input e parametri personalizzati:

```bash
# Con Make
make extract INPUT_FILE=./my-file.ts ENTRY_POINT=myFunction
make annotate INPUT_FILE=./my-input.ts

# Con variabili d'ambiente
INPUT_FILE=./custom.ts make pipeline
```

## Sviluppo

### Build Singolo Componente
```bash
# Extractor
cd extractor && npm run build

# Annotator  
cd annotator && npm run build

# Checker
cd miniSLChecker && npm run build
```

### Modalità Sviluppo
```bash
# Build rapido + esecuzione
make dev-extractor
make dev-annotator
make dev-checker
```

### Test
```bash
make test
```

## File di Configurazione

Ogni componente ha la propria configurazione:
- `extractor/config.json` - Configurazione per l'estrazione
- `annotator/config.json` - Configurazione per l'annotazione
- `miniSLChecker/` - Grammatica MiniSL

## Struttura Output

L'output viene generato nelle seguenti directory:
- `extractor/dist/` - Codice compilato dell'extractor
- `annotator/dist/` - Codice compilato dell'annotator
- `miniSLChecker/dist/` - Codice compilato del checker
- File di output personalizzabili tramite parametri

## Troubleshooting

### Errori di Compilazione TypeScript
```bash
# Pulisci e ricompila
make clean
make build
```

### Errori di Dipendenze
```bash
# Reinstalla tutte le dipendenze
make clean
make install
```

### Problemi con Make su Windows
Usa il file batch alternativo:
```cmd
build.bat help
build.bat setup
build.bat pipeline
```

## Contribuire

1. Fork del repository
2. Crea un branch per la tua feature
3. Testa con `make test`
4. Crea una pull request

## License

[Inserire licenza]