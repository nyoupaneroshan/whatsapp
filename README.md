# WhatsApp Message Sender via CSV

This project allows you to send WhatsApp messages to multiple recipients using a CSV file. It utilizes the WhatsApp Web interface to automate the message sending process using html css & js

## Features

- Send personalized WhatsApp messages to a list of contacts.
- Uses a CSV file to manage recipients and messages.
- Automates? the WhatsApp Web interface for message sending.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/vebpath/whatsappmsgsendercsv.git
    cd whatsappmsgsendercsv
    ```


## Usage

1. Prepare your CSV file:
    - The CSV file should have at least two columns: `name` and `number`.
    - Optionally, you can't add a `message` column if you want to send personalized messages.

    Example `contacts.csv`:
    ```csv
    name,number
    John Doe,+1234567890,
    Jane Smith,+0987654321
    ```

## Notes

- Ensure you have logged into WhatsApp Web on your default browser before running the script.
- The script may require manual intervention if WhatsApp Web prompts for verification.

## Troubleshooting

- If the script fails to run, ensure that Node.js is correctly installed and the required packages are installed.
- If the browser does not open WhatsApp Web, check if Puppeteer is correctly installed and is compatible with your version of Chrome or Chromium.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.



# whatsapp
