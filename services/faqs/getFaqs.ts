export const getFaqs = async () => {
  const res = await fetch("https://ctd-esp-fe3-final-moz5bfgul-mlrosas21.vercel.app/api/preguntas-frecuentes");
  const data = await res.json();

  return data;
};
