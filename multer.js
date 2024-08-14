const multer = require("multer");
const path = require("path");
const fs = require('fs');

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname.split(" "));
    }
})

const deletefile = async (req, res) => {
    const { fileName } = req.params;
    const filePath = path.join(__dirname, 'uploads', fileName);

    fs.unlink(filePath, (err) => {
        if (err) {
            return res.status(500).json({ message: 'File deletion failed', error: err });
        }
        res.status(200).json({ message: 'File deleted successfully' });
    });
};


const upload = multer({ storage: fileStorage })

module.exports = { upload, deletefile}