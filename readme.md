# jdf-jpg

> A mozjpeg wrapper for JDF


## Install

```
$ npm install --save jdf-jpg
```


## Usage

```js
const {execFile} = require('child_process');
const mozjpeg = require('jdf-jpg');

execFile(mozjpeg, ['-outfile', 'output.jpg', 'input.jpg'], err => {
	console.log('Image minified!');
});
```


## CLI

```
$ npm install --global jdf-jpg
```

```
$ jdf-jpg --help
```
 
