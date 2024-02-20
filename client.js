const axios = require('axios');

const apiUrl = "https://he-mailer.chamlimedialab.com/api/process_link"



const linkData = {
    link: "https://yxwtt1o3bpjfpdj8-75612750102.shopifypreview.com/pages/usage-report?propertyName=Abel&numOfRooms=100&occRate=0.5&bottlesToShow=Cap%20Lock%20Dispenser,Snap%20Dispenser,V-Top%20Dispenser,Floating%20Dispenser,Magic%20Magnet%20Dispenser,Magnet%20Squeeze%20Dispenser,Edison%20Dispenser,1%20Gallon,5%20Liter",
    email: "abelsbileduct@gmail.com"
}

axios.post(apiUrl, linkData, {
    headers: {
        'Content-Type': 'application/json',
    },
})
.then(response => {
    console.log("Response from Flask Server:", response.data.message)
})
.catch(error => {
    console.log("You fucked up:", error)
})

