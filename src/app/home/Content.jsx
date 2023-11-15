"use client";
import Button from "../../components/Button";
import Data from "../../components/Data";
import useFetching from "../../hooks/useFetching";

const options = ["accept", "default", "decline"];

const Content = () => {
  const { origin, setStatus, message } = useFetching();

  const obj = {
    accept: {
      function: () => setStatus(1),
      message: "Product Matched",
    },
    default: {
      function: () => setStatus(0),
      message: "Product still needs to be matched",
    },
    decline: {
      function: () => setStatus(2),
      message: "Product not matched",
    },
  };

  return (
    <div>
      {origin === "" ? (
        <div>
          <h1 className="h-1/6 text-5xl mx-5 mt-5 mb-8 font-bold">Home</h1>
          <div className="h-5/6 w-full mx-auto mt-20 flex justify-center">
            <p className="text-2xl font-semibold text-gray-500">
              <span>
                {`It looks like you haven't selected any matching yet. Please select a product type from the left menu.`}
              </span>
            </p>
          </div>
        </div>
      ) : (
        <section>
          <h1 className="h-[6vh] capitalize text-5xl mx-5 mb-8 font-bold text-[#cfd1d5] select-none ">
            {origin.slice(0, -1)}
          </h1>

          <div className=" bg-[#283350] rounded shadow-md p-3 relative">
            <div>
              <h3 className="flex justify-end text-xl text-[#cfd1d5] font-medium ">
                Status:{" "}
                <span
                  className={`font-normal pl-2 ${
                    message === "Product Matched"
                      ? "text-green-500"
                      : message === "Product not matched"
                      ? "text-red-600"
                      : "text-blue-700"
                  }`}
                >
                  {message}
                </span>
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-3 mb-5">
              {options.map((option) => (
                <Button
                  key={option}
                  message={obj[option].message}
                  type={option}
                  handleChange={obj[option].function}
                />
              ))}
            </div>

            <Data />
          </div>
        </section>
      )}
    </div>
  );
};

export default Content;
