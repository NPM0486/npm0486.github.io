function count()
		{
			var today = new Date();

			var day = today.getDate();
			var month = today.getMonth()+1;
			var year = today.getFullYear();

			var hours = today.getHours();
			if(hours<10) hours="0"+hours;
			var minutes = today.getMinutes();
			if(minutes<10) minutes="0"+minutes;
			var seconds = today.getSeconds();
			if(seconds<10) seconds="0"+seconds;

			document.getElementById("watch").innerHTML = 
					day+"/"+month+"/"+year+" | "+hours+":"+minutes+":"+seconds;

			setTimeout("count()",1000);
		}