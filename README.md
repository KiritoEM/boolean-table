# Boolean-table

Un simple outil pour générer une table de vérité via des expressions.


## Installation

Pour installer l'outil, installer d'abord [Bun](https://bun.sh/) et exécuter les commandes:

```bash
git clone https://github.com/KiritoEM/boolean-table
cd boolean-table
bun install
```

## Usage

### Format du fichier JSON :

Pour lancer l'outil: 

```bash
boolean-table
```

### Commandes :
- **expression <expression>** : Pour générer la table de vérité
- **help** : Pour afficher l'écran d'aide


## Exemple d'utilisation

```bash
 boolean-table expression "a & (b | c)"

 # Table de vérité pour `a & (b   c)`
 | a   | b   | c   | a & (b | c) |
 |-----|-----|-----|-------------|
 | 0   | 0   | 0   | 0           |
 | 0   | 0   | 1   | 0           |
 | 0   | 1   | 0   | 0           |
 | 0   | 1   | 1   | 0           |
 | 1   | 0   | 0   | 0           |
 | 1   | 0   | 1   | 1           |
 | 1   | 1   | 0   | 1           |
 | 1   | 1   | 1   | 1           |
```



