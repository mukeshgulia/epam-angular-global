export class DateHelper {

  public subtractDays(date: Date, days: number): Date {
    const d: Date = new Date();
    d.setDate(date.getDate() - days);
    return d;
  }

  public addDays(date: Date, days: number): Date {
    const d: Date = new Date();
    d.setDate(date.getDate() + days);
    return d;
  }

}
