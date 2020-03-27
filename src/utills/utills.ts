import { Group } from '@cognite/sdk';
import { Capability } from 'custom-types';
import { ADMIN_GROUPS, USER_REQUIRED_CAPABILITIES } from '../constants/appData';

export const generateRandomKey = () =>
  Math.random()
    .toString(36)
    .substring(7);

export const clone = (inObject: any) => {
  if (typeof inObject !== 'object' || inObject === null) {
    return inObject; // Return the value if inObject is not an object
  }
  const outObject: any = Array.isArray(inObject) ? [] : {};

  Object.keys(inObject).forEach((key: any) => {
    const value = inObject[key];

    // Recursively (deep) copy for nested objects, including arrays
    outObject[key] =
      typeof value === 'object' && value !== null ? clone(value) : value;
  });

  return outObject;
};

/**
 *
 * Auth Utils
 */
export const getUserCapabilities = (groups: Group[]) =>
  groups
    .map(group =>
      group.capabilities?.map((capability: Capability) =>
        Object.keys(capability).map(capabilityKey =>
          capability[capabilityKey].actions.map(
            (action: string) => `${capabilityKey}:${action}`
          )
        )
      )
    )
    .toString()
    .split(',');

export const hasPermissions = (userCapabilities: string[]) =>
  USER_REQUIRED_CAPABILITIES.filter(userRequiredCapability =>
    userCapabilities.includes(userRequiredCapability)
  ).length === USER_REQUIRED_CAPABILITIES.length;

export const isAdmin = (groups: Group[]) =>
  groups.filter(group => ADMIN_GROUPS.includes(group.name)).length > 0;

/**
 * Used to get child value from a object with string key
 */

export const getChildValue = (source: any, attribString: string) => {
  let returnValue = source;
  attribString.split('.').forEach(attrib => {
    returnValue = returnValue ? returnValue[attrib] : '';
  });
  return returnValue;
};

/**
 * Used to get unique key from any object
 */
export const getUniqueKey = (source: object) => {
  return source ? window.btoa(JSON.stringify(source)) : '';
};
