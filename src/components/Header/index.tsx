import React from 'react';

import { Container, User } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <a className="User-link" href="https://github.com/maratonadev-br/desafio-3-2020" title="Link do Desafio 3">
        <img src="https://maratona.dev/static/img/logo-pt.png" width="300" alt="MBTC" />
      </a>
      <User>
        <a href="https://github.com/brunobach/" title="Perfil Bruno Bach github">
          <img src="https://avatars3.githubusercontent.com/u/42494225?v=4" alt="avatar" />
        Bruno Bach
      </a>
      </User>

    </Container>
  )
}

export default Header;