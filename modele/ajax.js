$(document).ready(function() {

    $.ajax({
        type: "POST",
        url: "../modele/selectdep.php",
        //data: { region: region },

        success: function(retour) {
            var ret = JSON.parse(retour);
            for (var i = 0; i < ret.length; i++) {
                $('#dep').append("<option value=" + ret[i].iddep + ">" + ret[i].nomdep + "</select>");
            }
        }
    })
});