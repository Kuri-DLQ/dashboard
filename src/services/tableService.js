import axios from 'axios'

const url = 'http://localhost:5001';

const getAllMessages = async () => {
  try {
    let results = await axios.get(url + '/table/allMessages');
    return results;
  } catch (err) {
    console.error(err);
  }
}

const tableService = {
  getAllMessages,
}

export default tableService;