
export class DateUtils {
  constructor() {}
  public getWeekOneDay() {
    const now = new Date();
    const nowTime = now.getTime();
    const day = now.getDay();
    const oneDayTime = 24 * 60 * 60 * 1000;
    const MondayTime = nowTime - (day - 1) * oneDayTime;
    const SundayTime = nowTime + (7 - day) * oneDayTime;
    const monday = new Date(MondayTime);
    const sunday = new Date(SundayTime);
    return monday;
  }
  public lastWeekOneDay() {
    const now = new Date();
    const nowTime = now.getTime();
    const day = now.getDay();
    const oneDayTime = 24 * 60 * 60 * 1000;
    const MondayTime = nowTime - (day - 1 + 7) * oneDayTime;
    const monday = new Date(MondayTime);
    return monday;
  }
  public lastWeeklastDay() {
    const now = new Date();
    const nowTime = now.getTime();
    const day = now.getDay();
    const oneDayTime = 24 * 60 * 60 * 1000;
    const MondayTime = nowTime - (day - 1 + 7) * oneDayTime;
    const monday = new Date(MondayTime + 24 * 60 * 60 * 1000 * 6);
    return monday;
  }
  public monthOneDay() {
    const now = new Date();
    const month = now.getMonth();
    const year = now.getFullYear();
    const monday = new Date(year, month);
    return monday;
  }
  public lastMonthOneDay() {
    const now = new Date();
    const month = now.getMonth() - 1;
    const year = now.getFullYear();
    const monday = new Date(year, month);
    return monday;
  }
  public lastMonthLastDay() {
    const monday = this.monthOneDay();
    return new Date(monday.getTime() - 24 * 60 * 60 * 1000);
  }
}
