            var map = new ol.Map({
                target: 'map',
                layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
                ],
                view: new ol.View({
                center: ol.proj.fromLonLat([ 37, 24 ]),
                zoom: 6
                })
            });