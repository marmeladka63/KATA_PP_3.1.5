
let currentUserUrl = "/api/admin/currentUser";
let currentUser = fetch(currentUserUrl).then(response => response.json(), error => alert(`Error HTTP:  ${error.status}`));

async function fillRolles(){
    currentUser.then(user => {
            let roles = '';
            user.roles.forEach(role => {
                roles += ' ';
                roles += role.role.replaceAll('ROLE_', '');
            })
            document.getElementById("nav-email").innerHTML = user.email;
            document.getElementById("nav-roles").innerHTML = roles;
            document.getElementById("nav-email").setAttribute("idUser", user.id);
        }
    ).catch(err => alert(err));
}


async function fillTableUser() {
    currentUser.then(user => {
        let mainTable = '';

        let roles = '';
        user.roles.forEach(role => {
            roles += ' ';
            roles += role.role;
            roles += role.role.replaceAll('ROLE_', '');
        })
        mainTable +=
            `<tr>
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.lastname}</td>
                 <td>${user.age}</td>
                <td>${user.email}</td>
                <td ${roles}</td>  
                </tr>`
        document.getElementById('user-info').innerHTML = mainTable;

    }).catch(err => alert(err));
}
fillTableUser();
fillRolles()


