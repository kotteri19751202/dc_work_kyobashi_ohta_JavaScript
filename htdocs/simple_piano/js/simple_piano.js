//============================================================
//------------------------------------------------------------
// 簡易ピアノ
//------------------------------------------------------------
//============================================================

//============================================================
// 定義関連
//============================================================

// 各種文字列
const CUURENT_SOUND_DEFAULT_NAME = "　";			// 現在の音階のデフォルト文字列
const AUTO_PLAY_BUTTON_PLAY_STR = "自動演奏";	// 自動演奏ボタンの自動演奏文字列
const AUTO_PLAY_BUTTON_STOP_STR = "演奏停止";	// 自動演奏ボタンの演奏停止文字列
const AUTO_PLAY_INFO_STR = "自動演奏中です：";	// 自動演奏情報文字列


const PLAY_TIME_MANUAL = 1000;	// 手動演奏時の再生時間
const SOUND_KEY_REST = "key_R";	// 休符文字列

// 演奏モード列挙型
const ePlayMode = 
{
	manual	: 1,
	auto	: 2,
};

// 音関連の設定値
const PLAY_TONE_VOL = 0.5;					// ボリューム
const PLAY_TONE_EXPONENTIAL = 0.001;		// 音の指数変化値
const PLAY_TONE_PLAY_TIME_ADJUST_VAL = 1;	// 音を鳴らす時間の調整時間


//============================================================
// 音楽データマネージャクラス
//============================================================
class CMusicDataMgr
{
	// コンストラクタ
	constructor()
	{
		// 音楽データ連想配列
		this.m_arrMusicData =
		[
			// きらきら星 ---------------------------------------------
			{ 
				"iMusicID" : 0, 
				"strMusicName" : "きらきら星",
				"arrSoundData" : 
				[
					{ "strSoundKey" : "key_C", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_C", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },						
					{ "strSoundKey" : "key_G", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_G", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },

					{ "strSoundKey" : "key_A", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_A", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_G", "iPlayTime" : 2000 },

					{ "strSoundKey" : "key_F", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_F", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },						
					{ "strSoundKey" : "key_E", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_E", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },

					{ "strSoundKey" : "key_D", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_D", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_C", "iPlayTime" : 2000 },


					{ "strSoundKey" : "key_G", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_G", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },						
					{ "strSoundKey" : "key_F", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_F", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },

					{ "strSoundKey" : "key_E", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_E", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_D", "iPlayTime" : 2000 },

					{ "strSoundKey" : "key_G", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_G", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },						
					{ "strSoundKey" : "key_F", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_F", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },

					{ "strSoundKey" : "key_E", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_E", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_D", "iPlayTime" : 2000 },


					{ "strSoundKey" : "key_C", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_C", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },						
					{ "strSoundKey" : "key_G", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_G", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },

					{ "strSoundKey" : "key_A", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_A", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_G", "iPlayTime" : 2000 },

					{ "strSoundKey" : "key_F", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_F", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },						
					{ "strSoundKey" : "key_E", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_E", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },

					{ "strSoundKey" : "key_D", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_D", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_C", "iPlayTime" : 4000 },
				]
			},
			// チューリップ --------------------------------------
			{ 
				"iMusicID" : 1, 
				"strMusicName" : "チューリップ",
				"arrSoundData" : 
				[
					{ "strSoundKey" : "key_C", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_D", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_E", "iPlayTime" : 1000 },
					{ "strSoundKey" : "key_C", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_D", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_E", "iPlayTime" : 1000 },

					{ "strSoundKey" : "key_G", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_E", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_D", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_C", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_D", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_E", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_D", "iPlayTime" : 1000 },

					{ "strSoundKey" : "key_C", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_D", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_E", "iPlayTime" : 1000 },
					{ "strSoundKey" : "key_C", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_D", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_E", "iPlayTime" : 1000 },

					{ "strSoundKey" : "key_G", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_E", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_D", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_C", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_D", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_E", "iPlayTime" : 500 },
					{ "strSoundKey" : "key_C", "iPlayTime" : 1000 },

					{ "strSoundKey" : "key_G", "iPlayTime" : 250 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 250 },
					{ "strSoundKey" : "key_G", "iPlayTime" : 250 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 250 },
					{ "strSoundKey" : "key_E", "iPlayTime" : 250 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 250 },
					{ "strSoundKey" : "key_G", "iPlayTime" : 250 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 250 },
					{ "strSoundKey" : "key_A", "iPlayTime" : 250 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 250 },
					{ "strSoundKey" : "key_A", "iPlayTime" : 250 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 250 },
					{ "strSoundKey" : "key_G", "iPlayTime" : 1000 },
					
					{ "strSoundKey" : "key_E", "iPlayTime" : 250 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 250 },
					{ "strSoundKey" : "key_E", "iPlayTime" : 250 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 250 },
					{ "strSoundKey" : "key_D", "iPlayTime" : 250 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 250 },
					{ "strSoundKey" : "key_D", "iPlayTime" : 250 },
					{ "strSoundKey" : "key_R", "iPlayTime" : 250 },
					{ "strSoundKey" : "key_C", "iPlayTime" : 4000 },
				]
			},
		]
	}

	//-------------------------------------------------------
	// 音楽データ数取得
	//-------------------------------------------------------
	getMusicDataNum = () =>
	{ 
		return this.m_arrMusicData.length; 
	}

	//-------------------------------------------------------
	// 音楽データ取得
	//-------------------------------------------------------
	getMusicData = ( iMusicID ) =>
	{ 
		return this.m_arrMusicData[ iMusicID ]; 
	}
}

//============================================================
// オーディオマネージャクラス（実際に音を鳴らす）
//============================================================
class CAudioMgr
{
	// コンストラクタ
	constructor()
	{
		// 音階と波長の連想配列
		this.m_arrSoundFreq =
		{
			"key_C" : 261.63, 
			"key_D" : 293.66, 
			"key_E" : 329.63, 
			"key_F" : 349.23, 
			"key_G" : 392.00, 
			"key_A" : 440.00, 
			"key_B" : 493.88, 
		}
		
		// オーディオコンテキストの作成
		this.m_audioCtx = new (window.AudioContext || window.webkitAudioContext)();
	}

	//-------------------------------------------------------
	// 指定した周波数で音を鳴らす
	//-------------------------------------------------------
	playTone( strKey, fPlayTime )
	{
		// 周波数取得
		const fFreq = this.m_arrSoundFreq[ strKey ];
		// オシレーター作成
		const oscillator = this.m_audioCtx.createOscillator();
		// 周波数の設定
		oscillator.frequency.setValueAtTime(fFreq, this.m_audioCtx.currentTime);

		// ゲインノード作成
		const gainNode = this.m_audioCtx.createGain();
		// 音量設定
		gainNode.gain.setValueAtTime(PLAY_TONE_VOL, this.m_audioCtx.currentTime);
		// 音の変化値を設定
		gainNode.gain.exponentialRampToValueAtTime(PLAY_TONE_EXPONENTIAL, 
													this.m_audioCtx.currentTime + fPlayTime + PLAY_TONE_PLAY_TIME_ADJUST_VAL );
		// 出力先に接続
		oscillator.connect(gainNode);
		gainNode.connect( this.m_audioCtx.destination);
		
		// 音の再生を開始
		oscillator.start();
		// 音の再生を停止する時間
		oscillator.stop( this.m_audioCtx.currentTime + fPlayTime + PLAY_TONE_PLAY_TIME_ADJUST_VAL );
	}
}

//============================================================
// 簡易ピアノクラス
//============================================================
class CSimplePiano
{
	// コンストラクタ
	constructor()
	{
		this.m_ePlayMode = ePlayMode.manual;	// 演奏モード（初期はマニュアル設定）
		this.m_iTimeoutID = -1;					// タイムアウトID

		this.m_iAutoPlayMusicID = -1;			// 自動演奏の音楽ID
		this.m_iAutoPlaySoundDataPos = -1;		// 自動演奏の音データ位置
	}
	
	// 演奏モード
	get ePlayMode(){ return this.m_ePlayMode; }
	set ePlayMode( ePlayMode ){ this.m_ePlayMode = ePlayMode; }
	// タイムアウトID
	get iTimeoutID(){ return this.m_iTimeoutID; }
	set iTimeoutID( iTimeoutID ){ this.m_iTimeoutID = iTimeoutID; }
	// 自動演奏の音楽ID
	get iAutoPlayMusicID(){ return this.m_iAutoPlayMusicID; }
	set iAutoPlayMusicID( iAutoPlayMusicID ){ this.m_iAutoPlayMusicID = iAutoPlayMusicID; }
	// 自動演奏の音データ位置
	get iAutoPlaySoundDataPos(){ return this.m_iAutoPlaySoundDataPos; }
	set iAutoPlaySoundDataPos( iAutoPlaySoundDataPos ){ this.m_iAutoPlaySoundDataPos = iAutoPlaySoundDataPos; }

	//-------------------------------------------------------
	// 初期化処理
	//-------------------------------------------------------
	init = () =>
	{
		// タイムアウトIDの初期化
		this.initTimeoutID();
		// 自動演奏の音楽IDの初期化
		this.initAutoPlayMusicID();
		// 自動演奏の音データ位置の初期化
		this.initAutoPlaySoundDataPos();
		// 現在の音階名の設定
		this.setCurrentSoundName( CUURENT_SOUND_DEFAULT_NAME );

		// キーボードのポインターイベントON
		this.setKeyboardPointerEventState( true );

		// 手動演奏モードに設定
		this.ePlayMode = ePlayMode.manual;
		// 自動演奏情報の更新
		this.updateAutoPlayInfo();
	}

	//-------------------------------------------------------
	// タイムアウトIDの初期化
	//-------------------------------------------------------
	initTimeoutID = () =>
	{
		this.iTimeoutID = -1;
	}
	
	//-------------------------------------------------------
	// 自動演奏の音楽IDの初期化
	//-------------------------------------------------------
	initAutoPlayMusicID = () =>
	{
		this.iAutoPlayMusicID = -1;
	}
	
	//-------------------------------------------------------
	// 自動演奏の音データ位置の初期化
	//-------------------------------------------------------
	initAutoPlaySoundDataPos = () =>
	{
		this.iAutoPlaySoundDataPos = -1;
	}

	//-------------------------------------------------------
	// 現在の音階名の設定
	//-------------------------------------------------------
	setCurrentSoundName = ( strCurrentSoundName ) =>
	{
		$(".current_sound").text( strCurrentSoundName );
	}

	//-------------------------------------------------------
	// 音の再生
	//-------------------------------------------------------
	playSound = ( strCssID, iPlayTime ) =>
	{
		let strCurrentSoundName = ""; // 現在の音階名
		
		// 休符の時
		if( strCssID == SOUND_KEY_REST )
		{
			// 現在の音階名
			strCurrentSoundName = CUURENT_SOUND_DEFAULT_NAME;
		}
		else // 休符じゃない時
		{
			// 現在の音階名
			strCurrentSoundName = $("#" + strCssID).text();
			
			// 自動演奏の時
			if( this.ePlayMode == ePlayMode.auto )
			{
				// キーボードにアクティブクラスを追加
				$("#" + strCssID).addClass( 'active' );
			}
			
			// 音を鳴らす
			audioMgr.playTone( strCssID, iPlayTime / 1000 );
		}
		// 現在の音階名の設定
		this.setCurrentSoundName( strCurrentSoundName );

		// タイムアウトIDが存在したら
		if( this.iTimeoutID != -1 )
		{
			// タイムアウトIDのクリア
			clearTimeout( this.iTimeoutID );
			// タイムアウトIDの初期化
			this.initTimeoutID();
		}

		// タイムアウト設定
		this.iTimeoutID = setTimeout( () =>
		{
			// 現在の音階名の設定
			this.setCurrentSoundName( CUURENT_SOUND_DEFAULT_NAME );

			// 自動演奏の時
			if( this.ePlayMode == ePlayMode.auto )
			{
				// キーボードのアクティブクラスを削除
				$("#" + strCssID).removeClass( 'active' );
				// 自動演奏
				this.playAuto();
			}

		}, iPlayTime )
	}

	//-------------------------------------------------------
	// 自動演奏
	//-------------------------------------------------------
	playAuto = () =>
	{
		// 現在の音楽データ取得
		const musicData = musicDataMgr.getMusicData( this.iAutoPlayMusicID );
		
		// 自動演奏の音データ位置を進める
		this.iAutoPlaySoundDataPos++;
		// リミットチェック
		if( this.iAutoPlaySoundDataPos >= musicData.arrSoundData.length )
		{
			// プレイモードの切り替え
			this.changePlayMode();

			return;
		}

		// 音の再生
		this.playSound( musicData.arrSoundData[this.iAutoPlaySoundDataPos].strSoundKey, 
						musicData.arrSoundData[this.iAutoPlaySoundDataPos].iPlayTime );
	}

	//-------------------------------------------------------
	// 演奏モードの切り替え
	//-------------------------------------------------------
	changePlayMode = () =>
	{
		// 手動演奏モードの時
		if( this.ePlayMode == ePlayMode.manual )
		{
			// 自動演奏モードに設定
			this.ePlayMode = ePlayMode.auto;
			
			// 音楽データ数取得
			let iMusicDataNum = musicDataMgr.getMusicDataNum();
			// ランダム自動演奏音楽ID取得
			this.iAutoPlayMusicID = Math.floor( Math.random() * iMusicDataNum );
			// キーボードのポインターイベントOFF
			this.setKeyboardPointerEventState( false );
			// 自動演奏
			this.playAuto();
		}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
		else // 自動演奏モードの時
		{
			// 手動演奏モードに設定
			this.ePlayMode = ePlayMode.manual;

			// キーボードのアクティブクラスを一括削除
			$(".keyboard").removeClass( 'active' );

			// 自動演奏の音楽IDの初期化
			this.initAutoPlayMusicID();
			// 自動演奏の音データ位置の初期化
			this.initAutoPlaySoundDataPos();
			// キーボードのポインターイベントON
			this.setKeyboardPointerEventState( true );
		}

		// 自動演奏情報の更新
		this.updateAutoPlayInfo();
	}
	
	//-------------------------------------------------------
	// 自動演奏情報の更新
	//-------------------------------------------------------
	updateAutoPlayInfo = () =>
	{
		// 手動演奏の時
		if( this.ePlayMode == ePlayMode.manual )
		{
			// 自動演奏ボタン文字列設定
			$(".auto_play").text( AUTO_PLAY_BUTTON_PLAY_STR );
			// 自動演奏情報初期化
			$(".auto_play_info").text( "" );
		}
		else // 自動演奏の時
		{
			// 自動演奏ボタン文字列設定
			$(".auto_play").text( AUTO_PLAY_BUTTON_STOP_STR );
			
			// 自動演奏情報文字列作成
			let strInfo = AUTO_PLAY_INFO_STR 
							+ musicDataMgr.getMusicData( this.iAutoPlayMusicID ).strMusicName;
			// 自動演奏情報設定
			$(".auto_play_info").text( strInfo );
		}
	}
	
	//-------------------------------------------------------
	// キーボードのポインターイベント状態設定
	//-------------------------------------------------------
	setKeyboardPointerEventState = ( bState ) =>
	{
		let strState = ""; // 状態文字列

		if( bState ) strState = "all";
		else strState = "none";
		
		// ポインターイベント状態設定
		$(".keyboard").css( "pointer-events", strState );
	}
}


//============================================================
// キーボードのイベントリスナー設定（thisは呼び出し元のオブジェクト）
//============================================================
$(".keyboard").click( function()
{
	// 音の再生
	simplePiano.playSound( $(this).attr("id"), PLAY_TIME_MANUAL );
} );

//============================================================
// 自動演奏ボタンのイベントリスナー設定
//============================================================
$(".auto_play").click( function()
{
	// 演奏モードの切り替え
	simplePiano.changePlayMode();
} );


//============================================================
// インスタンス作成
//============================================================
// 音楽データマネージャ作成
let musicDataMgr = new CMusicDataMgr();
// オーディオマネージャ作成
let audioMgr = new CAudioMgr();
// 簡易ピアノ作成
let simplePiano = new CSimplePiano();

// 初期化
simplePiano.init();
