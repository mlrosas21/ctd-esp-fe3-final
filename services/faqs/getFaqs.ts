export const getFaqs = async () => {
  const res = await fetch("https://ctd-esp-fe3-final-swart.vercel.app/api/faqs");
  const data = await res.json();

  return data;
};
