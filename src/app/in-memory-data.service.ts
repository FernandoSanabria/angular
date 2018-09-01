import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const girls = [
        { id: 11, name: 'Mr. Cleopatra' },
        { id: 12, name: 'Narca' },
        { id: 13, name: 'Bombasta' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberWow' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dra IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    ];
    return {girls};
  }
}