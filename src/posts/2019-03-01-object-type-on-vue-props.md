---
layout: post
title: Vue.jsでObject型のPropsにTypeScriptの型を割り当てる
categories: js TypeScript
alert: この記事は古いしVue 2の解説である。賢明なる読者諸君はオフィシャルドキュメントを参照しよう。コードレビューで怒られても知らんぞ！！
---

Vue.jsのPropsはObjectを渡せるので、コンポーネントに情報の塊を渡すことができて便利。型指定すると以下のようになる。

```js
const person = {
  first_name: 'Masami',
  last_name: 'Asai'
};

Vue.extend({
  name: 'personal-info',
  props: {
    person: {
      type: Object
    },
  },
});

<personal-info v-bind:person="person" />

```

👆のコードはTypeScriptでもObject型として通用する。しかし、Objectではanyすぎる。別途定義した型を使いたい。それでどう書くか。

```ts
interface Person {
  first_name: string;
  last_name: string;
}

Vue.extend({
  name: 'personal-info',
  props: {
    person: {
      type: Object as () => Person,
    },
  },
});

const person: Person = {
  first_name: 'Masami',
  last_name: 'Asai'
};

<personal-info v-bind:person="person" />

```

これでよし。ちがう型のObjectを渡すと当然TypeScriptに怒られる。中年になると怒られることもなくなるので、たまには怒られてみるのもいいかも。

---

**追記**

`Vue.PropType`を使おう。

```ts
interface Person {
  first_name: string;
  last_name: string;
}

Vue.extend({
  name: 'personal-info',
  props: {
    person: {
      type: Object as Vue.PropType<Person>,
    },
  },
});

const person: Person = {
  first_name: 'Masami',
  last_name: 'Asai'
};
```

### ご参考に

* [Vue + TypeScriptでpropsのObjectやArrayに型をつける](https://qiita.com/iMasanari/items/31d8a26c7ee22793585c)
* [Using a Typescript interface or type as a prop type in VueJS](https://frontendsociety.com/using-a-typescript-interfaces-and-types-as-a-prop-type-in-vuejs-508ab3f83480)
