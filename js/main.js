require([
    "esri/views/MapView",
    "esri/widgets/Legend",
    "esri/WebMap",
    "esri/widgets/BasemapToggle"
  ],
  function(
    MapView, Legend, WebMap, BasemapToggle
  ) {

    var webmap = new WebMap({
      portalItem: { // autocasts as new PortalItem()
        id: "01247f5011ca4515aadcf2a5d471a7e0"
      }
    });

    var view = new MapView({
      container: "viewDiv",
      map: webmap
    });

    var p25_layer_toggle = document.getElementById("toggle");
    var legend_toggle = document.getElementById('legend-toggle')

    // 1 - Create the widget
    var toggle_basemap = new BasemapToggle({
      // 2 - Set properties
      view: view, // view that provides access to the map's 'topo' basemap
      nextBasemap: "hybrid" // allows for toggling to the 'hybrid' basemap
    });

    // Add widget to the top right corner of the view
    view.ui.add(toggle_basemap, "bottom-left");

    view.when(function() {
      // get the first layer in the collection of operational layers in the WebMap
      // when the resources in the MapView have loaded.
      var p25 = webmap.layers.getItemAt(2);
      p25.id = "p25_layer"

      var legend = new Legend({
        view: view,
        layerInfos: [
        {
          layer: p25
        }
        ]
      });

      // Add widget to the bottom right corner of the view
      view.ui.add(legend, "bottom-right");

      // add toggle ability for p25
      p25_layer_toggle.addEventListener("change", function () {
        p25.visible = toggle.checked;
      });

      // add toggle ability for legend
      legend_toggle.addEventListener("change", function () { 
        if(legend_toggle.checked){
          view.ui.add(legend, "bottom-right");
        } else {
          view.ui.remove(legend);
        }
      });

    });

    

  });

  