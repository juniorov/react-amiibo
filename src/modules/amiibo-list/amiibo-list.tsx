import useGetData from "./hook/use-get-data.hook";
import ButtonChange from "../button-change/button-change";

const AmiiboList = () => {
    const { amiibos } = useGetData();

    return (
        <div>
            <div className="row">
                <h1 className="center-align">Yugi Oh List</h1>
                <ButtonChange />
            </div>
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
        </div>
    );
};

export default AmiiboList;