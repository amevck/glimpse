import React from 'react';
import { render } from '@testing-library/react';
import { showFieldsMockProps } from 'mocks/widgetsMockData/showFieldsMock';
import ToolWidget from './ToolWidget';

describe('Tool Widget', () => {
  const name = 'Tool Test Name';
  it('should render name correctly', () => {
    const { getByText } = render(
      <ToolWidget {...showFieldsMockProps[0]} name={name} />
    );
    expect(getByText(name)).toBeInTheDocument();
  });

  it('should render field and value correctly', () => {
    const { getByText } = render(
      <ToolWidget {...showFieldsMockProps[0]} name={name} />
    );
    expect(getByText(showFieldsMockProps[0].field)).toBeInTheDocument();
    expect(getByText(showFieldsMockProps[0].value)).toBeInTheDocument();
  });
});