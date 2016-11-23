Per eseguire il file bisogna prima:
    1) installare la libreria express con:  npm install --save express
    2) installare la libreria bind con : npm install --save bind
    3) installare la libreria body-parser con :  npm install --save body-parser
    4) eseguire: node index.js
    
Una volta compilato ed eseguito node, andare su 127.0.0.1:5000 (localhost).

Il primo form permete di cercare un impiegato utilizzando l'id. Gli id pre-inseriti sono: '0','1'.

Il secondo form serve per cancellare un impiegato utilizzando il proprio id.
Gli id pre-inseriti sono: '0','1'.

Il 3 bottone " Show Add Form" permette di inserire un nuovo impiegato. Se l'id viene ommesso, esso verrà generato automaticamente.

Nell'ultima parte si trova una tabella dove vengono visualizzati i dati ricercati precedentemente. 
Il tasto reset permette di resettare le label da una vecchia ricerca.
Anche se, quando si effettua una nuova ricerca essa viene aggiornata.
Ho optato per questa scelta perchè secondo me più ordinata e leggibile.

