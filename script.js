const radioButtons = document.querySelectorAll('input[name="Whatsapp1"]');
let numberInput = document.getElementById("phoneInput");
let messageInput = document.getElementById("messageInput");
let inputFile = document.getElementById("inputFile");
let sent = document.getElementById("sent");
let totalNumbers = document.getElementById("total");
let percentage = document.getElementById("percentage");
let messageAlert = document.querySelector(".message");
let method = "api";
let numbers;
let numIndex = 0;

function send() {
  numIndex++;
  if (inputFile.value) {
    CheckForCompletion();
    sent.innerHTML = numIndex;
    numberInput.value = numbers[numIndex];
    let cla = Math.floor((numIndex * 100) / numbers.length);
    percentage.innerHTML = cla + "%";
  }

  let a = document.createElement("a");
  let link = `https://${method}.whatsapp.com/send/?phone=${numberInput.value}&text=${messageInput.value}`;
  a.href = link;
  a.setAttribute("target", "_blank");
  a.click();
}

function CheckForCompletion() {
  if (numIndex >= numbers.length) {
    swal({
      title: "Task Completed",
      text: "Successfully message sent to all numbers",
      icon: "success",
    });
    messageAlert.classList.remove("show");
    numIndex = 0;
    numbers.length = 0;
    inputFile.value = null;
  }
}

radioButtons.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.checked) {
      method = radio.id;
        document.body.classList.toggle('web')
      
    }
  });
});

inputFile.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const content = e.target.result;
      const numberArray = extractNumbersFromCSV(content);
      numbers = numberArray;
      console.log(numberArray[1]);
      numberInput.value = numberArray[0];
      totalNumbers.innerHTML = numberArray.length;
      messageAlert.classList.add("show");
    };
    reader.readAsText(file);
  }
});

function extractNumbersFromCSV(content) {
  const lines = content.split(/\r?\n/); // Split into lines, handle both Windows and Unix line endings
  if (lines.length === 0) return [];

  const header = lines[0].split(/[,;\t]/).map((h) => h.trim().toLowerCase()); // Split header by common delimiters and trim whitespace
  const numberIndex = header.indexOf("number");

  if (numberIndex === -1) {
    swal({
      title: "Number not found",
      text: "Please ensure that your file has number row",
      icon: "error",
    });
    return [];
  }
  swal({
    title: "Uploaded",
    text: "We successfully detect number column",
    icon: "success",
  });
  const numbersSet = new Set(
    lines
      .slice(1)
      .map((line) => {
        const cells = line.split(/[,;\t]/).map((cell) => cell.trim());
        return parseFloat(cells[numberIndex]);
      })
      .filter((num) => !isNaN(num))
  );

  return Array.from(numbersSet);
}


let date = new Date()
date.toLocaleDateString()