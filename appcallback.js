console.log("start");
/* function loginUser(email, password, callback) {
    setTimeout(() => {
        console.log("Now we have the data");
        callback({ userEmail: email });
    }, 5000);
}

function getUserVideos(email, callback) {
    setTimeout(() => {
        callback(['video1', 'video2', 'video3'])
    }, 3000)
}

function videoDetails(title, callback) {
    setTimeout(() => {
        callback("title of the first video");
    }, 2000)
}
const usr = loginUser("tanv@goomail.com", 87654, u => {
    console.log(u)
    getUserVideos(u.userEmail, (videos) => {
        console.log(videos)
        videoDetails(videos[0], (title) => {
            console.log(title)
        })
    })
}); */
// Refactoring
function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the data");
      resolve({ userEmail: email });
    }, 5000);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video1", "video2", "video3"]);
    }, 3000);
  });
}

function videoDetails(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("title of the first video");
    }, 2000);
  });
}
/*
loginUser("ed", "bubmba")
  .then((user) => getUserVideos(user.email))
  .then((vedios) => videoDetails(vedios[0]))
  .then((detail) => console.log(detail));
// SYNC



console.log("Finish");
*/

/* const yt = new Promise((resolve) => {
  setTimeout(() => {
    console.log("getting stuff from youtube");
    resolve({ videos: [1, 2, 3, 4, 5] });
  }, 2000);
});

const fb = new Promise((resolve) => {
  setTimeout(() => {
    console.log("getting stuff from facebook");
    resolve({ user: "name" });
  }, 2000);
});
Promise.all([yt, fb]).then((result) => console.log(result));
*/

async function displayUser() {
  try {
    const loginuser = await loginUser("ed", 13456);
    const videos = await getUserVideos(loginuser.userEmail);
    const detail = await videoDetails(videos[0]);
    console.log(detail);
  } catch (err) {
    console.log(err);
  }
}
displayUser();
