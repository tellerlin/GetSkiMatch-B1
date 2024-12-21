import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { StyleSheet } from "react-nativescript";
import { filterStore } from '../stores/FilterStore';

export const FilterPanel = observer(() => {
  return (
    <scrollView className="bg-white">
      <stackLayout className="p-4">
        <label className="text-xl font-bold mb-4">Filters</label>
        
        {/* Location Filter */}
        <label className="text-lg font-semibold mt-4">Location</label>
        <textField 
          hint="Country"
          className="input p-2 border rounded"
          onTextChange={(args) => {
            filterStore.setFilter('location', {
              ...filterStore.filters.location,
              country: args.value
            });
          }}
        />
        
        {/* Resort Size Filter */}
        <label className="text-lg font-semibold mt-4">Resort Size</label>
        <slider 
          minValue={0} 
          maxValue={500}
          value={filterStore.filters.resortSize?.min || 0}
          onValueChange={(args) => {
            filterStore.setFilter('resortSize', {
              ...filterStore.filters.resortSize,
              min: args.value
            });
          }}
        />
        
        {/* Actions */}
        <button 
          className="btn btn-primary mt-4"
          onTap={() => filterStore.clearFilters()}
        >
          Clear Filters
        </button>
        
        <button 
          className="btn btn-secondary mt-2"
          onTap={() => filterStore.saveFilterCombination('My Filters')}
        >
          Save Filters
        </button>
      </stackLayout>
    </scrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 16
  }
});