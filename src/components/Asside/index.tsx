import React from 'react';

import { Container, Nav } from './styles';

import Logo from '../Logo'

interface Iprops {
     handle: ((number: number, link: number) => void)
}

const Asside: React.FC<Iprops> = ({ handle }) => {
     return (
          <Container>
               <div>
                    <Nav>
                         <svg width="150" height="60" id="logo-fiap" viewBox="0 0 574.206 155.976"><path d="M163.733 2.17h11.35v152.805h-11.35z"></path><path fill="#ed145b" d="M163.733 2.17h11.35v152.805h-11.35z"></path><path d="M43.387 75.298h55.408v10.478H43.387z"></path><path fill="#ed145b" d="M43.387 75.298h55.408v10.478H43.387z"></path><path d="M1 2.17v152.806h11.35v-69.2h.015V75.297h-.014v-62.65h117.696V2.17"></path><path fill="#ed145b" d="M1 2.17v152.806h11.35v-69.2h.015V75.297h-.014v-62.65h117.696V2.17z"></path><path d="M516.45 1.58h-90.446v152.806h11.35V97.41h.083V86.935h-.082V12.06h78.223c27.505 0 46.277 12.66 46.277 36.89v.438c0 22.7-19.21 37.546-47.588 37.546H478.47V97.41h35.142c31.87 0 59.595-16.59 59.595-48.678v-.436c0-29.47-23.14-46.715-56.758-46.715"></path><path fill="#ed145b" d="M516.45 1.58h-90.446v152.806h11.35V97.41h.083V86.935h-.082V12.06h78.223c27.505 0 46.277 12.66 46.277 36.89v.438c0 22.7-19.21 37.546-47.588 37.546H478.47V97.41h35.142c31.87 0 59.595-16.59 59.595-48.678v-.436c0-29.47-23.14-46.715-56.758-46.715"></path><path d="M359.968 86.935L306.978 1h-10.915l-94.387 153.897h11.788l87.84-141.453 45.786 73.49"></path><path fill="#ed145b" d="M359.968 86.935L306.978 1h-10.915l-94.387 153.897h11.788l87.84-141.453 45.786 73.49z"></path><path d="M377.403 115.21h-12.697l24.727 39.686h12.44"></path><path fill="#ed145b" d="M377.403 115.21h-12.697l24.727 39.686h12.44z"></path></svg>
                         <div>
                              <span>Acesse o script de cada página: </span>
                         </div>
                         <div onClick={() => handle(0, 0)}>
                              <li>
                                   < Logo />
                                   <div>A fascinante física do dia a dia</div>
                              </li>
                         </div>
                         <div onClick={() => handle(0, 1)}>
                         <li>
                              < Logo />
                              <div>Como a Inteligência Artificial pode provocar ...</div>
                         </li>
                         </div>
                         <div onClick={() => handle(0, 2)}>
                         <li>
                              < Logo />
                              <div>Ajudem a descobrir ruínas antigas</div>
                         </li>
                         </div>
                         <div onClick={() => handle(0, 3)}>
                         <li>
                              < Logo />
                              <div>Como as pessoas e a inteligência artificial...</div>
                         </li>
                         </div>
                         <div onClick={() => handle(0, 4)}>
                         <li>
                              < Logo />
                              <div>Como a nova tecnologia ajuda as pessoas...</div>
                         </li>
                         </div>
                         <div onClick={() => handle(0, 5)}>
                         <li>
                              < Logo />
                              <div>Como IA poderia compor uma trilha sonora ...</div>
                         </li>
                         </div>
                         <div onClick={() => handle(0, 6)}>
                         <li>
                              < Logo />
                              <div>Como a inteligência artificial pode melhorar...</div>
                         </li>
                         </div>
                         <div onClick={() => handle(1, 7)}>
                         <li>
                              <img width="85" height="30" src="https://olhardigital.com.br/site/frontend/padrao/img/hdr-logo.png" alt="Logotipo Olhar Digital" />
                              <div>O Futuro cada vez mais perto</div>
                         </li>
                         </div>
                         <div onClick={() => handle(1, 8)}>
                         <li>
                              <img width="85" height="30" src="https://olhardigital.com.br/site/frontend/padrao/img/hdr-logo.png" alt="Logotipo Olhar Digital" />
                              <div>Os riscos do Machine Learning</div>
                         </li>
                         </div>
                         <div onClick={() => handle(2, 9)}>
                         <li>
                              <img width="85" height="30" src="https://olhardigital.com.br/site/frontend/padrao/img/hdr-logo.png" alt="Logotipo Olhar Digital" />
                              <div>Nova teoria diz que passado, presente ...</div>
                         </li>
                         </div>
                         <div onClick={() => handle(2, 10)}>
                         <li>
                              <img width="85" height="30" src="https://olhardigital.com.br/site/frontend/padrao/img/hdr-logo.png" alt="Logotipo Olhar Digital" />
                              <div >Inteligência Artificial da IBM consegue ...</div>
                         </li>
                         </div>
                         <div onClick={() => handle(2, 11)}>
                         <li>
                              <img width="85" height="30" src="https://olhardigital.com.br/site/frontend/padrao/img/hdr-logo.png" alt="Logotipo Olhar Digital" />
                              <div>Inteligência artificial ajuda a Nasa...</div>
                         </li>
                         </div>
                         <div onClick={() => handle(2, 12)}>
                         <li>
                              <img width="85" height="30" src="https://olhardigital.com.br/site/frontend/padrao/img/hdr-logo.png" alt="Logotipo Olhar Digital" />
                              <div>Como a inteligência artificial pode mudar...</div>
                         </li>
                         </div>
                         <div onClick={() => handle(2, 13)}>
                         <li>
                              <img width="85" height="30" src="https://olhardigital.com.br/site/frontend/padrao/img/hdr-logo.png" alt="Logotipo Olhar Digital" />
                              <div>Cientistas criam programa poderoso...</div>
                         </li>
                         </div>

                    </Nav>
               </div>
          </Container>
     )
}

export default Asside;