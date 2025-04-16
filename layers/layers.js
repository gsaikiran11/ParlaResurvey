ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32643").setExtent([808771.968171, 1745546.476000, 809423.561259, 1745867.645525]);
var wms_layers = [];


        var lyr_GoogleSatillite_0 = new ol.layer.Tile({
            'title': 'Google Satillite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Polygon_1 = new ol.format.GeoJSON();
var features_Polygon_1 = format_Polygon_1.readFeatures(json_Polygon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_Polygon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polygon_1.addFeatures(features_Polygon_1);
var lyr_Polygon_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Polygon_1, 
                style: style_Polygon_1,
                popuplayertitle: 'Polygon',
                interactive: true,
                title: '<img src="styles/legend/Polygon_1.png" /> Polygon'
            });
var format_RefixedSurveyNumbers_2 = new ol.format.GeoJSON();
var features_RefixedSurveyNumbers_2 = format_RefixedSurveyNumbers_2.readFeatures(json_RefixedSurveyNumbers_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_RefixedSurveyNumbers_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RefixedSurveyNumbers_2.addFeatures(features_RefixedSurveyNumbers_2);
var lyr_RefixedSurveyNumbers_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RefixedSurveyNumbers_2, 
                style: style_RefixedSurveyNumbers_2,
                popuplayertitle: 'Refixed Survey Numbers',
                interactive: true,
                title: '<img src="styles/legend/RefixedSurveyNumbers_2.png" /> Refixed Survey Numbers'
            });
var format_VillageMapwithSubDivisionsFinal_3 = new ol.format.GeoJSON();
var features_VillageMapwithSubDivisionsFinal_3 = format_VillageMapwithSubDivisionsFinal_3.readFeatures(json_VillageMapwithSubDivisionsFinal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_VillageMapwithSubDivisionsFinal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillageMapwithSubDivisionsFinal_3.addFeatures(features_VillageMapwithSubDivisionsFinal_3);
var lyr_VillageMapwithSubDivisionsFinal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillageMapwithSubDivisionsFinal_3, 
                style: style_VillageMapwithSubDivisionsFinal_3,
                popuplayertitle: 'Village Map with Sub Divisions Final',
                interactive: true,
                title: '<img src="styles/legend/VillageMapwithSubDivisionsFinal_3.png" /> Village Map with Sub Divisions Final'
            });

lyr_GoogleSatillite_0.setVisible(true);lyr_Polygon_1.setVisible(true);lyr_RefixedSurveyNumbers_2.setVisible(true);lyr_VillageMapwithSubDivisionsFinal_3.setVisible(true);
var layersList = [lyr_GoogleSatillite_0,lyr_Polygon_1,lyr_RefixedSurveyNumbers_2,lyr_VillageMapwithSubDivisionsFinal_3];
lyr_Polygon_1.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'KATHA NO.': 'KATHA NO.', 'ONLINE STA': 'ONLINE STA', 'DOC EXTENT': 'DOC EXTENT', 'CHALTHA NO': 'CHALTHA NO', 'Remarks': 'Remarks', 'area': 'area', 'perimeter': 'perimeter', });
lyr_RefixedSurveyNumbers_2.set('fieldAliases', {'FID': 'FID', 'Khandam': 'Khandam', 'Parcel_n_1': 'Parcel_n_1', 'area': 'area', });
lyr_VillageMapwithSubDivisionsFinal_3.set('fieldAliases', {'Khandam': 'Khandam', 'Parcel': 'Parcel', 'area': 'area', });
lyr_Polygon_1.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'KATHA NO.': 'TextEdit', 'ONLINE STA': 'TextEdit', 'DOC EXTENT': 'TextEdit', 'CHALTHA NO': 'TextEdit', 'Remarks': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', });
lyr_RefixedSurveyNumbers_2.set('fieldImages', {'FID': 'Range', 'Khandam': 'Range', 'Parcel_n_1': 'TextEdit', 'area': 'TextEdit', });
lyr_VillageMapwithSubDivisionsFinal_3.set('fieldImages', {'Khandam': 'TextEdit', 'Parcel': 'TextEdit', 'area': 'TextEdit', });
lyr_Polygon_1.set('fieldLabels', {'id': 'inline label - always visible', 'NAME': 'inline label - always visible', 'KATHA NO.': 'inline label - always visible', 'ONLINE STA': 'inline label - always visible', 'DOC EXTENT': 'inline label - always visible', 'CHALTHA NO': 'no label', 'Remarks': 'inline label - always visible', 'area': 'inline label - always visible', 'perimeter': 'no label', });
lyr_RefixedSurveyNumbers_2.set('fieldLabels', {'FID': 'no label', 'Khandam': 'hidden field', 'Parcel_n_1': 'inline label - always visible', 'area': 'inline label - always visible', });
lyr_VillageMapwithSubDivisionsFinal_3.set('fieldLabels', {'Khandam': 'hidden field', 'Parcel': 'inline label - always visible', 'area': 'inline label - always visible', });
lyr_VillageMapwithSubDivisionsFinal_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});