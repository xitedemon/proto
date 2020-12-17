var website = "https://example.com";
var strinP = '$_SERVER[\'HTTP_HOST\'].\'/home/\''; 
var regEx = /define\('root',(.+?(?=\)))\)/gmi;
var regEx2 = /define\('path',(.+?(?=\)))\)/gmi;
var pathVal = "NINZA";
function customReplacer(string, captured, replacement, mode=0) {
	if(mode === 0){
		return string.replace(captured, '"'+replacement+'"');
	}else{
		return string.replace(captured, replacement);
	}
}
module.exports = {
	demo: {
		options: {
			prefix: '@@',
			usePrefix: true,
			delimiter: '.',
			preserveOrder: false,
			mode: false,
			timestamp: false,
			patterns: [
				{
					match: /\/(.*)\//ig,
					replacement: "Unknown Value"
				},
				{
					match: regEx,
					replacement: function(match, p1){
						return customReplacer(match, p1, website);
					}
				},
				{
					match: regEx2,
					replacement: function(match, p1){
						return customReplacer(match, p1, pathVal, 1);
					}
				},
				{
					match: 'include',
					replacement: '<%= grunt.file.read("temp/replace/index.js") %>'
				},
				{
					match: 'foo',
					replacement: 'bar'
				},
				{
					match: 'footer',
					replacement: 'bars'
				},
				{
					match: 'tom',
					replacement: 'jerry'
				},
				{
					match: /boxy/g,
					replacement: function () {
						return 'Hello';
					}
				},
				{
					match: /oto/g,
					replacement: [1, 2, 3]
				},
				{
					json: {
						"key":"value",
						"funky": function(){
							return 'Hello World!';
						},
						"numb":50,
						"inner": {
							"name":"johny",
							"namefun":function(){
								return "functionName"
							},
							"delta":{
								"inbox":100
							}
						}
					}
				}
			]
		},
		files: [
			{
				expand: true,
				flatten: true,
				src: ['temp/replace/index.html'],
				dest: 'temp/replace/build'
			}
		]
	}
};