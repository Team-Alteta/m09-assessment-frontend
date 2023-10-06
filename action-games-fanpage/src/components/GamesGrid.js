import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GameCard from './gamecard/GameCard';

function GamesGrid({games}) {
    return (
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
            {games.map((game, idx) => (
                <Col key={idx}>
                    <GameCard idx={idx} game={game}/>
                </Col>
            ))}
        </Row>
    );
}

export default GamesGrid;
