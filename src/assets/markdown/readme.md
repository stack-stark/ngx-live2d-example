# about

基于 live2d.js 构建的 angular17 版本的 live2d 库

# Install

```bash
npm install --save ngx-live2d
#or
yarn add ngx-live2d
#or
pnpm add ngx-live2d
```

# Usage

```js
import { Component, signal } from "@angular/core";
import { NgxLive2dComponent, POSITION, ASSETS_TYPE, BUILTIN_MODEL } from "ngx-live2d";
@Component({
  selector: "app-home",
  standalone: true,
  imports: [NgxLive2dComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.less",
})
export class HomeComponent {
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
    assets: BUILTIN_MODEL.EPSILON2,
  });

  /**
   * 模型单击事件
   */
  modelClickRun() {
    console.log("modelClickRun");
  }
}
```

```html
<div class="page">
  <ngx-live2d [position]="position()" [configuration]="configuration()" (OnModelClick)="modelClickRun()" />
</div>
```

# API

| 参数          | 类型     | 默认值       | 说明                                                                                     |
| ------------- | -------- | ------------ | ---------------------------------------------------------------------------------------- |
| POSITION      | enum     | BOTTOM_RIGTH | 模型展示位置。TOP_LEFT 左上角，BOTTOM_LEFT 左下角，TOP_RIGTH 右上角，BOTTOM_RIGTH 右下角 |
| ASSETS_TYPE   | enum     | INTERIOR     | 资源类型。INTERIOR 内部资源，EXTERNAL 外部资源                                           |
| BUILTIN_MODEL | enum     | EPSILON2     | 内置资源名称。有 Z16，EPSILON2，IZUMI，KOHARU，SHIZUKU，MIKU，HIJIKI，TORORO             |
| OnModelClick  | Function | -            | 模型单击事件。                                                                           |

# bugs

https://github.com/stack-stark/ngx-live2d/issues
