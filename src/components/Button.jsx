
const style ={
    accept: 'bg-[#3dc3ac] hover:bg-[#2d907f] ',
    decline: 'bg-[#ec3c62] hover:bg-[#b92f4c] ',
    default: 'bg-[#4182b7] hover:bg-[#2e5d83] ',
}

const Button = ({handleChange,message,type='default'}) => {
  return (
    <button
        className={`${style[type]}} shadow-md text-gray-800 font-bold py-2 px-4 rounded transition-colors ease-in-out duration-300`}
        onClick={handleChange}
    >
        {message}
    </button>
  )
}

export default Button