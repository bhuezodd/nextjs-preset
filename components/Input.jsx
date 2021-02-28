const Input = (props) => {
  const {type, name, key, value, onChange} = props
  return (
    <input
      className="w-full h-8 px-2 border border-black rounded-lg focus:outline-none"
      type={type} name={name} key={key} value={value} onChange={onChange} />
  )
}

export default Input
