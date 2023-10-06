import Card from 'react-bootstrap/Card';
function BodyLinks({ websites }) {
    // url (stretch goal), use websites - category 1 is the official
    return (
        <Card.Body>
            {websites.map((website, idx) => 
                {
                    const webInfo = getSingleWebsite(website);
                    
                    return webInfo && (
                    <Card.Link href={webInfo.url} key={idx}>
                        {webInfo.name}
                    </Card.Link>)
                }
            )}
        </Card.Body>
    );
}

function getSingleWebsite(website){
    const websiteInfo = {
        url: "",
        name: ""
    }
    switch(website.category){
        case 1: {
            //Official
            websiteInfo.name = "Official"
            websiteInfo.url = website.url;
            return websiteInfo;
        }
        case 4: {
            //Facebook
            websiteInfo.name = "Facebook"
            websiteInfo.url = website.url;
            return websiteInfo;
        }
        case 5: {
            //Twitter
            websiteInfo.name = "Twitter"
            websiteInfo.url = website.url;
            return websiteInfo;
        }
        case 6: {
            //Twitch
            websiteInfo.name = "Twitch"
            websiteInfo.url = website.url;
            return websiteInfo;
        }
        case 8: {
            //Instagram
            websiteInfo.name = "Instagram"
            websiteInfo.url = website.url;
            return websiteInfo;
        }
        case 9: {
            //Youtube
            websiteInfo.name = "Youtube"
            websiteInfo.url = website.url;
            return websiteInfo;
        }
        case 13: {
            //Steam
            websiteInfo.name = "Steam"
            websiteInfo.url = website.url;
            return websiteInfo;
        }
        case 15: {
            //Itch
            websiteInfo.name = "Itch"
            websiteInfo.url = website.url;
            return websiteInfo;
        }
        case 16: {
            //epic games
            websiteInfo.name = "Epic Games"
            websiteInfo.url = website.url;
            return websiteInfo;
        }
        case 17: {
            //gog
            websiteInfo.name = "GOG"
            websiteInfo.url = website.url;
            return websiteInfo;
        }
        default: {
            websiteInfo.name = "n/a"
            console.log("Category not handled" + website.category + " " + website.url);
            return null;
        }
    }
}

export default BodyLinks;
