import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;

export async function getSheetData() {
  const range = `A1:G11`; // Adjust the range according to your needs
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}?key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const data = response.data.values;

    if (data.length === 0) return [];

    const headers = data[0]; // Assuming the first row contains headers
    const rows = data.slice(1); // The rest are data rows

    const jsonData = rows.map((row) => {
      let obj = {};
      headers.forEach((header, index) => {
        obj[header.trim()] = row[index];
      });
      return obj;
    });

    return jsonData;
  } catch (error) {
    console.error("Error fetching data from Google Sheets:", error);
    return [];
  }
}

console.log(getSheetData());
