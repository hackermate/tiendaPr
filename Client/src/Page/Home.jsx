import Saludos from "../components/muestras/Saludos"
import Contador from "../components/muestras/Contador"

const Home = () => {
  return (
    <div>
      <Saludos titulo = "Antonio"
        subtitulo = "Ahora si vamos a programar"
      />
      <Contador />
    </div>
  )
}
export default Home;