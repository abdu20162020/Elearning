$(document).ready(function() {

		$("#addbrandtosystem").click(function() {
			$("#adminwindow").empty();
			$("div#adminwindow").hide();
			var v="<div class=\"addbrand\">"
				+"<h2>Add Brand</h2>"
				+"<form id=\"addbrand\" name=\"addbrand\">"
				+"<p>Brand Name</p>"
				+"<input id=\"namebrand\" name=\"brandname\" type=\"text\" placeholder=\"Brand Name\"></input>"
				+"<div id=\"validname\" class=\"validadd\"></div>"
				+"<p>Brand Cateory</p>"
				+"<input id=\"categorybrand\" name=\"brandcategory\" type=\"text\" placeholder=\"Category\"></input>"
				+"<div id=\"validcategory\" class=\"validadd\"></div>"
				+"</form>"
				+"<button id=\"submitbrand\"  value=\"Add Brand\">Add Brand</input>"
				+"<button id=\"addbrandcancel\" value=\"Cancel\">Cancel</button>"
				+"</div>";
		$("#adminwindow").append(v);
		$("div#adminwindow").show(500);
		$("#addbrandcancel").click(function() {
			$("div#adminwindow").hide(5000);
			$("div#adminwindow").empty();
		});
		
});});