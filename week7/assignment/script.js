let vm = new Vue({
    el: "#myCollectionApp",
    data: {
        albums: [    
        {
            album: 'Rumors',
            band: 'Fleetwood Mac',
            released: '1977',
            label: 'Warner Bros.',
            collected: true
        }, {
            album: 'The White Album',
            band: 'The Beatles',
            released: '1968',
            label: 'Apple',
            collected: false
        }, {
            album: 'A Night at the Opera',
            band: 'Queen',
            released: '1975',
            label: 'EMI/Elektra',
            collected: true
        }, {
            album:'You Dont Mess Around with Jim',
            band: 'Jim Croce',
            released: '1972',
            label: 'ABC/Vertigo',
            collected: true
        }, {
            album: 'Stardust',
            band: 'Willie Nelson',
            released: '1978',
            label: 'Columbia',
            collected: false
        }, {
            album: 'One of These Nights',
            band: 'Eagles',
            released: '1975',
            label: 'Asylum',
            collected: true
        }
    ]
    }
})