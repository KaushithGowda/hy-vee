function Form({ text, setText, handleSubmit }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-10/12 sm:w-1/3"
      method="POST"
    >
      <input
        placeholder="Name"
        className="pl-2 py-2 rounded-md text-black outline-none text-xl sm:text-2xl font-extrabold tracking-tight"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        disabled={!text}
        className={`rounded-lg bg-blue-500 mt-10 py-2 text-xl sm:text-2xl font-extrabold tracking-tight`}
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
