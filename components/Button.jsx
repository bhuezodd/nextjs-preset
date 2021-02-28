const Button = (props) => {
  return (
    <button className="h-10 px-8 text-white bg-indigo-500 rounded-full hover:bg-indigo-600 focus:outline-none">
      { props.children}
    </button>
  )
}

export default Button
