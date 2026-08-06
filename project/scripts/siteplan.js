function editInfo() {
    const today = new Date();

    const currentYear = today.getFullYear();

    document.getElementById('currentyear').textContent = currentYear

    document.getElementById('lastmodified').textContent = document.lastModified;
}

editInfo();

const clientId = 'YOUR_CLIENT_ID';
const clientSecret = 'YOUR_CLIENT_SECRET';
const username = 'YOUR_TWITCH_USERNAME';

async function checkStreamAndEmbed() {
    try {
        const tokenResponse = await fetch(`https://twitch.tv{clientId}&client_secret=${clientSecret}&grant_type=client_credentials`, {
            method: 'POST'
        });
        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;

        const streamResponse = await fetch(`https://twitch.tv{username}`, {
            headers: {
                'Client-ID': clientId,
                'Authorization': `Bearer ${accessToken}`
            }
        });
        const streamData = await streamResponse.json();

        if (streamData.data && streamData.data.length > 0) {
            new Twitch.Player("twitch-embed", {
                channel: username,
                width: "100%",
                height: 480,
                parent: [window.location.hostname]
            });
        } else {
            document.getElementById('offline-message').style.display = 'block';
        }
    } catch (error) {
        console.error("Error fetching Twitch stream status:", error);
    }
}

window.addEventListener('DOMContentLoaded', checkStreamAndEmbed);