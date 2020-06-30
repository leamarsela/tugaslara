<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
</head>
<body>
    <h1>Buat Account Baru!</h1>
    
    <form action="/register_post" method="POST">
    @csrf
        <h3>Sign Up Form</h3>

        <label for="first_name">First name:</label><br>
        <input type="text" id="first_name" name="first_name">
        <br><br>
        <label for="last_name">Last name:</label><br>
        <input type="text" id="last_name" name="last_name">
        <br><br>

        <label for="">Gender: </label>
        <br><br>
        <input type="radio" name="gender" value="Male">Male <br>
        <input type="radio" name="gender" value="Female">Female <br>
        <input type="radio" name="gender" value="other">Other <br><br>

        <label for="">Nationality: </label>
        <br><br>
        <select name="nasionalisme">
            <option value="indonesian">Indonesian</option>
            <option value="japanese">Japanese</option>
            <option value="kroasian">Kroasian</option>
            <option value="libya">Libya</option>
            <option value="mesir">Mesir</option>
        </select>
        <br><br>

        <label for="">Languange Spoken: </label>
        <br><br>
        <input type="checkbox" name="bahasa" value='bahasa indonesia'>Bahasa Indonesia <br>
        <input type="checkbox" name="bahasa" value='english'>English <br>
        <input type="checkbox" name="bahasa" value='other'>Other <br><br>

        <label for="">Bio: </label>
        <br><br>
        <textarea name="textarea" id="bio" cols="30" rows="10"></textarea><br>

        <input type="submit" value="Sign Up">
        
        
    </form>
    

</body>
</html>