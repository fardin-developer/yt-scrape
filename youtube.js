const request = require('request');
const cheerio = require('cheerio');


request('https://www.youtube.com/playlist?list=PLWQQhJoQ4TOsh-zypfcL36DIiCPbFMvGl', function (error, response, html) {

    if (error) {
        // Print the error if one occurred
        console.error('error:', error);
    }else {
        
        handlehtml(html);

    }

});

  function handlehtml(html){
    let selTool = cheerio.load(html);
    // console.log(html)
    let contArr = selTool(".style-scope.ytd-thumbnail span:nth-child(1)"); 
    console.log(contArr.text());
   



    let total = selTool(contArr[0]).text();


    console.log(total);
  



    
}



