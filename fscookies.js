/* COOKIES */
let scoreSAVED = getScore("scoreSAVED");

function loadScore() {
  /* load stats */
  score = scoreSAVED;
}

/* COOKIES */
function setScore(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + ";";
}

function getScore(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkScore() {
  if (scoreSAVED != "" && scoreSAVED != null) {
    alert("Your Score: " + scoreSAVED);
    score = scoreSAVED;
    score = Math.floor(score);
  } else {
    alert("No saved data found!");
  }
}

function deleteScore() {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

function saveClicks() {
  score = Math.floor(score);
  //   alert("Score saved: " + score);

  if (scoreSAVED > score) {
    //smaller than the highscore
  } else {
    setScore("scoreSAVED", score);
  }
}
