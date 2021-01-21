//function that adds a new element
function addRow() {
  const topic = document.getElementById("topic").value;
  const start = document.getElementById("start").value;
  const end = document.getElementById("end").value;
  const recieved = document.getElementById("recievedTasks").value;
  const done = document.getElementById("doneTasks").value;

  let newElement = {
    startedAt: new Date("2021-01-20:" + start),

    finishedAt: new Date("2021-01-20:" + end),

    tasksGiven: recieved,

    tasksFinished: done,

    topic: topic,
  };
  elementArray.push(newElement);
  document.write('<link rel="stylesheet" href="style.css" />');
  table();
}
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
table();
function table() {
  //form construction
  document.write('<h1 class="formTitle">Add Row</h1>');
  document.write("<form onsubmit='addRow()'>");

  document.write(
    '<input type="text" placeholder="Topic" name="topic" id="topic" required />'
  );
  document.write(
    '<input type="time" placeholder="Start Time" name="" id="start" required />'
  );
  document.write(
    '<input type="time" placeholder="End Time" name="" id="end" required />'
  );
  document.write(
    '<input type="number" placeholder="Recieved Tasks" name="" id="recievedTasks" required />'
  );
  document.write(
    '<input type="number" placeholder="Completed Tasks" name="" id="doneTasks" required />'
  );
  document.write('<button type="submit">Add Row</button>');

  document.write("</form>");

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
          document.write("<td class='time'>" + toTime(element[prop]) + "</td>");
          break;
        case "tasksFinishedPrecent":
          document.write("<td class='precent'>" + element[prop] + "%</td>");
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
      8;
    }
    return num;
  }

  //the following function turn miliseconds to hours
  function toTime(mili) {
    //   let hour = Math.floor(mili / 3600000);
    //   let minutes = (mili % 3600000) / 60000;
    //   return pad0(hour) + ":" + pad0(minutes);
    return Math.floor(mili / 36000) / 100;
  }
  // making the column "Total time spent" colorful
  const timeList = document.querySelectorAll(".time");
  for (const timeCell of timeList) {
    let cellValue = parseInt(timeCell.textContent);
    switch (true) {
      case cellValue <= 2:
        timeCell.style.backgroundColor = "green";
        break;
      case cellValue > 2 && cellValue <= 5:
        timeCell.style.backgroundColor = "yellow";
        break;

      case cellValue > 5 && cellValue <= 8:
        timeCell.style.backgroundColor = "orange";
        break;

      default:
        timeCell.style.backgroundColor = "red";
    }
  }

  // making the column "TaskFinishePercent" colorful
  const precentList = document.querySelectorAll(".precent");
  for (const precentCell of precentList) {
    let presentCellValue = parseInt(precentCell.textContent);
    switch (true) {
      case presentCellValue <= 20:
        precentCell.style.backgroundColor = "red";
        break;
      case presentCellValue > 20 && presentCellValue <= 50:
        precentCell.style.backgroundColor = "orange";
        break;

      case presentCellValue > 50 && presentCellValue <= 80:
        precentCell.style.backgroundColor = "yellow";
        break;

      default:
        precentCell.style.backgroundColor = "green";
    }
  }
}
