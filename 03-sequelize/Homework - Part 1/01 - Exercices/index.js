const app = require("./server");
const { db } = require("./db");
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    db.sync({ force: true });
});

// mejorado 2:

// const app = require("./server");
// const { db } = require("./db");
// const PORT = 3000;

// const startServer = async () => {
//     try {
//         await db.sync({ force: true });
//         app.listen(PORT, () => {
//             console.log(`Server listening on port ${PORT}`);
//         });
//     } catch (error) {
//         console.error("Error starting server:", error);
//     }
// };

// startServer();

// Version del profesor:

// const app = require("./server");
// const { db } = require("./db");
// const PORT = 3000;

// db
//   .sync({ force: true })
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Server listening on port ${PORT}`);
//     })
//   })
//   .catch(err => console.log(err.message))
