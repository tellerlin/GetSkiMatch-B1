import * as React from 'react';
import { memo } from 'react';
import { Resort } from '../../services/ResortService';

interface TrailMapProps {
  resort: Resort;
}

export const TrailMap = memo(({ resort }: TrailMapProps) => (
  <stackLayout className="mt-4">
    <label className="text-lg font-bold mb-2">Trail Map</label>
    
    {/* Difficulty Distribution */}
    <gridLayout rows="auto" columns="*, *, *" className="mb-4">
      <stackLayout col="0" className="bg-green-100 p-2 m-1 rounded">
        <label className="text-center">{resort.stats.difficulty.beginner}%</label>
        <label className="text-center text-xs">Beginner</label>
      </stackLayout>
      <stackLayout col="1" className="bg-blue-100 p-2 m-1 rounded">
        <label className="text-center">{resort.stats.difficulty.intermediate}%</label>
        <label className="text-center text-xs">Intermediate</label>
      </stackLayout>
      <stackLayout col="2" className="bg-red-100 p-2 m-1 rounded">
        <label className="text-center">{resort.stats.difficulty.expert}%</label>
        <label className="text-center text-xs">Expert</label>
      </stackLayout>
    </gridLayout>
  </stackLayout>
));