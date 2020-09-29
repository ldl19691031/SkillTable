var scoreTable = {
    "A" : 20,
    "B" : 10,
    "C" : 5,
    "D" : 2,
    "E" : 1
};
var categories = [
    "テクスチャ",
    "モデリング",
    "ダイナミクス",
    "プログラム",
    "ツール",
    "絵作り",
    "システム",
    "ヒューマンスキル",
    "一般教養"
];
var skillTableData = [
    {
      "name": "発光系（フラッシュやレンズフレアなど）",
      "score": "C",
      "target": "B",
      "comment": "",
      "category": "テクスチャ",
      "id": 0
    },
    {
      "name": "フラクタル系（ノイズやオーラなど）",
      "score": "C",
      "target": "B",
      "comment": "",
      "category": "テクスチャ",
      "id": 1
    },
    {
      "name": "材質系（岩や草など）",
      "score": "D",
      "target": "B",
      "comment": "",
      "category": "テクスチャ",
      "id": 2
    },
    {
      "name": "不定形（煙や炎や液体など）",
      "score": "D",
      "target": "B",
      "comment": "アニメーション・ループアニメーションのものを作成できるかも含む",
      "category": "テクスチャ",
      "id": 3
    },
    {
      "name": "特殊系（ベクトルマップなど）",
      "score": "E",
      "target": "C",
      "comment": "",
      "category": "テクスチャ",
      "id": 4
    },
    {
      "name": "手描きアニメ系（煙や炎や液体など）",
      "score": "E",
      "target": "E",
      "comment": "",
      "category": "テクスチャ",
      "id": 5
    },
    {
      "name": "ポリゴンモデリング",
      "score": "D",
      "target": "C",
      "comment": "",
      "category": "モデリング",
      "id": 6
    },
    {
      "name": "アニメーション",
      "score": "E",
      "target": "D",
      "comment": "",
      "category": "モデリング",
      "id": 7
    },
    {
      "name": "プロシージャルモデリング",
      "score": "E",
      "target": "D",
      "comment": "",
      "category": "モデリング",
      "id": 8
    },
    {
      "name": "リジッドボディ（破砕）",
      "score": "E",
      "target": "D",
      "comment": "",
      "category": "ダイナミクス",
      "id": 9
    },
    {
      "name": "ソフトボディ（布、変形モノ）",
      "score": "E",
      "target": "D",
      "comment": "",
      "category": "ダイナミクス",
      "id": 10
    },
    {
      "name": "フルイド - 炎",
      "score": "E",
      "target": "D",
      "comment": "",
      "category": "ダイナミクス",
      "id": 11
    },
    {
      "name": "フルイド - 煙",
      "score": "E",
      "target": "D",
      "comment": "",
      "category": "ダイナミクス",
      "id": 12
    },
    {
      "name": "フルイド - 爆発",
      "score": "E",
      "target": "D",
      "comment": "",
      "category": "ダイナミクス",
      "id": 13
    },
    {
      "name": "フルイド - 水",
      "score": "E",
      "target": "D",
      "comment": "",
      "category": "ダイナミクス",
      "id": 14
    },
    {
      "name": "マテリアル（ノードベース）",
      "score": "C",
      "target": "C",
      "comment": "Maya・Houdini・Blender・Unity・UE4などによるマテリアル作成",
      "category": "プログラム",
      "id": 15
    },
    {
      "name": "HLSL / GLSL",
      "score": "E",
      "target": "E",
      "comment": "ウェブ上やゲームエンジン上でのシェーダー作成・DCCツール上のプレビュー周り",
      "category": "プログラム",
      "id": 16
    },
    {
      "name": "MEL",
      "score": "E",
      "target": "D",
      "comment": "Maya上のツール作成",
      "category": "プログラム",
      "id": 17
    },
    {
      "name": "Python",
      "score": "E",
      "target": "D",
      "comment": "DCCツール上やゲームエンジン上のツール作成",
      "category": "プログラム",
      "id": 18
    },
    {
      "name": "JavaScript",
      "score": "E",
      "target": "D",
      "comment": "Adobe製品上のツール作成など",
      "category": "プログラム",
      "id": 19
    },
    {
      "name": "C#",
      "score": "C",
      "target": "C",
      "comment": "スタンドアロンツール作成（Unityでのゲームロジック等の実装にも？）",
      "category": "プログラム",
      "id": 20
    },
    {
      "name": "VBA",
      "score": "D",
      "target": "D",
      "comment": "マクロを組んでエクセル作成の効率化を図ったり機能的なものにできる",
      "category": "プログラム",
      "id": 21
    },
    {
      "name": "BluePrint（UE4 / ノードベース）",
      "score": "E",
      "target": "D",
      "comment": "ノードベースでゲームロジック実装やエディタ拡張など",
      "category": "プログラム",
      "id": 22
    },
    {
      "name": "マテリアル（ノードベース）",
      "score": "C",
      "target": "C",
      "comment": "Maya・Houdini・Blender・Unity・UE4などによるマテリアル作成",
      "category": "プログラム",
      "id": 23
    },
    {
      "name": "HLSL / GLSL",
      "score": "E",
      "target": "E",
      "comment": "ウェブ上やゲームエンジン上でのシェーダー作成・DCCツール上のプレビュー周り",
      "category": "プログラム",
      "id": 24
    },
    {
      "name": "MEL",
      "score": "E",
      "target": "D",
      "comment": "Maya上のツール作成",
      "category": "プログラム",
      "id": 25
    },
    {
      "name": "Python",
      "score": "E",
      "target": "D",
      "comment": "DCCツール上やゲームエンジン上のツール作成",
      "category": "プログラム",
      "id": 26
    },
    {
      "name": "JavaScript",
      "score": "E",
      "target": "D",
      "comment": "Adobe製品上のツール作成など",
      "category": "プログラム",
      "id": 27
    },
    {
      "name": "C#",
      "score": "C",
      "target": "C",
      "comment": "スタンドアロンツール作成（Unityでのゲームロジック等の実装にも？）",
      "category": "プログラム",
      "id": 28
    },
    {
      "name": "VBA",
      "score": "D",
      "target": "D",
      "comment": "マクロを組んでエクセル作成の効率化を図ったり機能的なものにできる",
      "category": "プログラム",
      "id": 29
    },
    {
      "name": "BluePrint（UE4 / ノードベース）",
      "score": "E",
      "target": "D",
      "comment": "ノードベースでゲームロジック実装やエディタ拡張など",
      "category": "プログラム",
      "id": 30
    },
    {
      "name": "Photoshop",
      "score": "D",
      "target": "D",
      "comment": "",
      "category": "ツール",
      "id": 31
    },
    {
      "name": "Illustrator",
      "score": "E",
      "target": "E",
      "comment": "",
      "category": "ツール",
      "id": 32
    },
    {
      "name": "After Effects",
      "score": "D",
      "target": "D",
      "comment": "",
      "category": "ツール",
      "id": 33
    },
    {
      "name": "Maya",
      "score": "E",
      "target": "D",
      "comment": "",
      "category": "ツール",
      "id": 34
    },
    {
      "name": "Substance Designer",
      "score": "E",
      "target": "C",
      "comment": "",
      "category": "ツール",
      "id": 35
    },
    {
      "name": "Houdini",
      "score": "E",
      "target": "D",
      "comment": "",
      "category": "ツール",
      "id": 36
    },
    {
      "name": "ZBrush",
      "score": "E",
      "target": "E",
      "comment": "",
      "category": "ツール",
      "id": 37
    },
    {
      "name": "FumeFX",
      "score": "E",
      "target": "E",
      "comment": "",
      "category": "ツール",
      "id": 38
    },
    {
      "name": "Realflow",
      "score": "E",
      "target": "E",
      "comment": "",
      "category": "ツール",
      "id": 39
    },
    {
      "name": "EmberGen",
      "score": "E",
      "target": "C",
      "comment": "",
      "category": "ツール",
      "id": 40
    },
    {
      "name": "Cascade",
      "score": "D",
      "target": "D",
      "comment": "",
      "category": "ツール",
      "id": 41
    },
    {
      "name": "Niagara",
      "score": "E",
      "target": "C",
      "comment": "",
      "category": "ツール",
      "id": 42
    },
    {
      "name": "内製エフェクトツール",
      "score": "D",
      "target": "D",
      "comment": "",
      "category": "ツール",
      "id": 43
    },
    {
      "name": "その他の様々なツール",
      "score": "E",
      "target": "E",
      "comment": "",
      "category": "ツール",
      "id": 44
    },
    {
      "name": "色彩",
      "score": "D",
      "target": "C",
      "comment": "タイトルに合った配色ができる・配色を提示できる・心理への影響を考慮できる",
      "category": "絵作り",
      "id": 45
    },
    {
      "name": "デザイン",
      "score": "D",
      "target": "C",
      "comment": "タイトルに合ったデザインができる（小物・魔法陣・ロゴなど）・独創性のあるデザインができる",
      "category": "絵作り",
      "id": 46
    },
    {
      "name": "エフェクト - キャラ",
      "score": "C",
      "target": "B",
      "comment": "標準機能を扱える・タイトルに応じた絵作り（コミカル/リアルなど）・演出・クオリティ高い映画やアニメレベルの表現ができる",
      "category": "絵作り",
      "id": 47
    },
    {
      "name": "エフェクト - 背景",
      "score": "D",
      "target": "B",
      "comment": "標準機能を扱える・タイトルに応じた絵作り（コミカル/リアルなど）・演出・クオリティ高い映画やアニメレベルの表現ができる",
      "category": "絵作り",
      "id": 48
    },
    {
      "name": "エフェクト - カットシーン",
      "score": "D",
      "target": "B",
      "comment": "標準機能を扱える・タイトルに応じた絵作り（コミカル/リアルなど）・演出・クオリティ高い映画やアニメレベルの表現ができる",
      "category": "絵作り",
      "id": 49
    },
    {
      "name": "ライティング",
      "score": "E",
      "target": "D",
      "comment": "標準機能を扱える・露出や光学現象を理解している・演出を理解・クオリティ高い映画やアニメレベルの表現ができる",
      "category": "絵作り",
      "id": 50
    },
    {
      "name": "ポストエフェクト",
      "score": "D",
      "target": "C",
      "comment": "標準機能を扱える・自作できる・光学現象も理解している・クオリティ高い映画やアニメレベルの表現ができる",
      "category": "絵作り",
      "id": 51
    },
    {
      "name": "カメラワーク",
      "score": "E",
      "target": "D",
      "comment": "カメラの仕様（画角や焦点距離など）を理解している・レイアウトや演出を理解・クオリティ高い映画やアニメレベルの表現ができる",
      "category": "絵作り",
      "id": 52
    },
    {
      "name": "プラットフォーム",
      "score": "D",
      "target": "D",
      "comment": "対象プラットフォームのスペックや特徴の把握・メモリ量とその配分への理解など",
      "category": "システム",
      "id": 53
    },
    {
      "name": "グラフィックス",
      "score": "C",
      "target": "C",
      "comment": "ディファード/フォワード含めた描画やライティング、ポストプロセスの工程の理解・セルルックなど各種表現の概要の理解",
      "category": "システム",
      "id": 54
    },
    {
      "name": "ロード",
      "score": "D",
      "target": "D",
      "comment": "アセットのロード/アンロードやガベージコレクションなどの理解・テクスチャストリーミングやミップマップなどの理解",
      "category": "システム",
      "id": 55
    },
    {
      "name": "プロファイル",
      "score": "D",
      "target": "D",
      "comment": "対象ハードのプロファイラを使ってどういった要素がネックになっているか調べられる・適切なアプローチでデータの最適化ができる",
      "category": "システム",
      "id": 56
    },
    {
      "name": "モラル",
      "score": "C",
      "target": "C",
      "comment": "常識人であるか‥MTG等の時間が守れる・感情が抑制できる・レスポンス良くやり取りできる・大事な場面で慎重に行動できるなど",
      "category": "ヒューマンスキル",
      "id": 57
    },
    {
      "name": "コミュニケーション",
      "score": "D",
      "target": "C",
      "comment": "報連相・伝える能力・聞き取る能力・説得や交渉できる力・物怖じしない",
      "category": "ヒューマンスキル",
      "id": 58
    },
    {
      "name": "他セクションとの連携",
      "score": "D",
      "target": "C",
      "comment": "セクションを超えて相談や協力ができる・コンセンサスを取れる・取捨選択や責任の所在を明確化する・取りまとめられる",
      "category": "ヒューマンスキル",
      "id": 59
    },
    {
      "name": "成長や改善に対する意欲と実行力",
      "score": "C",
      "target": "B",
      "comment": "新しいスキルの習得、自己やチームの環境改善に対する意識と実際にそれを実行しているか",
      "category": "ヒューマンスキル",
      "id": 60
    },
    {
      "name": "主体性",
      "score": "C",
      "target": "C",
      "comment": "自主的に発案、提案、他の人へのフォローができる",
      "category": "ヒューマンスキル",
      "id": 61
    },
    {
      "name": "ワークフロー",
      "score": "C",
      "target": "B",
      "comment": "誰でもできる作業手順に落とし込む・ドキュメント化や共有まで込み",
      "category": "ヒューマンスキル",
      "id": 62
    },
    {
      "name": "パイプライン",
      "score": "C",
      "target": "B",
      "comment": "ミスを防いだり楽に管理する・分かりやすいものにする・補助ツールの考案・ドキュメント化や共有まで込み",
      "category": "ヒューマンスキル",
      "id": 63
    },
    {
      "name": "レギュレーション",
      "score": "C",
      "target": "C",
      "comment": "ルールを決めて守られるようにする・分かりやすいものに・ドキュメント化や共有まで込み",
      "category": "ヒューマンスキル",
      "id": 64
    },
    {
      "name": "スケジューリング",
      "score": "D",
      "target": "C",
      "comment": "タスク管理・マイルストーン設定・スケジューリング・タスクの配分・人員のアサイン",
      "category": "ヒューマンスキル",
      "id": 65
    },
    {
      "name": "検証",
      "score": "D",
      "target": "C",
      "comment": "新しいツールや機能や表現を試す・ゴールやマイルストーンの設定・ワークフロー落とし込み・ドキュメント化や共有まで込み",
      "category": "ヒューマンスキル",
      "id": 66
    },
    {
      "name": "ナレッジ",
      "score": "B",
      "target": "B",
      "comment": "ドキュメントにまとめたり動画にしたり口頭で共有したり・情報が最新に保たれるよう保守・読みやすさを追求",
      "category": "ヒューマンスキル",
      "id": 67
    },
    {
      "name": "育成・コーチング・リード",
      "score": "D",
      "target": "C",
      "comment": "チームメンバーの知識やスキルの底上げ・目的意識を引き出す・ゴールを提示する・モチベーションを管理する",
      "category": "ヒューマンスキル",
      "id": 68
    },
    {
      "name": "クオリティチェック",
      "score": "D",
      "target": "C",
      "comment": "PJ方針（ディレクターやアートD）とのコンセンサス・チェックラインの提示・軸をブラさない・チェックで論理的な説明ができる",
      "category": "ヒューマンスキル",
      "id": 69
    },
    {
      "name": "全社貢献",
      "score": "D",
      "target": "C",
      "comment": "社内でのセクションやプロジェクトを超えた情報共有・プロジェクト間連携・プロジェクトに依存しない組織運営・全社的課題解決",
      "category": "ヒューマンスキル",
      "id": 70
    },
    {
      "name": "業界貢献",
      "score": "C",
      "target": "B",
      "comment": "社外での情報発信・学校や学生さんとのコミュニケーション・業界レベルでの課題解決",
      "category": "ヒューマンスキル",
      "id": 71
    },
    {
      "name": "数学",
      "score": "E",
      "target": "D",
      "comment": "中学の数学・線形代数（三角関数・内積・外積・微分・積分・行列）・業務への応用",
      "category": "一般教養",
      "id": 72
    },
    {
      "name": "英語",
      "score": "E",
      "target": "D",
      "comment": "英語UIツールの扱い・英文のドキュメントの理解・GDCの講演動画の理解・業務への応用・海外の開発者とのやり取り",
      "category": "一般教養",
      "id": 73
    },
    {
      "name": "化学",
      "score": "E",
      "target": "D",
      "comment": "自然現象・物理現象の理解・業務への応用",
      "category": "一般教養",
      "id": 74
    },
    {
      "name": "歴史",
      "score": "E",
      "target": "D",
      "comment": "人類の歴史・文化や文明・建築様式・地理・戦争や兵器の歴史・業務への応用",
      "category": "一般教養",
      "id": 75
    },
    {
      "name": "美術史",
      "score": "E",
      "target": "D",
      "comment": "主に西洋美術の様々な様式と特徴の理解・業務への応用",
      "category": "一般教養",
      "id": 76
    }
   ];

