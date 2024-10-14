import { sleep } from "./get-data";

export default async function handler(req, res) {
  const lang = (req.query?.lang ?? "EN").toUpperCase();
  await sleep(1000);
  if (lang === "EN") res.status(200).json({ title: "Website" });
  if (lang === "FR") res.status(200).json({ title: "site web" });
  if (lang === "DE") res.status(200).json({ title: "Webseite" });
  res.status(200).json({ title: "..." });
}
