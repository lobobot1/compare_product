"use client";
import useFetching from "../hooks/useFetching";

export const product_type = [
  "nike",
  "lollipop",
  "singer",
  "maison",
  "giotto",
  "ljacquard",
];

const Menu = () => {
  const { setOrigin, setSimilar, origin } = useFetching();

  const handleClick = (type) => {
    setOrigin(`${type.toLowerCase()}o`);
    setSimilar(`${type.toLowerCase()}s`);
  };

  return (
    <div>
      <ul className="flex flex-col items-center text-left gap-3 pt-12 px-5">
        {product_type.map((product) => (
          <li
            key={product}
            className={`w-full text-xl ${
              product === origin.slice(0, -1)
                ? "text-[#2ed89a]"
                : "text-[#cfd1d5]"
            }  font-semibold`}
          >
            <button className="capitalize" onClick={() => handleClick(product)}>
              {product}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
