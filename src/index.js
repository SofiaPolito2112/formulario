<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <title>Document</title>
</head>
<body>
 <form>
 <fieldset>
 <legend>Formulario</legend>
 <label for="td">Tipo documento</label>
 <br>
 <select id="td">
 <option value="CC">Cédula</option>
 <option value="TI">Tarjeta de Identidad</option>
 <option value="CE">Cédula de Extranjería</option>
 <option value="PA">Pasaporte</option>
 </select>
 <br>
 Nombres:<br>
 <input type="text" 
 id="txtNombre"><br>
 Apellidos:<br>
 <input type="text" id="txtApellido">
 <br>
 <label for="rgenero">Genero:</label><br>
 <input type="radio" name="genero" value="M" checked> Masculino<br>
 <input type="radio" name="genero" value="F"> Femenino<br>
 <br>
 <label for="txtDescripcion">Descripción:</label>
 <br>
 <textarea id="txtDescripcion"></textarea>
 <br>
 <br>
<button type="button" onclick="Cargar();">Cargar Información</button>
 </fieldset>
 </form>
</body>
</html>
