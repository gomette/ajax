function dep() {

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

}

function villes(iddep) {

    $.ajax({
        type: "POST",
        url: "../modele/selectville.php",
        data: "id=" + iddep,
        //data: { region: region },

        success: function(retour) {
            // alert(retour);
            var ret = JSON.parse(retour);

            $('#ville').html("");

            $('#ville').append("<option value=''>" + "--choisir une ville--" + "</option>");

            for (var i = 0; i < ret.length; i++) {

                $('#ville').append("<option value=" + ret[i].iddep + ">" + ret[i].nomvilles + "</option>");
            }
        }
    })

}

$(document).ready(function() {
    dep();
    $('#dep').change(function() {
        var ville = $('#dep').val();
        villes(ville);
    })
});