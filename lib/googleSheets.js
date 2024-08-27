import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID_APPLE;

export async function getSheetData(id) {
  const range = "A1:G130"; // Ajusta el rango según tus necesidades
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}?key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const data = response.data.values;

    if (!data || data.length === 0) return [];

    const headers = data[0]; // Asume que la primera fila contiene los encabezados
    const rows = data.slice(1); // El resto son filas de datos

    const jsonData = rows.map((row) => {
      let obj = {};
      headers.forEach((header, index) => {
        obj[header.trim()] = row[index]; //|| ""; // Evita valores undefined
      });
      return obj;
    });

    if (id) {
      // Filtrar los datos para obtener solo el producto con el ID especificado
      const product = jsonData.find((item) => item.ID.toString() === id);
      return product ? [product] : [];
    }

    return jsonData;
  } catch (error) {
    console.error("Error fetching data from Google Sheets:", error);
    return [];
  }
}
