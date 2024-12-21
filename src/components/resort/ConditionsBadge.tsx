import * as React from 'react';
import { memo } from 'react';
import { Resort } from '../../services/ResortService';

interface ConditionsBadgeProps {
  conditions: Resort['conditions'];
}

export const ConditionsBadge = memo(({ conditions }: ConditionsBadgeProps) => (
  <stackLayout className="bg-blue-100 p-2 rounded">
    <label className="text-sm text-blue-800">
      {conditions.snowDepth}cm
    </label>
    <label className="text-xs text-blue-600">
      {conditions.temperature}°C
    </label>
  </stackLayout>
));