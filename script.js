//data construction
let elementArray = [
  {
    startedAt: new Date("2021-01-20:13:00"),

    finishedAt: new Date("2021-01-20:19:00"),

    tasksGiven: 10,

    tasksFinished: 7,

    topic: "JavaScript",
  },
  {
    startedAt: new Date("2021-01-19:9:00"),

    finishedAt: new Date("2021-01-19:17:00"),

    tasksGiven: 20,

    tasksFinished: 13,

    topic: "CSS",
  },
  {
    startedAt: new Date("2021-01-18:18:00"),

    finishedAt: new Date("2021-01-18:20:00"),

    tasksGiven: 15,

    tasksFinished: 15,

    topic: "Arrays",
  },
  {
    startedAt: new Date("2021-01-17:16:00"),

    finishedAt: new Date("2021-01-17:21:00"),

    tasksGiven: 25,

    tasksFinished: 18,

    topic: "Elements",
  },
  {
    startedAt: new Date("2021-01-16:13:00"),

    finishedAt: new Date("2021-01-16:19:00"),

    tasksGiven: 32,

    tasksFinished: 30,

    topic: "HTML",
  },
  {
    startedAt: new Date("2021-01-15:10:00"),

    finishedAt: new Date("2021-01-15:19:30"),

    tasksGiven: 22,

    tasksFinished: 19,

    topic: "DOM",
  },
  {
    startedAt: new Date("2021-01-14:11:00"),

    finishedAt: new Date("2021-01-14:13:20"),

    tasksGiven: 10,

    tasksFinished: 2,

    topic: "WEB",
  },
  {
    startedAt: new Date("2021-01-13:12:00"),

    finishedAt: new Date("2021-01-13:21:00"),

    tasksGiven: 18,

    tasksFinished: 9,

    topic: "FrontEnd",
  },
  {
    startedAt: new Date("2021-01-12:12:30"),

    finishedAt: new Date("2021-01-12:16:15"),

    tasksGiven: 11,

    tasksFinished: 7,

    topic: "Theory",
  },
  {
    startedAt: new Date("2021-01-11:13:45"),

    finishedAt: new Date("2021-01-11:19:00"),

    tasksGiven: 16,

    tasksFinished: 16,

    topic: "Introduction",
  },
];
// a loop that calculates the 2 extra properties:
for (const element of elementArray) {
  element["Total Time Spent"] = element.finishedAt - element.startedAt;
  element["tasksFinishedPrecent"] = Math.floor(
    (element.tasksFinished * 100) / element.tasksGiven
  );
}
//TABLE STRUCTURE

// start of the table
document.write("<table>");
//content

//header
document.write("<tr>");
for (let prop in elementArray[0]) {
  document.write("<th>" + prop + "</th>");
}
document.write("</tr>");
//content
for (const element of elementArray) {
  document.write("<tr>");
  for (const prop in element) {
    switch (prop) {
      case "startedAt":
      case "finishedAt":
        document.write(
          "<td>" +
            pad0(element[prop].getHours()) +
            ":" +
            pad0(element[prop].getMinutes()) +
            "</td>"
        );
        break;
      case "Total Time Spent":
        document.write("<td>" + toTime(element[prop]) + "</td>");
        break;
      case "tasksFinishedPrecent":
        document.write("<td>" + element[prop] + "%</td>");
        break;
      default:
        document.write("<td>" + element[prop] + "</td>");
    }
  }
  document.write("</tr>");
}

// end of the table
document.write("</table>");

// the following function is for formatting the time to look properly
function pad0(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}

//the following function turn miliseconds to hours
function toTime(mili) {
  let hour = Math.floor(mili / 3600000);
  let minutes = (mili % 3600000) / 60000;
  return pad0(hour) + ":" + pad0(minutes);
}
