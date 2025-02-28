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

Pour lancer l'outil: 

```bash
boolean-table
```
### Expressions supportés:
- **a-z ou A-Z** : Variables 
- **&** : AND
- **~** : NOT
- **|** : OR
- **==** : EQUAL
- **->** : IMPLICIES


### Commandes :
- **expression `<expression>`** : Pour générer la table de vérité
- **help** : Pour afficher l'écran d'aide


## Exemple d'utilisation

```bash
 boolean-table expression "(a -> ~b) == (b | a)"

 # Table de vérité pour (a -> ~b) == (b | a)
| a | b | (a -> ~b) == (b | a) |
|---|---|----------------------|
| 0 | 0 | 0                    |
| 0 | 1 | 1                    |
| 1 | 0 | 1                    |
| 1 | 1 | 0                    |
```



