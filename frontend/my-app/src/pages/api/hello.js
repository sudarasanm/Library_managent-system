// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import {MongoClient} from "mongodb"
// MongoClient.connect("mongodb+srv://sakthiganeshsg43:vBtWqJEn3fSxpWIo@cluster0.0eqy8xz.mongodb.net/?retryWrites=true&w=majority")

export default function handler(req, res) {
  // debugger
  if (req.method === "POST") {
    const data = req.body.formvalues;
    console.log(data)
  if(
    data.BookName.trim() === "" ||
    data.Invoice.trim() === "" ||
    data.Author.trim() === "" ||
    data.IsBn.trim() === "" ||
    data.cost.trim() === "" ||
    data.Department.trim() === ""
  ){
    return res.status(403).json({message:"method not found...!"})
  }
 
  return res.status(200).json({ message: "submitted successfully" });
}
}
// BookName:bookNameInput,
//   Invoice:invoiceInput,
//   Author:authorInput,
//   IsBn:isBn,
//   cost:costInput,
//   Department:departmentInput
