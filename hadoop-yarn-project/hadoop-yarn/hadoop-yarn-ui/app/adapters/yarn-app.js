import DS from 'ember-data';
import Config from 'yarn-ui/config';

export default DS.JSONAPIAdapter.extend({
  headers: {
    Accept: 'application/json'
  },
  host: 'http://localhost:1337/' + Config.RM_HOST + ':' + Config.RM_PORT, // configurable
  namespace: 'ws/v1/cluster', // common const
  pathForType(modelName) {
    return 'apps'; // move to some common place, return path by modelname.
  },
  /*
  urlForQuery(query, modelName) {
    var url = this._buildURL();
    return url + '/apps/' + query.appId + "/appattempts";
  },
  */
  ajax(url, method, hash) {
    hash = hash || {};
    hash.crossDomain = true;
    hash.xhrFields = {withCredentials: true};
    hash.targetServer = "RM";
    return this._super(url, method, hash); 
  }
});
