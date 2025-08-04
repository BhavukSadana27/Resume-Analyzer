import app from "./index.js";

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
}).on('error', (err) => {
  console.error('Failed to start server:', err.message);
})
