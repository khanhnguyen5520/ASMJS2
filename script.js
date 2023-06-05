let index = 1;

function insert_Row() {
  let name = document.getElementById("name").value;
  let dob = document.getElementById("dob").value;
  let math = document.getElementById("MathsScores").value;
  let phy = document.getElementById("PhysicalScores").value;
  let che = document.getElementById("ChemicalScores").value;

  if (name == "" && dob == "" && math == "" && phy == "" && che == "") {
    alert("Bạn đã nhập thiếu giá trị vào ô nhập liệu");
  } else if (math == "") {
    alert("Bạn đã nhập thiếu điểm toán");
  } else if (phy.value == "") {
    alert("Bạn đã nhập thiếu điểm lý");
  } else if (che.value == "") {
    alert("Bạn đã nhập thiếu điểm hoá");
  } else if (isNaN(math) && isNaN(phy) && isNaN(che)) {
    alert("Kí tự bạn nhập không phải là số");
  } else if (isNaN(math)) {
    alert("Kí tự bạn nhập không phải là số");
  } else if (isNaN(phy)) {
    alert("Kí tự bạn nhập không phải là số");
  } else if (isNaN(che)) {
    alert("Kí tự bạn nhập không phải là số");
  } else {
    let tbody = document.getElementById("tbody");
    let row = document.createElement("tr");
    tbody.append(row);
    row.id = index;

    let tbName = document.createElement("td");
    let tbDOB = document.createElement("td");
    let tbMath = document.createElement("td");
    let tbPhy = document.createElement("td");
    let tbChe = document.createElement("td");
    let tbAvg = document.createElement("td");
    let tbHocluc = document.createElement("td");

    tbMath.id = "maths" + index;
    tbPhy.id = "phys" + index;
    tbChe.id = "che" + index;
    tbAvg.id = "avg" + index;
    tbHocluc.id = "hocluc" + index;

    row.append(tbName);
    row.append(tbDOB);
    row.append(tbMath);
    row.append(tbPhy);
    row.append(tbChe);
    row.append(tbAvg);
    row.append(tbHocluc);
    tbName.innerHTML = name;
    tbDOB.innerHTML = dob;
    tbMath.innerHTML = math;
    tbPhy.innerHTML = phy;
    tbChe.innerHTML = che;
    index = index + 1;
  }

  // let x = document.getElementById("table").insertRow(index);
  // let name = document.getElementById("name").value;
  // let dob = document.getElementById("dob").value;
  // let math = document.getElementById("MathsScores").value;
  // let phy = document.getElementById("PhysicalScores").value;
  // let che = document.getElementById("ChemicalScores").value;
  // index = index + 1;
  // let tbName = x.insertCell(0);
  // let tbDOB = x.insertCell(1);
  // let tbMath = x.insertCell(2);
  // let tbPhy = x.insertCell(3);
  // let tbChe = x.insertCell(4);

  // tbName.innerHTML = name;
  // tbDOB.innerHTML = dob;
  // tbMath.innerHTML = math;
  // tbPhy.innerHTML = phy;
  // tbChe.innerHTML = che;
}

function avg() {
  for (let i = 1; i < index; i++) {
    let dmath = document.getElementById("maths" + i);
    let dphy = document.getElementById("phys" + i);
    let dche = document.getElementById("che" + i);
    let avg = document.getElementById("avg" + i);
    avg.innerHTML = (dmath.innerHTML - -dphy.innerHTML - -dche.innerHTML) / 3;
  }
}
function hocluc() {
  for (let i = 1; i < index; i++) {
    let avg = document.getElementById("avg" + i);
    let hocluc = document.getElementById("hocluc" + i);
    if (avg >= 8) {
      hocluc.innerHTML = "Giỏi";
    } else if (avg >= 6.5) {
      hocluc.innerHTML = "Khá";
    } else if (avg >= 5) {
      hocluc.innerHTML = "Trung bình";
    } else hocluc.innerHTML = "Kém";
  }
}
