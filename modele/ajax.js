$(document).ready(function() {


    $.ajax({
        type: "POST",
        url: "../modele/selectdep.php",
        //data: { region: region },

        success: function(retour) {
            var ret = JSON.parse(retour);
            for (var i = 0; i < ret.length; i++) {
                $('#dep').append("<option value=" + ret[i].iddep + ">" + ret[i].nomdep + "</option>");

            }

        }

    });

    //$("#dep").change(function() {

    var dep = $('#dep').val();

    if (dep != 1 && dep != "--choisir un departement") {

        $.ajax({
            type: "POST",
            url: "../modele/selectville.php",
            //data: { region: region },
            // $('#ville').empty();
            success: function(retur) {
                var retu = JSON.parse(retur);
                for (var j = 0; j < retu.length; j++) {

                    $('#ville').append("<option value=" + retu[j].iddep + ">" + retu[j].nomvilles + "</option>");
                }
            }
        })
    }
    //})
});