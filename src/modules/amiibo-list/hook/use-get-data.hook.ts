import axios from "axios";
import React from "react";

const API = "https://amiiboapi.com/api/amiibo/?gameseries=Yu-Gi-Oh!";

type Amiibo = {
    name: string;
    image: string;
    tail: number;
};

const useGetData = () => {
    const [amiibos, setAmiibo] = React.useState<Amiibo[]>([]);

    const getData = async () => {
        axios
        .get(API)
        .then((result) => {
            const amiibosAPI = result.data.amiibo;
            console.log(amiibosAPI);
            setAmiibo(amiibosAPI);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    React.useEffect(() => {
        getData();
    }, []);

    return { amiibos };
};

export default useGetData;