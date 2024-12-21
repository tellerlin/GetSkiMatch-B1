import { makeAutoObservable } from 'mobx';

export interface FilterCriteria {
  location: {
    country?: string;
    region?: string;
    minElevation?: number;
    maxElevation?: number;
  };
  resortSize?: {
    min?: number;
    max?: number;
  };
  difficulty?: {
    beginner?: number;
    intermediate?: number;
    expert?: number;
  };
  season?: {
    startDate?: Date;
    endDate?: Date;
  };
  amenities?: string[];
}

export class FilterStore {
  filters: FilterCriteria = {};
  savedFilters: { name: string; filters: FilterCriteria }[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setFilter(key: keyof FilterCriteria, value: any) {
    this.filters[key] = value;
  }

  saveFilterCombination(name: string) {
    this.savedFilters.push({
      name,
      filters: { ...this.filters }
    });
  }

  clearFilters() {
    this.filters = {};
  }
}

export const filterStore = new FilterStore();