import './Home.css'
import '../../assets/Colors/Colors.css'
import '../../assets/TextStyle/Fonts.css'
import '../../assets/TextStyle/Sizes.css'

import LogoGiratoria from './LogoGiratoria/LogoGiratoria'

export default function Home() {
    return (
      <div className="Home">
        <div className="hero colContainer">
          <div className="snow ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1536" preserveAspectRatio="xMidYMax slice">
              <g fill="#FFF" fillOpacity=".15" transform="translate(55 42)">
                <g id="snow-bottom-layer">
                  <ellipse cx="6" cy="1009.5" rx="6" ry="5.5" />
                  <ellipse cx="138" cy="1110.5" rx="6" ry="5.5" />
                  <ellipse cx="398" cy="1055.5" rx="6" ry="5.5" />
                  <ellipse cx="719" cy="1284.5" rx="6" ry="5.5" />
                  <ellipse cx="760" cy="1155.5" rx="6" ry="5.5" />
                  <ellipse cx="635" cy="1459.5" rx="6" ry="5.5" />
                  <ellipse cx="478" cy="1335.5" rx="6" ry="5.5" />
                  <ellipse cx="322" cy="1414.5" rx="6" ry="5.5" />
                  <ellipse cx="247" cy="1234.5" rx="6" ry="5.5" />
                  <ellipse cx="154" cy="1425.5" rx="6" ry="5.5" />
                  <ellipse cx="731" cy="773.5" rx="6" ry="5.5" />
                  <ellipse cx="599" cy="874.5" rx="6" ry="5.5" />
                  <ellipse cx="339" cy="819.5" rx="6" ry="5.5" />
                  <ellipse cx="239" cy="1004.5" rx="6" ry="5.5" />
                  <ellipse cx="113" cy="863.5" rx="6" ry="5.5" />
                  <ellipse cx="102" cy="1223.5" rx="6" ry="5.5" />
                  <ellipse cx="395" cy="1155.5" rx="6" ry="5.5" />
                  <ellipse cx="826" cy="943.5" rx="6" ry="5.5" />
                  <ellipse cx="626" cy="1054.5" rx="6" ry="5.5" />
                  <ellipse cx="887" cy="1366.5" rx="6" ry="5.5" />
                  <ellipse cx="6" cy="241.5" rx="6" ry="5.5" />
                  <ellipse cx="138" cy="342.5" rx="6" ry="5.5" />
                  <ellipse cx="398" cy="287.5" rx="6" ry="5.5" />
                  <ellipse cx="719" cy="516.5" rx="6" ry="5.5" />
                  <ellipse cx="760" cy="387.5" rx="6" ry="5.5" />
                  <ellipse cx="635" cy="691.5" rx="6" ry="5.5" />
                  <ellipse cx="478" cy="567.5" rx="6" ry="5.5" />
                  <ellipse cx="322" cy="646.5" rx="6" ry="5.5" />
                  <ellipse cx="247" cy="466.5" rx="6" ry="5.5" />
                  <ellipse cx="154" cy="657.5" rx="6" ry="5.5" />
                  <ellipse cx="731" cy="5.5" rx="6" ry="5.5" />
                  <ellipse cx="599" cy="106.5" rx="6" ry="5.5" />
                  <ellipse cx="339" cy="51.5" rx="6" ry="5.5" />
                  <ellipse cx="239" cy="236.5" rx="6" ry="5.5" />
                  <ellipse cx="113" cy="95.5" rx="6" ry="5.5" />
                  <ellipse cx="102" cy="455.5" rx="6" ry="5.5" />
                  <ellipse cx="395" cy="387.5" rx="6" ry="5.5" />
                  <ellipse cx="826" cy="175.5" rx="6" ry="5.5" />
                  <ellipse cx="626" cy="286.5" rx="6" ry="5.5" />
                  <ellipse cx="887" cy="598.5" rx="6" ry="5.5" />
                </g>
              </g>
              <g fill="#FFF" fillOpacity=".3" transform="translate(65 63)">
                <g id="snow-top-layer">
                  <circle cx="8" cy="776" r="8" />
                  <circle cx="189" cy="925" r="8" />
                  <circle cx="548" cy="844" r="8" />
                  <circle cx="685" cy="1115" r="8" />
                  <circle cx="858" cy="909" r="8" />
                  <circle cx="874" cy="1438" r="8" transform="rotate(180 874 1438)" />
                  <circle cx="657" cy="1256" r="8" transform="rotate(180 657 1256)" />
                  <circle cx="443" cy="1372" r="8" transform="rotate(180 443 1372)" />
                  <circle cx="339" cy="1107" r="8" transform="rotate(180 339 1107)" />
                  <circle cx="24" cy="1305" r="8" transform="rotate(180 24 1305)" />
                  <circle cx="8" cy="8" r="8" />
                  <circle cx="189" cy="157" r="8" />
                  <circle cx="548" cy="76" r="8" />
                  <circle cx="685" cy="347" r="8" />
                  <circle cx="858" cy="141" r="8" />
                  <circle cx="874" cy="670" r="8" transform="rotate(180 874 670)" />
                  <circle cx="657" cy="488" r="8" transform="rotate(180 657 488)" />
                  <circle cx="443" cy="604" r="8" transform="rotate(180 443 604)" />
                  <circle cx="339" cy="339" r="8" transform="rotate(180 339 339)" />
                  <circle cx="24" cy="537" r="8" transform="rotate(180 24 537)" />
                </g>
              </g>
            </svg>
          </div>
          <LogoGiratoria />
          <div>
          <div className='Tbranco Ftexto Stexto'>
            <p className='FsubTitulo Ssubtitulo '>Sejam bem vindos, aventureiros!</p>
            <p>O grande encanto da vida para mim pode ser representado por todas as formas que ela se expressa, a cada nova forma um novo encanto. Procurei desde cedo me encantar, e por em palavras o que vivenciei pois penso que destas experiencias devo compartilhar algo com o mundo!</p>
            <p>O meu nome ?? Travis Worldwide, eu fiz o curso de jornalismo, ainda que n??o completamente, pois senti que eu precisava sair ao mundo e conhecer o m??ximo dele. Tal aventura foi originalmente registrada em formato de di??rio de viagens e agora nesse site, onde tamb??m poderemos experienciar tais registros.</p>
            <p>Aqui se encontra os relatos de minhas viagens, todas essa experi??ncias representadas em imagens e mapas, no esfor??o de trazer a voc?? um gosto dessas culturas excepcionais que tive a honra de conhecer. Espero que gostem do conte??do e sintam-se livres para entrar em contato comigo, seja para comentar os relatos ou sugerir novos destinos.</p>
          </div>
          </div>
        </div>
      </div>
    )

}