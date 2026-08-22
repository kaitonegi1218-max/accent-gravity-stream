# Accent GRAVITY stream

映像制作ポートフォリオサイトです。作品情報はSveltia CMSから更新できます。

## 公開URL

- HP: `https://kaitonegi1218-max.github.io/accent-gravity-stream/`
- 管理画面: `https://kaitonegi1218-max.github.io/accent-gravity-stream/admin/`

## 普段の作品更新

1. 管理画面を開きます。
2. 自分のGitHubアカウントでログインします。
3. 「ポートフォリオ」→「動画作品」を開きます。
4. 該当カテゴリーの作品を追加・修正します。
5. 保存します。
6. GitHub Pagesへの反映を数分待ちます。

動画本体はYouTubeなどにアップロードし、CMSには動画URLを登録します。GitHubへ動画ファイルを直接置かないでください。

## 共同編集

編集者はGitHubリポジトリのCollaboratorとして招待します。同じ作品データを二人で同時に編集すると競合する可能性があるため、編集前に連絡を取り合ってください。

## ファイル構成

- `index.html`: HP本体とデザイン
- `content/works.json`: CMSで管理する作品情報
- `admin/index.html`: Sveltia CMS管理画面
- `admin/config.yml`: CMSの設定
- `images/uploads/`: サムネイル画像

## 注意

- GitHubのパスワードやアクセストークンを他人に送らないでください。
- お問い合わせ先は、公開前に`index.html`内の`info@example.com`を正式なメールアドレスへ変更してください。
- デザインを変更するときは、作業用ブランチとPull Requestを利用してください。
