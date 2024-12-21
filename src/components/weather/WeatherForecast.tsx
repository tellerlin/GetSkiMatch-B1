import * as React from 'react';
import { memo } from 'react';
import { Resort } from '../../services/ResortService';

interface WeatherForecastProps {
  conditions: Resort['conditions'];
}

export const WeatherForecast = memo(({ conditions }: WeatherForecastProps) => (
  <stackLayout className="bg-blue-50 p-4 rounded-lg mt-4">
    <label className="text-lg font-bold mb-2">Current Conditions</label>
    <gridLayout rows="auto" columns="*, *" className="text-center">
      <stackLayout col="0">
        <label className="text-2xl font-bold">{conditions.snowDepth}cm</label>
        <label className="text-sm">Snow Depth</label>
      </stackLayout>
      <stackLayout col="1">
        <label className="text-2xl font-bold">{conditions.temperature}°C</label>
        <label className="text-sm">Temperature</label>
      </stackLayout>
    </gridLayout>
    <label className="text-sm mt-2">
      Last snowfall: {conditions.lastSnowfall}
    </label>
  </stackLayout>
));