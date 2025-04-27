const votes = {
  paris: 0,
  tokyo: 0,
  newyork: 0,
  rome: 0,
  london: 0,
  sydney: 0
};

function vote(destination) {
  votes[destination] += 1;
  document.getElementById('vote-' + destination).textContent = votes[destination];

  const button = document.querySelector(`button[onclick="vote('${destination}')"]`);
  button.classList.add('voted');
  setTimeout(() => {
    button.classList.remove('voted');
  }, 200);
}
