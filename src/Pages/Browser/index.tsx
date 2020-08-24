/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useState } from 'react'

import Prism from 'prismjs'

import './prism.css'

import { Container, Inputs, Button } from './styles';

interface Props {
  code: string
  link: string
}

const Browser: React.FC<Props> = ({ code, link }) => {

  const [copied, setCopied] = useState(false)


  function handleCopied () {
    setCopied(true)
    navigator.clipboard.writeText(code)
    console.log(copied)
  }
  useEffect(() => {
    Prism.highlightAll()
    setCopied(false)
  }, [code])

  function handleClickLink(){
    window.open(link)
  }

  return (
    <Container>
      <pre className="line-numbers">
        <code className="language-js">
          {code }
        </code>
      </pre>
      <Inputs>
        <Button className={copied ? 'copied' : ''} onClick={() => handleCopied()}> { copied ? '👍🏽 Copiado !!! BORA CODER!' : '✍️ Copiar Código'}</Button>
        <Button onClick={() => handleClickLink()}> ✈️ Ir para pagina </Button>
      </Inputs>
    </Container>
  )
}

export default Browser;