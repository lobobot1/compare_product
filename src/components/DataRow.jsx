const DataRow = ({ data, style }) => {
  return (
    <div
      className={`p-3 bg-slate-300 align-middle shadow-2xl font-medium ${style}`}
    >
      <p>{data}</p>
    </div>
  );
};

export default DataRow;
