const API_URL = "http://localhost:3000"

export async function listLogEntries() {
  try {
    const response = await fetch(`${API_URL}/api/logs`)
    console.log(response);
    return response.json()
  } catch (error) {
    console.log(error);
  }
}