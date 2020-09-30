# Skill Table

This project is inspired by Mr. Moko(@moko_03_25)'s project VFX Artist Skill Table.
Please check his work :https://effect.hatenablog.com/entry/2020/09/28/021100

This project has two target:
1. This project itself is a web version of Mr. Moko's VFX Artist Skill Table which allows you can test directly in your browser without excel.
2. This project is a template, which allows you to create your own skill table and share to other one.

Before sharing, please respect the copyright of Mr. Moko and me. And if you want, please tells me your version of skill table, I will add to this page.

## For Personal Info

This project is totally running in you browser only.

**No server backend, No database.**

It means I do not collect anyone's test result. If you want (for example, you are using this project in your company), please collect data by yourself.

## For Testing

If you want to do test, please access this page: https://ldl19691031.github.io/SkillTable/

## For Creating Your Own Skill Table

1. Clone this project in your local folder by 
``` 
git clone https://github.com/ldl19691031/SkillTable.git
```
2. Open data.js
3. Modify that based on your own design.

### Score

``` 
var scoreTable = {
    "A" : 20,
    "B" : 10,
    "C" : 5,
    "D" : 2,
    "E" : 1
};

```

This part defines the mapping from each level (A, B, C and so on) to the actual score number

### Category

``` 
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

```

This part defines the categories. You must make sure the next part is referencing the category defined here.

### Skill Items
Then, the next part defines every skill item. It's a huge JSON object. 

If you want, it will be much easier to modify the csv file in docs/itemTemplates.csv, and use some other tools to convert that into the JSON object. 

For me, I used https://csvjson.com/csv2json

# Some Other Things
Please forgive my poor Japanese language level. I'm not a native Japanese speaker. 

Also, please help me to improve this project. I also hope this may help your improvement of your skills.
