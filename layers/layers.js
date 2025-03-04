ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32644").setExtent([162608.890179, 1743744.077213, 170301.725505, 1747253.711763]);
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
    title: 'Parla KML copy<br />\
    <img src="styles/legend/ParlaKMLcopy_1_0.png" /> Completed<br />\
    <img src="styles/legend/ParlaKMLcopy_1_1.png" /> <br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_ParlaKMLcopy_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_ParlaKMLcopy_1];
lyr_ParlaKMLcopy_1.set('fieldAliases', {'Parcel_num': 'Parcel_num', 'Remarks': 'Remarks', 'V_Name': 'V_Name', 'M_Name': 'M_Name', 'DMV_Code': 'DMV_Code', 'Khandam': 'Khandam', });
lyr_ParlaKMLcopy_1.set('fieldImages', {'Parcel_num': 'TextEdit', 'Remarks': 'TextEdit', 'V_Name': 'TextEdit', 'M_Name': 'TextEdit', 'DMV_Code': 'TextEdit', 'Khandam': 'Range', });
lyr_ParlaKMLcopy_1.set('fieldLabels', {'Parcel_num': 'inline label - always visible', 'Remarks': 'inline label - always visible', 'V_Name': 'inline label - always visible', 'M_Name': 'inline label - always visible', 'DMV_Code': 'no label', 'Khandam': 'inline label - always visible', });
lyr_ParlaKMLcopy_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});