# Front-End Engineering Configuration

![Front-End Engineering Configuration][FEEC]

| Branch name                | Feature            |       Stage        |
| :------------------------- | :----------------- | :----------------: |
| [master][b-master]         | Base Configuration | :white_check_mark: |
| [type][b-type]             | TypeScript         | :white_check_mark: |
| [react][b-react]           | React              | :white_check_mark: |
| [react+type][b-react+type] | React + TypeScript |   :construction:   |
| [vue][b-vue]               | Vue                |     :question:     |
| [vue+type][b-vue+type]     | Vue + TypeScript   |     :question:     |

## Usage

<a class="btn btn-sm btn-primary ml-2" href="https://github.com/zhilidali/Front-End-Config/generate">Use this template</a> or clone this repository

### Install

__VS Code Extensions__
```json
[
    "EditorConfig.EditorConfig",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "csstools.postcss",
    "stylelint.vscode-stylelint",
]
```

__npm Packages__: `$ npm i`

### Run

#### development

* `$ npm run start`
* `Cmd + Shift B`

#### build deploy

`$ npm run build`

### Code Lint

#### Lint with VS Code

__Show VS Code Problems__: `Cmd + Shift + M`

__VS Code__
* Format Document: `Opt + Shift + F`
* Format Selection: `Cmd + K Cmd + F`
* Save without Formatting: `Cmd + K S`
* Quick fix: `Cmd + .`
* Auto fix: `Cmd + Opt + .`

#### Lint with CLI

__Check__
```sh
npm run stylelint
npm run eslint
npm run lint
```
__Fix__
```sh
npm run fix
```


## License

[MIT License](/LICENSE)

[FEEC]: https://repository-images.githubusercontent.com/206890549/9aa3e580-d1bc-11e9-9711-e5a4ef0f2c88
[b-master]:     https://github.com/zhilidali/Front-End-Config
[b-type]:       https://github.com/zhilidali/Front-End-Config/tree/type
[b-react]:      https://github.com/zhilidali/Front-End-Config/tree/react
[b-react+type]: https://github.com/zhilidali/Front-End-Config/tree/react+type
[b-vue]:        https://github.com/zhilidali/Front-End-Config/tree/vue
[b-vue+type]:   https://github.com/zhilidali/Front-End-Config/tree/vue+type
