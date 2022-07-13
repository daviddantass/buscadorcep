import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
const Home: NextPage = () => {
  const [msgError, setMsgError] = useState('')
  const [valorInput, setValorInpunt] = useState()
  const [dadosAPI, setDadosApi] = useState({
    uf: '',
    city: '',
    street: ''
  })
  const handleButton = () => {
    axios
      .get('https://cep.awesomeapi.com.br/json/ ' + valorInput)
      .then(response => {
        const { data } = response
        setDadosApi({ uf: data.state, city: data.city, street: data.address })
      })
      .catch(({ response }) => {
        const { data } = response
        setMsgError(data.message)
      })
  }

  useEffect(() => {
    setMsgError('')
    setDadosApi({
      uf: '',
      city: '',
      street: ''
    })
  }, [valorInput])

  const handleInput = value => {
    if (value.length < 10) {
      setValorInpunt(
        value.replace(/\D/g, '').replace(/(\d{5})(\d{1})/, '$1-$2')
      )
    }
  }
  return (
    <Container>
      <Head>
        <title> buscador de cep</title>
        <meta name="description" content="app para buscar cep " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Containercep onSubmit={e => e.preventDefault()}>
        <div>
          <h3>cep</h3>

          <input
            value={valorInput}
            onChange={(event: any) => handleInput(event.target.value)}
          />
        </div>

        <button type="submit" onClick={() => handleButton()}>
          buscar
        </button>
        {!!setMsgError && <p>{msgError}</p>}
      </Containercep>
      <Containerresult>
        <div>
          <h3>UF</h3>
          <span>{dadosAPI.uf}</span>
        </div>
        <div>
          <h3>Cidade</h3>

          <span>{dadosAPI.city}</span>
        </div>
        <div>
          <h3>rua</h3>
          <span>{dadosAPI.street}</span>
        </div>
      </Containerresult>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  gap: 32px;
  padding: 16px;
  background-image: url(https://c.tenor.com/YR9WPlpD1zEAAAAd/cloud.gif);
`
const Containercep = styled.form`
  display: flex;
  width: 100%;
  max-width: 500px;
  padding: 24px;
  border-radius: 24px;
  flex-direction: column;
  gap: 32px;
  background-color: white;
  box-shadow: 0px 1px 3px #c9c9c9;

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    > h3 {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 6px;
      color: #707070;
    }
    > input {
      display: flex;
      height: 48px;
      width: 100%;
      border: 1px solid #929292;
      border-radius: 6px;
    }
  }
  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 40px;
    background-color: #007fff;
    border: none;
    border-radius: 6px;
    box-shadow: 0px 1px 3px #c9c9c9;
    color: white;
    font-size: 18px;
    font-weight: 600;
    align-self: flex-end;
    cursor: pointer;
    @media (max-width: 532px) {
      width: 100%;
    }
  }
`
const Containerresult = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;

  padding: 24px;
  border-radius: 24px;
  flex-direction: column;
  gap: 32px;
  background-color: white;
  box-shadow: 0px 1px 3px #c9c9c9;

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    > h3 {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 6px;
      color: #707070;
    }
    > span {
      display: flex;
      align-items: center;
      height: 48px;
      width: 100%;
      border: 1px solid #929292;
      border-radius: 6px;
    }
  }
`

export default Home
