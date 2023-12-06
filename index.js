/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image'
import fs from 'fs';

inquirer
  .prompt([
    {
        type: 'input',
        name: 'url',
        message: "Enter the link you want to convert into a QR code:",
      },
  ])
  .then((answers) => {
    var text = answers.url
    var qr_svg = qr.image(text);
qr_svg.pipe(fs.createWriteStream('qr_img.png'));
fs.writeFile('message.txt', text, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }); 



  });




