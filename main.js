import 'ol/ol.css';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';
import {Map, View} from 'ol';
import {Vector as VectorLayer, Tile as TileLayer} from 'ol/layer';
import {Vector as VectorSource, Stamen} from 'ol/source';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import Renderer from 'ol/renderer/webgl/PointsLayer';
import {clamp} from 'ol/math';
import TileWMS from 'ol/source/TileWMS';


var layers = [
  new TileLayer({
    source: new OSM(),
  }),
  new TileLayer({
    extent: [-13884991, 2870341, -7455066, 6338219],
    source: new TileWMS({
	  projection: 'EPSG:4326',	
      url: 'http://geoserveis.icc.cat/icc_ortoxpres/wms/service?',
      params: {'LAYERS': 'topp:states', 'TILED': true},
      serverType: 'geoserver',
      // Countries have transparency, so do not fade tiles:
      transition: 0,
    }),
  }) ];

var projection = ol.proj.get('EPSG:25831');
var map = new Map({
  layers: layers,
  target: 'map',
  view: new View({
	projection: projection,
    center: [4522273.01,1179213.48],
    zoom: 4,
  }),
});
