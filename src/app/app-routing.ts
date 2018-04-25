import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SearchComponent} from './search/search.component';
import {TableShowComponent} from './table-show/table-show.component';
import {TableShowStatTaxiIncomeComponent} from './table-show-stat-taxi-income/table-show-stat-taxi-income.component';
import {TableShowStatTripIncomeComponent} from './table-show-stat-trip-income/table-show-stat-trip-income.component';
import {TableShowStatChannelIncomeComponent} from './table-show-stat-channel-income/table-show-stat-channel-income.component';
import {TableShowStatFinanceBalanceComponent} from './table-show-stat-finance-balance/table-show-stat-finance-balance.component';
import {TableShowStatTaxiChannelIncomeComponent} from './table-show-stat-taxi-channel-income/table-show-stat-taxi-channel-income.component';
import {TableShowStatTripChannelIncomeComponent} from './table-show-stat-trip-channel-income/table-show-stat-trip-channel-income.component';
import {TableShowStatAllChannelIncomeComponent} from './table-show-stat-all-channel-income/table-show-stat-all-channel-income.component';
import {TableShowStatFinanceWithdrawComponent} from './table-show-stat-finance-withdraw/table-show-stat-finance-withdraw.component';
import {TableShowStatTaxiFinanceWithdrawComponent} from './table-show-stat-taxi-finance-withdraw/table-show-stat-taxi-finance-withdraw.component';
import {ShowTableStatMakeupCutComponent} from './show-table-stat-makeup-cut/show-table-stat-makeup-cut.component';
import {TableShowRechargeComponent} from './table-show-recharge/table-show-recharge.component';
import {TableShowRechargeSumComponent} from './table-show-recharge-sum/table-show-recharge-sum.component';
import {TableShowAllBalanceComponent} from './table-show-all-balance/table-show-all-balance.component';
import {TableShowRechargeTaxiSumComponent} from './table-show-recharge-taxi-sum/table-show-recharge-taxi-sum.component';
import {TableShowStatCouponMonthComponent} from './table-show-stat-coupon-month/table-show-stat-coupon-month.component';
import {TableShowStatFinanceActivityBalanceComponent} from './table-show-stat-finance-activity-balance/table-show-stat-finance-activity-balance.component';
import {TableShowStatGoodsSaleComponent} from './table-show-stat-goods-sale/table-show-stat-goods-sale.component';
import {TableShowStatBatchComponent} from './table-show-stat-batch/table-show-stat-batch.component';
import {TableShowStatTaxiBatchComponent} from './table-show-stat-taxi-batch/table-show-stat-taxi-batch.component';
import {TableShowStatTaxiFinanceOfflineComponent} from './table-show-stat-taxi-finance-offline/table-show-stat-taxi-finance-offline.component';
import {TableShowStatMobikeFinanceIncomeComponent} from './table-show-stat-mobike-finance-income/table-show-stat-mobike-finance-income.component';
import {TableShowStatFinanceMallPayChannelComponent} from './table-show-stat-finance-mall-pay-channel/table-show-stat-finance-mall-pay-channel.component';
import {TableShowStatFinanceActualPayoutIncomeComponent} from './table-show-stat-finance-actual-payout-income/table-show-stat-finance-actual-payout-income.component';

const routes: Routes = [
 /* {
   path: 'haha', component: SearchComponent
  },*/
  {
    path: 'stat_income', component: TableShowComponent
  },
  {
    path: 'stat_taxi_income', component: TableShowStatTaxiIncomeComponent
  },
  {
    path: 'stat_trip_income', component: TableShowStatTripIncomeComponent
  },
  {
    path: 'stat_pay_channel', component: TableShowStatChannelIncomeComponent
  },
  {
    path: 'stat_taxi_pay_channel', component: TableShowStatTaxiChannelIncomeComponent
  },
  {
    path: 'stat_trip_pay_channel', component: TableShowStatTripChannelIncomeComponent
  },
  {
    path: 'stat_all_pay_channel', component: TableShowStatAllChannelIncomeComponent
  },
  {
    path: 'stat_finance_balance', component: TableShowStatFinanceBalanceComponent
  },
  {
    path: 'stat_finance_withdraw', component: TableShowStatFinanceWithdrawComponent
  },
  {
    path: 'stat_taxi_finance_withdraw', component: TableShowStatTaxiFinanceWithdrawComponent
    },
  {
    path: 'stat_makeup_cut', component: ShowTableStatMakeupCutComponent
  },
 /* {
    path: 'stat_taxi_makeup_cut', component: TableShowStatTaxiMakeupCutComponent
  },*/
  {
    path: 'recharge/:typeAndDate', component: TableShowRechargeComponent
  },
  {
    path: 'recharge_sum', component: TableShowRechargeSumComponent
  },
  {
    path: 'recharge_taxi', component: TableShowRechargeSumComponent
  },
  {
    path: 'recharge_taxi_sum', component: TableShowRechargeTaxiSumComponent
  },
  {
    path: 'stat_finance_all_balance', component: TableShowAllBalanceComponent
   },
  {
   path: 'stat_coupon_month', component: TableShowStatCouponMonthComponent
  },
  {
    path: 'stat_finance_activity_balance', component: TableShowStatFinanceActivityBalanceComponent
  },
  {
   path: 'stat_goods_sale', component: TableShowStatGoodsSaleComponent
  },
  {
   path: 'stat_batch_payment', component: TableShowStatBatchComponent
  },
  {
    path: 'stat_taxi_finance_offline', component: TableShowStatTaxiFinanceOfflineComponent
  },
  {
   path: 'stat_taxi_batch_payment', component: TableShowStatTaxiBatchComponent
  },
  {
    path: 'stat_mobike_finance_income', component: TableShowStatMobikeFinanceIncomeComponent
  },
  {
    path: 'stat_finance_mall_pay_channel', component: TableShowStatFinanceMallPayChannelComponent
  },
  {
    path: 'stat_finance_actual_payout_income', component: TableShowStatFinanceActualPayoutIncomeComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRouting { }
