<?php 
// index.php
// CTF-Zobe
// Author: Catfather
?>
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Security Challenge 1 | Catfather</title>
</head>
<body>
    <h1>CTF-Zone</h1>
	<h3>Key Concepts You Should Know:</h3>
	<code> 
	<ul  style="background:#e7e7e7;padding:20px;">
		<li>Execution Context</li>
		<li>Lexical Enviornment</li>
		<li>Scopes</li>
		<li>JavaScript Variables</li>
		<li>Hoisting</li>	
	</ul>
	</code>
    <script>
		"use strict";
		
		function C(i) {	
			var _isAuth = i;
			this.noob=()=>{
				setTimeout(()=>{
					console.log( 'noob detector!' );
					return 0;
				},500);

			}
			
            this.init=(i)=>{	
				{
					var that= this;
					console.log("i",i);
			
					top.onerror = (e)=>{
						error_handling(e,i);
						return;
					}
			
					if(_isAuth || i){
						console.log('return, LOL :)) ')
						return;
					}	
					_isAuth = !1;
					alert = noob;
					fetch = noob;
					let secret = "<?php echo isset($_GET['s']) && strlen($_GET['s'])<=20?$_GET['s']:"null" ?>"
					if(secret == "alert") this.exec(i,secret);
				}						
            };

			this.exec=(e,c)=>{
				eval(`'${e[c](c)}'`);
			}			
        };
			
		const xt = new C(1);
		xt.init(<?php echo isset($_GET['i']) && strlen($_GET['i'])<=5?$_GET['i']:null ?>);	
		xt.noob();
			
		function error_handling(e,i){
			setTimeout(()=>{
				const c= "<?php echo isset($_GET['c']) && strlen($_GET['c'])<=6?$_GET['c']:null ?>"
				const res = new i.C().exec(i,c);
			},1000);
		};		

    </script>
</body>
</html>