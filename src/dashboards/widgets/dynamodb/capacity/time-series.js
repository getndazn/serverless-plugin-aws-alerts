'use strict';

const createWidget = (config) => {
  const widget = {
    type: 'metric',
    x: config.coordinates.x,
    y: config.coordinates.y,
    width: config.coordinates.width,
    height: config.coordinates.height,
    properties: {
      title: config.title,
      view: 'timeSeries',
      stacked: false,
      metrics: [ ],
      region: config.region,
      period: config.properties.metricsPeriod
    }
  };

  // TODO for a GSI add "GlobalSecondaryIndexName", "index name" to end
  widget.properties.metrics = [
    [ 'AWS/DynamoDB', 'ProvisionedReadCapacityUnits', 'TableName', config.table.name ],
    [ '.', 'ConsumedReadCapacityUnits', '.', '.' ],
    [ '.', 'ProvisionedWriteCapacityUnits', '.', '.' ],
    [ '.', 'ConsumedWriteCapacityUnits', '.', '.' ],
  ];

  return widget;
};

module.exports = {
  createWidget,
};
