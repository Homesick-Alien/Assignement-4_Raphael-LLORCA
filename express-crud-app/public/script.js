// public/scripts.js
async function createRecord() {
    try {
      const response = await axios.post('/create', {
        param1: 'value1', // Remplacez par les valeurs réelles
        param2: 'value2',
      });
      displayResult(response.data);
    } catch (error) {
      displayError(error);
    }
  }
  
  async function retrieveRecords() {
    try {
      const param = 'search_value'; // Remplacez par la valeur réelle
      const response = await axios.get(`/retrieve/${param}`);
      displayResult(response.data);
    } catch (error) {
      displayError(error);
    }
  }
  
  async function updateRecord() {
    try {
      const id = 'record_id'; // Remplacez par l'ID réel
      const changes = { param1: 'new_value1', param2: 'new_value2' }; // Remplacez par les nouvelles valeurs
      const response = await axios.put(`/update/${id}`, { changes });
      displayResult(response.data);
    } catch (error) {
      displayError(error);
    }
  }
  
  async function deleteRecord() {
    try {
      const id = 'record_id_to_delete'; // Remplacez par l'ID réel
      const response = await axios.delete(`/delete/${id}`);
      displayResult(response.data);
    } catch (error) {
      displayError(error);
    }
  }
  
  function displayResult(data) {
    document.getElementById('result').innerText = JSON.stringify(data, null, 2);
  }
  
  function displayError(error) {
    document.getElementById('result').innerText = `Error: ${error.message}`;
  }
  