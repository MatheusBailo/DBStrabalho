import style from "./App.module.css";
import fundo2 from "./assets/images/fundo2.png";
import logo from "./assets/images/image.png";
import { Menu } from "./components/menu";
import { useState } from "react";

function App() {
  const [videoVisivel, setVideoVisivel] = useState(false);
  const [descricaoVisivel, setDescricaoVisivel] = useState(false);

  const toggleVideo = () => {
    setVideoVisivel(!videoVisivel);
    if (descricaoVisivel) setDescricaoVisivel(false);
  };

  const toggleDescricao = () => {
    setDescricaoVisivel(!descricaoVisivel);
    if (videoVisivel) setVideoVisivel(false);
  };

  return (
    <>
      <Menu s1="API" style={{ width: "100%" }} />
      <main>
        <section id="s1" className={style.s1}>
          <div className={style.logoContainer}>
            <img src={logo} alt="Logo" className={style.logoS1} />
          </div>
          <div className={style.butao}>
            <button className={style.buttonLink}>
              <a href="/requisicao">Acessar a API</a>
            </button>
          </div>
        </section>

        <section id="s2" className={style.s2} style={{ backgroundImage: `url(${fundo2})` }}>
          <div className={style.overlay}>
            <div className={style.botoesS2}>
              <button className={style.botaoS2} onClick={toggleVideo}>
                {videoVisivel ? "Fechar vídeo" : "O que é Dragon Ball?"}
              </button>

              {videoVisivel && (
                <div className={style.videoContainer}>
                  <iframe
                    width="100%"
                    height="400px"
                    src="https://www.youtube.com/embed/flYJj85aJsw"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              <button className={style.botaoS2} onClick={toggleDescricao}>
                {descricaoVisivel ? "Fechar descrição" : "Ver descrição"}
              </button>

              {descricaoVisivel && (
                <div className={style.descricao}>
                  <p>
                    <strong>Dragon Ball Super</strong> é uma continuação da famosa saga Dragon Ball, criada por Akira Toriyama.
                    A história acompanha Goku e seus amigos enfrentando novos inimigos, descobrindo novos poderes
                    e explorando universos paralelos em batalhas épicas cheias de energia, superação e amizade.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
