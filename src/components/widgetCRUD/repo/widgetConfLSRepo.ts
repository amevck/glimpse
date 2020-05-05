// Copyright 2020 Cognite AS

/**
 * this file is used to persist data in the local storage (for developing purposes)
 */
import { WidgetConfig } from 'components/grid/interfaces';
import { WidgetConfigs } from './interfaces';

export const save = async (
  userId: string,
  assetId: string,
  widgetConf: WidgetConfig
) => {
  const gridConf = JSON.parse(localStorage.getItem(userId) || '{}');
  gridConf[assetId] = gridConf[assetId]
    ? gridConf[assetId].concat(widgetConf)
    : [widgetConf];
  localStorage.setItem(userId, JSON.stringify(gridConf));
};

export const update = async (
  userId: string,
  assetId: string,
  widgetConfs: WidgetConfig[]
) => {
  const gridConf = JSON.parse(localStorage.getItem(userId) || '{}');
  gridConf[assetId] = widgetConfs;
  localStorage.setItem(userId, JSON.stringify(gridConf));
};

export const deleteOne = async (
  userId: string,
  assetId: string,
  widgetId: string
) => {
  const gridConf = JSON.parse(localStorage.getItem(userId) || '{}');
  const widgetConfigs: WidgetConfig[] = gridConf[assetId] || [];
  const filteredWidgetConfs = widgetConfigs.filter(conf => conf.i !== widgetId);
  gridConf[assetId] = filteredWidgetConfs;
  localStorage.setItem(userId, JSON.stringify(gridConf));
};

export const getByUser = async (userid: string): Promise<WidgetConfigs> => {
  const grid = localStorage.getItem(userid);
  return grid ? JSON.parse(grid) : [];
};
