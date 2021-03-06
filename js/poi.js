var start_pox_x;
var end_pox_x;

$(document).ready(function(){
	datas = [
    {
      "title":"松江城",
      "info":"城下町松江のシンボルとして親しまれている松江城です。",
      "image":"http://www.kankou-matsue.jp/kankou/kankoushisetu/matsuejyou.data/matsuejyo.jpg",
      "latitude":"35.475067",
      "longitude":"133.050724",
      "rank":1
    },
    {
      "title":"堀川遊覧船",
      "info":"松江城を取り囲む堀川を観光できる遊覧船です。冬はこたつ船になります。",
      "image":"http://www.kankou-matsue.jp/kankou/norimono/horikawa-meguri.data/horikawa-meguri__001.jpg",
      "latitude":"35.478266",
      "longitude":"133.046035",
      "rank":2
    },
    {
      "title":"松江のゼロ磁場",
      "info":"N極とS極の磁気がお互いに打ち消しあった場所です。パワースポットです。日本に数カ所しかありません！！",
      "image":"http://www.hotel-nagata.co.jp/wp/wp-content/uploads/2010/11/rie-001.jpg",
      "latitude":"35.469847",
      "longitude":"133.037351",
      "rank":3
    },
    {
      "title":"マクドナルド　松江店",
      "info":"ハンバーガー屋さんです。松江にもあります。ちなみに安来店は閉店しました。",
      "image":"http://image1-3.tabelog.k-img.com/restaurant/images/Rvw/35763/640x640_rect_35763301.jpg",
      "latitude":"35.473171",
      "longitude":"133.065053",
      "rank":2
    },
    {
      "title":"ローソン　上乃木店",
      "info":"松江でも超有名なお店です。有名な理由はご想像にお任せします。どなたかの身内のお店です。宜しくお願いします。",
      "image":"http://prtimes.jp/i/2380/6/resize/14407584f6b305257d7977db7a4909ef.jpg",
      "latitude":"35.444381",
      "longitude":"133.058336",
      "rank":3
    },
    {
      "title":"株式会社　システムリンク",
      "info":"なんでもできる会社です。（一部、ご期待に添えない場合があります。）画像は、国会議事堂です。会社とは関係ありません。",
      "image":"http://livedoor.blogimg.jp/g2009h/imgs/9/f/9f26b0e8.jpg",
      "latitude":"35.444720",
      "longitude":"133.058147",
      "rank":3
    },
    {
      "title":"植田正治写真美術館",
      "info":"松江ではありませんが福山雅治氏　師匠（写真家）の美術館です",
      "image":"http://3.bp.blogspot.com/_JHKqfsEPLyg/TIHYKcESi4I/AAAAAAAAAV8/1e8D2DV0toc/s1600/R0019281.JPG",
      "latitude":"35.389886",
      "longitude":"133.435751",
      "rank":2
    },
    {
      "title":"べたぶみ坂",
      "info":"途中まで松江の江島大橋です。（途中から境港市）テレビ　CMで有名になりました。",
      "image":"http://blog.zige.jp/resources/member/001/647/1349767/large/zpRt6OYS.jpg",
      "latitude":"35.519092",
      "longitude":"133.199813",
      "rank":1
    },
    {
      "title":"スターバックス　シャミネ松江店",
      "info":"ニュースで話題になりました。現在は、落ち着いております。",
      "image":"http://kentasaka.hungry.jp/star/wp-content/uploads/2015/04/14294290458060.jpg",
      "latitude":"35.464066",
      "longitude":"133.064243",
      "rank":2
    },
    {
      "title":"片側二車線道路",
      "info":"田舎でも片側二車線道路は「あります。！！」",
      "image":"http://www.cgr.mlit.go.jp/matsukoku/kanri_cctv/cam_image/08010003200312.jpg",
      "latitude":"35.438898",
      "longitude":"133.052653",
      "rank":3
    },
    {
      "title":"大根島の廃船",
      "info":"現在は、撤去されました。一部残っている物もあります。",
      "image":"http://abbkbb.up.n.seesaa.net/abbkbb/bw_uploads/20100904193423IMGP6792.jpg?d=a0",
      "latitude":"35.493503",
      "longitude":"133.161021",
      "rank":3
    },
    {
      "title":"黄泉比良坂（よもつひらさか）",
      "info":"伝説では、黄泉の国への入り口があるそうです。（ミステリー	ゾーンです。）訳あって画像は、載せらせません。ガクガクブルブル。",
      "image":"http://abbkbb.up.n.seesaa.net/abbkbb/bw_uploads/20091123230924K20D0671.jpg?d=a0",
      "latitude":"35.427762",
      "longitude":"133.162117",
      "rank":3
    },
    {
      "title":"平田の鬼太郎",
      "info":"松江ではありません。画像はシュールですが平田一式飾と言った競技会があるみたいです。",
      "image":"http://abbkbb.up.n.seesaa.net/abbkbb/bw_uploads/DSC01164_R.jpg?d=a0",
      "latitude":"35.434967",
      "longitude":"132.822258",
      "rank":3
    },
    {
      "title":"松江大橋",
      "info":"白砂青松の庭園と宍道湖、松江大橋の眺めだそうです。（皆美館）",
      "image":"http://3.bp.blogspot.com/_sAgkZSGlx1A/TAEDsBzjqZI/AAAAAAAAESw/TrJ1jwhP-M8/s1600/CIMG8426.JPG",
      "latitude":"35.468762",
      "longitude":"133.054116",
      "rank":2
    },
    {
      "title":"ぼてぼて茶",
      "info":"へるんの小径（へるんのこみち）　松江市にある甘味処です。",
      "images": [
        "https://lh3.googleusercontent.com/-uP9UBDMyIsM/UU1ERsL7uKI/AAAAAAAAyyU/gLIL-ST9VUw/w1600-h1200/IMG_20130323_144515.jpg",
        "http://livedoor.blogimg.jp/simauma_in_canada/imgs/6/b/6b1092bb.jpg"
      ],
      "latitude":"35.477303",
      "longitude":"133.049121",
      "rank":2
    },
    {
      "title":"松江の夕日",
      "info":"綺麗でしょ。おすすめです。",
      "images": [
        "http://find-travel.cdn-dena.com/picture/articlebody/48991",
        "http://www.shimane19.net/shichoson/uploads/matsue_3.jpg",
        "http://find-travel.cdn-dena.com/picture/articlebody/45242",
        "http://find-travel.cdn-dena.com/picture/articlebody/45262"
      ],
      "latitude":"35.460276",
      "longitude":"133.052238",
      "rank":1
    },
    {
      "title":"いずもまがたまの里 伝承館",
      "info":"きれいな宝石などが購入できます。おみやげにいかがですか。「宝探し体験館」でお宝が見つかるかも。",
      "image":"http://blog-imgs-32.fc2.com/r/o/b/robamama/IMGP8682.jpg",
      "latitude":"35.431988",
      "longitude":"133.005336",
      "rank":2
    },
    {
      "title":"松江フォーゲルパーク",
      "info":"花と鳥の楽園。お子様にも大人も楽しめるかも。",
      "image":"http://find-travel.cdn-dena.com/picture/articlebody/45454",
      "latitude":"35.474918",
      "longitude":"132.943953",
      "rank":1
    },
    {
      "title":"加賀の潜戸",
      "info":"洞門が有名で「加賀の潜戸」と呼ばれています。マリンプラザしまねから潜戸観光遊覧船で周遊できます。",
      "image":"http://2.bp.blogspot.com/_d-mlcm-zkzE/TKZ5IEzNgsI/AAAAAAAABnA/Dn8SK6XMowE/s1600/IMG_3109SS.jpg",
      "latitude":"35.563987",
      "longitude":"133.054856",
      "rank":2
    }];
  datas = shuffle(datas);
  datas.push({
    "title":"もうないよ",
    "info":"また来週見てみてね",
    "image":"img/last.jpg"
  });

	// datas.sort(function(val1,val2){
	//     var val1 = val1.rank;
	//     var val2 = val2.rank;
	//     if( val1 < val2 ) {
	// 	return 1;
	//     } else {
	// 	return -1;
	//     }
	// });
	var index = 0;
  poi(datas[index]);
  createjs.Sound.registerSound("audio/next.ogg", "next");
	$("#next").click(function(){
		createjs.Sound.play("next");
    index++;
    $("#panel-footer").show();
    if (index === datas.length) {
      index = 0;
    }
    poi(datas[index]);
	});
/**
	* タップ、スワイプ、指を離した時のイベントハンドラ
	*/
	$("#view").bind("touchstart", TouchStart);
	$("#view").bind("touchmove" , TouchMove);
	$("#view").bind("touchend" , TouchLeave);

	/**
	 *  タップした位置をメモリーする
	 */
	 function TouchStart( event ) {
		var pos = Position(event);
		start_pox_x = pos.x
    end_pox_x = pos.x
	 }

	/**
	 * スワイプ
	 * タップした位置からプラスかマイナスかで左右移動を判断
	 */
	function TouchMove( event ) {
    var pos = Position(event);
    end_pox_x = pos.x;
	}

	/*
	* 指を離す
	*/
	function TouchLeave( event ) {
		if( start_pox_x - 50 > end_pox_x ){
			$("#next").click();
		}
	}
	/*
	* 現在位置を得る
	*/
	function Position(e){
		var x = e.originalEvent.touches[0].pageX;
		var y = e.originalEvent.touches[0].pageY;
		x = Math.floor(x);
		y = Math.floor(y);
		var pos = {'x':x , 'y':y};
		return pos;
	}
});

function poi(test){
  $("#title").text(test.title);
  $("#info").text(test.info);
  $("#images img").remove();
  var image_template = _.template($("#image_template").html());
  if (typeof test.images !== "undefined") {
    _.each(test.images, function (url) {
      $("#images").append(image_template({url: url}));
    });
  }
  if (typeof test.image !== "undefined") {
    $("#images").append(image_template({url: test.image}));
  }
  var centerPosition = new google.maps.LatLng(test.latitude, test.longitude);
  var option = {
        zoom : 15,
        center : centerPosition,
        mapTypeId : google.maps.MapTypeId.ROADMAP
    };
  //地図本体描画
  var googlemap = new google.maps.Map(document.getElementById("mapField"), option);
  //  $("div[class~='panel-heading']").val(test.title);
  //マーカーオプションの指定
  var markerOption = {
      position : centerPosition, //マーカーを表示させる座標
      map : googlemap,  //マーカーを表示させる地図
      title : test.title
  };

  //マーカー追加
  var marker = new google.maps.Marker(markerOption);
};

function shuffle(array) {
  var n = array.length, t, i;

  while (n) {
    i = Math.floor(Math.random() * n--);
    t = array[n];
    array[n] = array[i];
    array[i] = t;
  }

  return array;
}
