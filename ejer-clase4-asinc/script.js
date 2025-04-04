document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("users-list");
    const searchInput = document.getElementById("search");
    const toggleButton = document.getElementById("toggleButton");

    let users = [];
    let isVisible = false;

    toggleButton.addEventListener("click", () => {
        isVisible = !isVisible;
        toggleButton.textContent = isVisible ? "Ocultar Usuarios" : "Mostrar Usuarios";
        searchInput.style.display = isVisible ? "block" : "none";
        userList.innerHTML = "";

        if (isVisible) {
            if (users.length === 0) {
                fetchUsers();
            } else {
                renderUsers(users);
            }
        }
    });

    function fetchUsers() {
        fetch("https://reqres.in/api/users")
            .then(res => res.json())
            .then(data => {
                users = data.data;
                renderUsers(users);
            })
            .catch(err => console.error("Error cargando usuarios:", err));
    }

    function renderUsers(userArray) {
        userList.innerHTML = "";
        userArray.forEach(user => {
            const card = document.createElement("div");
            card.classList.add("user-card");
            card.innerHTML = `
                <img src="${user.avatar}" alt="${user.first_name}">
                <div>
                    <h3>${user.first_name} ${user.last_name}</h3>
                    <p>${user.email}</p>
                </div>
            `;
            userList.appendChild(card);
        });
    }

    searchInput.addEventListener("input", (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = users.filter(user =>
            user.first_name.toLowerCase().includes(term) ||
            user.last_name.toLowerCase().includes(term)
        );
        renderUsers(filtered);
    });
});
