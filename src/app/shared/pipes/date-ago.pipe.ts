import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAgo'
})
export class DateAgoPipe implements PipeTransform {

  transform(value: Date | undefined, fmt?: string): string {
    if (!value) return "";

    let diff = this.calculateDiff(value);
    fmt = fmt ?? this.calculateFmt(diff);

    let name = "";

    switch (fmt) {
      case "y":
        diff = Math.floor(diff/(60 * 60 * 24 * 30 * 12));
        name = diff > 1 ? "Jahre" : "Jahr"
        break;
      case "m":
        diff = Math.floor(diff/(60 * 60 * 24 * 30));
        name = diff > 1 ? "Monaten" : "Monat"
        break;
      case "d":
        diff = Math.floor(diff/(60 * 60 * 24));
        name = diff > 1 ? "Tagen" : "Tag"
        break;
      case "h":
        diff = Math.floor(diff/(60 * 60));
        name = diff > 1 ? "Stunden" : "Stunde"
        break;
      case "mi":
        diff = Math.floor(diff/(60));
        name = diff > 1 ? "Minuten" : "Minute"
        break;
      case "s":
        name = diff > 1 ? "Sekunden" : "Sekunde"
        break;
    }

    return `vor ${diff.toString()} ${name}`;
  }

  calculateFmt(diff: number): string {
    let calcFmt = "s";
    if (diff > 60 * 60 * 24 * 30 * 12) { calcFmt = "y" }
    else if (diff > 60 * 60 * 24 * 30) { calcFmt = "m" }
    else if (diff > 60 * 60 * 24) { calcFmt = "d" }
    else if (diff > 60 * 60) { calcFmt = "h" }
    else if (diff > 60) { calcFmt = "mi" }
    return calcFmt;
  }

  calculateDiff(dateSent: Date){
    dateSent = new Date(dateSent);
    let currentDate = new Date();

    return Math.floor((Date.UTC(
          currentDate.getUTCFullYear()
        , currentDate.getUTCMonth()
        , currentDate.getUTCDate()
        , currentDate.getUTCHours()
        , currentDate.getUTCMinutes()
        , currentDate.getUTCSeconds()
      ) - Date.UTC(
          dateSent.getUTCFullYear()
        , dateSent.getUTCMonth()
        , dateSent.getUTCDate()
        , dateSent.getUTCHours()
        , dateSent.getUTCMinutes()
        , dateSent.getUTCSeconds()
      ))/1000);
  }
}
