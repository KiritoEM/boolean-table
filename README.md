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

### ✅ Supported Expressions:
- **a-z or A-Z** : Variables
- **&** : AND
- **~** : NOT
- **|** : OR
- **==** : EQUAL
- **->** : IMPLIES

### 🔧 Commands:
- **expression `<expression>`** : Generates the truth table for the given expression.
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

OR With step:

boolean-table expression "(a -> ~b) == (b | a)" --step

# Truth table for (a -> ~b) == (b | a) with steps
| a  | b  | ~b  | b | a | (a -> ~b) == (b | a) |
|----|----|-----|----|---|---------------------|
| 0  | 0  | 1   | 0  | 0 | 0                   |
| 0  | 1  | 0   | 1  | 1 | 1                   |
| 1  | 0  | 1   | 1  | 1 | 1                   |
| 1  | 1  | 0   | 1  | 1 | 0                   |
```
