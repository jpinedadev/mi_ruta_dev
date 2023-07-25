import logo from "../assets/images/logo.jpg"
const Header = () => {
  return (
    <div className="flex flex-row justify-center place-items-center my-6 text-2xl">
      <img src={logo} alt="Logo"
      className="rounded-full h-16 w-auto"/>
      <span className="ml-4 font-semibold text-orange-500">Blog triste</span>
      <span className="pl-1 font-semibold text-blue-800">:c</span>
    
    </div>
  )
}

export default Header;
