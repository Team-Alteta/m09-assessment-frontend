import Card from 'react-bootstrap/Card';
function BodyLinks({ websites }) {
    // url (stretch goal), use websites - category 1 is the official
    return (
        <Card.Body>
            <div className="row">
                {websites && websites.map((website, idx) => 
                    {
                        const webInfo = getSingleWebsite(website);
                        
                        return webInfo && (
                        <div className="col-6 text-start" key={idx}>
                            <Card.Link className="col-6 text-start" href={webInfo.url} key={idx} target="_blank">
                                <img src={webInfo.logo} alt="Image" style={{ width: '30px', margin: '10px'}}/>
                                {webInfo.name}
                            </Card.Link>
                        </div>)
                    }
                )}
            </div>
        </Card.Body>
    );
}

function getSingleWebsite(website){
    const websiteInfo = {
        url: "",
        name: "",
        logo: ""
    }
    switch(website.category){
        case 1: {
            //Official

            websiteInfo.logo = "https://th.bing.com/th/id/OIP.AsHA1jViarg40a3O-0X8UAAAAA?pid=ImgDet&rs=1";
            websiteInfo.name = "Official"
            websiteInfo.url = website.url;
            return websiteInfo;
        }
        case 4: {
            //Facebook
            websiteInfo.logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/1200px-Facebook_logo_36x36.svg.png";
            websiteInfo.name = "Facebook"
            websiteInfo.url = website.url;
            return websiteInfo;
        }
        case 5: {
            //Twitter
            websiteInfo.logo = "https://logos-download.com/wp-content/uploads/2016/02/Twitter_Logo_new.png";
            websiteInfo.name = "Twitter"
            websiteInfo.url = website.url;
            return websiteInfo;
        }
        case 6: {
            //Twitch
            websiteInfo.logo = "https://pngimg.com/uploads/twitch/twitch_PNG48.png";
            websiteInfo.name = "Twitch"
            websiteInfo.url = website.url;
            return websiteInfo;
        }
        case 8: {
            //Instagram
            websiteInfo.logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png";
            websiteInfo.name = "Instagram"
            websiteInfo.url = website.url;
            return websiteInfo;
        }
        case 9: {
            //Youtube
            websiteInfo.logo = "https://clipart.info/images/ccovers/1590430652red-youtube-logo-png-xl.png";
            websiteInfo.name = "Youtube"
            websiteInfo.url = website.url;
            return websiteInfo;
        }
        case 13: {
            //Steam
            websiteInfo.logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/768px-Steam_icon_logo.svg.png";
            websiteInfo.name = "Steam"
            websiteInfo.url = website.url;
            return websiteInfo;
        }
        case 15: {
            //Itch
            websiteInfo.logo = "https://th.bing.com/th/id/OIP.H_0XMaHwL1AhOKKlOTkdAwHaGj?pid=ImgDet&rs=1";
            websiteInfo.name = "Itch"
            websiteInfo.url = website.url;
            return websiteInfo;
        }
        case 16: {
            //epic games
            websiteInfo.logo = "https://logodix.com/logo/74048.png"
            websiteInfo.name = "Epic Games"
            websiteInfo.url = website.url;
            return websiteInfo;
        }
        case 17: {
            //gog
            websiteInfo.logo = "https://thumbnails.pcgamingwiki.com/2/24/GOG_logo.svg/450px-GOG_logo.svg.png";
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
