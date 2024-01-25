import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  NgxLive2dComponent,
  POSITION,
  ASSETS_TYPE,
  BUILTIN_MODEL,
} from 'ngx-live2d';
type keyName = keyof typeof BUILTIN_MODEL;
import { MarkdownComponent } from 'ngx-markdown';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxLive2dComponent, MarkdownComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent {
  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit() {
    const name: keyName = this.route.snapshot.queryParams['name'];
    console.log(name);
    if (name) {
      this.configuration.set({
        assetsType: ASSETS_TYPE.INTERIOR,
        assets: BUILTIN_MODEL[name],
      });
    }
  }

  /**
   * 模型位置 默认POSITION.BOTTOM_RIGTH 右下角
   */
  position = signal(POSITION.BOTTOM_RIGTH);
  /**
   * 配置
   * @assetsType 资源类型，ASSETS_TYPE.INTERIOR内置 ASSETS_TYPE.EXTERNAL 外部资源
   * @assets 资源名称或链接
   */
  configuration = signal({
    assetsType: ASSETS_TYPE.INTERIOR,
    assets: BUILTIN_MODEL.SHIZUKU,
  });

  /**
   * 模型单击事件
   */
  modelClickRun() {
    console.log('modelClickRun');
  }

  onError(e: string | Error) {
    console.log(e);
  }
}
