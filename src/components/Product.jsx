import DataRow from "./DataRow"

const Product = ({product}) => {
    const inputs = Object.keys(product).filter((input) => input !== "id_origin" && input !== "status" && input !== "id_similar");

    const style = Object.hasOwn(product, 'id_origin') ? 'rounded-r-md' : 'rounded-l-md'

  return (
    <div className={`grid grid-cols-1 gap-5 w-[34.5%] py-5 ${!Object.hasOwn(product, 'id_origin') ? 'text-end' : ''}`}>
        {inputs.map((input) => (
            <DataRow
                key={input}
                data={product[input]}
                style={style}
            />
        ))}
    </div>
  )
}

export default Product