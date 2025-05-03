ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32643").setExtent([806503.684247, 1743895.062156, 813492.968808, 1749364.130977]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_POLY_1 = new ol.format.GeoJSON();
var features_POLY_1 = format_POLY_1.readFeatures(json_POLY_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_POLY_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLY_1.addFeatures(features_POLY_1);
var lyr_POLY_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLY_1, 
                style: style_POLY_1,
                popuplayertitle: 'POLY',
                interactive: true,
    title: 'POLY<br />\
    <img src="styles/legend/POLY_1_0.png" /> <br />\
    <img src="styles/legend/POLY_1_1.png" /> <br />' });
var format_VillageMapwithSubDivisionsFinal_2 = new ol.format.GeoJSON();
var features_VillageMapwithSubDivisionsFinal_2 = format_VillageMapwithSubDivisionsFinal_2.readFeatures(json_VillageMapwithSubDivisionsFinal_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_VillageMapwithSubDivisionsFinal_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillageMapwithSubDivisionsFinal_2.addFeatures(features_VillageMapwithSubDivisionsFinal_2);
var lyr_VillageMapwithSubDivisionsFinal_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillageMapwithSubDivisionsFinal_2, 
                style: style_VillageMapwithSubDivisionsFinal_2,
                popuplayertitle: 'Village Map with Sub Divisions Final',
                interactive: true,
    title: 'Village Map with Sub Divisions Final<br />\
    <img src="styles/legend/VillageMapwithSubDivisionsFinal_2_0.png" /> <br />\
    <img src="styles/legend/VillageMapwithSubDivisionsFinal_2_1.png" /> <br />' });
var format_RefixedSurveyNumbers_3 = new ol.format.GeoJSON();
var features_RefixedSurveyNumbers_3 = format_RefixedSurveyNumbers_3.readFeatures(json_RefixedSurveyNumbers_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_RefixedSurveyNumbers_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RefixedSurveyNumbers_3.addFeatures(features_RefixedSurveyNumbers_3);
var lyr_RefixedSurveyNumbers_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RefixedSurveyNumbers_3, 
                style: style_RefixedSurveyNumbers_3,
                popuplayertitle: 'Refixed Survey Numbers',
                interactive: true,
                title: '<img src="styles/legend/RefixedSurveyNumbers_3.png" /> Refixed Survey Numbers'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_POLY_1.setVisible(true);lyr_VillageMapwithSubDivisionsFinal_2.setVisible(false);lyr_RefixedSurveyNumbers_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_POLY_1,lyr_VillageMapwithSubDivisionsFinal_2,lyr_RefixedSurveyNumbers_3];
lyr_POLY_1.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'KATHA_NO_': 'KATHA_NO_', 'ONLINE_STA': 'ONLINE_STA', 'DOC_EXTENT': 'DOC_EXTENT', 'Remarks': 'Remarks', 'LN__LC': 'LN__LC', 'area': 'area', 'lp_no': 'lp_no', });
lyr_VillageMapwithSubDivisionsFinal_2.set('fieldAliases', {'Khandam': 'Khandam', 'Parcel': 'Parcel', 'area': 'area', 'LN,LC': 'LN,LC', 'LN, LC': 'LN, LC', });
lyr_RefixedSurveyNumbers_3.set('fieldAliases', {'FID': 'FID', 'Khandam': 'Khandam', 'Parcel_n_1': 'Parcel_n_1', 'area': 'area', });
lyr_POLY_1.set('fieldImages', {'id': 'Range', 'NAME': 'TextEdit', 'KATHA_NO_': 'TextEdit', 'ONLINE_STA': 'TextEdit', 'DOC_EXTENT': 'TextEdit', 'Remarks': 'TextEdit', 'LN__LC': 'TextEdit', 'area': 'TextEdit', 'lp_no': 'Range', });
lyr_VillageMapwithSubDivisionsFinal_2.set('fieldImages', {'Khandam': 'TextEdit', 'Parcel': 'TextEdit', 'area': 'TextEdit', 'LN,LC': 'TextEdit', 'LN, LC': 'TextEdit', });
lyr_RefixedSurveyNumbers_3.set('fieldImages', {'FID': 'Range', 'Khandam': 'Range', 'Parcel_n_1': 'TextEdit', 'area': 'TextEdit', });
lyr_POLY_1.set('fieldLabels', {'id': 'no label', 'NAME': 'inline label - always visible', 'KATHA_NO_': 'inline label - always visible', 'ONLINE_STA': 'no label', 'DOC_EXTENT': 'no label', 'Remarks': 'inline label - always visible', 'LN__LC': 'inline label - always visible', 'area': 'inline label - always visible', 'lp_no': 'inline label - always visible', });
lyr_VillageMapwithSubDivisionsFinal_2.set('fieldLabels', {'Khandam': 'hidden field', 'Parcel': 'inline label - always visible', 'area': 'inline label - always visible', 'LN,LC': 'no label', 'LN, LC': 'no label', });
lyr_RefixedSurveyNumbers_3.set('fieldLabels', {'FID': 'no label', 'Khandam': 'inline label - always visible', 'Parcel_n_1': 'inline label - always visible', 'area': 'inline label - always visible', });
lyr_RefixedSurveyNumbers_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});