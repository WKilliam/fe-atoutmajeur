import {TYPE_ButtonClickInfo, TYPE_FilterChangeInfo} from '@types';

export interface OrderCallBackInterface {
  //header
  handlerHeaderCallBack:(event: MouseEvent) => void;

  // filter selection
  searchInputCallBack:(infoRef: TYPE_FilterChangeInfo, event: string | string[]) => void;
  selectGarmentPossibilityCallBack:(infoRef: TYPE_FilterChangeInfo, event: string | string[]) => void;
  selectOrderStatusCallBack:(infoRef: TYPE_FilterChangeInfo, event: string | string[]) => void;
  btnTodayCallBack:(infoRef: TYPE_ButtonClickInfo, event: string | string[]) => void;
  btnWeeklyCallBack:(infoRef: TYPE_ButtonClickInfo, event: string | string[]) => void;
  btnMonthCallBack:(infoRef: TYPE_ButtonClickInfo, event: string | string[]) => void;
  btnStartSearchCallBack:(infoRef: TYPE_ButtonClickInfo, event: string | string[]) => void;

  // tabs
  tabElementOnClickCallBack:(event: number) => void;
}

