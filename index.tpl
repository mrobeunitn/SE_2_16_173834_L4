<html>
    <head>
        <script src="/static/functions.js"></script>
    </head>
    <body>
        
         <form method='post'id='searchId' action='ricerca' style="display:block">
            <input type='number' name='ids' id='ids' placheholder='id' value="(:id:)" required>
            <input type='submit' name='' id='' onclick="sendIdForm()" value='Search'>
        </form>
        
        <button value="VisualizzaForm" id="vis" onclick="visualizzaForm()">VisualizzaForm</button>
        
        <form method='post' id='formAdd' action='http://127.0.0.1:5000/ricerca' style="display:none">
            <input type='number' name='id' id='id' placheholder='id' value="(:id:)">
            <input type='text' name='name' id='name' placeholder="name" value='(:name:)' required>
            <input type='text' name='surname' id='surname' placeholder="surname" value='(:surname:)' required>
            <input type='number' name='level' id='level' placeholder="level" value='(:level:)' required>
            <input type='number' name='salary' id='salary' placeholder="salary" value='(:salary:)'  required>
            <input type='submit' placeholder="salary" value='Inserisci'  required onclick="sendForm()">
        </form>
    </body>
</html>
