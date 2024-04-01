import { useEffect, useState } from 'react'
import './main.css'

const AlturaEpeso = () => {
    const [nome, setNome] = useState ('');
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);


    const IMC = () => {
        const calculaIMC = (peso/(altura * altura)).toFixed(2);
        
        if (calculaIMC <16 ){
            return (<p> {nome}, o seu IMC é {calculaIMC} e você possui magreza leve </p>)
        }
        if (calculaIMC >= 16 && calculaIMC <= 16.9 ) {
            return (<p> {nome}, o seu IMC é {calculaIMC} e você possui magreza moderada </p>)
        }
        if (calculaIMC >= 17 && calculaIMC <= 18.5 ) {
            return (<p> {nome}, o seu IMC é {calculaIMC} e você possui magreza leve </p>)
        }
        if (calculaIMC >= 16.5 && calculaIMC <= 24.9 ) {
            return (<p> {nome}, o seu IMC é {calculaIMC} e você está no peso ideal </p>)
        }
        if (calculaIMC >= 25 && calculaIMC <= 29.9 ) {
            return (<p> {nome}, o seu IMC é {calculaIMC} e você possui sobrepeso </p>)
        }
        if (calculaIMC >= 30 && calculaIMC <= 34.9 ) {
            return (<p> {nome}, o seu IMC é {calculaIMC} e você possui sobrepeso grau I </p>)
        }
        if (calculaIMC >= 35 && calculaIMC <= 39.9 ) {
            return (<p> {nome}, o seu IMC é {calculaIMC} e você possui sobrepeso grau II </p>)
        }
        if (calculaIMC >= 40 ){
            return Math.round(<p> {nome}, o seu IMC é {calculaIMC} e você possui obesidade mórbida </p>)
        }
    }

    return (
        <>
        <form className='container'>
            <h2 className='imc'>Por favor, digite as informações:</h2>
            <input type="text" placeholder='Por favor, digite seu nome' onChange={evento => setNome(evento.target.value)}/>
            <input className='campo' type="number" placeholder='Digite seu peso em kg - ex.: 92' onChange={evento => setPeso (evento.target.value)} />
            <input className='campo' type="number" placeholder='Digite sua altura em cm = ex.: 1.80' onChange={evento => setAltura (evento.target.value)} />
            <h3 className='imc'>{IMC()}</h3>
        </form>

        <p className='referencia'>resultados menores que 16 — magreza grave; <br/>
        resultados entre 16 e 16,9 — magreza moderada;<br/>
        resultados entre 17 e 18,5 — magreza leve;<br/>
        resultados entre 18,6 e 24,9 — peso ideal;<br/>
        resultados entre 25 e 29,9 — sobrepeso;<br/>
        resultados entre 30 e 34,9 — obesidade grau I;<br/>
        resultados entre 35 e 39,9 — obesidade grau II ou severa;<br/>
        resultados maiores do que 40 — obesidade grau III ou mórbida.</p>
        </>
    )
}

export default AlturaEpeso;