<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
</head>
<body>
    <h1>SELAMAT DATANG {{ $first_name }} {{ $last_name}} </h1>

    <h2>Terima kasih telah bergabung di SanberBook. Social Media kita bersama!</h2>
    <h2>
        Detil Informasi:
        <br>
            Warga negara {{ $nationality }}, bahasa yang digunakana {{$bahasa}}. 
            Jenis kelamin {{$gender}}.
        <br>
            Bio data : {{$textarea}}.
    </h2>
</body>
</html>