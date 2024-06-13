document.addEventListener("DOMContentLoaded", function () {
  const healthForm = document.getElementById("healthForm");
  const healthList = document.getElementById("healthList");

  healthForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const inputWeight = parseFloat(document.getElementById("inputWeight").value);
    const inputHeight = parseFloat(document.getElementById("inputHeight").value);
    const inputBloodPressure = document.getElementById("inputBloodPressure").value;

    if (!isNaN(inputWeight) && !isNaN(inputHeight)) {
      const bmi = calculateBMI(inputWeight, inputHeight);
      const healthData = {
        weight: inputWeight,
        height: inputHeight,
        bmi: bmi,
        bloodPressure: inputBloodPressure,
      };

      displayHealthData(healthData);
      healthForm.reset();
    } else {
      alert("Mohon masukkan berat badan dan tinggi badan dengan benar!");
    }
  });

  function calculateBMI(weight, height) {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
  }

  function displayHealthData(data) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
          <strong>Berat Badan:</strong> ${data.weight} kg<br>
          <strong>Tinggi Badan:</strong> ${data.height} cm<br>
          <strong>BMI:</strong> ${data.bmi}<br>
          <strong>Tekanan Darah:</strong> ${data.bloodPressure}
      `;
    healthList.prepend(listItem);
  }
});
