# ⚡ Boolean Table

A simple tool to generate a truth table from Boolean expressions.

## 📦 Installation
With npm:
```bash
npm i -g simple-boolean-table
```
Or by cloning the repository( but first install [Bun](https://bun.sh/) on your OS):
```bash
git clone https://github.com/KiritoEM/boolean-table
cd boolean-table
bun install
```

## 🚀 Usage

To start the tool, run:
```bash
boolean-table
```
Or use the tool locally by linking the project:
```bash
bun link
boolean-table
```


## 🚀 Scripts
- **link** : Link the project
- **test**: Run test unit
```bash
bun run link #Link the project
bun run test  #Run tests
```

### ✅ Supported Expressions:
- **a-z or A-Z** : Variables
- **&** : AND
- **~** : NOT
- **|** : OR
- **==** : EQUAL
- **->** : IMPLIES

### 🔧 Commands:
- **expression `<expression>`** : Generates the truth table for the given expression.
- **expression `<expression> --step`** : Generates the truth table by printing subexpressions
- **help** : Displays the help screen.

## 📌 Example Usage
```bash
boolean-table expression "(a -> ~b) == (b | a)"

# Truth table for (a -> ~b) == (b | a)
| a | b | (a -> ~b) == (b | a) |
|---|---|----------------------|
| 0 | 0 | 0                    |
| 0 | 1 | 1                    |
| 1 | 0 | 1                    |
| 1 | 1 | 0                    |
```

Or by printing subexpressions:

boolean-table expression "(a -> ~b) == (b | a)" --step
```bash
# Truth table for (a -> ~b) == (b | a) by printing subexpressions
 | a    | b    | ~b    | (a -> ~b) | (b | a) | (a -> ~b) == (b | a) |
 |------|------|-------|-----------|----|----|----------------------|
 | 0    | 0    | 1     | 1         | 0  | 0  | 0                    |
 | 0    | 1    | 0     | 1         | 1  | 1  | 1                    |
 | 1    | 0    | 1     | 1         | 1  | 1  | 1                    |
 | 1    | 1    | 0     | 0         | 1  | 0  | 0                    |
```
