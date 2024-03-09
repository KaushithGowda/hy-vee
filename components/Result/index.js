function Result({ age, gender, genderProb, country, loading, reset }) {
  return (
    <>
      <div className="flex items-center justify-center mb-5">
        <h1 className="inline-block text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-200 text-left">
          Our Guess!
        </h1>
      </div>
      <div className="shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className={`${loading && "animate-pulse"}`}>
          <table className="table-auto min-w-2/3">
            <thead className="bg-slate-900 rounded-full">
              <tr className="border-b border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-200 text-left">
                <td className="w-3/5"></td>
                <td className="w-1/5"></td>
                <td className="w-1/5 p-4 text-center">Probability</td>
              </tr>
            </thead>
            <tbody className="text-slate-400 bg-slate-800">
              <tr className="border-b border-slate-700 p-4 pl-8">
                <td className="font-bold w-3/5 p-4 pl-8 text-white">Age</td>
                <td className="font-medium w-1/5 p-4 text-center">{age}</td>
                <td className="font-medium w-1/5 p-4 text-center">-</td>
              </tr>
              <tr className="border-b border-slate-700 p-4 pl-8">
                <td className="font-bold w-3/5 p-4 pl-8 text-white capitalize">
                  Gender
                </td>
                <td className="font-medium w-1/5 p-4 text-center">{gender}</td>
                <td className="font-medium w-1/5 p-4 text-center">
                  {genderProb}
                </td>
              </tr>
              {country?.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="border-b border-slate-700 p-4 pl-8"
                  >
                    {index === 0 ? (
                      <td className="font-bold w-3/5 p-4 pl-8 text-white">
                        Country
                      </td>
                    ) : (
                      <td className="font-bold w-3/5 p-4 pl-8 text-white"></td>
                    )}
                    <td className="font-medium w-1/5 p-4 text-center">
                      {item.country_id}
                    </td>
                    <td className="font-medium w-1/5 p-4 text-center">
                      {item.probability.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex items-end">
        <button
          onClick={() => reset()}
          className={`rounded-lg bg-blue-500 mt-10 py-2 px-2 text-xl sm:text-2xl font-extrabold tracking-tight`}
        >
          Go Back
        </button>
      </div>
    </>
  );
}

export default Result;
