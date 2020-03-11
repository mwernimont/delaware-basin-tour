export default {
    "chapters": [
        {
            "id": "next-gen-intro",
            "class": "active",
            "flyToCommands": {

            },
            "title": "Next Generation Observing Systems",
            "content": "Emergency managers and water resource managers rely on the USGS stream gage network and the associated water delivery to provide data to address complex challenges involving water. This network is functioning but was designed many years ago and needs major upgrades to meet increasingly complex water challenges facing the Nation.",
            "tourType": "none",
            "layersToHide": ["monitoring-location-clusters", "monitoring-location-cluster-count",  "monitoring-location-unclustered-point", "physiographic_provinces"],
            "hiddenLayersToShow": ["new_gage_delaware_basin", "enhanced_gage_delaware_basin", "camera_delaware_basin", "specific_conductance_delaware_basin", "temperature_delaware_basin"],
            "D3Rings": false
        },
        {
            "id": "D3Transition",
            "class": "",
            "flyToCommands": {
                "duration": 0,
                "bearing": 0,
                "center": [-74.9214, 40.4467],
                "zoom": 6.5,
                "pitch": 20,
                "speed": 1,
                "essential": true
            },
            "title": "Sample Functionality Test",
            "content": "Can we get the map to transition to a graph and back again?",
            "tourType": "none",
            "swipe": true,
            "layersToHide": ["monitoring-location-clusters", "monitoring-location-cluster-count", "monitoring-location-unclustered-point", "cameras", "enhanced_gage", "temperature", "new_gage", "specific_conductance", "physiographic_provinces"],
            "hiddenLayersToShow": ["drb_boundary"],
            "D3Rings": false
        },
        {
            "id": "basin-intro",
            "class": "",
            "flyToCommands": {
                "duration": 9000,
                "bearing": 35,
                "center": [-75.600766, 40.4467],
                "zoom": 7,
                "pitch": 0,
                "speed": 0.2,
                "curve": 1,
                "essential": true
            },
            "title": "Pilot Project in the Delaware Basin",
            "content": "The Delaware Basin area is a pilot to test out the Next Generation Water Observing System (NGWOS) that will support innovative modern water prediction and decision support systems in a nationally important, complex interstate river system. Lying in the densely populated corridor of the northeastern US, the 13,600 square mile Delaware River Basin stretches approximately 330 miles from headwaters in New York State to its confluence with the Atlantic Ocean. The basin includes approximately 12,800 square miles of land area, nearly 800 square miles of Bay and over 2,000 tributaries, including manythat are rivers in their own right. The northernmost tributaries to the Delaware River originate in the forested western slopes of the Catskill Mountains, which reach elevations of up to 4,000 feet. The East and West Branches meet at Hancock, NY where the Delaware River officially begins. The River descends about 800 feet on its journey to the Atlantic Ocean.",
            "tourType": "none",
            "layersToHide": ["all_locations", "monitoring-location-clusters", "monitoring-location-cluster-count",  "monitoring-location-unclustered-point", "physiographic_provinces"],
            "hiddenLayersToShow": ["new_gage_delaware_basin", "enhanced_gage_delaware_basin", "camera_delaware_basin", "specific_conductance_delaware_basin", "temperature_delaware_basin"],
            "D3Rings": false
        },
        {
            "id": "monitoring-location-intro",
            "class": "",
            "flyToCommands": {
                "duration": 9000,
                "bearing": 35,
                "center": [-75.600766, 40.4467],
                "zoom": 10,
                "pitch": 0,
                "speed": 0.2,
                "curve": 1,
                "essential": true,
            },
            "title": "More than 10,000 Monitoring Locations",
            "content": "The USGS collects water related data from more than 10,000 gages in the basin.",
            "tourType": "none",
            "layersToHide": ["all_locations","physiographic_provinces"],
            "hiddenLayersToShow": ["new_gage_delaware_basin", "enhanced_gage_delaware_basin", "camera_delaware_basin", "specific_conductance_delaware_basin", "temperature_delaware_basin"],
            "D3Rings": false
        },
        {
            "id": "new-monitoring-systems",
            "class": "",
            "flyToCommands": {
                "duration": 9000,
                "bearing": 0,
                "center": [-74.9214, 40.4467],
                "zoom": 7,
                "pitch": 0,
                "speed": 0.5,
                "essential": true
            },
            "title": "New Monitoring Systems",
            "content": "In 2018, seventeen new monitoring systems were added to the Delaware River Basin region to address monitoring gaps to improve the quantification of the amount of water in the headwater and tributary streams and to track the salt front in the mainstem",
            "tourType": "none",
            "layersToHide": ["all_locations", "monitoring-location-clusters", "monitoring-location-cluster-count",  "monitoring-location-unclustered-point", "cameras", "specific_conductance", "enhanced_gage", "temperature", "physiographic_provinces"],
            "hiddenLayersToShow": ["new_gage_delaware_basin", "enhanced_gage_delaware_basin", "camera_delaware_basin", "specific_conductance_delaware_basin", "temperature_delaware_basin"],
            "D3Rings": false
        },
        {
            "id": "enhanced-monitoring-systems",
            "class": "",
            "flyToCommands": {
                "duration": 9000,
                "bearing": 0,
                "center": [-74.9214, 40.4467],
                "zoom": 7,
                "pitch": 20,
                "speed": 0.5,
                "essential": true
            },
            "title": "Enhanced Monitoring Systems",
            "content": "At twenty-eight existing monitoring locations, enhancements were made to improve two-way communication enabling remote operation and troubleshooting of equipment as well as allow for redundant communication capability to ensure data are delivered during critical periods.",
            "tourType": "none",
            "layersToHide": ["all_locations", "monitoring-location-clusters", "monitoring-location-cluster-count",  "monitoring-location-unclustered-point", "cameras", "specific_conductance", "temperature", "new_gage", "physiographic_provinces"],
            "hiddenLayersToShow": ["enhanced_gage_delaware_basin"],
            "D3Rings": false
        },
        {
            "id": "camera",
            "class": "",
            "flyToCommands": {
                "duration": 9000,
                "bearing": 0,
                "center": [-74.9214, 40.4467],
                "zoom": 7,
                "pitch": 20,
                "speed": 0.5,
                "essential": true
            },
            "title": "Monitoring Location Cameras",
            "content": "Cameras can be used as non-contact sensors monitoring stream flow, water level, ice cover, suspended-sediment concentration, turbidity, harmful algal blooms, channel erosion, and other conditions at monitoring locations.",
            "tourType": "camera",
            "layersToHide": ["all_locations", "monitoring-location-clusters", "monitoring-location-cluster-count",  "monitoring-location-unclustered-point", "specific_conductance", "enhanced_gage", "temperature", "new_gage", "physiographic_provinces"],
            "hiddenLayersToShow": ["camera_delaware_basin"],
            "D3Rings": false
        },
        {
            "id": "temperature",
            "class": "",
            "flyToCommands": {
                "duration": 9000,
                "bearing": 0,
                "center": [-74.9214, 40.4467],
                "zoom": 7,
                "pitch": 20,
                "speed": 0.5,
                "essential": true
            },
            "title": "Real-time Temperature",
            "content": "Water temperature influences water chemistry, aquatic metabolism and the health of fisheries. Specific conductance data can be used to improve models and predictions and understanding of surface water and groundwater connections. Real-time temperature will be added to about thirty-six sites and specific conductance at about ten sites. ",
            "tourType": "none",
            "layersToHide": ["all_locations", "monitoring-location-clusters", "monitoring-location-cluster-count",  "monitoring-location-unclustered-point", "cameras", "specific_conductance", "enhanced_gage", "new_gage", "physiographic_provinces"],
            "hiddenLayersToShow": ["temperature_delaware_basin"],
            "D3Rings": false
        },
        {
            "id": "specific_conductance",
            "class": "",
            "flyToCommands": {
                "duration": 9000,
                "bearing": 0,
                "center": [-74.9214, 40.4467],
                "zoom": 7,
                "pitch": 20,
                "speed": 0.5,
                "essential": true
            },
            "title": "Specific Conductance Monitoring ",
            "content": "Water temperature influences water chemistry, aquatic metabolism and the health of fisheries. Specific conductance data can be used to improve models and predictions and understanding of surface water and groundwater connections. Real-time temperature will be added to about thirty-six sites and specific conductance at about ten sites. ",
            "tourType": "none",
            "layersToHide": ["all_locations", "monitoring-location-clusters", "monitoring-location-cluster-count",  "monitoring-location-unclustered-point", "cameras", "enhanced_gage", "temperature", "new_gage", "physiographic_provinces"],
            "hiddenLayersToShow": ["specific_conductance_delaware_basin"],
            "D3Rings": false
        },
        {
            "id": "physiographic_provinces",
            "class": "",
            "flyToCommands": {
                "duration": 9000,
                "bearing": 0,
                "center": [-74.9214, 40.4467],
                "zoom": 6.5,
                "pitch": 20,
                "speed": 0.5,
                "essential": true
            },
            "title": "Physiographic Provinces",
            "content": "The Delaware River Basin is divided up into five physiographic provinces representing distinctive areas having common topography, rock types and structure, and geologic and geomorphic history",
            "tourType": "none",
            "layersToHide": ["monitoring-location-clusters", "monitoring-location-cluster-count",  "monitoring-location-unclustered-point", "cameras", "enhanced_gage", "temperature", "new_gage", "specific_conductance","drb_boundary"],
            "hiddenLayersToShow": ["physiographic_provinces",
                "new_gage_physiographic_region_1", "enhanced_gage_physiographic_region_1", "camera_physiographic_region_1", "specific_conductance_physiographic_region_1", "temperature_physiographic_region_1",
                "new_gage_physiographic_region_2", "enhanced_gage_physiographic_region_2", "camera_physiographic_region_2", "specific_conductance_physiographic_region_2", "temperature_physiographic_region_2",
                "new_gage_physiographic_region_3", "enhanced_gage_physiographic_region_3", "camera_physiographic_region_3", "specific_conductance_physiographic_region_3", "temperature_physiographic_region_3"
            ],
            "D3Rings": false
        },
        {
            "id": "summary",
            "class": "",
            "flyToCommands": {
                "duration": 9500,
                "bearing": 0,
                "center": [-74.3867, 40.6134],
                "zoom": 5,
                "pitch": 20,
                "speed": 0.2,
                "essential": true
            },
            "title": "Basin Summary",
            "content": "The Basin has experienced periods when flows persist above or below the long-term average, such as the dry period of the 1960s and the wet periods of the 1970s and mid-2000s. Freshwater inflows impact salinity in the estuary, which affects the availability of estuary water for drinking water and industrial uses. The bjective at Trenton appears to be keeping the salt front below river mile (RM) 98, the salinity\n" +
                    "management goal. However, sea level rise may require new management measures, operations plans and/or additional water to maintain control of salinity.",
            "tourType": "all_locations",
            "layersToHide": ["monitoring-location-clusters", "monitoring-location-cluster-count", "cameras", "enhanced_gage", "temperature", "new_gage", "specific_conductance","drb_boundary","physiographic_provinces"],
            "hiddenLayersToShow": ["drb_boundary", "new_gage_delaware_basin", "enhanced_gage_delaware_basin", "camera_delaware_basin", "specific_conductance_delaware_basin", "temperature_delaware_basin"],
            "D3Rings": true
        },
        {
            "id": "test-bed",
            "class": "",
            "flyToCommands": {
                "duration": 9000,
                "bearing": 0,
                "center": [-74.9214, 40.4467],
                "zoom": 6.5,
                "pitch": 20,
                "speed": 0.5,
                "essential": true
            },
            "title": "Sample Test Bed (not real locations)",
            "content": "This is a place holder to serve as an example of functionality",
            "tourType": "none",
            "layersToHide": ["monitoring-location-clusters", "monitoring-location-cluster-count",  "monitoring-location-unclustered-point", "cameras", "enhanced_gage", "temperature", "new_gage", "specific_conductance","drb_boundary"],
            "hiddenLayersToShow": ["new_gage_test_bed", "enhanced_gage_test_bed", "camera_test_bed", "specific_conductance_test_bed", "temperature_test_bed"],
            "D3Rings": false
        },
	    {
            "id": "future",
            "class": "",
            "flyToCommands": {
            },
            "title": "Future Plans",
            "content": "This is just the beginning for the Delaware Basin Next Generation Water Observing System.  Read the details in the map window.",
            "isText": true,
            "html": "<h2>Future Plans</h2><p>In the future we plan to:</p><ul><li>Expand to other basins</li><li>Add more enhanced gages</li><li>Add more capabilities to existing gages</li></ul>",
            "extendedContent": false,
            "tourType": "none",
            "layersToHide": ["monitoring-location-clusters", "monitoring-location-cluster-count", "physiographic_provinces"],
            "hiddenLayersToShow": ["drb_boundary"],
            "D3Rings": false
	    }
    ]
};