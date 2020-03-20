import React, { FC } from 'react';
import './TSBasicString.css';

type TSBasicStringProps = {
  name: string;
  value: string;
  elapsedTime: string;
  isElapsedTimeEnabled: boolean;
};

const TSBasicString: FC<TSBasicStringProps> = (props: TSBasicStringProps) => {
  const { name, value, elapsedTime, isElapsedTimeEnabled } = props;
  const showElapsedTime = isElapsedTimeEnabled ? elapsedTime : null;

  return (
    <div className="basic-string">
      <label className="name">{name}</label>
      <label className="time">{showElapsedTime}</label>
      <label className="value">{value}</label>
    </div>
  );
};

export default TSBasicString;