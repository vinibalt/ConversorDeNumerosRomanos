import { Container, Column, Img, Row, } from "./styles";
import Button from "./components/Button";
import Input from "./components/Input";
import React from "react";
import ConvImg from "./img/setas-repetir.png";
import { useState } from "react";
import { Title } from "./components/Title";

function App() {


  const convert = require('lab-roman-int-converter');

  const [numRomano, setNumRomano] = useState('');
  const [numArabico, setNumArabico] = useState('');
  const [num, setNum] = useState('1');

  const onOptChange = e => {
    setNum(e.target.value);
  }

  const clear = () => {
    setNumRomano('');
    setNumArabico('');
  }


  return (
    <Container>
      <Column>
        <Title label="Conversor de números romanos e arábicos" />
        <Row>
          <label>Arábico para romano</label><input type="radio" name="num" value="1" checked={num === '1'} onChange={onOptChange}/>
          <label>Romano para arábico</label><input type="radio" name="num" value="2" checked={num === '2'} onChange={onOptChange}/>
        </Row>
         {num === '1' ? (<>
          <Input type="text" value={numArabico} onChange={e => setNumArabico(e.target.value)} placeholder="Digite o número" />
          <Img src={ConvImg} />
          <Input type="text" value={'' || numRomano || convert.intToRoman(Number(numArabico))} onChange={e => setNumRomano(e.target.value)} disabled />
          </>) : null}

          {num === '2' ? (<>
          <Input type="text" value={numRomano} onChange={e => setNumRomano(e.target.value)} placeholder="Digite o algarismo romano" />
          <Img src={ConvImg} />
          <Input type="text" value={'' || numArabico || convert.romanToInt(numRomano)} onChange={e => setNumArabico(e.target.value)} disabled/>
          </>) :  null}
        <Button label="limpar" onClick={clear} /> 
      </Column>
           
    </Container>
  );
}


export default App;
