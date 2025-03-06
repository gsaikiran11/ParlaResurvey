ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32644").setExtent([161112.137601, 1744285.311539, 171202.013343, 1748888.526739]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_POLYGON_1 = new ol.format.GeoJSON();
var features_POLYGON_1 = format_POLYGON_1.readFeatures(json_POLYGON_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32644'});
var jsonSource_POLYGON_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLYGON_1.addFeatures(features_POLYGON_1);
var lyr_POLYGON_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLYGON_1, 
                style: style_POLYGON_1,
                popuplayertitle: 'POLYGON',
                interactive: true,
    title: 'POLYGON<br />\
    <img src="styles/legend/POLYGON_1_0.png" /> No<br />\
    <img src="styles/legend/POLYGON_1_1.png" /> Yes<br />\
    <img src="styles/legend/POLYGON_1_2.png" /> <br />' });
var format_StatusofGT_2 = new ol.format.GeoJSON();
var features_StatusofGT_2 = format_StatusofGT_2.readFeatures(json_StatusofGT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32644'});
var jsonSource_StatusofGT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StatusofGT_2.addFeatures(features_StatusofGT_2);
var lyr_StatusofGT_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StatusofGT_2, 
                style: style_StatusofGT_2,
                popuplayertitle: 'Status of GT',
                interactive: true,
    title: 'Status of GT<br />\
    <img src="styles/legend/StatusofGT_2_0.png" /> Completed<br />\
    <img src="styles/legend/StatusofGT_2_1.png" /> <br />' });
var format_ParlaKML_3 = new ol.format.GeoJSON();
var features_ParlaKML_3 = format_ParlaKML_3.readFeatures(json_ParlaKML_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32644'});
var jsonSource_ParlaKML_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParlaKML_3.addFeatures(features_ParlaKML_3);
var lyr_ParlaKML_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParlaKML_3, 
                style: style_ParlaKML_3,
                popuplayertitle: 'Parla KML',
                interactive: true,
                title: '<img src="styles/legend/ParlaKML_3.png" /> Parla KML'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_POLYGON_1.setVisible(true);lyr_StatusofGT_2.setVisible(true);lyr_ParlaKML_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_POLYGON_1,lyr_StatusofGT_2,lyr_ParlaKML_3];
lyr_POLYGON_1.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'KATHA NO.': 'KATHA NO.', 'ONLINE STA': 'ONLINE STA', 'DOC EXTENT': 'DOC EXTENT', 'CHALTHA NO': 'CHALTHA NO', 'Remarks': 'Remarks', 'area': 'area', 'perimeter': 'perimeter', });
lyr_StatusofGT_2.set('fieldAliases', {'Parcel_num': 'Parcel_num', 'Remarks': 'Remarks', 'V_Name': 'V_Name', 'M_Name': 'M_Name', 'DMV_Code': 'DMV_Code', 'Khandam': 'Khandam', });
lyr_ParlaKML_3.set('fieldAliases', {'Parcel_num': 'Parcel_num', 'Remarks': 'Remarks', 'V_Name': 'V_Name', 'M_Name': 'M_Name', 'DMV_Code': 'DMV_Code', 'Khandam': 'Khandam', });
lyr_POLYGON_1.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'KATHA NO.': 'TextEdit', 'ONLINE STA': 'TextEdit', 'DOC EXTENT': 'TextEdit', 'CHALTHA NO': 'TextEdit', 'Remarks': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', });
lyr_StatusofGT_2.set('fieldImages', {'Parcel_num': 'TextEdit', 'Remarks': 'TextEdit', 'V_Name': 'TextEdit', 'M_Name': 'TextEdit', 'DMV_Code': 'TextEdit', 'Khandam': 'Range', });
lyr_ParlaKML_3.set('fieldImages', {'Parcel_num': 'TextEdit', 'Remarks': 'TextEdit', 'V_Name': 'TextEdit', 'M_Name': 'TextEdit', 'DMV_Code': 'TextEdit', 'Khandam': 'Range', });
lyr_POLYGON_1.set('fieldLabels', {'id': 'no label', 'NAME': 'inline label - always visible', 'KATHA NO.': 'inline label - always visible', 'ONLINE STA': 'inline label - always visible', 'DOC EXTENT': 'inline label - always visible', 'CHALTHA NO': 'no label', 'Remarks': 'inline label - always visible', 'area': 'inline label - always visible', 'perimeter': 'no label', });
lyr_StatusofGT_2.set('fieldLabels', {'Parcel_num': 'inline label - always visible', 'Remarks': 'inline label - always visible', 'V_Name': 'inline label - always visible', 'M_Name': 'inline label - always visible', 'DMV_Code': 'no label', 'Khandam': 'inline label - always visible', });
lyr_ParlaKML_3.set('fieldLabels', {'Parcel_num': 'inline label - always visible', 'Remarks': 'inline label - always visible', 'V_Name': 'inline label - always visible', 'M_Name': 'inline label - always visible', 'DMV_Code': 'no label', 'Khandam': 'inline label - always visible', });
lyr_ParlaKML_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});