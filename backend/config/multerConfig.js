// import multer from 'multer';
// import path from 'path';
// import fs from 'fs';

// const storagePath = path.join('uploads');

// if (!fs.existsSync(storagePath)) {
//   fs.mkdirSync(storagePath, { recursive: true });
// }

// // configure multer
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, storagePath);
//   },
//   filename: function (req, file, cb) {
//     const ext = path.extname(file.originalname);
//     const filename = `dimita-${Date.now()}${ext}`;
//     cb(null, filename);
//   },
// });

// export const upload = multer({
//   storage,
//   limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
// });





import multer from 'multer';

const storage = multer.memoryStorage();

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});
