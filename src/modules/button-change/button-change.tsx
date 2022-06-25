import React from "react";


const ButtonChange = () => {
    const [numberRan, setNumberRan] = React.useState(0);

    const series = [
        "Super Mario",
        "Yu-Gi-Oh!",
        "Dragon Quest",
        "Shovel Knight",
        "Sonic",
        "Donkey Kong",
        "The Legend of Zelda",
        "Animal Crossing",
        "Pikmin",
        "Wii Fit",
        "Mario Sports Superstars"
    ];

    const getRan = () => {
        return Math.floor(Math.random() * series.length);
    }

    const handleButtonClick = () => {
        setNumberRan(getRan());
    }

    React.useEffect(() => {
        setNumberRan(getRan());
    }, [numberRan]);

    return (
        <button
            className="waves-effect waves-light btn lighten-2"
            onClick={handleButtonClick}
        >Name Series: {series[numberRan]} </button>
    );
}

export default ButtonChange;