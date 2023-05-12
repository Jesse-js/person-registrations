import express, { Request, Response } from "express";
const PORT = 3000;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  return res
    .status(200)
    .json({ auth: "true", message: "Seja bem-vindo ao cadastro de pessoas!" });
});

app.listen(PORT, () => {
  console.log(`App listening in ${PORT} port`);
});
