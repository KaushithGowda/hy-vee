import Content from "@/components/Content";
import Form from "@/components/Form";
import Result from "@/components/Result";
import { getAge, getCountry, getGender } from "@/services/api";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [text, setText] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [genderProb, setGenderProb] = useState("");
  const [country, setCountry] = useState([]);
  const [response, setResponse] = useState(false);
  const [loading, setLoading] = useState(false);

  async function getData() {
    setLoading(true);
    const responseCountry = await getCountry(text);
    const responseAge = await getAge(text);
    const responseGender = await getGender(text);
    setLoading(false);
    if (responseCountry) setCountry(responseCountry.country);
    if (responseAge) setAge(responseAge.age);
    if (responseGender) {
      setGender(responseGender.gender);
      setGenderProb(responseGender.probability);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    getData();
    setResponse(true);
  }

  function reset() {
    setAge("");
    setCountry([]);
    setGender("");
    setGenderProb("");
    setText("");
    setResponse(false);
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-0 sm:p-24 ${inter.className}`}
    >
      {!response && (
        <>
          <Content />
          <Form text={text} setText={setText} handleSubmit={handleSubmit} />
        </>
      )}
      {response && (
        <Result
          age={age}
          gender={gender}
          genderProb={genderProb}
          country={country}
          setResponse={setResponse}
          loading={loading}
          reset={reset}
        />
      )}
    </main>
  );
}
