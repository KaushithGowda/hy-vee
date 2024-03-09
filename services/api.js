const apiAge = "https://api.agify.io";
const apiGender = "https://api.genderize.io";
const apiCountry = "https://api.nationalize.io";

export async function getCountry(name) {
  try {
    const res = await fetch(`${apiCountry}/?name=${name}`);
    if (!res.ok) new Error();
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getGender(name) {
  try {
    const res = await fetch(`${apiGender}/?name=${name}`);
    if (!res.ok) new Error();
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getAge(name) {
  try {
    const res = await fetch(`${apiAge}/?name=${name}`);
    if (!res.ok) new Error();
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
