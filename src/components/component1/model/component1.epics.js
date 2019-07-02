import { ofType } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { component1Service } from '../services/component1.service';
import { action1, action2, Action3 } from './component1.actions';

export const component1Epic = action$ => action$.pipe(
    ofType(Action3),
    mergeMap(() => {
        return from(component1Service())
            .pipe(
                map(result => {
                    return action1(result.data.message);
                }),
                catchError(error => {
                    return of(action2(error));
                })
            )
    })
);
