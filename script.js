"use strict";
let elementArray = [];
//data construction
tableConst();
function tableConst(newElement = null) {
  let elementArray = [
    {
      "started At": new Date("2021-01-20:13:00"),

      "Finished At": new Date("2021-01-20:19:00"),

      "Task Given": 10,

      "Tasks Finished": 7,

      Topic: "JavaScript",
    },
    {
      "started At": new Date("2021-01-19:9:00"),

      "Finished At": new Date("2021-01-19:17:00"),

      "Task Given": 20,

      "Tasks Finished": 13,

      Topic: "CSS",
    },
    {
      "started At": new Date("2021-01-18:18:00"),

      "Finished At": new Date("2021-01-18:20:00"),

      "Task Given": 15,

      "Tasks Finished": 15,

      Topic: "Arrays",
    },
    {
      "started At": new Date("2021-01-17:16:00"),

      "Finished At": new Date("2021-01-17:21:00"),

      "Task Given": 25,

      "Tasks Finished": 18,

      Topic: "Elements",
    },
    {
      "started At": new Date("2021-01-16:13:00"),

      "Finished At": new Date("2021-01-16:19:00"),

      "Task Given": 32,

      "Tasks Finished": 30,

      Topic: "HTML",
    },
    {
      "started At": new Date("2021-01-15:10:00"),

      "Finished At": new Date("2021-01-15:19:30"),

      "Task Given": 22,

      "Tasks Finished": 19,

      Topic: "DOM",
    },
    {
      "started At": new Date("2021-01-14:11:00"),

      "Finished At": new Date("2021-01-14:13:20"),

      "Task Given": 10,

      "Tasks Finished": 2,

      Topic: "WEB",
    },
    {
      "started At": new Date("2021-01-13:12:00"),

      "Finished At": new Date("2021-01-13:21:00"),

      "Task Given": 18,

      "Tasks Finished": 9,

      Topic: "FrontEnd",
    },
    {
      "started At": new Date("2021-01-12:12:30"),

      "Finished At": new Date("2021-01-12:16:15"),

      "Task Given": 11,

      "Tasks Finished": 7,

      Topic: "Theory",
    },
    {
      "started At": new Date("2021-01-11:13:45"),

      "Finished At": new Date("2021-01-11:19:00"),

      "Task Given": 16,

      "Tasks Finished": 16,

      Topic: "Introduction",
    },
  ];
  if (newElement !== null) {
    elementArray.push(newElement);
  }

  //form construction
  const body = document.body;
  const headline = document.createElement("h1");
  headline.textContent = "Table";
  headline.setAttribute("class", "pageTitle");
  body.appendChild(headline);
  const formTitle = document.createElement("h2");
  formTitle.setAttribute("class", "formTitle");
  formTitle.innerText = "Add Row:";
  body.appendChild(formTitle);
  const form = document.createElement("form");
  form.setAttribute("onsubmit", "addRow()");
  body.appendChild(form);

  const topic = document.createElement("input");
  topic.type = "text";
  topic.placeholder = "Topic";
  topic.id = "Topic";
  topic.required = true;
  topic.value = "ds";
  form.appendChild(topic);

  const strt = document.createElement("input");
  strt.type = "time";
  strt.placeholder = "Start Time";
  strt.id = "start";
  strt.required = true;
  form.appendChild(strt);

  const nd = document.createElement("input");
  nd.type = "time";
  nd.placeholder = "End Time";
  nd.id = "end";
  nd.required = true;
  form.appendChild(nd);

  const res = document.createElement("input");
  res.type = "number";
  res.placeholder = "Recieved Tasks";
  res.id = "recievedTasks";
  res.required = true;
  form.appendChild(res);

  const comp = document.createElement("input");
  comp.type = "number";
  comp.placeholder = "Completed Tasks";
  comp.id = "doneTasks";
  comp.required = true;
  form.appendChild(comp);

  const btn = document.createElement("button");
  btn.type = "submit";
  btn.innerText = "Add row";
  form.appendChild(btn);

  // a loop that calculates the 2 extra properties:
  for (const element of elementArray) {
    element["Total Time Spent"] =
      element["Finished At"] - element["started At"];
    element["Tasks Finished %"] = Math.floor(
      (element["Tasks Finished"] * 100) / element["Task Given"]
    );
  }
  //TABLE STRUCTURE

  // start of the table
  const table = document.createElement("table");
  table.id = "table";
  //content

  //header
  const tableHeader = document.createElement("tr");
  let headerItem = "";
  for (let prop in elementArray[0]) {
    headerItem = document.createElement("th");
    headerItem.innerText = prop;
    tableHeader.append(headerItem);
  }
  table.append(tableHeader);
  //content
  for (const element of elementArray) {
    const tableRow = document.createElement("tr");
    for (const prop in element) {
      let rowItem = document.createElement("td");
      switch (prop) {
        case "started At":
        case "Finished At":
          rowItem.innerText =
            pad0(element[prop].getHours()) +
            ":" +
            pad0(element[prop].getMinutes());

          break;
        case "Total Time Spent":
          rowItem.innerText = toTime(element[prop]);
          rowItem.className = "time";

          break;
        case "Tasks Finished %":
          rowItem.innerText = element[prop] + "%";
          rowItem.className = "precent";

          break;
        default:
          rowItem.innerText = element[prop];
      }
      tableRow.appendChild(rowItem);
    }
    table.append(tableRow);
    body.appendChild(table);
  }
}

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

//function that adds a new element
function addRow() {
  const Topic = document.getElementById("Topic").value;
  const start = document.getElementById("start").value;
  const end = document.getElementById("end").value;
  const recieved = document.getElementById("recievedTasks").value;
  const done = document.getElementById("doneTasks").value;

  let newElement = {
    "started At": new Date("2021-01-20:" + start),

    "Finished At": new Date("2021-01-20:" + end),

    "Task Given": recieved,

    "Tasks Finished": done,

    Topic: Topic,
  };
  newElement["Total Time Spent"] =
    newElement["Finished At"] - newElement["started At"];
  newElement["Tasks Finished %"] = Math.floor(
    (newElement["Tasks Finished"] * 100) / newElement["Task Given"]
  );
  let valuesForNewRow = [
    start,
    end,
    recieved,
    done,
    Topic,
    newElement["Total Time Spent"],
    newElement["Tasks Finished %"],
  ];
  //elementArray.push(newElement);

  //   const tableRow = document.createElement("tr");
  //   const table = document.getElementById("table");
  //   for (const prop in newElement) {
  //     let rowItem = document.createElement("td");
  //     switch (prop) {
  //       case "started At":
  //       case "Finished At":
  //         rowItem.innerText =
  //           pad0(newElement[prop].getHours()) +
  //           ":" +
  //           pad0(newElement[prop].getMinutes());

  //         break;
  //       case "Total Time Spent":
  //         rowItem.innerText = toTime(newElement[prop]);
  //         rowItem.className = "time";

  //         break;
  //       case "Tasks Finished %":
  //         rowItem.innerText = newElement[prop] + "%";
  //         rowItem.className = "precent";

  //         break;
  //       default:
  //         rowItem.innerText = newElement[prop];
  //     }
  //     tableRow.appendChild(rowItem);
  //   }
  //   table.appendChild(tableRow);
  //   document.body.append(table);
  //   // css = document.newElement("link");
  //   // css.rel = "stylesheet";
  //   // css.href = "style.css";
  //   // document.append(css);

  //   // table();
  // }
  const table = document.getElementById("table");
  const test = table.insertRow(table.rows.length);
  for (let i = 0; i < valuesForNewRow.length; i++) {
    let cell = test.insertCell(i);
    cell.innerText = valuesForNewRow[i];
  }
  const tableRow = table.insertRow(table.rows.length);
  let i = 0;
  for (let prop in newElement) {
    let rowItem = tableRow.insertCell(i);
    switch (prop) {
      case "started At":
      case "Finished At":
        rowItem.innerText =
          pad0(newElement[prop].getHours()) +
          ":" +
          pad0(newElement[prop].getMinutes());

        break;
      case "Total Time Spent":
        rowItem.innerText = toTime(newElement[prop]);
        rowItem.className = "time";

        break;
      case "Tasks Finished %":
        rowItem.innerText = newElement[prop] + "%";
        rowItem.className = "precent";

        break;
      default:
        rowItem.innerText = newElement[prop];
    }
    tableRow.appendChild(rowItem);
    i++;
  }
  table.appendChild(tableRow);
  table.appendChild(test);

  tableConst(newElement);
}
