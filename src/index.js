import './style.css';

const tableData = [{
        userImage: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        userName: 'Emily Selman',
        userEmail: 'emilyselman@example.com',
    },
    {
        userImage: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
        userName: 'Michael Foster',
        userEmail: 'michaelfoster@example.com',
    },
    {
        userImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80',
        userName: 'Emma Dorsey',
        userEmail: 'emmadorsey@example.com',
    },
    {
        userImage: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
        userName: 'Anna Roberts',
        userEmail: 'annaroberts@example.com',
    },
    {
        userImage: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg',
        userName: 'Leonard Krasner',
        userEmail: 'leonardkrasner@example.com',
    },
    {
        userImage: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
        userName: 'Floyd Miles',
        userEmail: 'floydmiles@example.com',
    },
    {
        userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsEuD77HAz0crbrHoTfh0KkdM4k6Niz8uqhA&usqp=CAU',
        userName: 'Benjamin Russel',
        userEmail: 'benjaminrussel@example.com',
    },
    {
        userImage: 'https://v1.tailwindcss.com/_next/static/media/erin-lindford.4804b52007ca82ebe9999d19c717b44d.jpg',
        userName: 'Courtney Henry',
        userEmail: 'courtneyhenry@example.com',
    },
    {
        userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB8ny3nNZpGzRoqbqZvx6e6uFHnPitSRGXxW7S2YKNcrbxmuxIs-QPqcQBiPXH6zPOHt4&usqp=CAU',
        userName: 'Lawrence Hunter',
        userEmail: 'lawrencehunter@example.com',
    },
    {
        userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpypTHVCHahX7WPIYHb_VqDwNVHiI5tzldKFJbeR8kqLmC6lAYRHjvA0f-N8KlQvI4kiQ&usqp=CAU',
        userName: 'Alicia Bell',
        userEmail: 'aliciabell@example.com',
    },
];

tableData.forEach(function(data) {
    const tableHtml = `
    <tr class="flex items-center justify-between w-full border-b border-grey/20 pb-6 mt-6">
        <!-- Avatar - Name - Email -->
        <td class="w-full flex items-center gap-2">
            <!-- Avatar Image -->
            <img class="w-12 h-12 object-center object-cover rounded-full mr-2" src="${data.userImage}" alt="avatar-image">

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
            <button class="text-grey p-2 transition-colors ease-in-out duration-500 rounded-full hover:bg-grey/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                
            </button>
        </td>
    </tr>
    `;
    document.querySelector('.table-body').insertAdjacentHTML('afterbegin', tableHtml)
})