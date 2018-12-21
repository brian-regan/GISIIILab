# GISIIILab

This application was developed by [Brian Regan](https://n.ethz.ch/~bregan/), Data Science Master Student at ETH Zürich for the GIS III class, part of the [Chair of Geoinformation Engineering](http://www.gis.ethz.ch/). It demonstrates data collected using a SenseBox built a few weeks prior to the design of this site. For the map functionality it uses the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/).

The app is a simple web app, with the main index.html file found in the root directory. There are three sub directories: `assets`, `css` and `js` containing app images, css and javascript respectively. `js` also contains jquery which we use for a scrolling function found in `scrolling.js`. `main.js` contains the code for laoding the map from the API and for adding listeners for the toggle ability.

The html is structured in sections and we use [Bootstrap](https://getbootstrap.com/) to create containers, rows and columns where neccesary. 

The app requires a login from ArcGIS organisational account or developer account to access the world traffic layer. A link is provided to the user to create an account in the case they do not have one.
