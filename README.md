# MiniSL Processor

Un sistema completo per l'elaborazione del linguaggio MiniSL composto da tre componenti principali: **Annotator**, **Extractor** e **Checker**.

## Struttura del Progetto

```
prgTesi/
├── extractor/          # Componente per l'estrazione del codice MiniSL
│   ├── annotatedCode/  # File di input annotati
│   ├── config.json     # Configurazione extractor
│   ├── extractor.ts    # Codice principale
│   └── output.txt      # Output generato
├── annotator/          # Componente per l'annotazione automatica
│   ├── inputCode/      # File di input TypeScript
│   │   └── input.ts    # File di input principale
│   ├── config.json     # Configurazione annotator
│   ├── annotator.ts    # Codice principale
│   └── output.txt      # Annotazioni generate
├── miniSLChecker/      # Componente per la verifica del codice MiniSL
│   ├── miniSLGrammar/  # Grammatica ANTLR
│   ├── checker.ts      # Codice principale
│   └── miniSLCode.txt  # Codice MiniSL da verificare
├── .vscode/           # Configurazione VS Code
│   ├── launch.json    # Configurazione debug
│   └── tasks.json     # Task VS Code
├── package.json       # Configurazione principale del progetto
├── Makefile          # Automazione con Make (Windows/Linux/macOS)
├── build.bat         # Script batch per Windows
├── .gitignore        # File da ignorare in git
└── README.md         # Questo file
```

## Installazione

### Prerequisiti
- Node.js (versione 16 o superiore)
- npm
- Make (per Linux/macOS/Windows con WSL o MinGW)
- Git (per version control)

### Setup Rapido

**Usando Make (raccomandato):**
```bash
make setup
```

**Manuale:**
```bash
npm install
make install  # Installa dipendenze di tutti i componenti
make build    # Compila tutti i componenti
```

## Componenti

### 1. Extractor
Estrae il codice MiniSL dal codice annotato TypeScript.

**Uso singolo:**
```bash
# Con Make
make build-extractor
make extract INPUT_FILE=../annotator/output.txt ENTRY_POINT=main

# Diretto
cd extractor
npm run build
node dist/extractor.js ../annotator/output.txt main
```

### 2. Annotator
Genera automaticamente le annotazioni MiniSL per il codice TypeScript.

**Uso singolo:**
```bash
# Con Make
make build-annotator
make annotate INPUT_FILE=inputCode/input.ts ENTRY_POINT=main

# Diretto
cd annotator
npm run build
node dist/annotator.js inputCode/input.ts output.txt main
```

**Note**: L'annotator prende in input file TypeScript parzialmente annotati (con solo `call` e `defCall`), un entry point specifico, e genera file completamente annotati salvati come `output.txt`.

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
(input.ts)                  (output.txt)               (output.txt + console)
       ↓                           ↓                         ↓
   ANNOTATOR               →     EXTRACTOR           →    CHECKER
```

**Dettaglio del processo:**
1. **ANNOTATOR**: `input.ts` → `annotator/output.txt` (annotazioni complete)
2. **EXTRACTOR**: `annotator/output.txt` → `extractor/output.txt` (codice MiniSL)
3. **CHECKER**: `extractor/output.txt` → verifica sintattica (output console)

Esegue tutti e tre i componenti in sequenza:

**Usando Make:**
```bash
make pipeline
# oppure con parametri personalizzati
make pipeline ENTRY_POINT=myFunction
```

**Manuale:**
```bash
# Step 1: Annotazione completa (partial → complete annotations)
make annotate ENTRY_POINT=main

# Step 2: Estrazione MiniSL (complete annotations → MiniSL code)
make extract INPUT_FILE=../annotator/output.txt ENTRY_POINT=main

# Step 3: Verifica sintattica
make check
```

## Comandi Make Disponibili

| Comando | Descrizione |
|---------|-------------|
| `make help` | Mostra l'aiuto con tutti i comandi disponibili |
| `make install` | Installa tutte le dipendenze |
| `make build` | Compila tutti i componenti |
| `make clean` | Pulisce i file di build |
| `make setup` | Installazione + build completo |
| `make pipeline` | Esegue la pipeline completa (annotate → extract → check) |
| `make annotate` | Esegue l'annotator con entry point specificato (partial → complete) |
| `make extract` | Esegue l'extractor |
| `make check` | Esegue il checker sull'output dell'extractor |
| `make check-standalone` | Esegue il checker su `miniSLCode.txt` |
| `make dev-annotator` | Build + esecuzione rapida annotator |
| `make dev-extractor` | Build + esecuzione rapida extractor |
| `make dev-checker` | Build + esecuzione rapida checker |
| `make test` | Esegue test su tutti i componenti |

## Comandi NPM Disponibili

**Nota**: I comandi Make sono raccomandati. I comandi NPM sono disponibili per compatibilità ma potrebbero non gestire tutti i percorsi correttamente.

| Comando | Descrizione |
|---------|-------------|
| `npm run build` | Compila tutti i componenti (usa `make build` invece) |

## Parametri Personalizzabili

Puoi specificare file di input e parametri personalizzati:

```bash
# Con Make
make extract INPUT_FILE=../annotator/output.txt ENTRY_POINT=myFunction
make annotate INPUT_FILE=inputCode/myfile.ts ENTRY_POINT=myFunction

# File di input predefinito (annotator) con entry point personalizzato
make annotate ENTRY_POINT=myFunction

# Pipeline con entry point personalizzato
make pipeline ENTRY_POINT=myFunction
```

## Sviluppo e Debug

### Debug in VS Code
Il progetto include configurazioni per VS Code:

**Configurazioni disponibili:**
- **Debug Annotator**: Debug del processo di annotazione
- **Debug Extractor**: Debug del processo di estrazione  
- **Debug Checker**: Debug del processo di verifica

**Per usare il debug:**
1. Apri VS Code nella cartella del progetto
2. Vai a "Run and Debug" (Ctrl+Shift+D)
3. Seleziona la configurazione desiderata
4. Premi F5 per avviare il debug

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
make test    # Testa tutti i componenti con file di esempio
```

**Nota**: Alcuni test potrebbero fallire se i file di esempio referenziati non esistono. I test funzionali della pipeline principale sono garantiti.

## File di Configurazione

Ogni componente ha la propria configurazione:
- `extractor/config.json` - Configurazione per l'estrazione
- `annotator/config.json` - Configurazione per l'annotazione
- `miniSLChecker/` - Grammatica MiniSL

## Struttura Output

L'output viene generato nelle seguenti posizioni:
- `extractor/dist/` - Codice compilato dell'extractor
- `annotator/dist/` - Codice compilato dell'annotator
- `miniSLChecker/dist/` - Codice compilato del checker
- `annotator/output.txt` - Annotazioni complete generate dall'annotator
- `extractor/output.txt` - Codice MiniSL generato dall'extractor
- `miniSLChecker/miniSLCode.txt` - Codice MiniSL copiato per la verifica

## File Importanti

### File di Input Predefiniti
- `annotator/inputCode/input.ts` - File di input principale per l'annotator
- `annotator/inputCode/input4example.ts` - Esempio di file parzialmente annotato

### File di Output
- `annotator/output.txt` - Output dell'annotator (annotazioni complete)
- `extractor/output.txt` - Output dell'extractor (codice MiniSL)

### File di Configurazione
- `annotator/config.json` - Configurazione per l'annotator
- `extractor/config.json` - Configurazione per l'extractor
- `miniSLChecker/miniSLGrammar/miniSLGrammar.g4` - Grammatica ANTLR per MiniSL
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
Make è supportato su Windows con WSL, MinGW, o strumenti simili. Se non disponibile:

1. **Installa Make tramite chocolatey:**
   ```cmd
   choco install make
   ```

2. **Oppure usa comandi diretti:**
   ```cmd
   # Setup manuale
   npm install
   cd annotator && npm install && npm run build && cd ..
   cd extractor && npm install && npm run build && cd ..
   cd miniSLChecker && npm install && npm run build && cd ..
   ```

## Git e Version Control

Il progetto include un `.gitignore` configurato per:
- File node_modules
- Directory di build (dist/)
- File di output della pipeline (*.txt)
- File temporanei e cache
- File di configurazione locali

**Per inizializzare git:**
```bash
git init
git add .
git commit -m "Initial MiniSL Processor setup"
```

## Contribuire

1. Fork del repository
2. Crea un branch per la tua feature (`git checkout -b feature/nuova-feature`)
3. Testa le modifiche con `make test` e `make pipeline`
4. Commit le modifiche (`git commit -am 'Aggiunge nuova feature'`)
5. Push al branch (`git push origin feature/nuova-feature`)
6. Crea una pull request

## Struttura del Progetto Dettagliata

```
prgTesi/
├── .vscode/                    # Configurazione VS Code
│   ├── launch.json            # Configurazioni debug
│   └── tasks.json             # Task per build e run
├── annotator/                 # Componente annotazione
│   ├── inputCode/            # File di input TypeScript
│   │   ├── input.ts          # Input principale (da input4example.ts)
│   │   └── input4example.ts  # Esempio di annotazioni parziali
│   ├── dist/                 # Build output (ignorato da git)
│   ├── config.json           # Configurazione annotator
│   ├── annotator.ts          # Logica principale
│   └── output.txt            # Output generato (ignorato da git)
├── extractor/                # Componente estrazione
│   ├── annotatedCode/        # File di test annotati
│   ├── dist/                 # Build output (ignorato da git)
│   ├── config.json           # Configurazione extractor
│   ├── extractor.ts          # Logica principale
│   └── output.txt            # Output generato (ignorato da git)
├── miniSLChecker/            # Componente verifica
│   ├── miniSLGrammar/        # Grammatica ANTLR
│   │   ├── miniSLGrammar.g4  # Definizione grammatica
│   │   └── *.ts              # File generati da ANTLR
│   ├── dist/                 # Build output (ignorato da git)
│   ├── checker.ts            # Logica principale
│   └── miniSLCode.txt        # Codice da verificare (ignorato da git)
├── .gitignore                # File ignorati da git
├── Makefile                  # Automazione build e pipeline
├── package.json              # Configurazione root del progetto
└── README.md                 # Documentazione (questo file)
```