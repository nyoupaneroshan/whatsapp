# 📤 WhatsApp Message Sender via CSV

A simple browser-based tool to send bulk WhatsApp messages using a CSV file. Built using **HTML, CSS, and JavaScript**, this project enables easy message sending through WhatsApp Web without any backend or external dependency.

---

## ✅ Features

- 📁 Send WhatsApp messages in **bulk** using a CSV file.
- 💬 Supports **personalized messages** for each recipient.
- 💻 Built with **HTML, CSS, and JavaScript** — no backend required.
- 🌐 Runs **entirely in the browser** — no installation needed.

---

## 📥 Installation / Setup

1. Clone or download this repository:
   ```bash
   git clone https://github.com/nyoupaneroshan/whatsapp.git
   cd whatsapp


2. Open the index.html file in your browser.
📁 CSV File Format
Prepare a CSV file with the following format:

csv
Copy
Edit
name,number,message
John Doe,+1234567890,Hello John!
Jane Smith,+0987654321,Hi Jane, how are you?
name (optional): Used for personalization.

number: Phone number in international format (e.g., +9779812345678). No spaces or special characters.

message (optional): Custom message for each contact.

⚠️ Note: Currently, the project only supports message sending based on phone numbers. There is no limit on how many contacts you can upload.

If the message column is empty, a default message will be used.

🚀 How to Use
Open index.html in your browser.

Click the "Upload CSV" button and select your contacts file.

Review the list of recipients.

Click "Send Messages".

WhatsApp Web will open in a new tab for each message.

🔐 Make sure you're already logged into WhatsApp Web at web.whatsapp.com.

