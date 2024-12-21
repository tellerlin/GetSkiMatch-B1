import * as React from 'react';
import { memo } from 'react';
import { Resort } from '../../services/ResortService';
import { WeatherForecast } from '../weather/WeatherForecast';
import { TrailMap } from '../trails/TrailMap';

interface ResortDetailProps {
  resort: Resort;
}

export const ResortDetail = memo(({ resort }: ResortDetailProps) => (
  <scrollView>
    <stackLayout>
      {/* Hero Image */}
      <image
        src={resort.imageUrl}
        className="w-full h-64"
        stretch="aspectFill"
      />
      
      {/* Resort Info */}
      <stackLayout className="p-4">
        <label className="text-2xl font-bold">{resort.name}</label>
        <label className="text-lg text-gray-600">
          {resort.location.region}, {resort.location.country}
        </label>
        
        {/* Stats */}
        <gridLayout rows="auto" columns="*, *, *" className="mt-4">
          <stackLayout col="0" className="text-center">
            <label className="text-lg font-bold">{resort.stats.totalRuns}</label>
            <label className="text-sm">Runs</label>
          </stackLayout>
          <stackLayout col="1" className="text-center">
            <label className="text-lg font-bold">{resort.stats.skiableArea}</label>
            <label className="text-sm">km²</label>
          </stackLayout>
          <stackLayout col="2" className="text-center">
            <label className="text-lg font-bold">{resort.location.elevation}</label>
            <label className="text-sm">meters</label>
          </stackLayout>
        </gridLayout>

        {/* Weather and Trail Map */}
        <WeatherForecast conditions={resort.conditions} />
        <TrailMap resort={resort} />
      </stackLayout>
    </stackLayout>
  </scrollView>
));