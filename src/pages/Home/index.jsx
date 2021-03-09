import React, { useState } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
import {
  formatCPF, formatCNPJ, formatDocument, formatCurrency,
  formatGender, formatPhone, formatPlate, formatZipCode
} from 'react-data-formatter'

import {
  Container, Header, TitleArea, Line, Button, OutlineButton, ContentArea,
  Input, PlaygroundItem, Output, PlaygroundTitle, Footer
} from './styles';
function Home() {

  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [document, setDocument] = useState('');
  const [currency, setCurrency] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [plate, setPlate] = useState('');
  const [zipcode, setZipcode] = useState('');


  const openUrl = (url) => {
    window.open(url, '_blank');
  }

  return (
    <Container>
      <Header>
        <TitleArea>
          <h1>📟 react-data-formatter</h1>
          <p>Biblioteca para formatação de dados brasileiros como CPF, CNPJ, CEP, telefone, moeda, placa e gênero.</p>
        </TitleArea>
        <Line>
          <Button onClick={() => openUrl('https://github.com/robianchini/react-data-formatter')}><VscGithubInverted size={23} /> &ensp; GitHub</Button>
          <OutlineButton onClick={() => openUrl('https://github.com/robianchini/react-data-formatter/blob/main/README.md')}>Documentação</OutlineButton>
        </Line>
      </Header>
      <ContentArea>
        <h2>Playground</h2>

        <Line>
          <PlaygroundItem>
            <PlaygroundTitle>formatCpf</PlaygroundTitle>
            <Input type="text" value={cpf} onChange={e => setCpf(e.target.value)} placeholder="Insira um CPF" />
            <Output>{cpf && `${formatCPF(cpf)}`}</Output>
          </PlaygroundItem>
          <PlaygroundItem>
            <PlaygroundTitle>formatCnpj</PlaygroundTitle>
            <Input type="text" value={cnpj} onChange={e => setCnpj(e.target.value)} placeholder="Insira um CNPJ" />
            <Output>{cnpj && `${formatCNPJ(cnpj)}`}</Output>
          </PlaygroundItem>
        </Line>

        <Line>
          <PlaygroundItem>
            <PlaygroundTitle>formatDocument</PlaygroundTitle>
            <Input type="text" value={document} onChange={e => setDocument(e.target.value)} placeholder="Insira um CPF ou CNPJ" />
            <Output>{document && `${formatDocument(document)}`}</Output>
          </PlaygroundItem>
          <PlaygroundItem>
            <PlaygroundTitle>formatCurrency</PlaygroundTitle>
            <Input type="text" value={currency} onChange={e => setCurrency(e.target.value.replaceAll(",", "."))} placeholder="Insira um valor" />
            <Output>{currency && `${formatCurrency(Number(currency))}`}</Output>
          </PlaygroundItem>
        </Line>

        <Line>
          <PlaygroundItem>
            <PlaygroundTitle>formatPhone</PlaygroundTitle>
            <Input type="text" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Insira um telefone" />
            <Output>{phone && `${formatPhone(phone)}`}</Output>
          </PlaygroundItem>
          <PlaygroundItem>
            <PlaygroundTitle>formatPlate</PlaygroundTitle>
            <Input type="text" value={plate} onChange={e => setPlate(e.target.value)} placeholder="Insira uma placa" />
            <Output>{plate && `${formatPlate(plate)}`}</Output>
          </PlaygroundItem>
        </Line>

        <Line>
          <PlaygroundItem>
            <PlaygroundTitle>formatZipCode</PlaygroundTitle>
            <Input type="text" value={zipcode} onChange={e => setZipcode(e.target.value)} placeholder="Insira um CEP" />
            <Output>{zipcode && `${formatZipCode(zipcode)}`}</Output>
          </PlaygroundItem>
          <PlaygroundItem>
            <PlaygroundTitle>formatGender</PlaygroundTitle>
            <Input type="text" value={gender} onChange={e => setGender(e.target.value)} placeholder="Insira a inicial de um gênero" />
            <Output>{gender && `${formatGender(gender)}`}</Output>
          </PlaygroundItem>
        </Line>
      </ContentArea>
      <Footer>
        <p onClick={() => openUrl('https://github.com/robianchini')}><VscGithubInverted size={17} /> &nbsp; Rodrigo Bianchini </p>
      </Footer>
    </Container>
  );
}

export default Home;