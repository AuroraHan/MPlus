/**quikPickVue接收的数据 */
export type QuickPickOptions = {
  /**列表数据 */
  options: QuickPickItemOptions[];
  /**在输入框中输入时触发的回调 */
  onDidInput?(
    /**输入框中的值 */
    value: string,
    /**改变列表数据的方法 */
    setItemOptions: (options: QuickPickItemOptions[]) => void
  ): void;
};
export type QuickPickItemOptions = {
  /**标题 */
  label: string;
  /**描述 */
  description?: string;
  /**快捷键 */
  keyboard: string[];
  /**子数据, 点击item时触发, 展示children数据 */
  children?: QuickPickItemOptions[];
  isSelection?: boolean;
  status?: boolean;
  /**点击QuickPickItem的回调 */
  onDidSelectItem(value: QuickPickItemOptions): void;
  /**点击QuickPickItem的设置图标的回调 */
  onDidConfigure(): void;
};
