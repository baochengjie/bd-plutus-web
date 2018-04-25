
export class StatFinanceIncome {
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
}
