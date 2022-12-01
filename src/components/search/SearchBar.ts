import { h, render } from 'vue';
import SearchBar from './SearchBar.vue';

export interface SelectItem {
  id: number;
  title: string;
}

//搜索框控制
class SeachBarCreator {
  container: HTMLDivElement;
  //是否正被展示
  isShowing: boolean;
  constructor() {
    this.container = document.createElement('div');
    this.isShowing = false;
  }

  //出现
  present() {
    if (this.isShowing) {
      this.dismiss();
    } else {
      const searchBar = h(SearchBar);
      render(searchBar, this.container);
      const searchBarWrapperDOM =
        this.container.querySelector('#searchBarWrapper');
      searchBarWrapperDOM?.classList.add('searchInput');
      document.body.insertBefore(this.container, document.body.firstChild);
      this.isShowing = true;
    }
  }

  //隐藏
  dismiss() {
    if (this.container && this.isShowing) {
      render(null, this.container);
      document.body.removeChild(this.container);
      this.isShowing = false;
    }
  }
}

export { SeachBarCreator };
