# Environment building

1. use node version

```
$ node -v
v16.13.0
```

2. create node_modules

```
$ npm i
```

3. VSCode extension

.vscode/extensions.json を見て入れてください(全て必須です)

# localhost

```
$ npm run dev
```

# VSCode Settings

.vscode/settings.json が優先されると思います。

# Directory structure

directory nameは可能な限り単数形にすること(next.jsのpagesフォルダのみは複数形のままにする)
```
src
├── public                              # 画像やフォントなどの静的ファイル
├── component                          # アプリケーション全体で使用できる共通コンポーネント
        ├── Element                        # 複数のコンポーネントで使用するButton、Dialogなどを配置する
        ├── Form                            # 複数のコンポーネントで使用するformを配置する
├── config                              # 環境変数などをエクスポートするところ
├── feature                            # 機能ベースモジュール
        ├── somethingfeature                # 機能名
            ├── __test__                        # React Testing Libraryのテストコード
            ├── api                             # api call functionを置く
            ├── component                      # コンポーネント
            ├── config                          # 設定ファイル
            ├── types                           # 型定義ファイル(このtypesフォルダがあるfeatureで共通typeが必要な場合、type/index.tsを作成して記述する)
            ├── index.ts                        # エントリーポイント
├── hook                               # アプリケーション全体で使用できる共通hooks
├── lib                                 # ライブラリをアプリケーション用に設定して再度エクスポートしたもの
├── provider                           # アプリケーションのすべてのプロバイダー
├── store                              # グローバルステートストア
├── test                                # テストユーティリティとモックサーバ
├── type                               # アプリケーション全体で使用される基本的な型の定義
└── util                               # 共通のユーティリティ関数
```

Reference:
https://zenn.dev/t_keshi/articles/bulletproof-react-2022#bulletproof-react%E3%81%AE%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA%E6%A7%8B%E6%88%90

# API call
  axios を使うこと

# eslint config

.eslintrc.js は勝手に変更しないでください。変更したい場合は@sugao に相談してください。

# CSS

- 「スマホ」「タブレット」で同じデザイン
- pc のみ別デザイン

* Tailwind CSS
  https://tailwindcss.com/docs/installation
* Mantine
  https://mantine.dev/

# git commit
1. git commit時にprettierとeslintのチェックが実行されチェックに引っかかった場合以下のようにエラーが出力されます。  
```
$ git commit -m "test" 

> @ check /Users/sugayutokyo/Developer/workplace/upbond/gohey-frontend
> run-p --continue-on-error check:prettier check:eslint


> @ check:prettier /Users/sugayutokyo/Developer/workplace/upbond/gohey-frontend
> prettier --check .


> @ check:eslint /Users/sugayutokyo/Developer/workplace/upbond/gohey-frontend
> eslint --ext .tsx,.js,.ts .

Checking formatting...
[warn] README.md
[warn] src/pages/_ducument.tsx
[warn] Code style issues found in 2 files. Forgot to run Prettier?
```

2. `npm run fix`を実行することによって自動で修正できる内容に関しては修正できます。(`git add .`することを忘れずに)

3. 2.を行なってもエラーが出力される場合、該当のファイルにPrettierを適用させたり、eslintのルールに沿って修正してください。  

# Test
1. Storybook
src/component、src/feature/**/components配下にReactのコンポーネントファイルを作成する場合はMustで作成すること

`npm run storybook`で確認すること

# コーディングルール
* src/pages
1. constで変数を作成
2. export default 変数名
```
const SSG: NextPage<Props> = props => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1>Static rendered page</h1>
      <div>ssg {props.formattedDate}</div>
    </div>
  );
};

export default SSG;
```

# Gitwork flowについて検討
https://zenn.dev/matken/articles/git-branch-workflow-in-agile-for-startups
