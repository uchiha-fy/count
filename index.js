var count={
	// 两个数的最大公约数
	gcd:function(a,b){
		if(b===0)
			return a;
		return this.gcd(b,a%b);
	},
	// 两个数的最小公倍数
	scm:function(a,b){
		return (a*b)/this.gcd(a,b);
	},
	// 一组数的最大公约数
	gcds:function(aGcds){
		var res=0;
		if(Array.isArray(aGcds)){
			var len=aGcds.length;
			while(len--)
				res=res===0?aGcds[len]:this.gcd(res,aGcds[len]);
		}
		return res;
	},
	// 一组数的最小公倍数
	scms:function(aScm){
		var res=0;
		if(Array.isArray(aScm)){
			var len=aScm.length;
			while(len--)
				res=res===0?aScm[len]:this.scm(res,aScm[len]);
		}
		return res;
	}
};