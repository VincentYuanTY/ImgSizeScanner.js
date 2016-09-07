# ImgSizeScanner.js
The javascript which used ES6 to get the image size.

We all know that it's not quite easy to get the image size before the image completely loaded by only using the js.
I have searched about this issue and found there's some ways we can get it.
And now I have a try to use the 'class' feature to do it.

Here's the example:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>TEST ES6</title>
        <meta charset="UTF-8">
        <link href="css/style.css" rel="stylesheet">
    </head>
    <body>
        <script src="ImgSizeScanner.js"></script>
        <script>
        var name = 'http://pic.qiantucdn.com/58pic/18/02/07/01p58PICxe9_1024.jpg';
        var a = new ImgSizeScanner(name);
        a.createImg();
        </script> 
    </body>
</html>
<head>



```
