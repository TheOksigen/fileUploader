const express = require("express")
const app = express();
const cors = require("cors");
const { upload, deletefile } = require('./multer.js')

app.use(express.json())
app.use(cors())


app.post("/file", upload.single("file"), (req, res) => {   

    res.status(200).json({ location: req.file.path, message: "File uploaded successfully!" });
});

app.delete("/file/:fileName", deletefile)


app.listen(3000)