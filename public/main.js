var bandList = ['Jen', 'Todd', 'Jeremiah', 'Solid Goldberg', 'C.J.'];

function favMem(evt) {
    const random = Math.floor(Math.random() * bandList.length);
    alert(bandList[random]);
    let favMember = document.querySelector('#favMember')
    rollbar.info('user assigned favorite band member')
}


const pokeBand = document.querySelector('img')

favMember.addEventListener('click', favMem)

pokeBand.addEventListener('click', () => {
    alert('Ouch, stop it!')
    rollbar.info('user poked band photo')

})