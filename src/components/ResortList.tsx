import * as React from 'react';
import { useCallback, memo } from 'react';
import { ObservableArray } from '@nativescript/core';
import { StyleSheet } from "react-nativescript";
import { Resort } from '../services/ResortService';

interface ResortListProps {
  resorts: ObservableArray<Resort>;
  onResortPress: (resort: Resort) => void;
}

export const ResortList = memo(({ resorts, onResortPress }: ResortListProps) => {
  const renderResort = useCallback((resort: Resort) => (
    <gridLayout 
      className="resort-card p-4 bg-white rounded-lg shadow-md m-2"
      rows="auto, auto" 
      columns="*, auto"
      onTap={() => onResortPress(resort)}
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
        <label className="text-sm text-blue-600">
          {resort.stats.totalRuns} Runs
        </label>
      </stackLayout>
    </gridLayout>
  ), [onResortPress]);

  return (
    <scrollView className="bg-gray-100">
      <stackLayout>
        {resorts.map(renderResort)}
      </stackLayout>
    </scrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    height: "100%"
  }
});