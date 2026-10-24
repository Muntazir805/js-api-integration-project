
const BaseUrl = "https://fakestoreapi.com";

const userContainer = document.getElementById("userContainer");
const searchInput = document.getElementById("searchInput");
const userCount = document.getElementById("userCount");

let users = [];

// Get users from the API
async function apiCall() {
    try {
        const response = await fetch(`${BaseUrl}/users`);

        if (!response.ok) {
            throw new Error("Failed to fetch users.");
        }

        users = await response.json();

        displayUsers(users);
    } catch (error) {
        userContainer.innerHTML = `
            <p class="status-message error-message">
                Unable to load users. Please try again.
            </p>
        `;

        userCount.textContent = "";
        console.error("API Error:", error);
    }
}

// Display user cards
function displayUsers(userList) {
    userContainer.innerHTML = "";

    userCount.textContent =
        `${userList.length} user${userList.length !== 1 ? "s" : ""} found`;

    if (userList.length === 0) {
        userContainer.innerHTML = `
            <p class="status-message">
                No users found. Try another search.
            </p>
        `;
        return;
    }

    userList.forEach(function (user) {
        const fullName =
            `${user.name.firstname} ${user.name.lastname}`;

        const avatarUrl =
            `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=5b5bd6&color=ffffff&size=180&bold=true`;

        const card = document.createElement("article");
        card.className = "user-card";

        const avatar = document.createElement("img");
        avatar.className = "avatar";
        avatar.src = avatarUrl;
        avatar.alt = `${fullName}'s avatar`;
        avatar.loading = "lazy";

        const name = document.createElement("h2");
        name.textContent = fullName;

        const id = document.createElement("p");
        id.className = "user-id";
        id.textContent = `User ID: ${user.id}`;

        const button = document.createElement("a");
        button.className = "btn";
        button.textContent = "View Details";
        button.href = `user-details.html?id=${user.id}`;

        card.append(avatar, name, id, button);
        userContainer.appendChild(card);
    });
}

// Search by name or ID
searchInput.addEventListener("input", function () {
    const searchValue = searchInput.value.trim().toLowerCase();

    const filteredUsers = users.filter(function (user) {
        const fullName =
            `${user.name.firstname} ${user.name.lastname}`;

        return (
            fullName.toLowerCase().includes(searchValue) ||
            String(user.id).includes(searchValue)
        );
    });

    displayUsers(filteredUsers);
});

// Run the function
apiCall();
