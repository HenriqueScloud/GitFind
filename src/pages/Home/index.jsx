import { Header } from "../../components/Header";
import img_back from "../../assets/background.png";
import "./style.scss";
export const App = () => {
  return (
    <>
      <Header />
      <main className="conteudo">
        <img src={img_back} alt="backgorund" className="background" />
        <section className="info">
          <form action="">
            <input type="text" placeholder="@Usuário" />
            <button>Buscar</button>
          </form>
          <aside className="info-user">
            <img
              src="https://avatars.githubusercontent.com/u/124588969?v=4"
              alt="foto-perfil"
            />
            <header>
              <h2>Nome do usuário</h2>
              <p>@usuario</p>
              <p>Descrição do usuário</p>
              <a href="#">Ver perfil</a>
            </header>
          </aside>
        </section>
      </main>
    </>
  );
};

export default App;
