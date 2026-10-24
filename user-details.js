const BaseUrl = "https://fakestoreapi.com";

const detailsContainer = document.getElementById("detailsContainer");

// Get user ID from the URL
const params = new URLSearchParams(window.location.search);
const userId = params.get("id");

// Create an avatar URL
function getAvatarUrl(fullName) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=5b5bd6&color=ffffff&size=220&bold=true`;
}

// Create a detail item safely
function createDetail(label, value, fullWidth = false) {
  const item = document.createElement("div");
  item.className = fullWidth ? "detail-item full-width" : "detail-item";

  const title = document.createElement("span");
  title.className = "detail-label";
  title.textContent = label;

  const content = document.createElement("p");
  content.className = "detail-value";
  content.textContent = value ?? "Not available";

  item.append(title, content);

  return item;
}

// Fetch and display user details
async function getUserDetails() {
  try {
    if (!userId || !/^\d+$/.test(userId)) {
      throw new Error("Invalid user ID.");
    }

    const response = await fetch(`${BaseUrl}/users`);

    if (!response.ok) {
      throw new Error("Failed to fetch user details.");
    }

    const users = await response.json();

    const user = users.find(function (item) {
      return String(item.id) === userId;
    });

    if (!user) {
      throw new Error("User not found.");
    }

    displayUserDetails(user);
  } catch (error) {
    detailsContainer.innerHTML = "";

    const message = document.createElement("p");
    message.className = "status-message error-message";
    message.textContent = `${error.message} Please return to the user directory.`;

    detailsContainer.appendChild(message);
    console.error("Error:", error);
  }
}

// Display the selected user's information
function displayUserDetails(user) {
  const fullName = `${user.name.firstname} ${user.name.lastname}`;

  const address = user.address || {};
  const geo = address.geolocation || {};

  const card = document.createElement("section");
  card.className = "details-card";

  const profileHeader = document.createElement("div");
  profileHeader.className = "profile-header";

  const avatar = document.createElement("img");
  avatar.className = "profile-avatar";
  avatar.src = getAvatarUrl(fullName);
  avatar.alt = `${fullName}'s avatar`;

  const profileInfo = document.createElement("div");

  const heading = document.createElement("h1");
  heading.textContent = fullName;

  const id = document.createElement("p");
  id.textContent = `User ID: ${user.id}`;

  const username = document.createElement("p");
  username.textContent = `@${user.username}`;

  profileInfo.append(heading, id, username);
  profileHeader.append(avatar, profileInfo);

  // Personal information
  const personalSection = document.createElement("section");
  personalSection.className = "details-section";

  const personalHeading = document.createElement("h2");
  personalHeading.textContent = "Personal Information";

  const personalGrid = document.createElement("div");
  personalGrid.className = "details-grid";

  personalGrid.append(
    createDetail("First Name", user.name.firstname),
    createDetail("Last Name", user.name.lastname),
    createDetail("Email Address", user.email, true),
    createDetail("Phone Number", user.phone, true),
    createDetail("Username", user.username, true),
  );

  personalSection.append(personalHeading, personalGrid);

  // Address information
  const addressSection = document.createElement("section");
  addressSection.className = "details-section";
  addressSection.style.marginTop = "28px";

  const addressHeading = document.createElement("h2");
  addressHeading.textContent = "Address Information";

  const addressGrid = document.createElement("div");
  addressGrid.className = "details-grid";

  addressGrid.append(
    createDetail("Street", address.street),
    createDetail("Street Number", address.number),
    createDetail("City", address.city),
    createDetail("Zip Code", address.zipcode),
    createDetail("Latitude", geo.lat),
    createDetail("Longitude", geo.long),
  );

  addressSection.append(addressHeading, addressGrid);

  // Assemble the page
  card.append(profileHeader, personalSection, addressSection);
  detailsContainer.replaceChildren(card);

  document.title = `${fullName} | UserHub`;
}

// Start the application
getUserDetails();
