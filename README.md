# ⚡ Boolean Table

A simple tool to generate a truth table from Boolean expressions.

## 📦 Installation

First, install [Bun](https://bun.sh/) and then run:

With npm:
```bash
npm i -g boolean-table
```
Or by cloning the repository:
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
```
