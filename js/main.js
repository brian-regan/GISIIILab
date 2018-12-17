require([
    "esri/views/MapView",
    "esri/widgets/Legend",
    "esri/WebMap"
  ],
  function(
    MapView, Legend, WebMap
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

      /*****************************************************************
     * The visible property on the layer can be used to toggle the
     * layer's visibility in the view. When the visibility is turned off
     * the layer is still part of the map, which means you can access
     * its properties and perform analysis even though it isn't visible.
     *******************************************************************/

    p25_layer_toggle.addEventListener("change", function () {
      p25.visible = toggle.checked;
    });

    });

    

  });

  