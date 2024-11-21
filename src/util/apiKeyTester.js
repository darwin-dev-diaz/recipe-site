import { keyArr } from "../../apiKey";

// this file cycles through the keysArr and returns the first valid key
async function getValidKey(index = 0) {
  if (index === 10) return keyArr[0];
  const link = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${keyArr[index]}&number=1`;

  try {
    const response = await fetch(link, { mode: "cors" });

    if (!response.ok) {
      console.error(`API Error: ${response.status} ${response.statusText}`);
      return getValidKey(index + 1);
    }
    return keyArr[index];
  } catch (err) {
    console.error("Network or Fetch Error:", err);
    return keyArr[0];
  }
}

export default getValidKey;
