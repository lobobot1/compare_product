"use client";
import useFetching from "../hooks/useFetching";
import Product from "./Product";
import Pagination from "./Pagination";

function Data() {
  const { originData, similarData, pagination, setPagination, totalProducts } =
    useFetching();

  const inputs = Object.keys(originData).filter(
    (input) =>
      input !== "id_origin" && input !== "status" && input !== "id_similar"
  );

  return (
    <div className="bg-gray-600 rounded-md p-6">
      <div className="grid grid-cols-2 gap-3 mb-5">
        <h2 className="text-center uppercase text-[#2ed89a] text-2xl font-bold tracking-wide">
          Origin
        </h2>
        <h2 className="text-center uppercase text-[#2ed89a] text-2xl font-bold tracking-wide">
          Similar
        </h2>
      </div>
      <div className="flex justify-center mb-7">
        <Product product={originData} />
        <div className="grid grid-cols-1 w-[25%] z-10 bg-[#2ed89a] rounded-md shadow-[1px_0px_9px_#3f3f3f,-1px_0px_9px_#3f3f3f] gap-5 py-4 px-3 items-center">
          {inputs.map((input) => (
            <div key={input} className=" text-center">
              <div>
                <p className="capitalize text-[#242930] tracking-wide text-xl font-bold bg-[#27b681] p-3 rounded-md">{` ${input} `}</p>
              </div>
            </div>
          ))}
        </div>
        <Product product={similarData} />
      </div>

      <Pagination
        pagination={pagination}
        setPagination={setPagination}
        totalProducts={totalProducts}
      />
    </div>
  );
}

export default Data;
