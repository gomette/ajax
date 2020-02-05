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


    $.ajax({
        type: "POST",
        url: "../modele/selectville.php",
        //data: { region: region },

        success: function(retour) {
            var retu = JSON.parse(retour);
            for (var i = 0; i < retu.length; i++) {
                $('#ville').append("<option value=" + retu[i].iddep + ">" + retu[i].nomvilles + "</select>");
            }
        }
    })
});