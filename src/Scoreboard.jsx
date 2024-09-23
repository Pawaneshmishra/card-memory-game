const Scoreboard = ({ score, bestScore }) => {
    return (
        <div className="scoreboard">
            <div>Current Score: {score}</div>
            <div>Best Score: {bestScore}</div>
        </div>
    );
}

export default Scoreboard;