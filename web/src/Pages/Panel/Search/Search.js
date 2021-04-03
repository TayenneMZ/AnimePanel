import React, { useEffect, useState } from 'react';
import PanelCard from 'Components/Panel/Card/Card';
import axios from 'axios';

const PagesPanelSearch = () => {
    const [panels, setPanels] = useState([]);

    {/*Ao utilizar o useEffect é necessário para uma função, e dentro da função coloca 
    o código que deseja ser executado, e se quer que funcione somente uma vez, quando 
    o componente for montado, é passado um array vazio como segundo parametro*/}
    useEffect(() => {
        /*É feita de forma assincrona, você envia uma request e quando obtiver o response ele 
        fara o then*/
        axios.get('http://localhost:5000/panels?_embed=comments')
            .then((response) => {
                setPanels(response.data);
            });
    }, []);

    return (
        <div style={{
            maxWidth: 800,
            margin: '30px auto',
        }}>
            {/*A função map permite que eu crie um novo array utilizando informações de um array já existente*/}
            {panels.map((panel) => (
                <PanelCard panel = {panel} />
            ))}
        </div>
    )
}

export default PagesPanelSearch;