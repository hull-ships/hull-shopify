import _ from 'lodash';

export default function detectShip(hull, shipName) {
  return hull.ready().then(({ app }) => {
    return _.some(
      _.map(app.deployments, (item)=> {
        return item.ship.manifest_url.indexOf(`/${shipName}/manifest.json`) > 0;
      }));
  });
}
