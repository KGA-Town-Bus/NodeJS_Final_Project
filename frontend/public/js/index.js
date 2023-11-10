const errorCheck = () => {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const error = params.get('error');
  if (error) {
    alert(error);
    location.href = '/';

  }
}
errorCheck()


const chatButton = document.querySelector('.chat'); // The button to open chat
const chatRoom = document.getElementById('chatroom'); // The chat room box

chatButton.addEventListener('click', function () {
  // Toggle the display of the chatroom
  if (chatRoom.style.display === 'none' || chatRoom.style.display === '') {
    chatRoom.style.display = 'flex';
  } else {
    chatRoom.style.display = 'none';
  }
});



