$(document).ready(function() {

    $.ajax({
        type: "POST",
        url: "../modele/selectdep.php",
        //data: { region: region },

        success: function(retour) {
            // alert(retour);
            var ret = JSON.parse(retour);

            $('#dep').append("<option value=''>" + "--choisir un departement--" + "</option>");
            for (var i = 0; i < ret.length; i++) {

                $('#dep').append("<option value=" + ret[i].iddep + ">" + ret[i].nomdep + "</option>");
            }
        }
    })


});