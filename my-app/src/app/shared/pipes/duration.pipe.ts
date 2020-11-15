import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  public transform(duration: number): string {

    if (duration < 60) {
      return duration + 'min';
    } else {
      return (duration % 60 === 0) ? (duration / 60) + 'h' : Math.floor(duration / 60) + 'h ' + (duration % 60) + 'min';
    }
  }

}
