import { Entry } from './types/mod.ts';
import { log } from '../dep.ts';

export const getEntry = (): Promise<Entry> => {
    return new Promise((resolve) => {
        log.info('getEntry invoked');
        resolve(new Entry('Entry'));
    })
}