import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableListComponent } from './table-list/table-list.component';
import { SearchComponent } from './search/search.component';
import { TableShowComponent } from './table-show/table-show.component';
import {AppRouting} from './app-routing';
import { TableShowStatTaxiIncomeComponent } from './table-show-stat-taxi-income/table-show-stat-taxi-income.component';
import { TableShowStatTripIncomeComponent } from './table-show-stat-trip-income/table-show-stat-trip-income.component';
import { TableShowStatChannelIncomeComponent } from './table-show-stat-channel-income/table-show-stat-channel-income.component';
import { TableShowStatFinanceBalanceComponent } from './table-show-stat-finance-balance/table-show-stat-finance-balance.component';
import { TableShowStatTaxiChannelIncomeComponent } from './table-show-stat-taxi-channel-income/table-show-stat-taxi-channel-income.component';
import { TableShowStatTripChannelIncomeComponent } from './table-show-stat-trip-channel-income/table-show-stat-trip-channel-income.component';
import { TableShowStatAllChannelIncomeComponent } from './table-show-stat-all-channel-income/table-show-stat-all-channel-income.component';
import { TableShowStatBatchComponent } from './table-show-stat-batch/table-show-stat-batch.component';
import { TableShowStatTaxiBatchComponent } from './table-show-stat-taxi-batch/table-show-stat-taxi-batch.component';
import { TableShowStatFinanceWithdrawComponent } from './table-show-stat-finance-withdraw/table-show-stat-finance-withdraw.component';
import { TableShowStatTaxiFinanceWithdrawComponent } from './table-show-stat-taxi-finance-withdraw/table-show-stat-taxi-finance-withdraw.component';
import { SearchTagsComponent } from './search-tags/search-tags.component';
import { ShowTableStatMakeupCutComponent } from './show-table-stat-makeup-cut/show-table-stat-makeup-cut.component';
import { TableShowRechargeComponent } from './table-show-recharge/table-show-recharge.component';
import { SearchMonthComponent } from './search-month/search-month.component';
import { TableShowRechargeSumComponent } from './table-show-recharge-sum/table-show-recharge-sum.component';
import { TableShowRechargeTaxiComponent } from './table-show-recharge-taxi/table-show-recharge-taxi.component';
import { TableShowRechargeTaxiSumComponent } from './table-show-recharge-taxi-sum/table-show-recharge-taxi-sum.component';
import { TableShowAllBalanceComponent } from './table-show-all-balance/table-show-all-balance.component';
import { TableShowStatCouponMonthComponent } from './table-show-stat-coupon-month/table-show-stat-coupon-month.component';
import { TableShowStatCouponDetailComponent } from './table-show-stat-coupon-detail/table-show-stat-coupon-detail.component';
import { TableShowStatFinanceActivityBalanceComponent } from './table-show-stat-finance-activity-balance/table-show-stat-finance-activity-balance.component';
import { TableShowStatGoodsSaleComponent } from './table-show-stat-goods-sale/table-show-stat-goods-sale.component';
import { TableShowBatchPaymentComponent } from './table-show-batch-payment/table-show-batch-payment.component';
import { TableShowStatTaxiFinanceOfflineComponent } from './table-show-stat-taxi-finance-offline/table-show-stat-taxi-finance-offline.component';
import { TableShowStatMobikeFinanceIncomeComponent } from './table-show-stat-mobike-finance-income/table-show-stat-mobike-finance-income.component';
import { TableShowStatFinanceMallPayChannelComponent } from './table-show-stat-finance-mall-pay-channel/table-show-stat-finance-mall-pay-channel.component';
import { TableShowStatFinanceActualPayoutIncomeComponent } from './table-show-stat-finance-actual-payout-income/table-show-stat-finance-actual-payout-income.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableListComponent,
    SearchComponent,
    TableShowComponent,
    TableShowStatTaxiIncomeComponent,
    TableShowStatTripIncomeComponent,
    TableShowStatChannelIncomeComponent,
    TableShowStatFinanceBalanceComponent,
    TableShowStatTaxiChannelIncomeComponent,
    TableShowStatTripChannelIncomeComponent,
    TableShowStatAllChannelIncomeComponent,
    TableShowStatBatchComponent,
    TableShowStatTaxiBatchComponent,
    TableShowStatFinanceWithdrawComponent,
    TableShowStatTaxiFinanceWithdrawComponent,
    SearchTagsComponent,
    ShowTableStatMakeupCutComponent,
    TableShowRechargeComponent,
    SearchMonthComponent,
    TableShowRechargeSumComponent,
    TableShowRechargeTaxiComponent,
    TableShowRechargeTaxiSumComponent,
    TableShowAllBalanceComponent,
    TableShowStatCouponMonthComponent,
    TableShowStatCouponDetailComponent,
    TableShowStatFinanceActivityBalanceComponent,
    TableShowStatGoodsSaleComponent,
    TableShowBatchPaymentComponent,
    TableShowStatTaxiFinanceOfflineComponent,
    TableShowStatMobikeFinanceIncomeComponent,
    TableShowStatFinanceMallPayChannelComponent,
    TableShowStatFinanceActualPayoutIncomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    AppRouting,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
