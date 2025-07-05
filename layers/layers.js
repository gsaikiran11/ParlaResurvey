ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32643").setExtent([809711.467682, 1747259.440584, 810215.038664, 1747665.367924]);
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
var format_Cleaned03072025_1 = new ol.format.GeoJSON();
var features_Cleaned03072025_1 = format_Cleaned03072025_1.readFeatures(json_Cleaned03072025_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_Cleaned03072025_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cleaned03072025_1.addFeatures(features_Cleaned03072025_1);
var lyr_Cleaned03072025_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cleaned03072025_1, 
                style: style_Cleaned03072025_1,
                popuplayertitle: 'Cleaned 03-07-2025',
                interactive: true,
                title: '<img src="styles/legend/Cleaned03072025_1.png" /> Cleaned 03-07-2025'
            });
var format_RefixedVillageMap_2 = new ol.format.GeoJSON();
var features_RefixedVillageMap_2 = format_RefixedVillageMap_2.readFeatures(json_RefixedVillageMap_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_RefixedVillageMap_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RefixedVillageMap_2.addFeatures(features_RefixedVillageMap_2);
var lyr_RefixedVillageMap_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RefixedVillageMap_2, 
                style: style_RefixedVillageMap_2,
                popuplayertitle: 'Refixed Village Map',
                interactive: true,
                title: '<img src="styles/legend/RefixedVillageMap_2.png" /> Refixed Village Map'
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
    title: 'Village Map with Sub Divisions Final<br />\
    <img src="styles/legend/VillageMapwithSubDivisionsFinal_3_0.png" /> <br />\
    <img src="styles/legend/VillageMapwithSubDivisionsFinal_3_1.png" /> <br />' });
var format_BlockBoundary_4 = new ol.format.GeoJSON();
var features_BlockBoundary_4 = format_BlockBoundary_4.readFeatures(json_BlockBoundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_BlockBoundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlockBoundary_4.addFeatures(features_BlockBoundary_4);
var lyr_BlockBoundary_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlockBoundary_4, 
                style: style_BlockBoundary_4,
                popuplayertitle: 'Block Boundary',
                interactive: true,
                title: '<img src="styles/legend/BlockBoundary_4.png" /> Block Boundary'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Cleaned03072025_1.setVisible(true);lyr_RefixedVillageMap_2.setVisible(true);lyr_VillageMapwithSubDivisionsFinal_3.setVisible(false);lyr_BlockBoundary_4.setVisible(false);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Cleaned03072025_1,lyr_RefixedVillageMap_2,lyr_VillageMapwithSubDivisionsFinal_3,lyr_BlockBoundary_4];
lyr_Cleaned03072025_1.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'KATHA_NO_': 'KATHA_NO_', 'ONLINE_STA': 'ONLINE_STA', 'DOC_EXTENT': 'DOC_EXTENT', 'Remarks': 'Remarks', 'LN__LC': 'LN__LC', 'lp_no': 'lp_no', 'area2': 'area2', });
lyr_RefixedVillageMap_2.set('fieldAliases', {'FID': 'FID', 'Khandam': 'Khandam', 'Parcel_n_1': 'Parcel_n_1', 'area': 'area', });
lyr_VillageMapwithSubDivisionsFinal_3.set('fieldAliases', {'Khandam': 'Khandam', 'Parcel': 'Parcel', 'area': 'area', 'LN,LC': 'LN,LC', 'LN, LC': 'LN, LC', });
lyr_BlockBoundary_4.set('fieldAliases', {'Khandam': 'Khandam', 'area': 'area', });
lyr_Cleaned03072025_1.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'KATHA_NO_': 'TextEdit', 'ONLINE_STA': 'TextEdit', 'DOC_EXTENT': 'TextEdit', 'Remarks': 'TextEdit', 'LN__LC': 'TextEdit', 'lp_no': 'TextEdit', 'area2': 'TextEdit', });
lyr_RefixedVillageMap_2.set('fieldImages', {'FID': 'Range', 'Khandam': 'Range', 'Parcel_n_1': 'TextEdit', 'area': 'TextEdit', });
lyr_VillageMapwithSubDivisionsFinal_3.set('fieldImages', {'Khandam': 'TextEdit', 'Parcel': 'TextEdit', 'area': 'TextEdit', 'LN,LC': 'TextEdit', 'LN, LC': 'TextEdit', });
lyr_BlockBoundary_4.set('fieldImages', {'Khandam': 'Range', 'area': 'TextEdit', });
lyr_Cleaned03072025_1.set('fieldLabels', {'id': 'no label', 'NAME': 'inline label - always visible', 'KATHA_NO_': 'inline label - always visible', 'ONLINE_STA': 'no label', 'DOC_EXTENT': 'no label', 'Remarks': 'no label', 'LN__LC': 'no label', 'lp_no': 'inline label - always visible', 'area2': 'inline label - always visible', });
lyr_RefixedVillageMap_2.set('fieldLabels', {'FID': 'no label', 'Khandam': 'no label', 'Parcel_n_1': 'inline label - always visible', 'area': 'inline label - always visible', });
lyr_VillageMapwithSubDivisionsFinal_3.set('fieldLabels', {'Khandam': 'hidden field', 'Parcel': 'inline label - always visible', 'area': 'inline label - always visible', 'LN,LC': 'no label', 'LN, LC': 'no label', });
lyr_BlockBoundary_4.set('fieldLabels', {'Khandam': 'inline label - always visible', 'area': 'inline label - always visible', });
lyr_BlockBoundary_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});