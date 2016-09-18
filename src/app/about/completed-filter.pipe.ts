import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'lodash';

import { About } from './about.model';

@Pipe({
    name: 'asCompletedFilter'
})
export class CompletedFilterPipe implements PipeTransform {
    transform(abouts: About[], done): About[] {
        if (done) {
            return abouts;
        }

        return filter(abouts, {done});
    }
}
