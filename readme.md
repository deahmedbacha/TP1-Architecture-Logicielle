# tp1 mvc et mvvm

### membres du groupe
- Djamel Eddine Ahmed Bacha
- Yaya Mohamedhen
- Ayadi Firas
- Mohammed BENBRAHIM

### comparaison mvc et mvvm

**1. ou se trouve le filtre en mvc et mvvm**

en mvc le filtre est dans TodoModel.js et le controller gere le filtre choisi

en mvvm le filtre reste dans le model mais le viewmodel gere les changements avec les observables

**2. les tests sans navigateur**

en mvc on peut tester le model directement

en mvvm on peut tester le viewmodel sans ouvrir le navigateur

**3. les fichiers modifies en mvc**

on a modifie 4 fichiers pour ajouter le filtre

index.html TodoModel.js TodoView.js et TodoController.js

on a aussi ajoute un test dans TodoModel.test.js

**4. quel pattern choisir pour queenbee**

pour queenbee je choisirais mvvm parce que les donnees changent en temps reel

avec les observables l'affichage se met a jour automatiquement

c'est aussi plus simple a tester et le code est mieux organise

### captures d'ecran

#### version mvc
![mvc](screenshots/test_mvc.png)

#### version mvvm
![mvvm](screenshots/test_mvvm.png)
