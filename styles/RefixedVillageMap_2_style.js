var size = 0;
var placement = 'point';

var style_RefixedVillageMap_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#ffe609";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Parcel_n_1") !== null) {
        labelText = String(feature.get("Parcel_n_1"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,230,9,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}),fill: new ol.style.Fill({color: 'rgba(232,113,141,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
