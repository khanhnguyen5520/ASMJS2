function insert_Row() {
  var name = document.getElementById("name").value;
  var dob = document.getElementById("dob").value;
  var math = document.getElementById("MathsScores").value;
  var phy = document.getElementById("PhysicalScores").value;
  var che = document.getElementById("ChemicalScores").value;

  var x = document.getElementById("table").insertRow();
  var tbName = x.insertCell(0);
  var tbDOB = x.insertCell(1);
  var tbMath = x.insertCell(2);
  var tbPhy = x.insertCell(3);
  var tbChe = x.insertCell(4);

  tbName.innerHTML = name;
  tbDOB.innerHTML = dob;
  tbMath.innerHTML = math;
  tbPhy.innerHTML = phy;
  tbChe.innerHTML = che;
}
