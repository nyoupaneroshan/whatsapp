✅ Features
Send WhatsApp messages in bulk using a CSV file.

Personalized messages for each recipient (optional).

Simple interface built with HTML, CSS, and JavaScript.

Runs entirely in the browser — no external dependencies or backend required.

📥 Installation / Setup
Clone or download this repository:

bash
Copy
Edit
git clone https://github.com/nyoupaneroshan/whatsapp.git
cd whatsapp
Open the index.html file in your browser.

📁 CSV File Format
Prepare a CSV file with the following columns:

c
Copy
Edit
name,number,message
John Doe,+1234567890,Hello John!
Jane Smith,+0987654321,Hi Jane, how are you?
name: (Optional) Used for personalization.

number: Phone number in international format (without spaces or special characters).

message: (Optional) Custom message for each recipient.

*please note currently the this project supports only number with over no limitation to the number be uploaded

If the message column is empty, a default message will be used.

🚀 How to Use
Open the tool in your browser.

Click the "Upload CSV" button and select your contacts file.

Review the list of recipients.

Click "Send Messages".

WhatsApp Web will open in a new tab for each message.

⚠️ Make sure you're already logged into WhatsApp Web before using this tool.

📝 Notes
This tool simulates clicks and URL redirections via WhatsApp Web; it does not use any WhatsApp API.

Browser pop-up blocking must be disabled for this to work properly.

🛠️ Troubleshooting
Make sure phone numbers are in the correct international format.

If messages are not sent, check your browser's pop-up settings or developer console for errors.

🤝 Contributing
Contributions are welcome!
Please fork the repository and submit a pull request for new features, bug fixes, or improvements.