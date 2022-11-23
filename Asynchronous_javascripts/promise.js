const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: "Technical Meeting",
      location: "Zoom",
      time: "10:30 PM",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("Meeting already scheduled!"));
  }
});

const addToCalender = (meetingDetails) => {
  const calender = `${meetingDetails.name} was scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;

  return Promise.resolve(calender);
};
meeting
  .then(addToCalender)
  .then((res) => {
    console.log(JSON.stringify(res));
  })
  .catch((err) => {
    console.log(err.message);
  });

console.log("hello ");
