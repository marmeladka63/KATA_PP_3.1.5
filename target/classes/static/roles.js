const currentUserUrl = "/api/admin/currentUser";
const currentUser = fetch(currentUserUrl).then(response => response.json(), error => alert(`Error HTTP:  ${error.status}`));

async function fillNavBar(){
    currentUser.then(user => {
            let roles = '';
            user.roles.forEach(role => {
                roles += ' ';
                roles += role.role;
            })
            document.getElementById("nav-email").innerHTML = user.email;
            document.getElementById("nav-roles").innerHTML = roles;
            document.getElementById("nav-email").setAttribute("idUser", user.id);
        }
    ).catch(err => alert(err));
}
fillNavBar()