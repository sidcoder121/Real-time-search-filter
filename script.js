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

function ShowUsers(arr) {
    // 1. Create Layout Wrappers OUTSIDE the loop so they only generate once
    const mainContainer = document.createElement('div');
    mainContainer.className = 'flex flex-col gap-10 items-center';

    const searchInput = document.createElement('input');
    searchInput.className = 'search-bar px-5 py-3 rounded-lg outline-none text-[#888]';
    searchInput.type = 'text';
    searchInput.placeholder = 'Search...';

    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'flex gap-5 flex-wrap justify-center'; // Added flex-wrap just in case they overflow

    // Assemble outer layout elements
    mainContainer.appendChild(searchInput);
    mainContainer.appendChild(cardsContainer);

    // 2. Loop only to create individual cards
    arr.forEach(function (user) {
        const card = document.createElement('div');
        card.className = 'card';

        const cardImg = document.createElement('img');
        cardImg.src = user.pic;
        cardImg.className = 'bg-img'; // Fixed: direct className string assignment or use cardImg.classList.add('bg-img')

        const blurredLayer = document.createElement('div');
        blurredLayer.style.backgroundImage = `url('${user.pic}')`; // Fixed: Wrapped  in CSS url() syntaxdynamic string
        blurredLayer.className = 'blurred-layer';

        const contentDiv = document.createElement('div');
        contentDiv.className = 'content'; // Fixed syntax

        const username = document.createElement('h3');
        username.textContent = user.name;

        const description = document.createElement('p');
        description.textContent = user.bio;

        // Assembly of Card
        contentDiv.appendChild(username);
        contentDiv.appendChild(description);

        card.appendChild(cardImg);
        card.appendChild(blurredLayer);
        card.appendChild(contentDiv);

        // Append this specific card to the shared cards container
        cardsContainer.appendChild(card);
    });

    // 3. Append the whole layout to the DOM once
    document.body.appendChild(mainContainer);
}

ShowUsers(users);