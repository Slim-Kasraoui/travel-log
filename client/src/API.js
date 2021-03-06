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

export async function createLogEntry(entry) {
  try {
    const response = await fetch(`${API_URL}/api/logs`, {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(entry)
    })
    return response.json()
  } catch (error) {
    console.log(error);
  }
}