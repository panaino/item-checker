Vue.component('td-description', {
    props:['text'],
    template:'<td v-html="text"></td>'
})

let app = new Vue({
    el:'#app',
    data: {
        checked_items:[],
        grass: {
            header: ["", "名前", "買値", "売値", "剣印", "盾印", "説明"],
            itemList:[],
            items:{
                group1:[
                    {
                        id:'1',
                        name:'雑草',
                        buy:'10',
                        sell:'3',
                        swordMark:'植物特効',
                        shieldMark:'',
                        description:'何も効果が無い。畠荒らし種に当てると行動速度が1段階アップする',
                        rowspan:'1'
                    }
                ],
                group2: [
                    {
                        id: '2',
                        name: '薬草',
                        buy: '50',
                        sell: '17',
                        swordMark: 'HP+5',
                        shieldMark: 'HP+5',
                        description: '飲むとHPが25回復する。HP満タン時に飲むと最大HPが1増える。当てた場合も同様効果。',
                        rowspan:'2'
                    },
                    {
                        id: '3',
                        name: '楽草',
                        buy: '50',
                        sell: '17',
                        swordMark: '',
                        shieldMark: '',
                        description: '飲むと気分を少し回復する。（特に効果は無い）'
                    }
                ],
                group3: [
                    {
                        id: '4',
                        name: '弟切草',
                        buy: '100',
                        sell: '35',
                        swordMark: 'HP+10',
                        shieldMark: 'HP+10',
                        description: '飲むとHPが100回復し、混乱状態が治る。HP満タン時に飲むと最大HPが2増える。当てた場合も同様効果。',
                        rowspan:'4'
                    },
                    {
                        id: '5',
                        name: '毒消し草',
                        buy: '100',
                        sell: '35',
                        swordMark: 'ドレイン特効',
                        shieldMark: '',
                        description: '飲むとちからが最大値まで回復する。おばけ大根種、毒サソリ種に当てた場合、50ダメージ。'
                    },
                    {
                        id: '6',
                        name: '毒草',
                        buy: '100',
                        sell: '35',
                        swordMark: 'HP+5',
                        shieldMark: 'HP+5',
                        description: '飲むと5ダメージを受け、ちからが1減り、行動速度が1段階下がる。毒消しの腕輪で防げる。当てた場合、攻撃力ダウン状態にし、行動速度を1段階ダウンさせる。おばけ大根種、毒サソリ種に当てた場合、攻撃力アップ状態になる。'
                    },
                    {
                        id: '7',
                        name: '高飛び草',
                        buy: '100',
                        sell: '35',
                        swordMark: '浮遊特効',
                        shieldMark: '',
                        description: '飲むとフロアの別室にワープする。動かずの印で無効になる。当てた場合も同様効果。'
                    }
                ],
                group4: [
                    {
                        id: '8',
                        name: 'いやし草',
                        buy: '200',
                        sell: '70',
                        swordMark: 'HP+15',
                        shieldMark: 'HP+15',
                        description: '飲むとHPが200回復し、混乱、目つぶし、鈍足状態が治る。HP満タン時に飲むと最大HPが3増える。当てた場合も同様効果。',
                        rowspan:'1'
                    }
                ],
                group5: [
                    {
                        id: '9',
                        name: 'パワーアップ草',
                        buy: '300',
                        sell: '105',
                        swordMark: '',
                        shieldMark: '',
                        description: 'ターンの間、攻撃力アップ状態になる。当てた場合、攻撃力アップ状態にする。',
                        rowspan: '9'
                    },
                    {
                        id: '10',
                        name: '成長の種',
                        buy: '300',
                        sell: '105',
                        swordMark: '青炎飛ばし',
                        shieldMark: '',
                        description: '飲むと100ターンの間、成長状態になる。祝福されていた場合はフロア間永続になる。',
                    },
                    {
                        id: '11',
                        name: 'めぐすり草',
                        buy: '300',
                        sell: '105',
                        swordMark: '一ツ目特効',
                        shieldMark: '避けアップ',
                        description: '飲むとフロア間、よく見え状態になる。夜に松明なしで巻物が読めるようになる。',
                    },
                    {
                        id: '12',
                        name: 'すばやさ草',
                        buy: '300',
                        sell: '105',
                        swordMark: '連続攻撃',
                        shieldMark: '',
                        description: '飲むと15ターンの間、行動速度が一段階上がる。生物に当てると行動速度が一段階上がる。',
                    },
                    {
                        id: '13',
                        name: '胃拡張の種',
                        buy: '300',
                        sell: '105',
                        swordMark: '',
                        shieldMark: '',
                        description: '飲むと最大満腹度が5増加する。マゼルン系に飲み込ませるとメッセージが表示され、飲める道具数が1個分増える。最大8個。',
                    },
                    {
                        id: '14',
                        name: '胃縮小の種',
                        buy: '300',
                        sell: '105',
                        swordMark: '',
                        shieldMark: '',
                        description: '飲むと最大満腹度が5減少する。保持の腕輪で防げる。マゼルン系に飲み込ませるとメッセージが表示され、飲める道具数が1個分減る。',
                    },
                    {
                        id: '15',
                        name: '混乱草',
                        buy: '300',
                        sell: '105',
                        swordMark: '混乱',
                        shieldMark: '',
                        description: '飲むと12ターンの間、混乱状態になる。混乱よけの腕輪で防げる。生物に当てると12ターンの間、混乱状態にさせる。',
                    },
                    {
                        id: '16',
                        name: '目つぶし草',
                        buy: '300',
                        sell: '105',
                        swordMark: '目つぶし',
                        shieldMark: '',
                        description: '飲むと10ターンの間、目つぶし状態になる。生物に当てると10ターンの間、目つぶし状態にさせる。',
                    },
                    {
                        id: '17',
                        name: 'ぬぐすり草',
                        buy: '300',
                        sell: '105',
                        swordMark: '',
                        shieldMark: '',
                        description: '飲むと装備がすべて外れてしまう。残念ながら…シレン以外に効果は無い。',
                    },
                ],
                group6: [
                    {
                        id: '18',
                        name: '命の草',
                        buy: '500',
                        sell: '175',
                        swordMark: 'HP+20',
                        shieldMark: 'HP+20',
                        description: '飲むと最大HPが4増える。',
                        rowspan: '6'
                    },
                    {
                        id: '19',
                        name: 'ちからの草',
                        buy: '500',
                        sell: '175',
                        swordMark: '',
                        shieldMark: '',
                        description: '飲むとちからが1回復する。ちからが最大の時に飲むと、ちからの最大値が1増える。生物に当てると攻撃力アップ状態になる。',
                    },
                    {
                        id: '20',
                        name: 'ドラゴン草',
                        buy: '500',
                        sell: '175',
                        swordMark: 'ドラゴン特効',
                        shieldMark: '炎減少',
                        description: '飲むと直線状に70ダメージ前後の炎を吐く。距離は無限。草自体を当てた場合は約35ダメージ。',
                    },
                    {
                        id: '21',
                        name: '睡眠草',
                        buy: '500',
                        sell: '175',
                        swordMark: '睡眠',
                        shieldMark: '',
                        description: '飲むと6ターンの間、睡眠状態になる。睡眠よけの腕輪で防げる。生物に当てると6ターンの間、睡眠状態にさせる。',
                    },
                    {
                        id: '22',
                        name: '狂戦士の種',
                        buy: '500',
                        sell: '175',
                        swordMark: '',
                        shieldMark: '',
                        description: '飲むと30ターンの間、狂戦士状態になる。生物に当てると30ターンの間、狂戦士状態にさせる。',
                    },
                    {
                        id: '23',
                        name: 'ドラコン草',
                        buy: '500',
                        sell: '175',
                        swordMark: '',
                        shieldMark: '',
                        description: '飲むと遠投状態になる。投げ当てると2ダメージ',
                    },
                ],
                group7: [
                    {
                        id: '24',
                        name: '復活の草',
                        buy: '1000',
                        sell: '350',
                        swordMark: '',
                        shieldMark: '',
                        description: '持っていると倒れたときに一度だけ復活できる。今作では壺の中でも発動する。やりなおし草がある場合はそちらが優先される。',
                        rowspan: '2'
                    },
                    {
                        id: '25',
                        name: '腹活の草',
                        buy: '1000',
                        sell: '350',
                        swordMark: '',
                        shieldMark: '',
                        description: '持っていると倒れたときに復活するが、腹を壊してまた倒れる。（飲んだ場合は何も起こらない。）',
                    },
                ],
                group8: [
                    {
                        id: '26',
                        name: 'やりなおし草',
                        buy: '1500',
                        sell: '525',
                        swordMark: '',
                        shieldMark: '',
                        description: '力尽きた時にHP全回復で復活するか村に戻るかを選べる。飲むと、脱出するかしないかを選択できる。',
                        rowspan: '2'
                    },
                    {
                        id: '27',
                        name: 'やりなおせ草',
                        buy: '1500',
                        sell: '525',
                        swordMark: '',
                        shieldMark: '',
                        description: '飲むとやり直すか聞かれるが、やりなおせそうな気がするだけでやり直せない。',
                    },
                ],
                group9: [
                    {
                        id: '28',
                        name: '無敵草',
                        buy: '2000',
                        sell: '700',
                        swordMark: '',
                        shieldMark: '',
                        description: '飲むと20ターンの間、無敵状態になる。当てた場合も同様効果',
                        rowspan: '5'
                    },
                    {
                        id: '29',
                        name: 'しあわせ草',
                        buy: '2000',
                        sell: '700',
                        swordMark: '基本値+3',
                        shieldMark: '基本値+3',
                        description: '飲むとレベルが1上がる。',
                    },
                    {
                        id: '30',
                        name: '不幸の種',
                        buy: '2000',
                        sell: '700',
                        swordMark: 'LVダウン',
                        shieldMark: 'LVダウン',
                        description: '飲むとレベルが3下がる。',
                    },
                    {
                        id: '31',
                        name: '物忘れの草',
                        buy: '2000',
                        sell: '700',
                        swordMark: '',
                        shieldMark: '',
                        description: '飲むと今まで識別していたアイテムが全て未識別になる。生物に当てると6ターンの間、無気力状態になる。',
                    },
                    {
                        id: '32',
                        name: '忌火起草',
                        buy: '2000',
                        sell: '700',
                        swordMark: '',
                        shieldMark: '',
                        description: '飲むと壺に入ってる物を除いた手持ちの',
                    },
                ],
                group10: [
                    {
                        id: '33',
                        name: '天使の種',
                        buy: '5000',
                        sell: '1750',
                        swordMark: '基本値+8',
                        shieldMark: '基本値+8',
                        description: '飲むとレベルが3上がる。占いNPCで超大吉が出ると次のフロアで出る。',
                        rowspan: '5'
                    },
                    {
                        id: '34',
                        name: '超不幸の種',
                        buy: '5000',
                        sell: '1750',
                        swordMark: 'HP1',
                        shieldMark: 'HP1',
                        description: '飲むとレベルとHPが1になり、満腹度も0になる。',
                    },
                ]
            }
        },
        paper: {
            header:['','名前','買値','売値','説明'],
            items:
                [
                    {
                        id: '1',
                        name: '影縫いの札',
                        buy: '600',
                        sell: '210',
                        description: '投げ当てると、周囲にいる相手を巻き込んで影縫い状態にする。',
                        rowspan: '13'
                    },
                    {
                        id: '2',
                        name: '混乱の札',
                        buy: '600',
                        sell: '210',
                        description: '投げ当てると、周囲にいる相手を巻き込んで混乱状態にする。',
                    },
                    {
                        id: '3',
                        name: '封印の札',
                        buy: '600',
                        sell: '210',
                        description: '投げ当てると、周囲にいる相手を巻き込んで封印状態にする。',
                    },
                    {
                        id: '4',
                        name: 'ゾワゾワの札',
                        buy: '600',
                        sell: '210',
                        description: '投げ当てると、周囲にいる相手を巻き込んでゾワゾワ状態にする。',
                    },
                    {
                        id: '5',
                        name: '狂戦士の札',
                        buy: '600',
                        sell: '210',
                        description: '投げ当てると、周囲にいる相手を巻き込んで狂戦士状態にする。',
                    },
                    {
                        id: '6',
                        name: '空振りの札',
                        buy: '600',
                        sell: '210',
                        description: '投げ当てると、周囲にいる相手を巻き込んで空振り状態にする。',
                    },
                    {
                        id: '7',
                        name: '睡眠の札',
                        buy: '600',
                        sell: '210',
                        description: '投げ当てると、周囲にいる相手を巻き込んで睡眠状態にする。',
                    },
                    {
                        id: '8',
                        name: 'バクスイの札',
                        buy: '600',
                        sell: '210',
                        description: '投げ当てると、周囲にいる相手を巻き込んでバクスイ状態にする。',
                    },
                    {
                        id: '9',
                        name: '鈍足の札',
                        buy: '600',
                        sell: '210',
                        description: '投げ当てると、周囲にいる相手を巻き込んで行動速度を1段階下げる。',
                    },
                    {
                        id: '10',
                        name: '加速の札',
                        buy: '600',
                        sell: '210',
                        description: '投げ当てると、周囲にいる相手を巻き込んで行動速度を1段階上げる。',
                    },
                    {
                        id: '11',
                        name: 'イカリの札',
                        buy: '600',
                        sell: '210',
                        description: '投げ当てると、周囲にいる相手を巻き込んでイカリ状態にする。',
                    },
                    {
                        id: '12',
                        name: 'オオイカリの札',
                        buy: '600',
                        sell: '210',
                        description: '投げ当てると、周囲にいる相手を巻き込んでオオイカリ状態にする。',
                    },
                    {
                        id: '13',
                        name: 'しあわせの札',
                        buy: '600',
                        sell: '210',
                        description: '投げ当てると、周囲にいる相手を巻き込んでレベルを1つ上げる。(仲間 / シレン= 500EXP)',
                    },
                ]
        },
        bracelet: {
            header: ['','名前','買値','売値','重複','説明'],
            itemList:[],
            items: {
                group1:
                    [
                        {
                            id: '1',
                            name: '遠投の腕輪',
                            buy: '2000',
                            sell: '700',
                            duplication: '',
                            description: '矢や道具を投げた時、地形や生物を貫通して飛んでいく。',
                            rowspan:'4'
                        },
                        {
                            id: '2',
                            name: 'ヘタ投げの腕輪',
                            buy: '2000',
                            sell: '700',
                            duplication: '',
                            description: '投げたものが相手に当たらなくなる。',
                        },
                        {
                            id: '3',
                            name: 'ちからの腕輪',
                            buy: '2000',
                            sell: '700',
                            duplication: '○',
                            description: 'ちからの最大値が3上がる。',
                        },
                        {
                            id: '4',
                            name: '武器束ねの腕輪',
                            buy: '2000',
                            sell: '700',
                            duplication: '○',
                            description: '装備している武器と同系の武器が持ち物にあると攻撃力が上がる。多く持っているほど攻撃力は大きく上がる。',
                        },
                    ],
                group2:
                    [
                        {
                            id: '5',
                            name: '毒消しの腕輪',
                            buy: '3000',
                            sell: '1050',
                            duplication: '',
                            description: 'ちからが下がらなくなる。',
                            rowspan: '10'
                        },
                        {
                            id: '6',
                            name: '混乱よけの腕輪',
                            buy: '3000',
                            sell: '1050',
                            duplication: '',
                            description: '混乱状態になることを防ぐ。',
                        },
                        {
                            id: '7',
                            name: '睡眠よけの腕輪',
                            buy: '3000',
                            sell: '1050',
                            duplication: '',
                            description: '睡眠状態になることを防ぐ。',
                        },
                        {
                            id: '8',
                            name: '呪いよけの腕輪',
                            buy: '3000',
                            sell: '1050',
                            duplication: '',
                            description: '呪いや道具封印を防ぐ。',
                        },
                        {
                            id: '9',
                            name: '保持の腕輪',
                            buy: '3000',
                            sell: '1050',
                            duplication: '',
                            description: 'レベル、最大HP、最大ちから、最大満腹度が下がることを防ぐ。',
                        },
                        {
                            id: '10',
                            name: '呪い師の腕輪',
                            buy: '3000',
                            sell: '1050',
                            duplication: '○',
                            description: '呪い・道具封印状態のアイテムを持っていると攻撃・矢が会心の一撃になることがある。呪い・道具封印の数が多いほど会心の一撃が出やすい。壺の中の呪い・道具封印アイテムは無効',
                        },
                        {
                            id: '11',
                            name: '痛恨の腕輪',
                            buy: '3000',
                            sell: '1050',
                            duplication: '○',
                            description: '受ける攻撃がたまに痛恨の一撃になる。',
                        },
                        {
                            id: '12',
                            name: 'ワナの腕輪',
                            buy: '3000',
                            sell: '1050',
                            duplication: '○',
                            description: 'ターン経過でフロアに罠が増えていく。',
                        },
                        {
                            id: '13',
                            name: '魔物呼びの腕輪',
                            buy: '3000',
                            sell: '1050',
                            duplication: '○',
                            description: 'モンスターがフロアに自然発生する速度が倍になる。',
                        },
                        {
                            id: '14',
                            name: '透ネ見の腕輪',
                            buy: '3000',
                            sell: '1050',
                            duplication: '',
                            description: '10歩進む度に睡眠状態になる。',
                        },
                    ],
                group3:
                    [
                        {
                            id: '15',
                            name: '回復の腕輪',
                            buy: '5000',
                            sell: '1750',
                            duplication: '○',
                            description: 'HPの自然回復が早くなるが、満腹度も早く減る。',
                            rowspan: '11'
                        },
                        {
                            id: '16',
                            name: '気配察知の腕輪',
                            buy: '5000',
                            sell: '1750',
                            duplication: '',
                            description: 'フロアにいるモンスターの位置がわかる。',
                        },
                        {
                            id: '17',
                            name: '道具感知の腕輪',
                            buy: '5000',
                            sell: '1750',
                            duplication: '',
                            description: 'フロアにある道具の位置がわかる。',
                        },
                        {
                            id: '18',
                            name: '裏道の腕輪',
                            buy: '5000',
                            sell: '1750',
                            duplication: '',
                            description: '壁地形で隠された通路や部屋に近づくと壁が崩れる。',
                        },
                        {
                            id: '19',
                            name: '高飛びの腕輪',
                            buy: '5000',
                            sell: '1750',
                            duplication: '○',
                            description: 'たまにワープすることがある。',
                        },
                        {
                            id: '20',
                            name: '爆発の腕輪',
                            buy: '5000',
                            sell: '1750',
                            duplication: '○',
                            description: 'たまに自分が爆発することがある。',
                        },
                        {
                            id: '21',
                            name: '水グモの腕輪',
                            buy: '5000',
                            sell: '1750',
                            duplication: '',
                            description: '水地形を移動できるようになる。水地形上で外した場合ワープする。',
                        },
                        {
                            id: '22',
                            name: '壁抜けの腕輪',
                            buy: '5000',
                            sell: '1750',
                            duplication: '',
                            description: '壁地形を移動できるようになる。壁の中に居る間は毎ターン10ダメージを受ける。',
                        },
                        {
                            id: '23',
                            name: 'ノナリーの腕輪',
                            buy: '5000',
                            sell: '1750',
                            duplication: '',
                            description: '扉をくぐるたびに自分が大爆発する。',
                        },
                        {
                            id: '24',
                            name: '気配察血の腕輪',
                            buy: '5000',
                            sell: '1750',
                            duplication: '○',
                            description: 'フロアにいるモンスターの位置がわかる。見渡せる位置にモンスターがいると毎ターン10ダメージを受ける。夜の場合、松明の範囲にモンスターがいるとダメージを受ける。松明無しの場合隣接時のみダメージを受ける。',
                        },
                        {
                            id: '25',
                            name: '道具感血の腕輪',
                            buy: '5000',
                            sell: '1750',
                            duplication: '○',
                            description: 'フロアにある道具の位置がわかる。道具を拾うたびに、10ダメージを受ける。',
                        },
                    ],
                group4:
                    [
                        {
                            id: '26',
                            name: '弾きよけの腕輪',
                            buy: '10000',
                            sell: '3500',
                            duplication: '',
                            description: '持ち物が弾かれて飛んで行くのを防ぐ。',
                            rowspan: '4'
                        },
                        {
                            id: '27',
                            name: 'しあわせの腕輪',
                            buy: '10000',
                            sell: '3500',
                            duplication: '○',
                            description: '1ターン経過する度に経験値を1得る。',
                        },
                        {
                            id: '28',
                            name: '時たたずの腕輪',
                            buy: '10000',
                            sell: '3500',
                            duplication: '',
                            description: '昼夜の基準となる時間が経過しなくなる。',
                        },
                        {
                            id: '29',
                            name: '浮遊の腕輪',
                            buy: '10000',
                            sell: '3500',
                            duplication: '',
                            description: '水上・空地を移動できるようになり、ワナにかからなくなる。水上・空地で外した場合ワープする。',
                        },
                    ],
                group5:
                    [
                        {
                            id: '30',
                            name: '鑑定師の腕輪',
                            buy: '30000',
                            sell: '10500',
                            duplication: '',
                            description: '床落ち道具を拾ったり壺に入れると識別される。',
                            rowspan: '4'
                        },
                        {
                            id: '31',
                            name: '透視の腕輪',
                            buy: '30000',
                            sell: '10500',
                            duplication: '',
                            description: 'フロアのモンスターや道具の位置が分かる。',
                        },
                        {
                            id: '32',
                            name: 'マタギの腕輪',
                            buy: '30000',
                            sell: '10500',
                            duplication: '',
                            description: 'ワナを拾えるようになり、モンスターをワナにかけることができるようになる。',
                        },
                        {
                            id: '33',
                            name: '無心の腕輪',
                            buy: '30000',
                            sell: '10500',
                            duplication: '○',
                            description: '夜のモンスターに直接攻撃でダメージを与えられるようになる。',
                        },
                    ],
                group6:
                    [
                        {
                            id: '34',
                            name: 'VIPの腕輪',
                            buy: '50000',
                            sell: '17500',
                            duplication: '',
                            description: '高級店に入れるようになる。',
                            rowspan: '1'
                        },
                    ]
            }
        },
        staff: {
            header: ['', '名前', '買基', '+１', '売基', '+１', '印', '説明',],
            itemList: [],
            items: {
                group1:
                    [
                        {
                            id: '1',
                            name: '場所がえの杖',
                            buy: '600',
                            buy_inc: '30',
                            sell: '210',
                            sell_inc: '10.5',
                            sign: '',
                            description: '魔法弾の当たった相手と自分の位置を入れ替える。',
                            rowspan:'6'
                        },
                        {
                            id: '2',
                            name: '吹き飛ばしの杖',
                            buy: '600',
                            buy_inc: '30',
                            sell: '210',
                            sell_inc: '10.5',
                            sign: '',
                            description: '魔法弾の当たった相手を吹き飛ばす。',
                        },
                        {
                            id: '3',
                            name: '飛びつきの杖',
                            buy: '600',
                            buy_inc: '30',
                            sell: '210',
                            sell_inc: '10.5',
                            sign: '',
                            description: '魔法弾の当たった生物や壁のところまで一気に移動する。',
                        },
                        {
                            id: '4',
                            name: '鈍足の杖',
                            buy: '600',
                            buy_inc: '30',
                            sell: '210',
                            sell_inc: '10.5',
                            sign: '',
                            description: '魔法弾の当たった相手の行動速度を1段階下げる。',
                        },
                        {
                            id: '5',
                            name: '加速の杖',
                            buy: '600',
                            buy_inc: '30',
                            sell: '210',
                            sell_inc: '10.5',
                            sign: '連続攻撃',
                            description: '魔法弾の当たった相手の行動速度を1段階上げる。',
                        },
                        {
                            id: '6',
                            name: '魔道の杖',
                            buy: '600',
                            buy_inc: '30',
                            sell: '210',
                            sell_inc: '10.5',
                            sign: '',
                            description: '魔法弾の当たった相手に睡眠・混乱・鈍足・ワープのいずれかの効果をランダムで与える。',
                        },
                ],
                group2:
                    [
                        {
                            id: '7',
                            name: '一時しのぎの杖',
                            buy: '900',
                            buy_inc: '45',
                            sell: '315',
                            sell_inc: '15.75',
                            sign: '',
                            description: '魔法弾の当たった相手を階段に飛ばしてかなしばり状態にする。',
                            rowspan:'8'
                        },
                        {
                            id: '8',
                            name: 'かなしばりの杖',
                            buy: '900',
                            buy_inc: '45',
                            sell: '315',
                            sell_inc: '15.75',
                            sign: 'かなしばり',
                            description: '魔法弾の当たった相手をかなしばり状態にする。',
                        },
                        {
                            id: '9',
                            name: '痛み分けの杖',
                            buy: '900',
                            buy_inc: '45',
                            sell: '315',
                            sell_inc: '15.75',
                            sign: '',
                            description: '魔法弾の当たった相手を痛み分け状態にする。',
                        },
                        {
                            id: '10',
                            name: 'ワナ消しの杖',
                            buy: '900',
                            buy_inc: '45',
                            sell: '315',
                            sell_inc: '15.75',
                            sign: '',
                            description: '魔法弾の通った場所にある罠を全て消す。敵に当たると2ダメージ',
                        },
                        {
                            id: '11',
                            name: '転ばぬ先の杖',
                            buy: '900',
                            buy_inc: '45',
                            sell: '315',
                            sell_inc: '15.75',
                            sign: '',
                            description: '持っていると転びのワナで転ばなくなる。壺の中にあると効果がない。効果が適用される度に回数が1減っていき、0になると効果が無くなる。',
                        },
                        {
                            id: '12',
                            name: 'ただの杖',
                            buy: '900',
                            buy_inc: '45',
                            sell: '315',
                            sell_inc: '15.75',
                            sign: '魔法特効',
                            description: '魔法弾が出るだけで何も起こらない。',
                        },
                        {
                            id: '13',
                            name: 'かなしばいの杖',
                            buy: '900',
                            buy_inc: '45',
                            sell: '315',
                            sell_inc: '15.75',
                            sign: '',
                            description: '振るとダジャレ芝居が見られる。投げつけると目つぶし状態にする。',
                        },
                        {
                            id: '14',
                            name: '転ばぬ先生の杖',
                            buy: '900',
                            buy_inc: '45',
                            sell: '315',
                            sell_inc: '15.75',
                            sign: '',
                            description: '持っていると転びのワナで転んだ時、お説教が聞ける。壺の中にあると効果がない。',
                        },
                ],
                group3:
                    [
                        {
                            id: '14',
                            name: '感電の杖',
                            buy: '1200',
                            buy_inc: '60',
                            sell: '420',
                            sell_inc: '121',
                            sign: '',
                            description: '魔法弾の当たった相手に電撃で25ダメージを与える。電撃は自分や仲間を含む隣接する生物すべての伝わる。',
                            rowspan:'2'
                        },
                        {
                            id: '15',
                            name: '盛電の杖',
                            buy: '1200',
                            buy_inc: '60',
                            sell: '420',
                            sell_inc: '21',
                            sign: '',
                            description: '自分が電撃ダメージを受ける。他のキャラへの感電ダメージはある',
                        },
                ],
                group4:
                    [
                        {
                            id: '16',
                            name: '封印の杖',
                            buy: '1500',
                            buy_inc: '75',
                            sell: '525',
                            sell_inc: '26.25',
                            sign: '封印',
                            description: '魔法弾の当たった相手を封印状態にする。',
                            rowspan:'3'
                        },
                        {
                            id: '17',
                            name: '身代わりの杖',
                            buy: '1500',
                            buy_inc: '75',
                            sell: '525',
                            sell_inc: '26.25',
                            sign: '',
                            description: '魔法弾の当たった相手を身代わり状態にする。',
                        },
                        {
                            id: '18',
                            name: '身伐わりの杖',
                            buy: '1500',
                            buy_inc: '75',
                            sell: '525',
                            sell_inc: '26.25',
                            sign: '',
                            description: '現在の向きに対して左方向から丸太が飛んできて10マス吹っ飛ばされる。',
                        },

                ],
                group5:
                    [
                        {
                            id: '19',
                            name: 'しあわせの杖',
                            buy: '1800',
                            buy_inc: '90',
                            sell: '630',
                            sell_inc: '31.5',
                            sign: '',
                            description: '魔法弾の当たった相手のレベルを1上げる。',
                            rowspan:'5'
                        },
                        {
                            id: '20',
                            name: '不幸の杖',
                            buy: '1800',
                            buy_inc: '90',
                            sell: '630',
                            sell_inc: '31.5',
                            sign: '',
                            description: '魔法弾の当たった相手のレベルを1下げる。',
                        },
                        {
                            id: '21',
                            name: 'トンネルの杖',
                            buy: '1800',
                            buy_inc: '90',
                            sell: '630',
                            sell_inc: '31.5',
                            sign: '',
                            description: '魔法弾を壁に当てると壊せる壁を一直線に10マス掘れる。敵に当たると10ダメージ',
                        },
                        {
                            id: '22',
                            name: '土塊の杖',
                            buy: '1800',
                            buy_inc: '90',
                            sell: '630',
                            sell_inc: '31.5',
                            sign: '爆発無効',
                            description: '正面1マスに壁を作る。壁は攻撃することで壊れる。敵に当たると2ダメージ',
                        },
                        {
                            id: '23',
                            name: 'しわよせの杖',
                            buy: '1800',
                            buy_inc: '90',
                            sell: '630',
                            sell_inc: '31.5',
                            sign: '余勢',
                            description: '魔法弾を当てた対象に対して自身を痛み分け状態にする',
                        },
                ]
            }
        },
        pot: {
            itemList: [],
            items: {
                group1:
                    [
                        {
                            id: '1',
                            name: '保存の壺',
                            capacity: {
                                value: '3~5',
                                rowspan: '5'
                            },
                            buy: {
                                base: '600',
                                inc: '30'
                            },
                            sell: {
                                base: '210',
                                inc: '10.5'
                            },
                            description: '自由に道具の出し入れができる。識別後に名前を付けることができる。',
                            rowspan: '5'
                        },
                        {
                            id: '2',
                            name: 'ただの壺',
                            capacity: {
                                value: '3~5',
                            },
                            buy: {
                                base: '600',
                                inc: '30'
                            },
                            sell: {
                                base: '210',
                                inc: '10.5'
                            },
                            description: '特に効果のない壺。',
                        },
                        {
                            id: '3',
                            name: '識別の壺',
                            capacity: {
                                value: '3~5',
                            },
                            buy: {
                                base: '600',
                                inc: '30'
                            },
                            sell: {
                                base: '210',
                                inc: '10.5'
                            },
                            description: '入れた道具が識別される。',
                        },
                        {
                            id: '4',
                            name: 'やりすごしの壺',
                            capacity: {
                                value: '3~5',
                            },
                            buy: {
                                base: '600',
                                inc: '30'
                            },
                            sell: {
                                base: '210',
                                inc: '10.5'
                            },
                            description: '入れるを選択すると、自分が中に入って20ターンの間やりすごし状態になる。また、敵に投げつけるとやりすごし状態にして中に閉じこめる。やりすごし状態の敵は攻撃や効果を受けない限り解除されない。水地形・空地形でやりすごし状態になると水没・落下して即死する。',
                        },
                        {
                            id: '5',
                            name: '四二鉢',
                            capacity: {
                                value: '3~5',
                            },
                            buy: {
                                base: '600',
                                inc: '30'
                            },
                            sell: {
                                base: '210',
                                inc: '10.5'
                            },
                            description: '割れると大爆発し、中に入っていた道具も同時に消滅する。爆発させると識別済みとなる。中身が飛び散ってから爆発するわけではないので、あらかじめ矢などを敷き詰めておくテクは今作では通用しない。吸い出しの巻物を使うか、道具封印状態にして割ると中身を回収できる。ただし、祝福された四二鉢は封印することができないことに注意。',
                        },
                ],
                group2:
                    [
                        {
                            id: '6',
                            name: '換金の壺',
                            capacity: {
                                value: '3~5',
                                rowspan: '5'
                            },
                            buy: {
                                base: '1000',
                                inc: '50'
                            },
                            sell: {
                                base: '350',
                                inc: '17.5'
                            },
                            description: '入れた道具が売値相当のギタンに変化する。スコッピーに土を入れられた場合は普通に草が生えてくる。',
                            rowspan: '7'
                        },
                        {
                            id: '7',
                            name: '変化の壺',
                            capacity: {
                                value: '3~5',
                            },
                            buy: {
                                base: '1000',
                                inc: '50'
                            },
                            sell: {
                                base: '350',
                                inc: '17.5'
                            },
                            description: '入れた道具が別の道具に変化する。値札がついたアイテムを入れても変化しない。',
                        },
                        {
                            id: '8',
                            name: '手封じの壺',
                            capacity: {
                                value: '3~5',
                            },
                            buy: {
                                base: '1000',
                                inc: '50'
                            },
                            sell: {
                                base: '350',
                                inc: '17.5'
                            },
                            description: '道具を入れようとすると武器が装備解除され手封じ状態になる。手封じ状態で敵を殴る・敵に殴られると割れることがある。フロアを移動すると外れる。装備外しのワナやすいだすゾウ種の特技でも外れる。',
                        },
                        {
                            id: '9',
                            name: '割れない壺',
                            capacity: {
                                value: '3~5',
                            },
                            buy: {
                                base: '1000',
                                inc: '50'
                            },
                            sell: {
                                base: '350',
                                inc: '17.5'
                            },
                            description: '割る事ができない。道具封印状態にしても割れない。吸い出しの巻物を使わないと中身を取り出せない。生物に投げつけると中身ごと消滅する。復活の草、やりなおし草の容器くらいしか使い道がない。',
                        },
                        {
                            id: '10',
                            name: '変花の壺',
                            capacity: {
                                value: '3~5',
                            },
                            buy: {
                                base: '1000',
                                inc: '50'
                            },
                            sell: {
                                base: '350',
                                inc: '17.5'
                            },
                            description: '入れた道具が花に変化する。花は数種類あり、図鑑に登録されるが効果は特になく、壺を割っても中身は消滅し何も取り出せない。',
                        },
                        {
                            id: '11',
                            name: '底抜けの壺',
                            capacity: {
                                value: '2~4',
                                rowspan: '1'
                            },
                            buy: {
                                base: '1000',
                                inc: '50'
                            },
                            sell: {
                                base: '350',
                                inc: '17.5'
                            },
                            description: '入れた道具がどこかに消えてしまう。割ると容量分の落し穴のワナが出てくる。道具封印状態でも割ると落し穴ができる。ゲイズや呪い師の腕輪を考慮すると意図的に封印すると良い。',
                        },
                        {
                            id: '12',
                            name: 'フィーバーの壺',
                            capacity: {
                                value: '3',
                                rowspan: '1'
                            },
                            buy: {
                                base: '1000',
                                inc: '50'
                            },
                            sell: {
                                base: '350',
                                inc: '17.5'
                            },
                            description: '同じ道具を複数入れて容量を満タンにすると勝手に破裂して２倍に増える。異なる道具を入れると爆発してしまう。揃える道具の強化値、祝福・呪い・道具封印状態は問わない。増殖した道具は祝福・呪い・道具封印状態が無くなり、印は初期状態(成長で付く印などは付いている)・強化値0・杖の回数はランダム(床落ちの回数？)となる。矢・石・札の数はランダムで複製される。(床落ちの個数？)容量を増減した場合は[2]から効果がある。',
                        },
                ],
                group3:
                    [
                        {
                            id: '13',
                            name: 'おはらいの壺',
                            capacity: {
                                value: '2~4',
                                rowspan: '3'
                            },
                            buy: {
                                base: '1600',
                                inc: '80'
                            },
                            sell: {
                                base: '560',
                                inc: '28'
                            },
                            description: '入れた道具の呪い・道具封印状態が解除される。',
                            rowspan: '3'
                        },
                        {
                            id: '14',
                            name: '祝福の壺',
                            capacity: {
                                value: '2~4',
                            },
                            buy: {
                                base: '1600',
                                inc: '80'
                            },
                            sell: {
                                base: '560',
                                inc: '28'
                            },
                            description: '入れた道具が祝福される。',
                        },
                        {
                            id: '15',
                            name: 'たたりの壺',
                            capacity: {
                                value: '2~4',
                            },
                            buy: {
                                base: '1600',
                                inc: '80'
                            },
                            sell: {
                                base: '560',
                                inc: '28'
                            },
                            description: '入れた道具が呪い・道具封印状態になる。',
                        },
                ],
                group4:
                    [
                        {
                            id: '16',
                            name: '水がめ',
                            capacity: {
                                value: '3~5',
                                rowspan: '1'
                            },
                            buy: {
                                base: '2000',
                                inc: '100'
                            },
                            sell: {
                                base: '700',
                                inc: '35'
                            },
                            description: '水を汲んで正面にかけることができる。水がかかると刃物がサビたりカラクリに不具合が起きたりする。罠にかけると罠を破壊することが出来る。桃にかけると一段階熟す。',
                            rowspan: '2'
                        },
                        {
                            id: '17',
                            name: '天上の器',
                            capacity: {
                                value: '3',
                                rowspan: '1'
                            },
                            buy: {
                                base: '2000',
                                inc: '100'
                            },
                            sell: {
                                base: '700',
                                inc: '35'
                            },
                            description: '中の温泉水を使うとHPとほぼ全ての悪い状態異常が回復する。温泉水はイノリの里で汲める。',
                        },
                ],
                group5:
                    [
                        {
                            id: '18',
                            name: '冷えびえ香の壺',
                            capacity: {
                                value: '2~4',
                                rowspan: '4'
                            },
                            buy: {
                                base: '2500',
                                inc: '125'
                            },
                            sell: {
                                base: '875',
                                inc: '43.75'
                            },
                            description: 'アイテムを一つ入れるとフロア全体が心頭滅却状態になる。心頭滅却状態では炎と爆発が無効になる。香系壺は入れた道具がそのまま消滅する。',
                            rowspan: '4'
                        },
                        {
                            id: '19',
                            name: '身かわし香の壺',
                            capacity: {
                                value: '2~4',
                            },
                            buy: {
                                base: '2500',
                                inc: '125'
                            },
                            sell: {
                                base: '875',
                                inc: '43.75'
                            },
                            description: 'アイテムを一つ入れるとフロア全体が身かわし状態になる。身かわし状態ではアイテムの投擲や矢が敵味方含め100％外れる。マゼルン種は問題なく道具を飲み込んでくれる。',
                        },
                        {
                            id: '20',
                            name: '目配り香の壺',
                            capacity: {
                                value: '2~4',
                            },
                            buy: {
                                base: '2500',
                                inc: '125'
                            },
                            sell: {
                                base: '875',
                                inc: '43.75'
                            },
                            description: 'アイテムを一つ入れるとフロア全体が目配り状態になる。目配り状態ではアイテムを落とさなくなり、盗まれなくなる。トド、ガマラ、ギャドン、ケンゴウ、物荒らし、転び石に有効。敵のドロップアイテム等は通常通り。',
                        },
                        {
                            id: '21',
                            name: '山彦香の壺',
                            capacity: {
                                value: '2~4',
                            },
                            buy: {
                                base: '2500',
                                inc: '125'
                            },
                            sell: {
                                base: '875',
                                inc: '43.75'
                            },
                            description: 'アイテムを一つ入れるとフロア全体が山彦状態になる。山彦状態では魔法が反射されるようになる。',
                        },
                ],
                group6:
                    [
                        {
                            id: '22',
                            name: '背中の壺',
                            capacity: {
                                value: '3~5',
                                rowspan: '2',
                            },
                            buy: {
                                base: '3500',
                                inc: '175'
                            },
                            sell: {
                                base: '1225',
                                inc: '61.25'
                            },
                            description: '押すとHPやちからが最大まで回復し、一部の状態異常も回復する。容量が残っている場合、ぶつけて割れると同様の効果が発動する。',
                            rowspan: '6',
                        },
                        {
                            id: '23',
                            name: 'トドの壺',
                            capacity: {
                                value: '3~5',
                            },
                            buy: {
                                base: '3500',
                                inc: '175'
                            },
                            sell: {
                                base: '1225',
                                inc: '61.25'
                            },
                            description: '押すとぬすっトドが飛び出して正面にある道具を拾って戻ってくる。ただし壺は拾ってこない。壁地形、空地形、壺に当たると止まってしまうが、水地形であれば通過可能。拾ってきたアイテムは壺の中に保存され、割ると取り出せる。容量が残った状態で割ると混乱状態のぬすっトド（夜は腹黒ぬすっトド）が出てくる。',
                        },
                        {
                            id: '24',
                            name: '魔物の壺',
                            capacity: {
                                value: '2~4',
                                rowspan: '2',
                            },
                            buy: {
                                base: '3500',
                                inc: '175'
                            },
                            sell: {
                                base: '1225',
                                inc: '61.25'
                            },
                            description: '押すと容量分の敵（その階層で出るモンスター）が周囲に発生する。割った場合は、容量分の混乱状態のモンスターが発生する。',
                        },
                        {
                            id: '25',
                            name: '笑いの壺',
                            capacity: {
                                value: '2~4',
                            },
                            buy: {
                                base: '3500',
                                inc: '175'
                            },
                            sell: {
                                base: '1225',
                                inc: '61.25'
                            },
                            description: '押すと正面の相手を笑い状態にする。笑い状態の間は何もできなくなり、笑いは近くの相手へ伝搬していく。残り容量がある壺を投げ当てた場合、同様の効果が現れる。',
                        },
                        {
                            id: '26',
                            name: 'クラインの壺',
                            capacity: {
                                value: '3~5',
                                rowspan: '1',
                            },
                            buy: {
                                base: '3500',
                                inc: '175'
                            },
                            sell: {
                                base: '1225',
                                inc: '61.25'
                            },
                            description: '押すと20ターンの間クライン状態となり、攻撃力と防御力が入れ替わる。残り容量がある壺を投げ当てた場合、同様の効果が現れる。',
                        },
                        {
                            id: '27',
                            name: '乙女の祈りの壺',
                            capacity: {
                                value: '3',
                                rowspan: '1',
                            },
                            buy: {
                                base: '3500',
                                inc: '175'
                            },
                            sell: {
                                base: '1225',
                                inc: '61.25'
                            },
                            description: '押すとHP・ちから・満腹度全快、悪い状態異常全て解除、15ターン倍速状態、20ターン無敵状態の効果を得られる。',
                        },
                ],
                group7:
                    [
                        {
                            id: '28',
                            name: '合成の壺',
                            capacity: {
                                value: '5',
                                rowspan: '1'
                            },
                            buy: {
                                base: '6000',
                                inc: '300'
                            },
                            sell: {
                                base: '2100',
                                inc: '105'
                            },
                            description: '同じ種類の道具を入れると、先に入れた道具に後から入れた道具が合成される。武器や盾は能力と強化値が、同じ名前の杖は使用回数が合成される。店の商品となっている道具は入れても合成されない。',
                            rowspan: '2'
                        },
                        {
                            id: '29',
                            name: '合城の壺',
                            capacity: {
                                value: '3~5',
                                rowspan: '1'
                            },
                            buy: {
                                base: '6000',
                                inc: '300'
                            },
                            sell: {
                                base: '2100',
                                inc: '105'
                            },
                            description: '同じ種類の道具を入れると、先に入れた道具に後から入れた道具が合成される。武器や盾は能力と強化値が、同じ名前の杖は使用回数が合成される。ただし投げても割る事が出来ず、割れない壺同様封印しても割ることができない。',
                        },
                ],
                group8:
                    [
                        {
                            id: '30',
                            name: '強化の壺',
                            capacity: {
                                value: '2~3',
                                rowspan: '2'
                            },
                            buy: {
                                base: '10000',
                                inc: '500'
                            },
                            sell: {
                                base: '3500',
                                inc: '175'
                            },
                            description: '道具を入れてダンジョンを進むと武器や盾は強化値が上がっていき杖は使用回数が増えていく。ギタンはどんどん増えていく。強化されたとき自然に割れてしまう事がある。かなり割れやすい。壺の中身のいずれかが強化限界になると必ず割れる。',
                            rowspan: '5'
                        },
                        {
                            id: '31',
                            name: '弱化の壺',
                            capacity: {
                                value: '2~3',

                            },
                            buy: {
                                base: '10000',
                                inc: '500'
                            },
                            sell: {
                                base: '3500',
                                inc: '175'
                            },
                            description: '道具を入れてダンジョンを進むと武器や盾は強化値が下がっていき杖は使用回数が減っていく。ギタンはどんどん減っていく。弱化されたとき自然に割れてしまう事がある。',
                        },
                        {
                            id: '32',
                            name: '福寄せの壺',
                            capacity: {
                                value: '3~5',
                                rowspan: '3'
                            },
                            buy: {
                                base: '10000',
                                inc: '500'
                            },
                            sell: {
                                base: '3500',
                                inc: '175'
                            },
                            description: '所持している状態でフロアを移動した時、稀に所持アイテムが祝福される。',
                        },
                        {
                            id: '33',
                            name: '厄寄せの壺',
                            capacity: {
                                value: '3~5',
                            },
                            buy: {
                                base: '10000',
                                inc: '500'
                            },
                            sell: {
                                base: '3500',
                                inc: '175'
                            },
                            description: '所持している状態でフロアを移動した時、たまに所持アイテムが道具封印される。',
                        },
                        {
                            id: '34',
                            name: '強イヒの壺',
                            capacity: {
                                value: '3~5',
                            },
                            buy: {
                                base: '10000',
                                inc: '500'
                            },
                            sell: {
                                base: '3500',
                                inc: '175'
                            },
                            description: 'おにぎりを入れると焼きおにぎりになる。',
                        },
                ],
                group9:
                    [
                        {
                            id: '35',
                            name: '編集長の壺',
                            capacity: {
                                value: '1',
                                rowspan: '1'
                            },
                            buy: {
                                base: '45000',
                                inc: '2250'
                            },
                            sell: {
                                base: '8320',
                                inc: '416'
                            },
                            description: '押すと週刊ファミ通編集長のメッセージを聞くことが出来る。Plus版限定アイテム。図鑑に登録されない。',
                            rowspan: '1'
                        },
                ]
            }
        }
    },
    methods: {
        clear: function() {
            this.checked_items = []
        },
        setItemList: function(groupKey) {
            let list = []
            let items = this[groupKey].items
            Object.keys(items).forEach(function (groupKey) {
                for (var i = 0; i < items[groupKey].length; i++) {
                    list.push(items[groupKey][i])
                }
            })
            this[groupKey].itemList = list
        }
    },
    created: function() {
        this.setItemList('grass')
        this.setItemList('bracelet')
        this.setItemList('staff')
        this.setItemList('pot')
    }
})



