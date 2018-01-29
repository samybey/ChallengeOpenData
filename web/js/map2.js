//------------------------------------------------------------------------------
//Compteurs pour les réponses numériques
function compteursNumeriques() {
  var compteurs = {
    total: 0,
    sousPoids: 0,
    poidsNormal: 0,
    surPoids: 0,
    obesite: 0
  }
  return compteurs
}

//------------------------------------------------------------------------------
//réponses possibles aux valeurs de type entrerep
function reponsesEntrerep() {
  var reponses = {
    0: {
      compteur: 0,
      reponse: "plusieures reponses"
    },
    1: {
      compteur: 0,
      reponse: "4 fois/jour ou + "
    },
    2: {
      compteur: 0,
      reponse: "2 à 3 fois/jour"
    },
    3: {
      compteur: 0,
      reponse: "1 fois/jour "
    },
    4: {
      compteur: 0,
      reponse: "<1 fois/jour, ms au moins 1 fois/semaine"
    },
    5: {
      compteur: 0,
      reponse: "<1 fois/semaine "
    },
    6: {
      compteur: 0,
      reponse: "jamais"
    },
    7: {
      compteur: 0,
      reponse: "ne sait pas"
    },
    9: {
      compteur: 0,
      reponse: "pas de réponses"
    }
  }
  return reponses
}

function compteursEntrerep() {
  var compteurs = {
    total: reponsesEntrerep(),
    sousPoids: reponsesEntrerep(),
    poidsNormal: reponsesEntrerep(),
    surPoids: reponsesEntrerep(),
    obesite: reponsesEntrerep(),
  }
  return compteurs
}

//------------------------------------------------------------------------------
//réponses possibles aux valeurs de type aime
function reponsesAime() {
  var reponses = {
    0 : {
      compteur: 0,
      reponse: "plusieures réponses"
    },
    1: {
      compteur: 0,
      reponse: "beaucoup"
    },
    2: {
      compteur: 0,
      reponse: "assez"
    },
    3: {
      compteur: 0,
      reponse: "un peu"
    },
    4: {
      compteur: 0,
      reponse: "pas du tout"
    },
    5: {
      compteur: 0,
      reponse: "ne sait pas"
    },
    9: {
      compteur: 0,
      reponse: "pas de réponses"
    }
  }
  return reponses
}

function compteursAime() {
  var compteurs = {
    total: reponsesAime(),
    sousPoids: reponsesAime(),
    poidsNormal: reponsesAime(),
    surPoids: reponsesAime(),
    obesite: reponsesAime(),
  }
  return compteurs
}

//------------------------------------------------------------------------------
//réponses possibles aux valeurs de type onsp
function reponsesOnsp() {
  var reponses = {
    0: {
      compteur: 0,
      reponse: "plusieures réponses"
    },
    1: {
      compteur: 0,
      reponse: "oui"
    },
    2: {
      compteur: 0,
      reponse: "non"
    },
    3: {
      compteur: 0,
      reponse: "ne sait pas"
    },
    4: {
      compteur: 0,
      reponse: "refus"
    },
    9: {
      compteur: 0,
      reponse: "pas de réponses"
    }
  }
  return reponses
}

function compteursOnsp() {
  var compteurs = {
    total: reponsesOnsp(),
    sousPoids: reponsesOnsp(),
    poidsNormal: reponsesOnsp(),
    surPoids: reponsesOnsp(),
    obesite: reponsesOnsp(),
  }
  return compteurs
}

//------------------------------------------------------------------------------
//réponses possibles aux valeurs de type fastfood
function reponsesFastFood() {
  var reponses = {
    0: {
      compteur: 0,
      reponse: "plusieures réponses"
    },
    1: {
      compteur: 0,
      reponse: "tous les jours ou presque"
    },
    2: {
      compteur: 0,
      reponse: "4 à 5 jours/semaine"
    },
    3: {
      compteur: 0,
      reponse: "2 à 3 jours/semaine"
    },
    4: {
      compteur: 0,
      reponse: "1 jour/semaine"
    },
    5: {
      compteur: 0,
      reponse: "1 à 3 jours/mois"
    },
    6: {
      compteur: 0,
      reponse: "<1 jour/mois "
    },
    7: {
      compteur: 0,
      reponse: "jamais "
    },
    8: {
      compteur: 0,
      reponse: "ne sait pas"
    },
    9: {
      compteur: 0,
      reponse: "pas de réponses"
    }
  }

  return reponses
}

function compteursFastFood() {
  var compteurs = {
    total: reponsesFastFood(),
    sousPoids: reponsesFastFood(),
    poidsNormal: reponsesFastFood(),
    surPoids: reponsesFastFood(),
    obesite: reponsesFastFood(),
  }
  return compteurs
}

//------------------------------------------------------------------------------
//créé l'objet région
function ajoutRegion(nom) {
  var values = {}
  values["region"] = nom
  values["nombreIndividus"] = compteursNumeriques()
  values["age"] = compteursNumeriques()
  values["bmi"] = compteursNumeriques()
  values["entrerep"] = compteursEntrerep()
  values["mfruit"] = compteursAime()
  values["bonalim"] = compteursOnsp()
  values["tele"] = compteursNumeriques()
  values["mvian"] = compteursAime()
  values["mpois"] = compteursAime()
  values["fastfood"] = compteursFastFood()
  values["aptotal_hebdo"] = compteursNumeriques()
  return values
}

function creerMap() {
  var outputMap = {}
  outputMap[1] = ajoutRegion("\u00cele-de-France")
  outputMap[2] = ajoutRegion("Champagne-Ardenne")
  outputMap[3] = ajoutRegion("Picardie")
  outputMap[4] = ajoutRegion("Haute-Normandie")
  outputMap[5] = ajoutRegion("Centre")
  outputMap[6] = ajoutRegion("Basse-Normandie")
  outputMap[7] = ajoutRegion("Bourgogne")
  outputMap[8] = ajoutRegion("Nord-Pas-de-Calais")
  outputMap[9] = ajoutRegion("Lorraine")
  outputMap[10] = ajoutRegion("Alsace")
  outputMap[11] = ajoutRegion("Franche-Comt\u00e9")
  outputMap[12] = ajoutRegion("Pays de la Loire")
  outputMap[13] = ajoutRegion("Bretagne")
  outputMap[14] = ajoutRegion("Poitou-Charentes")
  outputMap[15] = ajoutRegion("Aquitaine")
  outputMap[16] = ajoutRegion("Midi-Pyr\u00e9n\u00e9es")
  outputMap[17] = ajoutRegion("Limousin")
  outputMap[18] = ajoutRegion("Rh\u00f4ne-Alpes")
  outputMap[19] = ajoutRegion("Auvergne")
  outputMap[20] = ajoutRegion("Languedoc-Roussillon")
  outputMap[21] = ajoutRegion("Provence-Alpes-C\u00f4te d'Azur")
  return outputMap
}

$(document).ready(function(){
  var map = creerMap()

  remplirTab();

  var tabCouleur = ["#adccff","#77aaff","#478cff","#0562ff", "#001e82"];

  function ajoutData(data, categorie) {
    map[data.region]["nombreIndividus"].total += 1
    map[data.region]["nombreIndividus"][categorie] += 1

    map[data.region]["age"].total += data["v2_age"]
    map[data.region]["age"][categorie] += data["v2_age"]

    map[data.region]["bmi"].total += data.bmi
    map[data.region]["bmi"][categorie] += data.bmi

    map[data.region]["entrerep"].total[data["entrerep"]].compteur += 1
    map[data.region]["entrerep"][categorie][data["entrerep"]].compteur += 1

    map[data.region]["mfruit"].total[data["mfruit"]].compteur += 1
    map[data.region]["mfruit"][categorie][data["mfruit"]].compteur += 1

    map[data.region]["bonalim"].total[data["bonalim"]].compteur += 1
    map[data.region]["bonalim"][categorie][data["bonalim"]].compteur += 1

    map[data.region]["tele"].total += data["tele"]
    map[data.region]["tele"][categorie] += data["tele"]

    map[data.region]["mvian"].total[data["mvian"]].compteur += 1
    map[data.region]["mvian"][categorie][data["mvian"]].compteur += 1

    map[data.region]["mpois"].total[data["mpois"]].compteur += 1
    map[data.region]["mpois"][categorie][data["mpois"]].compteur += 1

    map[data.region]["fastfood"].total[data["fastfood"]].compteur += 1
    map[data.region]["fastfood"][categorie][data["fastfood"]].compteur += 1

    map[data.region]["aptotal_hebdo"].total += data["aptotal_hebdo"]
    map[data.region]["aptotal_hebdo"][categorie] += data["aptotal_hebdo"]
  }

  function remplirTab() {
  	d3.csv("src/Table_indiv.csv", function(data) {
  	    data.forEach(function(d) {

          d.bmi = +d.bmi
          d["v2_age"] = +d["v2_age"]
          d["entrerep"] = +d["entrerep"]
          d["mfruit"] = +d["mfruit"]
          d["bonalim"] = +d["bonalim"]
          d["tele"] = +d["tele"]
          d["mvian"] = +d["mvian"]
          d["mpois"] = +d["mpois"]
          d["fastfood"] = +d["fastfood"]
          d["aptotal_hebdo"] = +d["aptotal_hebdo"]

  	      if(!isNaN(d.bmi) && d.bmi.toString().indexOf('.') != -1){
  	        if (d.bmi < 18) {
              ajoutData(d, "sousPoids")
            } else if (d.bmi < 25) {
              ajoutData(d, "poidsNormal")
            } else if (d.bmi < 30) {
              ajoutData(d, "surPoids")
            } else {
              ajoutData(d, "obesite")
            }
          }
        })


        d3.json('data/regions.geojson', function(req, geojson) {
      	   regions.selectAll("path")
                  .data(geojson.features)
                  .enter()
                  .append("path")
                  .attr('class', 'region')
                  .attr("d", path)


                  .on("mouseover", function(d) {
                       div.transition()
                              .duration(200)
                              .style("opacity", 0.75);

                       div.html("Région : " + d.properties.nom + "<br>"+
                  			        "Pourcentage obésité: " + ((map[getNumeroRegion(d.properties.nom)]["nombreIndividus"].obesite / map[getNumeroRegion(d.properties.nom)]["nombreIndividus"].total)*100).toFixedDown(2))
                              .style("left", (d3.event.pageX + 30) + "px")
                              .style("top", (d3.event.pageY - 30) + "px")
                              .style("color", "white")
                       console.log("je suis sur une region");
                  })
                  .on("mouseout", function(d) {
                  		div.transition()
                              .duration(0)
                              .style("opacity", 0);
                  		div.html("")
                              .style("left", "0px")
                              .style("top", "0px");
                  })
                  /*.style("fill", function(d) {
                    if(getRegionNumber(d.properties.nom) != 0){
                      console.log(mapObese[getRegionNumber(d.properties.nom)]);
                      if (((map[getRegionNumber(d.properties.nom)]["nombreIndividus"].obesite / map[getRegionNumber(d.properties.nom)]["nombreIndividus"].total)*100).toFixedDown(2) < 8){
                        return tabCouleur[0];
                      }
                      if (((mapObese[getRegionNumber(d.properties.nom)]["nombreIndividus"].obesite / map[getRegionNumber(d.properties.nom)]["nombreIndividus"].total)*100).toFixedDown(2) >= 8 &&
                          ((mapObese[getRegionNumber(d.properties.nom)]["nombreIndividus"].obesite / map[getRegionNumber(d.properties.nom)]["nombreIndividus"].total)*100).toFixedDown(2) < 10){
                        return tabCouleur[1];
                      }
                      if (((mapObese[getRegionNumber(d.properties.nom)]["nombreIndividus"].obesite / map[getRegionNumber(d.properties.nom)]["nombreIndividus"].total)*100).toFixedDown(2) >= 10 &&
                          ((mapObese[getRegionNumber(d.properties.nom)]["nombreIndividus"].obesite / map[getRegionNumber(d.properties.nom)]["nombreIndividus"].total)*100).toFixedDown(2) < 13){
                        return tabCouleur[2];
                      }
                      if (((mapObese[getRegionNumber(d.properties.nom)]["nombreIndividus"].obesite / map[getRegionNumber(d.properties.nom)]["nombreIndividus"].total)*100).toFixedDown(2) >= 13 &&
                          ((mapObese[getRegionNumber(d.properties.nom)]["nombreIndividus"].obesite / map[getRegionNumber(d.properties.nom)]["nombreIndividus"].total)*100).toFixedDown(2) < 15){
                        return tabCouleur[3];
                      }
                      if (((mapObese[getRegionNumber(d.properties.nom)]["nombreIndividus"].obesite / map[getRegionNumber(d.properties.nom)]["nombreIndividus"].total)*100).toFixedDown(2) > 15){
                        return tabCouleur[4];
                      }
                    }
                  });*/
          });

  	})
    //ajout de la légende :

  }



  function getNumeroRegion(nomRegion){
    for (var i = 1; i < 22; i++) {
      if (map[i].region == nomRegion) {
	       return i;
      }
    }
  }


  var width = 750, height = 750;

  var path = d3.geoPath();

  var projection = d3.geoConicConformal()
	.center([2.454071, 46.279229])
	.scale(2600)
	.translate([width / 2, height / 2]);

  path.projection(projection);

  var svg = d3.select('#map').append("svg")
	.attr("id", "svg")
	.attr("width", width)
	.attr("height", height);

  var regions = svg.append("g");


  //<8        #5B0000
  // 8 < 10   #AF0000
  // 10 < 13  #D80000
  // 13 < 15     #FE345D
  // >15
  Number.prototype.toFixedDown = function(digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = this.toString().match(re);
    return m ? parseFloat(m[1]) : this.valueOf();
  };

  // d3.json('data/regions.geojson', function(req, geojson) {
	//    regions.selectAll("path")
  //           .data(geojson.features)
  //           .enter()
  //           .append("path")
  //           .attr('class', 'region')
  //           .attr("d", path)
  //           .style("fill", function(d) {
  //             if(getRegionNumber(d.properties.nom) != 0){
  //               console.log(mapObese[getRegionNumber(d.properties.nom)]);
  //               if (((mapObese[getRegionNumber(d.properties.nom)].percentage)*100).toFixedDown(2) < 8){
  //                 return '#5B0000';
  //               }
  //               if (((mapObese[getRegionNumber(d.properties.nom)].percentage)*100).toFixedDown(2) >= 8 &&
  //                   ((mapObese[getRegionNumber(d.properties.nom)].percentage)*100).toFixedDown(2) < 10){
  //                 return '#AF0000';
  //               }
  //               if (((mapObese[getRegionNumber(d.properties.nom)].percentage)*100).toFixedDown(2) >= 10 &&
  //                   ((mapObese[getRegionNumber(d.properties.nom)].percentage)*100).toFixedDown(2) < 13){
  //                 return '#D80000';
  //               }
  //               if (((mapObese[getRegionNumber(d.properties.nom)].percentage)*100).toFixedDown(2) >= 13 &&
  //                   ((mapObese[getRegionNumber(d.properties.nom)].percentage)*100).toFixedDown(2) < 15){
  //                 return '#FE345D';
  //               }
  //               if (((mapObese[getRegionNumber(d.properties.nom)].percentage)*100).toFixedDown(2) > 15){
  //                 return '#ff6bb0';
  //               }
  //             }
  //           })
  //
  //           .on("mouseover", function(d) {
  //                div.transition()
  //                       .duration(200)
  //                       .style("opacity", .9);
  //                div.html("Région : " + d.properties.nom + "<br>"+
  //           			        "Pourcentage obésité: " + ((mapObese[getRegionNumber(d.properties.nom)].percentage)*100).toFixedDown(2))
  //                       .style("left", (d3.event.pageX + 30) + "px")
  //                       .style("top", (d3.event.pageY - 30) + "px")
  //
  //           })
  //           .on("mouseout", function(d) {
  //           		div.transition()
  //                       .duration(0)
  //                       .style("opacity", 0);
  //           		div.html("")
  //                       .style("left", "0px")
  //                       .style("top", "0px");
  //           });
  //
  //   });

    var div = d3.select("body").append("div")
	   .attr("class", "tooltip")
	    .style("opacity", 0);

})
