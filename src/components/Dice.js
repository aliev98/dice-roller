import '../styling/Dice.css'

const Dice = ({ face, rolling }) => {
    return <i className = {`dice fas fa-dice-${face} ${rolling && "shaking"}`} />;
};

export default Dice