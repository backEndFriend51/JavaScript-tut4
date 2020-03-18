function mul(a, b) {
			if(typeof a === "number" && typeof b === "number") {
				return a * b;
			} else {
				alert("Die Anzahl und/oder Typ der Parameter stimmt nicht !");	
			}
		} 
		
	alert(mul(3, "2"));