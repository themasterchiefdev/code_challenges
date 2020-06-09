    // problem : https://dev.to/thepracticaldev/daily-challenge-255-is-there-an-odd-bit-409d
    
    function decToBinary(d){
      var b=d.toString(2);
        var arr=[];
   		 for (var i = 0; i < b.length; i++) {
         arr.push(b[i].indexOf(1));
		}
        let oddElementPositions = (arr.filter((num, i)=>i % 2 == 1));
        if(oddElementPositions.length>0){
            return 1;
        }
      return 0;
    }
    decToBinary(256);
