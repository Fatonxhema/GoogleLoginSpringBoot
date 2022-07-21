function getData(){
    fetch('http://localhost:8099/api/v1/current-user-details')
        .then(response =>response.json())
        .then(data => {
            console.log(data);
            document.getElementById("full-name").innerHTML = data.name;
            document.getElementById("email").innerHTML = data.email;
            document.getElementById("profile-img").src = data.picture;
        });
}