import * as React from 'react';
import { memo } from 'react';
import { Resort } from '../../services/ResortService';
import { ConditionsBadge } from './ConditionsBadge';

interface ResortCardProps {
  resort: Resort;
  onPress: (resort: Resort) => void;
}

export const ResortCard = memo(({ resort, onPress }: ResortCardProps) => (
  <gridLayout 
    className="resort-card p-4 bg-white rounded-lg shadow-md m-2"
    rows="auto, auto" 
    columns="*, auto"
    onTap={() => onPress(resort)}
  >
    <image
      row="0"
      colSpan="2"
      src={resort.imageUrl}
      className="w-full h-40 rounded-t-lg"
      stretch="aspectFill"
    />
    <stackLayout row="1" col="0" className="p-2">
      <label className="text-lg font-bold">{resort.name}</label>
      <label className="text-sm text-gray-600">
        {resort.location.region}, {resort.location.country}
      </label>
      <label className="text-sm">
        Elevation: {resort.location.elevation}m
      </label>
    </stackLayout>
    <stackLayout row="1" col="1" className="p-2 justify-center">
      <ConditionsBadge conditions={resort.conditions} />
    </stackLayout>
  </gridLayout>
));