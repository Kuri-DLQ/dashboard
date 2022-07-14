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

// const deleteMessage = async (id) => {
//   try {
//     let results = await axios.delete(url + `table/deleteMessage/${id}`);
//     console.log(results);
//     return results;
//   } catch (err) {
//     console.error(err);
//   }
// }

const tableService = {
  getAllMessages,
  // deleteMessage,
}

export default tableService;