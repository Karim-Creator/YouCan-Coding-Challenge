import './style.css';
import '../assets/images/emily.jpg';
import '../assets/images/anna.jpg';
import '../assets/images/michael.jpg';
import '../assets/images/emma.jpg';
import '../assets/images/leo.jpg';
import '../assets/images/floyd.jpg';
import '../assets/images/ben.jpg';
import '../assets/images/henry.jpg';
import '../assets/images/hunter.jpg';
import '../assets/images/bell.jpg';


// Table Data
const tableData = [{
        userImage: '/assets/emily.jpg',
        userName: 'Emily Selman',
        userEmail: 'emilyselman@example.com',
    },
    {
        userImage: '/assets/michael.jpg',
        userName: 'Michael Foster',
        userEmail: 'michaelfoster@example.com',
    },
    {
        userImage: '/assets/emma.jpg',
        userName: 'Emma Dorsey',
        userEmail: 'emmadorsey@example.com',
    },
    {
        userImage: '/assets/anna.jpg',
        userName: 'Anna Roberts',
        userEmail: 'annaroberts@example.com',
    },
    {
        userImage: '/assets/leo.jpg',
        userName: 'Leonard Krasner',
        userEmail: 'leonardkrasner@example.com',
    },
    {
        userImage: '/assets/floyd.jpg',
        userName: 'Floyd Miles',
        userEmail: 'floydmiles@example.com',
    },
    {
        userImage: '/assets/ben.jpg',
        userName: 'Benjamin Russel',
        userEmail: 'benjaminrussel@example.com',
    },
    {
        userImage: '/assets/henry.jpg',
        userName: 'Courtney Henry',
        userEmail: 'courtneyhenry@example.com',
    },
    {
        userImage: '/assets/hunter.jpg',
        userName: 'Lawrence Hunter',
        userEmail: 'lawrencehunter@example.com',
    },
    {
        userImage: '/assets/bell.jpg',
        userName: 'Alicia Bell',
        userEmail: 'aliciabell@example.com',
    },
];


// Looping over table data and display it
tableData.forEach(function(data) {
    const tableHtml = `
    <tr class="flex items-center justify-between w-full border-b border-grey/20 pb-6 mt-6">
        <!-- Avatar - Name - Email -->
        <td class="w-full flex items-center gap-2">
            <!-- Avatar Image -->
            <img class="w-20 h-20 object-center object-cover rounded-full mr-2" src="${data.userImage}" alt="${data.userName}" loading="lazy">

            <div>
                <!-- Name -->
                <h3 class="text-primary">
                    ${data.userName}
                </h3>

                <!-- Email -->
                <div class="flex items-center gap-2 text-grey">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                    <h3>${data.userEmail}</h3>
                </div>
            </div>

        </td>

        <!-- Interview Application Information -->
        <td class="w-full">
            <p class="text-dark">Applied on January 7, 2020</p>

            <div class="flex items-center mt-1.5">
                <span class="p-0.5 rounded-full bg-light-green text-white mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>  
                </span>

                <p class="text-grey">Completed phone screening</p>
            </div>
        </td>

        <!-- More Informations Button -->
        <td>
            <button class="text-grey p-2 transition-colors ease-in-out duration-500 rounded-full hover:bg-grey/20" aria-label="more-info-button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                
            </button>
        </td>
    </tr>
    `;
    document.querySelector('.table-body').insertAdjacentHTML('beforebegin', tableHtml)
})