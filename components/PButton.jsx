const PButton = (props) => {
  return (
    <button className="px-16 py-3 text-white bg-indigo-500 rounded-full hover:bg-indigo-600 focus:outline-none">
      { props.children}
    </button>
  )
}

export default PButton
