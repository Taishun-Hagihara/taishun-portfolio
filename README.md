# Taishun Portfolio Website（公開サイト）

**本番URL**：https://taishun-portfolio.com

---

## 初めに
本リポジトリは、私の **ポートフォリオWebサイト** です。  
学習・開発してきた内容（React / Tailwindcss / AWSデプロイ /Git・GitHub など）を、応募先の採用担当者が短時間で理解できるように整理する目的で制作しました。

作品（Projects）だけでなく、私の背景（大学・活動）や、学習方針・強みが伝わる構成を意識しています。

---

## コンセプト
- **初見でも30秒で「何ができる人か」が伝わるポートフォリオ**
- **作品は “作った” で終わらせず、工夫・学び・再現性が分かる見せ方にする**

---

## 概要
### 公開ページ
- Home：それぞれのページの要約
- About：私について(エンジニアとしての経験がないため情報が少ない / 今後更新予定)
- Projects / Works：制作物を掲載（Demo / GitHub への導線）
- Contact：連絡先（メール / Instagram / GitHub など）

### 主なUI/機能
- レスポンシブ対応（PC / Mobile）
- Reactによるルーティング
- ライブラリ使用によるInstagram、GitHubのボタン
  

---

## デモ画像
(準備中)


---

## 使用技術一覧
### Frontend
- React
- Vite
- Tailwind CSS
- React Router


### Infrastructure / Deploy
- AWS S3（静的ホスティング）
- AWS CloudFront
- AWS Route 53（独自ドメイン）
- AWS ACM（HTTPS証明書）

### Tools
- Git / GitHub

---

## 学んだこと
- **ReactでのUI設計（コンポーネント分割 / props / state）** を実践し、見せたい情報を整理して実装できるようになりました。
- **AWS（S3/CloudFront/Route53/ACM）での公開** を通して、フロントエンド開発とインフラのつながりを理解しました。
- Git・GitHubを用いて開発するということを体験的に理解しました。

---

## 構成（アーキテクチャ）
- Browser → **CloudFront** → **S3**（静的配信 / 独自ドメイン / HTTPS）

---
## 今後の実装予定
- GitHub Actionsを用いてpushをトリガーに自動ビルドし、生成物を S3へ自動デプロイできるようにしたいと考えている。

