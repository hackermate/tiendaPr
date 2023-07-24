import LogoInicio from "../../assets/img/logoecu.png"

const Logo = () => {
  return (
    <div className="flex-shrink-0 justify-center">
      <img src={LogoInicio} height={100} width={300} alt="logo" />
    </div>
  )
}

export default Logo;