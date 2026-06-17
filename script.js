const users = [
    {
        name: "amisha rathore",
        pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg", 
        bio: "silent chaos in a loud world | not for everyone",
    },
    {
        name: "kiara mehta",
        pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
        bio: "main character energy | coffee > everything +",
    },
    {
        name: "isha oberoi",
        pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
        bio: "walking through dreams in doc martens | late night thinker",
    },
    {
        name: "Ojin Oklawa",
        pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
        bio: "too glam to give a damn | filter free soul",
    },
    {
        name: "Saanvi Kapoor",
        pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
        bio: "chasing sunsets and dreams | unapologetically me",
    }
];

// --- 1. INITIALIZE LAYOUT ---
const mainContainer = document.createElement('div');
mainContainer.className = 'flex flex-col gap-10 items-center';

const searchInput = document.createElement('input');
searchInput.className = 'search-bar px-5 py-3 rounded-lg outline-none text-[#888]';
searchInput.type = 'text';
searchInput.placeholder = 'Search...';

const cardsContainer = document.createElement('div');
cardsContainer.className = 'flex gap-5 flex-wrap justify-center';

mainContainer.appendChild(searchInput);
mainContainer.appendChild(cardsContainer);
document.body.appendChild(mainContainer);


// --- 2. RENDER CARDS FUNCTION (With "No User Found" logic) ---
function renderCards(arr) {
    cardsContainer.innerHTML = ''; // Reset container

    // CHECK: If the filtered array is empty, show the fallback message
    if (arr.length === 0) {
        const noUserMessage = document.createElement('h2');
        noUserMessage.textContent = "No user Found";
        noUserMessage.className = "text-xl text-gray-500 font-semibold mt-5"; // Styling it nicely
        cardsContainer.appendChild(noUserMessage);
        return; // Stop execution here so it doesn't try to run the loop below
    }

    // Otherwise, loop and build cards as usual
    arr.forEach(function (user) {
        const card = document.createElement('div');
        card.className = 'card';

        const cardImg = document.createElement('img');
        cardImg.src = user.pic;
        cardImg.className = 'bg-img'; 

        const blurredLayer = document.createElement('div');
        blurredLayer.style.backgroundImage = `url('${user.pic}')`; 
        blurredLayer.className = 'blurred-layer';

        const contentDiv = document.createElement('div');
        contentDiv.className = 'content'; 

        const username = document.createElement('h3');
        username.textContent = user.name;

        const description = document.createElement('p');
        description.textContent = user.bio;

        contentDiv.appendChild(username);
        contentDiv.appendChild(description);

        card.appendChild(cardImg);
        card.appendChild(blurredLayer);
        card.appendChild(contentDiv);

        cardsContainer.appendChild(card);
    });
}

// Initial render
renderCards(users);


// --- 3. DYNAMIC SEARCH FILTER ---
searchInput.addEventListener('input', function () {
    const searchValue = searchInput.value.toLowerCase().trim();

    const filteredUsers = users.filter(function(user) {
        return user.name.toLowerCase().includes(searchValue);   
    });
    
    renderCards(filteredUsers);
});