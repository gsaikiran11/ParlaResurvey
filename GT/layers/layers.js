ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32644").setExtent([156544.795897, 1740397.322837, 181282.671658, 1751797.088704]);
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
var format_ParlaKMLcopy_1 = new ol.format.GeoJSON();
var features_ParlaKMLcopy_1 = format_ParlaKMLcopy_1.readFeatures(json_ParlaKMLcopy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32644'});
var jsonSource_ParlaKMLcopy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParlaKMLcopy_1.addFeatures(features_ParlaKMLcopy_1);
var lyr_ParlaKMLcopy_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParlaKMLcopy_1, 
                style: style_ParlaKMLcopy_1,
                popuplayertitle: 'Parla KML copy',
                interactive: true,
                title: '<img src="styles/legend/ParlaKMLcopy_1.png" /> Parla KML copy'
            });
var format_Polygon_2 = new ol.format.GeoJSON();
var features_Polygon_2 = format_Polygon_2.readFeatures(json_Polygon_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32644'});
var jsonSource_Polygon_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polygon_2.addFeatures(features_Polygon_2);
var lyr_Polygon_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Polygon_2, 
                style: style_Polygon_2,
                popuplayertitle: 'Polygon',
                interactive: true,
                title: '<img src="styles/legend/Polygon_2.png" /> Polygon'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_ParlaKMLcopy_1.setVisible(true);lyr_Polygon_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_ParlaKMLcopy_1,lyr_Polygon_2];
lyr_ParlaKMLcopy_1.set('fieldAliases', {'Parcel_num': 'Parcel_num', 'Remarks': 'Remarks', 'V_Name': 'V_Name', 'M_Name': 'M_Name', 'DMV_Code': 'DMV_Code', 'Khandam': 'Khandam', });
lyr_Polygon_2.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'KATHA NO.': 'KATHA NO.', 'ONLINE STA': 'ONLINE STA', 'DOC EXTENT': 'DOC EXTENT', 'CHALTHA NO': 'CHALTHA NO', 'Remarks': 'Remarks', 'area': 'area', 'perimeter': 'perimeter', });
lyr_ParlaKMLcopy_1.set('fieldImages', {'Parcel_num': 'TextEdit', 'Remarks': 'TextEdit', 'V_Name': 'TextEdit', 'M_Name': 'TextEdit', 'DMV_Code': 'TextEdit', 'Khandam': 'Range', });
lyr_Polygon_2.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'KATHA NO.': 'TextEdit', 'ONLINE STA': 'TextEdit', 'DOC EXTENT': 'TextEdit', 'CHALTHA NO': 'TextEdit', 'Remarks': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', });
lyr_ParlaKMLcopy_1.set('fieldLabels', {'Parcel_num': 'inline label - always visible', 'Remarks': 'inline label - always visible', 'V_Name': 'inline label - always visible', 'M_Name': 'inline label - always visible', 'DMV_Code': 'no label', 'Khandam': 'inline label - always visible', });
lyr_Polygon_2.set('fieldLabels', {'id': 'no label', 'NAME': 'inline label - always visible', 'KATHA NO.': 'inline label - always visible', 'ONLINE STA': 'inline label - always visible', 'DOC EXTENT': 'inline label - always visible', 'CHALTHA NO': 'no label', 'Remarks': 'inline label - always visible', 'area': 'inline label - always visible', 'perimeter': 'no label', });
lyr_Polygon_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});