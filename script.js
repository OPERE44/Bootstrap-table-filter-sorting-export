
  $(document).ready(function() {
    $("#table").DataTable({
       columnDefs : [
     { type : 'date', targets : [3] }
 ],  
    });
 }); 

   
     var $table = $('#table');
    $(function () {
        $('#toolbar').find('select').change(function () {
            $table.bootstrapTable('refreshOptions', {
                exportDataType: $(this).val()
            });
        });
    })

		var trBoldBlue = $("table");

	$(trBoldBlue).on("click", "tr", function (){
			$(this).toggleClass("bold-blue");
	});