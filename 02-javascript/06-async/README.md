# 2-6. 非同期処理を扱う

JavaScriptでは時間のかかる処理はほぼ非同期なのが前提

JavaScriptで考えなく処理を順番に書いてしまうと、リクエストの結果が返ってくる前に加工処理に進んで表示されたりしてしまう

JavaScriptでは、通信やローカルファイルの読み込み等の外部アクセス処理は、ほぼ断りなく非同期が前提

Reactコンポーネントのレンダリングも非同期。前処理が終わったものからほかを待たずに表示されていく

非同期処理のプロセスを待ってもらうやり方 -> ES6から導入された `Promise` 構文

ES2018から、例外のあるなしに関わらず最後に必ず実行される `finally` も使えるよういなった

`then()` のメソッドチェーンはあまり見やすい構文ではない

ES2017から **async/await** 構文が導入された

**async/await** は `Promise構文` のシンタックスシュガー

Async関数は隠されているだけで暗黙のうちにPromiseオブジェクトを返している

----

>「async で定義された Async 関数は、本文中に await を前置きすることで、他の Async 関数の実行結果を待ってくれるようになるの」


>「あれ? でもここの sleep() は Async 関数じゃないのでは?」


>「さすが目のつけどころがいいねー。察しがよくて助かるよ。そう、async/await は実のところ Promise 構文のシンタックスシュガー*4 なの。Async 関数は隠されてるだけで暗黙のうちに Promise オブジェク トを返してるの」

`sleep()` 関数はAsync関数じゃない  
->`async/await` はPromise構文のシンタックスシュガーである、Async関数は暗黙のうちにPromiseオブジェクトを返している  
-> はー、なるほど

となるかどうか。  
sleep() 関数がAsync関数じゃないのに、awaitで関数の実行結果を待ってくれるのはなぜか、の説明が不足しているように思う


[JavaScript Promiseの本:await式](https://azu.github.io/promises-book/#__code_await_code_式)

>await式はAsync Function内でのみ利用できます。 await式は右辺のPromiseインスタンスがFulfilledまたはRejectedになるまで、その行（文）で非同期処理の完了を待ちます。 そしてPromiseインスタンスの状態が変わると、次の行（文）から処理を再開します。