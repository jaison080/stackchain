import Dwitter from "../../utils/interact";

export default async function handler(req, res) {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method not allowed" });
  const qns = await Dwitter.getAllQuestions();
  return res.status(200).json(qns);
}
