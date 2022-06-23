import useGetData from "./hook/use-get-data.hook";

const PokemonList = () => {
    const { amiibos } = useGetData();

    return (
        <div className="row">
            {amiibos.map((value) => (
                <div key={value.name} className="card col m3">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img src={value.image} alt={value.name}/>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">{value.name}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PokemonList;