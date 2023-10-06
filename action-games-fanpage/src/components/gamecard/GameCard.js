import Card from 'react-bootstrap/Card';
import BodyInfo from './BodyInfo';
import BodyRatings from './BodyRatings';
import BodyLinks from './BodyLinks';

function GameCard({game}) {
    const image = `https://images.igdb.com/igdb/image/upload/t_720p/${game.cover.image_id}.jpg`;
    const date = epochToDate(game.first_release_date);

    // stretch goal: slideshow of screenshots
    // stretch goal: themes
    console.log(game);
    return (
        <Card>
            <Card.Img variant="top" src={image} />
            <BodyInfo name={game.name} date={date}/>
            <BodyRatings 
                userRating={game.rating}
                userCount={game.rating_count}
                criticRating={game.aggregated_rating}
                criticCount={game.aggregated_rating_count}/>
            <BodyLinks links={game.websites}/>
        </Card>
    )
}

const epochToDate = (ts) => {
    const date = new Date(ts*1000);
    const options = {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
    }

    return date.toLocaleString("en-US", options);
}

export default GameCard;
