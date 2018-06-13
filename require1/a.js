require.config({
	base:"/study or learn/web/es6/require",
	alias:{
		b:"b"
	}
})
require(["b"],function(){
//	user.getUserList().forEach(function(item){
//		var tr=document.createElement("tr");
//		tr.innerHTML=`
//			<td>${item.userName}</td>
//			<td>${item.userAge}</td>
//			<td>${item.userAdd}</td>
//		`
//	})

	b.say()
})
