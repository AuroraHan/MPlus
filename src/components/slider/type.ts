export interface VertifyType {
  spliced: boolean;
  verified: boolean; // 简单验证拖动轨迹，为零时表示Y轴上下没有波动，可能非人为操作
  left: number; // 滑块的移动位置
  destX: number; // 滑块的目标位置
}

//滑块的参数
export interface IProps {
  width?: number;
  visible?: boolean;
  height?: number;
  refreshIcon?: string;
  l?: number;
  r?: number;
  imgUrl?: string;
  text?: string;
  /**
   * @description   拖拽滑块时的回调, 参数为当前滑块拖拽的距离
   * @default       (l: number):void => {}
   */
  onDraw?: (l: number) => {};
  /**
   * @description   用户的自定义验证逻辑
   * @default       (arg: VertifyType) => VertifyType
   */
  onCustomVertify?: (arg: VertifyType) => VertifyType;
  /**
   * @description   重制刷新前的回调
   * @default       ():void => {}
   */
  onBeforeRefresh?: () => void;
  /**
   * @description   验证成功回调
   * @default       ():void => {}
   */
  onSuccess?: VoidFunction;
  /**
   * @description   验证失败回调
   * @default       ():void => {}
   */
  onFail?: VoidFunction;
  /**
   * @description   刷新时回调
   * @default       ():void => {}
   */
  onRefresh?: VoidFunction;
}
