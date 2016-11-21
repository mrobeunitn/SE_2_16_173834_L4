<html>
    <head>
        <script src="functions.js"></script>
    </head>
    <body>
        
         <form method='post'id='searchId' action='index.js' style="display:block">
            <input type='text' name='id' id='id' placheholder='id' value="(:id:)">
            <input type='submit' name='' id=''  value='Search'>
        </form>
        
        <button value="VisualizzaForm" id="vis" onclick="visualizzaForm()">VisualizzaForm</button>
        
        <form method='post' id='formAdd' action='index.js' style="display:none">
            <input type='text' name='id' id='id' placheholder='id' value="(:id:)">
            <input type='text' name='name' id='name' placeholder="name" value='(:name:)'>
            <input type='text' name='surname' id='surname' placeholder="surname" value='(:name:)'>
            <input type='text' name='level' id='level' placeholder="level" value='(:level:)'>
            <input type='text' name='salary' id='salary' placeholder="salary" value='(:salary:)'>
        </form>
    </body>
</html>
