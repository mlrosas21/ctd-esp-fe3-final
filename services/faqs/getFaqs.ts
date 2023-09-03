export const getFaqs = async () => {
  const res = await fetch("http://localhost:3000/api/preguntas-frecuentes");
  const data = await res.json();

  return data;
};
