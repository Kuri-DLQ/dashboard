import axios from 'axios'

const url = 'http://localhost:5001';

const viewMessage = async (id) => {
  try {
    const message = await axios.get(url + `/table/viewMessage/${id}`);
    return message;
  } catch (err) {
    console.error(err);
  }
}

const deleteMessage = async (id) => {
  try {
    await axios.delete(url + `/table/deleteMessage/${id}`);
  } catch (err) {
    console.error(err);
  }
 }

const resendMessage = async (message) => {
  console.log(`resending ${message.id}`)
  try {
    await axios.post(url + `/table/resendMessage`, message)
  } catch (err) {
    console.error(err);
  }
 }

const messageService = {
  deleteMessage,
  resendMessage,
  viewMessage,
}

export default messageService;