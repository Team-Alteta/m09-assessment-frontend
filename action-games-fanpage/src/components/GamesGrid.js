import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GameCard from './GameCard';

function GamesGrid({games}) {
    return (
        <Row xs={1} md={3} className="g-4">
            {games.map((game, idx) => (
                <Col key={idx}>
                    <GameCard game={game}/>
                </Col>
            ))}
        </Row>
    );
}

export default GamesGrid;
