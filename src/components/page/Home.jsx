import React from 'react';
import '../../styles/page/Home.css';
import Kurifan from '../../images/kurifan.jpeg';
import Station from '../../images/station.jpg';
import Yakei from '../../images/yakei.jpeg';


const Home = () => {
  return (
    <div id='main'>
      <title>函館のクリスマスおすすめスポット紹介</title>
      <div id='BodyMain'>
        <article class="articleDetail">
          <h1 id="Top"> 函館おすすめ教会の紹介</h1>
          <h2 id="subtop">まずは函館のクリスマス王道おすすめスポット</h2>
          <p id="attention">注)酔っ払いながら書いているので不適切な表現があるかもしれません</p>
          <ul>
            <li id="Spot">「函館のクリスマス=クリスマスファンタジー」というほど王道のムーブ</li>
            <p id="Description">クリスマスファンタジーとは??</p>
            <p id="Description">クリスマスファンタジーは、例年北海道函館市で行われるイベント。12月1日からクリスマスである12月25日まで実施される。
          毎年カナダから贈呈される巨大なクリスマスツリーのイルミネーションが著名。</p>
            <a href="http://www.hakodatexmas.com/">詳しく知りたい方はこちら</a>
            <img id="Picture"
              title="Christmas fantasy"
              src={Kurifan}
              alt="Christmas fantasy"
            />
            <li id="Spot">函館駅前のイルミネーションもおすすめ</li>
            <p id="Description">函館駅前の広場がイルミネーションで装飾されます。期間は11/30（土）～2/29（土）です。確実にきれいにみれる時間帯が日没～22:00です。</p>
            <a href="https://event.hakobura.jp/4421"><br></br>詳しく知りたい方はこちら</a>
            <img id="Picture"
              title="Station Square"
              src={Station}
              alt="Station Square"
            />
            <li id="Spot">函館山</li>
            <p id="Description">クリスマスだからと言って特にいつもの夜景と変化はありせんがおすすめです。</p>
            <p id="Description">冬に函館の夜景をみたことがないという方には是非おすすめ！！天候に左右されやすいですが、冬の方が夏などよりも空気中のゴミなどがないのでよりきれいに見えるでしょう！</p>
            <a href={"https://334.co.jp/"}><br></br>詳しく知りたい方はこちら</a>
            <img id="Picture"
              title="Mount Hakodate"
              src={Yakei}
              alt="Mount Hakodate"
            />
          </ul>
        </article>
      </div>
      <div id="BodySub">
        <section class="eventsList">
          <h2>イベント情報</h2>
          <ul>
            <li><time datetime="2019-11-24">2019.11.24〜2019.12.25</time>
              道南いさりび鉄道夜景列車</li>
            <li><time datetime="2019-11-30">2019.11.30〜2019.12.5</time>
              はこだてクリスマスファンタジー</li>
            <p id="introduction">坂や通りを華やかにライトアップ</p>
            <li><time datetime="2019-11-30">2019.11.30〜2020.2.29</time>
              はこだてイルミネーション</li>
            <li><time datetime="2019-11-30">2019.11.30〜2020.2.29</time>
              函館駅前広場イルミネーション</li>
            <p id="introduction">漁火と函館山と海がモチーフ</p>
            <li><time datetime="2019-11-30">2019.11.30〜2020.2.29</time>
              湯の川冬の灯り</li>
          </ul>
        </section>
      </div>

    </div>
  );
}

export default Home;