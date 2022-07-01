// DND website: https://www.dnd5eapi.co/?amp=1
// https://www.dnd5eapi.co/api/classes

const classSelector = document.getElementById('class-select')

let request = async () => {
    // initiate request to dnd server
    let req = await fetch('https://www.dnd5eapi.co/api/classes')
    // get response from server and convert it JSON
    let res = await req.json()
    console.log('Classes', res)
    res.results.forEach((character) => {
        let option = document.createElement('option')
        option.setAttribute('value', char.name)
        option.innerText = char.name
        classSelector.append(option)
    })

    classSelector.addEventListener('change', () => {

    })
}



// the request function will now automatically run when the page loads
request()

