<html>
    <head>
        <script src="/static/functions.js"></script>
    </head>
    <body>
        
         <form onsubmit='sendIdForm()' method='post'id='searchId' style="display:block"  action= '/ricerca'>
            <input type='number' name='ids' id='ids' placheholder='id' value="" required>
             <button type='submit' name='' id='' value='Search' onclick="sendIdForm()">Search</button>
        </form>
        <form method='post'id='deleteForm' style="display:block" action= 'http://127.0.0.1:5000/delete' >
            <input type='number' name='idd' id='idd' placheholder='id' value="" required>
             <button type='reset' name='' id='' value='Search' onclick='sendDeleteForm()'>Delete</button>
        </form>
        
        
        <button type="button" value="formbutton" id="vis" onclick="visualizzaForm()">See Add/Delete Form</button>
        
        <form method='post' id='formAdd' name='formAdd' onsubmit='sendAddForm()' style="display:none" action='/inserimento'>
            <input type='number' name='id' id='id' placheholder='id' value="">
            <input type='text' name='name' id='name' placeholder="name" value='' required>
            <input type='text' name='surname' id='surname' placeholder="surname" value='' required>
            <input type='number' name='level' id='level' placeholder="level" value='' required>
            <input type='number' name='salary' id='salary' placeholder="salary" value=''  required>
            <button type = "submit" placeholder="salary" value='Inserisci'>Send</button>
        </form>
        
        <h3> Search Results</h3>
        <!-- form per la visualizzazione della ricerca-->
          <table>
            <tr><td>Id Employee</td><td>Name</td><td>Surname</td><td>Level</td><td>Salary</td></tr>
            <tr>
                <td><label id='idlabel'>(:id:)</label></td>
                <td><label id='namelabel'>(:name:)</label></td>
                <td><label id='surnamelabel'>(:surname:)</label></td>
                <td><label id='levellabel'>(:level:)</label></td>
                <td><label id='salarylabel'>(:salary:)</label></td>
                <td><button placeholder="salary" value='Reset'  required onclick="resetLabels()">Reset</button></td>
            </tr>
        </table>
    </body>
</html>
