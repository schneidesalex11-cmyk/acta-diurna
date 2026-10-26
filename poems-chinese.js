// Chinese poems: public-domain translations and the Chinese originals, all from Project Gutenberg.
// [title, poet, era, translation credit, translation, original (optional), original title (optional)]
const CHINESE_POEMS = [
[
"Song of the Bowmen of Shu",
"Book of Songs (詩經), c. 1000–600 BC",
"Chinese",
"tr. Ezra Pound, Cathay (1915)",
"Here we are, picking the first fern-shoots\nAnd saying: When shall we get back to our country?\nHere we are because we have the Ken-nin for our foemen,\nWe have no comfort because of these Mongols.\nWe grub the soft fern-shoots,\nWhen anyone says \"Return,\" the others are full of sorrow.\nSorrowful minds, sorrow is strong, we are hungry and thirsty.\nOur defence is not yet made sure, no one can let his friend return.\nWe grub the old fern-stalks.\nWe say: Will we be let to go back in October?\nThere is no ease in royal affairs, we have no comfort.\nOur sorrow is bitter, but we would not return to our country.\nWhat flower has come into blossom?\nWhose chariot? The General's.\nHorses, his horses even, are tired. They were strong.\nWe have no rest, three battles a month.\nBy heaven, his horses are tired.\nThe generals are on them, the soldiers are by them\nThe horses are well trained, the generals have ivory arrows and quivers ornamented with fish-skin.\nThe enemy is swift, we must be careful.\nWhen we set out, the willows were drooping with spring,\nWe come back in the snow,\nWe go slowly, we are hungry and thirsty,\nOur mind is full of sorrow, who will know of our grief?",
"采薇采薇、薇亦作止。\n曰歸曰歸、歲亦莫止。\n靡室靡家、玁狁之故。\n不遑啟居、玁狁之故。\n采薇采薇、薇亦柔止。\n曰歸曰歸、心亦憂止。\n憂心烈烈、載飢載渴。\n我戌未定、靡使歸聘。\n采薇采薇、薇亦剛止。\n曰歸曰歸、歲亦陽止。\n王事靡盬、不遑啟處。\n憂心孔疚、我行不來。\n駕彼四牡、四牡騤騤。\n君子所依、小人所腓。\n四牡翼翼、象弭魚服。\n豈不日戒、玁狁孔亟。\n彼爾維何、維常之華。\n彼路斯何、君子之車。\n戎車既駕、四牡業業。\n豈敢定居、一月三捷。\n駕彼四牡、四牡騤騤。\n君子所依、小人所腓。\n四牡翼翼、象弭魚服。\n豈不日戒、玁狁孔亟。\n昔我往矣、楊柳依依。\n今我來思、雨雪靡靡。\n行道遲遲、載渴載飢。\n我心傷悲、莫知我哀。",
"采薇"
],
[
"The Beautiful Toilet",
"Nineteen Old Poems (古詩十九首), Han dynasty",
"Chinese",
"tr. Ezra Pound, Cathay (1915)",
"Blue, blue is the grass about the river\nAnd the willows have overfilled the close garden.\nAnd within, the mistress, in the midmost of her youth,\nWhite, white of face, hesitates, passing the door.\nSlender, she puts forth a slender hand,\n\nAnd she was a courtezan in the old days,\nAnd she has married a sot,\nWho now goes drunkenly out\nAnd leaves her too much alone."
],
[
"The River-Merchant's Wife: A Letter",
"Li Bai (李白), 701–762",
"Chinese",
"tr. Ezra Pound, Cathay (1915)",
"While my hair was still cut straight across my forehead\nI played about the front gate, pulling flowers.\nYou came by on bamboo stilts, playing horse,\nYou walked about my seat, playing with blue plums.\nAnd we went on living in the village of Chokan:\nTwo small people, without dislike or suspicion.\n\nAt fourteen I married My Lord you.\nI never laughed, being bashful.\nLowering my head, I looked at the wall.\nCalled to, a thousand times, I never looked back.\n\nAt fifteen I stopped scowling,\nI desired my dust to be mingled with yours\nForever and forever, and forever.\nWhy should I climb the look out?\n\nAt sixteen you departed,\nYou went into far Ku-to-Yen, by the river of swirling eddies,\nAnd you have been gone five months.\nThe monkeys make sorrowful noise overhead.\nYou dragged your feet when you went out.\nBy the gate now, the moss is grown, the different mosses,\nToo deep to clear them away!\nThe leaves fall early this autumn, in wind.\nThe paired butterflies are already yellow with August\nOver the grass in the West garden,\nThey hurt me,\nI grow older,\nIf you are coming down through the narrows of the river Kiang,\nPlease let me know beforehand,\nAnd I will come out to meet you,\n                     As far as Cho-fu-Sa.",
"妾髮初覆額，\n折花門前劇；\n郎騎竹馬來，\n遶床弄青梅。\n同居長干里，\n兩小無嫌猜。\n十四為君婦，\n羞顏未嘗開；\n低頭向暗壁，\n千喚不一回。\n十五始展眉，\n願同塵與灰；\n常存抱柱信，\n豈上望夫臺？\n十六君遠行，\n瞿塘灩澦堆；\n五月不可觸，\n猿鳴天上哀。\n門前遲行跡，\n一一生綠苔；\n苔深不能掃，\n落葉秋風早。\n八月蝴蝶來，\n雙飛西園草。\n感此傷妾心，\n坐愁紅顏老。\n早晚下三巴，\n預將書報家；\n相迎不道遠，\n直至長風沙。",
"長干行"
],
[
"The Jewel Stairs' Grievance",
"Li Bai (李白), 701–762",
"Chinese",
"tr. Ezra Pound, Cathay (1915)",
"The jewelled steps are already quite white with dew,\nIt is so late that the dew soaks my gauze stockings,\nAnd I let down the crystal curtain\nAnd watch the moon through the clear autumn.",
"玉階生白露，\n夜久侵羅襪。\n卻下水晶簾，\n玲瓏望秋月。",
"玉階怨"
],
[
"Lament of the Frontier Guard",
"Li Bai (李白), 701–762",
"Chinese",
"tr. Ezra Pound, Cathay (1915)",
"By the North Gate, the wind blows full of sand,\nLonely from the beginning of time until now!\nTrees fall, the grass goes yellow with autumn.\nI climb the towers and towers to watch out the barbarous land:\nDesolate castle, the sky, the wide desert.\nThere is no wall left to this village.\nBones white with a thousand frosts,\nHigh heaps, covered with trees and grass;\nWho brought this to pass?\nWho has brought the flaming imperial anger?\nWho has brought the army with drums and with kettle-drums?\nBarbarous kings.\nA gracious spring, turned to blood-ravenous autumn,\nA turmoil of wars-men, spread over the middle kingdom,\nThree hundred and sixty thousand,\nAnd sorrow, sorrow like rain.\nSorrow to go, and sorrow, sorrow returning,\nDesolate, desolate fields,\nAnd no children of warfare upon them,\n       No longer the men for offence and defence.\nAh, how shall you know the dreary sorrow at the North Gate,\nWith Rihoku's name forgotten,\nAnd we guardsmen fed to the tigers.\n\n                                Rihaku."
],
[
"Taking Leave of a Friend",
"Li Bai (李白), 701–762",
"Chinese",
"tr. Ezra Pound, Cathay (1915)",
"Blue mountains to the north of the walls,\nWhite river winding about them;\nHere we must make separation\nAnd go out through a thousand miles of dead grass.\n\nMind like a floating wide cloud.\nSunset like the parting of old acquaintances\nWho bow over their clasped hands at a distance.\nOur horses neigh to each other as we are departing.",
"青山橫北郭，\n白水遶東城。\n此地一為別，\n孤蓬萬里征。\n浮雲游子意，\n落日故人情。\n揮手自茲去，\n蕭蕭班馬鳴。",
"送友人"
],
[
"The City of Choan",
"Li Bai (李白), 701–762",
"Chinese",
"tr. Ezra Pound, Cathay (1915)",
"The phoenix are at play on their terrace.\nThe phoenix are gone, the river flows on alone.\nFlowers and grass\nCover over the dark path where lay the dynastic house of the Go.\nThe bright cloths and bright caps of Shin\nAre now the base of old hills.\n\nThe Three Mountains fall through the far heaven,\nThe isle of White Heron splits the two streams apart.\nNow the high clouds cover the sun\nAnd I can not see Choan afar\nAnd I am sad.",
"鳳凰臺上鳳凰遊，\n鳳去臺空江自流。\n吳宮花草埋幽徑，\n晉代衣冠成古邱。\n三山半落青山外，\n二水中分白鷺洲。\n總為浮雲能蔽日，\n長安不見使人愁。",
"登金陵鳳凰臺"
],
[
"Separation on the River Kiang",
"Li Bai (李白), 701–762",
"Chinese",
"tr. Ezra Pound, Cathay (1915)",
"Ko-jin goes west from Ko-kaku-ro,\nThe smoke-flowers are blurred over the river.\nHis lone sail blots the far sky.\nAnd now I see only the river,\n            The long Kiang, reaching heaven."
],
[
"Night Thoughts",
"Li Bai (李白), 701–762",
"Chinese",
"tr. Florence Ayscough & Amy Lowell, Fir-Flower Tablets (1921)",
"In front of my bed the moonlight is very bright.\nI wonder if that can be frost on the floor?\nI lift up my head and look full at the full moon, the dazzling moon.\nI drop my head, and think of the home of old days.",
"床前明月光，\n疑是地上霜。\n舉頭望明月，\n低頭思故鄉。",
"夜思"
],
[
"Drinking Alone in the Moonlight",
"Li Bai (李白), 701–762",
"Chinese",
"tr. Florence Ayscough & Amy Lowell, Fir-Flower Tablets (1921)",
"A pot of wine among flowers.\nI alone, drinking, without a companion.\nI lift the cup and invite the bright moon.\nMy shadow opposite certainly makes us three.\nBut the moon cannot drink,\nAnd my shadow follows the motions of my body in vain.\nFor the briefest time are the moon and my shadow my companions.\nOh, be joyful! One must make the most of Spring.\nI sing--the moon walks forward rhythmically;\nI dance, and my shadow shatters and becomes confused.\nIn my waking moments, we are happily blended.\nWhen I am drunk, we are divided from one another and scattered.\nFor a long time I shall be obliged to wander without intention;\nBut we will keep our appointment by the far-off Cloudy River.",
"花間一壺酒，\n獨酌無相親，\n舉杯邀明月，\n對影成三人。\n月既不解飲，\n影徒隨我身，\n暫伴月將影，\n行樂須及春。\n我歌月徘徊，\n我舞影零亂；\n醒時同交歡，\n醉後各分散。\n永結無情遊，\n相期邈雲漢。",
"月下獨酌"
],
[
"The Perils of the Shu Road",
"Li Bai (李白), 701–762",
"Chinese",
"tr. Florence Ayscough & Amy Lowell, Fir-Flower Tablets (1921)",
"Alas! Alas! The danger! The steepness! O Affliction!\nThe Shu Road is as perilous and difficult as the way to the Green Heavens.\nNo greater undertaking than this has been since Ts'an Ts'ung and Yü Fu ruled the land.\nFor forty-eight thousand years no man had passed the boundary of Ch'in.\nWestward, over the Great White Mountain, was a bird-track\nBy which one could cross to the peak of Omei.\nBut the earth of the mountain fell and overwhelmed the Heroes so that they perished.\nAfterwards, therefore, they made sky-ladders and joined the cliffs with hanging pathways.\nAbove, the soaring tips of the high mountains hold back the six dragons of the sun;\nBelow, in the ravines, the flowing waters break into whirlpools and swirl back against the current.\nYellow geese flying toward the peaks cannot pass over them;\nThe gibbons climb and climb, despairingly pulling themselves up higher and higher, but even their endurance fails.\nHow the road coils and coils through the Green Mud Pass!\nWith nine turns to a hundred steps, it winds round the ledges of the mountain crests.\nClutching at Orion, passing the Well Star, I look up and gasp.\nI sit long with my hand pressed to my heart and groan.\nI ask my Lord how long this Westward wandering will last, when we shall return.\nIt is impossible to climb the terrible road along the edges of the precipices.\nAmong the ancient trees, one sees only cruel, mournful, black birds.\nMale birds, followed by females, fly to and fro through the woods.\nSometimes one hears a nightingale in the melancholy moonlight of the lonely mountain.\nThe Shu Road is as perilous and difficult as the way to the Green Heavens.\nThe ruddy faces of those who hear the story of it turn pale.\nThere is not a cubit's space between the mountain tops and the sky.\nDead and uprooted pine-trees hang over sheer cliffs.\nFlying waterfalls and rolling torrents outdo one another in clamour and confusion;\nThey dash against the perpendicular walls, whirl round ten thousand rocks, and boom like thunder along the ravines.\nThis is what the Two-Edged Sword Mountains are like!\nAlas! How endless a road for man to undertake! How came he to attempt it!\nThe Terraced Road of the Two-Edged Sword twists between glittering and rocky summits.\nOne man alone could hold it against a thousand and mow them down like grass.\nIf the guardian of the Pass were doubtful whether those who came were enemies of his kinsmen,\nHe could fall upon them as a ravening wolf.\nAt dawn, one flees the fierce tigers;\nIn the evening, one flees the long snakes\nWho sharpen their fangs and suck blood,\nDestroying men like hemp.\nEven though the delights of the Embroidered City are as reported,\nNothing could equal the joy of going home at once.\nThe Shu Road is as perilous and difficult as the way to the Green Heavens.\nI turn toward the West, and, gazing long, I sigh.",
"噫吁戲！\n危乎高哉！\n蜀道之難難於上青天。\n蠶叢及魚鳧，\n開國何茫然。\n爾來四萬八千歲，\n始與秦塞通人煙。\n西當太白有鳥道，\n可以橫絕峨嵋巔。\n地崩山摧壯士死，\n然後天梯石棧相鉤連。\n上有六龍回日之高標，\n下有衝波逆折之迴川。\n黃鶴之飛尚不得，\n猿猱欲度愁攀援。\n青泥何盤盤，\n百步九折縈巖巒。\n捫參歷井仰脅息，\n以手撫膺坐長歎。\n問君西遊何時還？\n畏途巉岩不可攀。\n但見悲鳥號古木，\n雄飛雌從繞林間；",
"蜀道難"
],
[
"The Moon over the Mountain Pass",
"Li Bai (李白), 701–762",
"Chinese",
"tr. Florence Ayscough & Amy Lowell, Fir-Flower Tablets (1921)",
"The bright moon rises behind the Heaven-high Mountain,\nA sea of clouds blows along the pale, wide sky.\nThe far-off wind has come from nearly ten thousand li,\nIt has blown across the Jade Gate Pass.\nDown the Po Têng Road went the people of Han\nTo waylay the men of Hu beside the Bright Green Bay.\nFrom the beginning, of those who go into battle,\nNot one man is seen returning.\nThe exiled Official gazes at the frontier town,\nHe thinks of his return home, and his face is very bitter.\nSurely to-night, in the distant cupola,\nHe sighs, and draws heavy breaths. How then can rest be his?",
"明月出天山，\n蒼茫雲海間；\n長風幾萬里，\n吹度玉門關。\n漢下白登道，\n胡窺青海灣。\n由來征戰地，\n不見有人還。\n戍客望邊色，\n思歸多苦顏；\n高樓當此夜，\n歎息未應閑。",
"關山月"
],
[
"Eternally Thinking of Each Other",
"Li Bai (李白), 701–762",
"Chinese",
"tr. Florence Ayscough & Amy Lowell, Fir-Flower Tablets (1921)",
"(The Woman Speaks)\n\nThe colour of the day is over; flowers hold the mist in their lips.\nThe bright moon is like glistening silk. I cannot sleep for grief.\nThe tones of the Chao psaltery begin and end on the bridge of the silver-crested love-pheasant.\nI wish I could play my Shu table-lute on the mandarin duck strings.\nThe meaning of this music--there is no one to receive it.\nI desire my thoughts to follow the Spring wind, even to the Swallow Mountains.\nI think of my Lord far, far away, remote as the Green Heaven.\nIn old days, my eyes were like horizontal waves;\nNow they flow, a spring of tears.\nIf you do not believe that the bowels of your Unworthy One are torn and severed,\nReturn and take up the bright mirror I was wont to use.\n\n(The Man Speaks)\n\nWe think of each other eternally.\nMy thoughts are at Ch'ang An.\nThe Autumn cricket chirps beside the railing of the Golden Well;\nThe light frost is chilly, chilly; the colour of the bamboo sleeping mat is cold.\nThe neglected lamp does not burn brightly. My thoughts seem broken off.\nI roll up the long curtain and look at the moon--it is useless, I sigh continually.\nThe Beautiful, Flower-like One is as far from me as the distance of the clouds.\nAbove is the brilliant darkness of a high sky,\nBelow is the rippling surface of the clear water.\nHeaven is far and the road to it is long; it is difficult for a man's soul to compass it in flight.\nEven in a dream my spirit cannot cross the grievous barrier of hills.\nWe think of each other eternally.\nMy heart and my liver are snapped in two."
],
[
"Reply to an Unrefined Person Encountered in the Hills",
"Li Bai (李白), 701–762",
"Chinese",
"tr. Florence Ayscough & Amy Lowell, Fir-Flower Tablets (1921)",
"He asks why I perch in the green jade hills.\nI smile and do not answer. My heart is comfortable and at peace.\nFallen peach-flowers spread out widely, widely, over the water.\nIt is another sky and earth, not the world of man."
],
[
"A Parting Gift to Wang Lun",
"Li Bai (李白), 701–762",
"Chinese",
"tr. Florence Ayscough & Amy Lowell, Fir-Flower Tablets (1921)",
"Li Po gets into a small boat--he is on the point of starting.\nSuddenly he hears footsteps on the bank and the sound of singing.\nThe Peach-Flower Pool is a thousand feet deep,\nYet it is not greater than the emotion of Wang Lun as he takes leave of me."
],
[
"The Thatched House Unroofed by an Autumn Gale",
"Du Fu (杜甫), 712–770",
"Chinese",
"tr. Florence Ayscough & Amy Lowell, Fir-Flower Tablets (1921)",
"It is the Eighth Month, the very height of Autumn.\nThe wind rages and roars.\nIt tears off three layers of my grass-roof.\nThe thatch flies--it crosses the river--it is scattered about in the open spaces by the river.\nHigh-flying, it hangs, tangled and floating, from the tops of forest trees;\nLow-flying, it whirls--turns--and sinks into the hollows of the marsh.\nThe swarm of small boys from the South Village laugh at me because I am old and feeble.\nHow dare they act like thieves and robbers before my face,\nOpenly seizing my thatch and running into my bamboo grove?\nMy lips are scorched, my mouth dry, I scream at them, but to no purpose.\nI return, leaning on my staff. I sigh and breathe heavily.\n\nPresently, of a sudden, the wind ceases. The clouds are the colour of ink.\nThe Autumn sky is endless--endless--stretching toward dusk and night.\nMy old cotton quilt is as cold as iron;\nMy restless son sleeps a troubled sleep, his moving foot tears the quilt.\nOver the head of the bed is a leak. Not a place is dry.\nThe rain streams and stands like hemp--there is no break in its falling.\nSince this misery and confusion, I have scarcely slept or dozed.\nAll the long night, I am soaking wet. When will the light begin to sift in?\nIf one could have a great house of one thousand, ten thousand rooms--\nA great shelter where all the Empire's shivering scholars could have happy faces--\nNot moved by wind or rain, solid as a mountain--\nAlas! When shall I see that house standing before my eyes?\nThen, although my own hut were destroyed, although I might freeze and die, I should be satisfied."
],
[
"The Recruiting Officers at the Village of the Stone Moat",
"Du Fu (杜甫), 712–770",
"Chinese",
"tr. Florence Ayscough & Amy Lowell, Fir-Flower Tablets (1921)",
"I sought a lodging for the night, at sunset, in the Stone Moat Village.\nRecruiting Officers, who seize people by night, were there.\nA venerable old man climbed over the wall and fled.\nAn old woman came out of the door and peered.\nWhat rage in the shouts of the Recruiting Officers!\nWhat bitterness in the weeping of the old woman!\nI heard the words of the woman as she pled her cause before them:\n\"My three sons are with the frontier guard at Yeh Ch'êng.\nFrom one son I have received a letter.\nA little while ago, two sons died in battle.\nHe who remains has stolen a temporary lease of life;\nThe dead are finished forever.\nIn the house, there is still no grown man,\nOnly my grandson at the breast.\nThe mother of my grandson has not gone,\nGoing out, coming in, she has not a single whole skirt.\nI am an old, old woman, and my strength is failing,\nBut I beg to go with the Recruiting Officers when they return this night.\nI will eagerly agree to act as a servant at Ho Yang;\nI am still able to prepare the early morning meal.\"\nThe sound of words ceased in the long night,\nIt was as though I heard the darkness choke with tears.\nAt daybreak, I went on my way,\nOnly the venerable old man was left."
],
[
"Plucking the Rushes",
"Anonymous, 4th century",
"Chinese",
"tr. Arthur Waley, A Hundred and Seventy Chinese Poems (1918)",
"Green rushes with red shoots,\nLong leaves bending to the wind--\nYou and I in the same boat\nPlucking rushes at the Five Lakes.\nWe started at dawn from the orchid-island:\nWe rested under the elms till noon.\nYou and I plucking rushes\nHad not plucked a handful when night came!"
],
[
"The Autumn Wind",
"Emperor Wu of Han (漢武帝), 156–87 BC",
"Chinese",
"tr. Arthur Waley, A Hundred and Seventy Chinese Poems (1918)",
"Autumn wind rises: white clouds fly.\nGrass and trees wither: geese go south.\nOrchids all in bloom: chrysanthemums smell sweet.\nI think of my lovely lady: I never can forget.\nFloating-pagoda boat crosses Fēn River.\nAcross the mid-stream white waves rise\nFlute and drum keep time to sound of the rowers’ song;\nAmidst revel and feasting, sad thoughts come;\nYouth’s years how few! Age how sure!"
],
[
"To His Wife",
"Attributed to Su Wu (蘇武), c. 100 BC",
"Chinese",
"tr. Arthur Waley, A Hundred and Seventy Chinese Poems (1918)",
"Since our hair was plaited and we became man and wife\nThe love between us was never broken by doubt.\nSo let us be merry this night together,\nFeasting and playing while the good time lasts.\n*   *   *\nI suddenly remember the distance that I must travel;\nI spring from bed and look out to see the time.\nThe stars and planets are all grown dim in the sky;\nLong, long is the road; I cannot stay.\nI am going on service, away to the battle-ground,\nAnd I do not know when I shall come back.\nI hold your hand with only a deep sigh;\nAfterwards, tears--in the days when we are parted.\nWith all your might enjoy the spring flowers,\nBut do not forget the time of our love and pride.\nKnow that if I live, I will come back again,\nAnd if I die, we will go on thinking of each other."
],
[
"Returning to the Fields",
"Tao Yuanming (陶淵明), 365–427",
"Chinese",
"tr. Arthur Waley, A Hundred and Seventy Chinese Poems (1918)",
"When I was young, I was out of tune with the herd:\nMy only love was for the hills and mountains.\nUnwitting I fell into the Web of the World’s dust\nAnd was not free until my thirtieth year.\nThe migrant bird longs for the old wood:\nThe fish in the tank thinks of its native pool.\nI had rescued from wildness a patch of the Southern Moor\nAnd, still rustic, I returned to field and garden.\nMy ground covers no more than ten acres:\nMy thatched cottage has eight or nine rooms.\nElms and willows cluster by the eaves:\nPeach trees and plum trees grow before the Hall.\nHazy, hazy the distant hamlets of men.\nSteady the smoke of the half-deserted village,\nA dog barks somewhere in the deep lanes,\nA cock crows at the top of the mulberry tree.\nAt gate and courtyard--no murmur of the World’s dust:\nIn the empty rooms--leisure and deep stillness.\nLong I lived checked by the bars of a cage:\nNow I have turned again to Nature and Freedom.\n\n(10)"
],
[
"Blaming Sons",
"Tao Yuanming (陶淵明), 365–427",
"Chinese",
"tr. Arthur Waley, A Hundred and Seventy Chinese Poems (1918)",
"White hair covers my temples,\nI am wrinkled and seared beyond repair,\nAnd though I have got five sons,\nThey all hate paper and brush.\nA-shu is eighteen:\nFor laziness there is none like him.\nA-hsüan does his best,\nBut really loathes the Fine Arts.\nYung-tuan is thirteen.\nBut does not know “six” from “seven.”\nT’ung-tzŭ in his ninth year\nIs only concerned with things to eat.\nIf Heaven treats me like this,\nWhat can I do but fill my cup?"
],
[
"Moving House",
"Tao Yuanming (陶淵明), 365–427",
"Chinese",
"tr. Arthur Waley, A Hundred and Seventy Chinese Poems (1918)",
"My old desire to live in the Southern Village\nWas not because I had taken a fancy to the house.\nBut I heard it was a place of simple-minded men\nWith whom it were a joy to spend the mornings and evenings.\nMany years I had longed to settle here:\nNow at last I have managed to move house.\nI do not mind if my cottage is rather small\nSo long as there’s room enough for bed and mat.\nOften and often the neighbours come to see me\nAnd with brave words discuss the things of old.\nRare writings we read together and praise:\nDoubtful meanings we examine together and settle.\n\n(9)"
],
[
"People Hide Their Love",
"Emperor Wu of Liang (梁武帝), 464–549",
"Chinese",
"tr. Arthur Waley, A Hundred and Seventy Chinese Poems (1918)",
"Who says\nThat it’s by my desire,\nThis separation, this living so far from you?\nMy dress still smells of the lavender you gave:\nMy hand still holds the letter that you sent.\nRound my waist I wear a double sash:\nI dream that it binds us both with a same-heart knot.\nDid not you know that people hide their love,\nLike a flower that seems too precious to be picked?"
],
[
"The Herd-Boy",
"Lu You (陸游), 1125–1210",
"Chinese",
"tr. Arthur Waley, A Hundred and Seventy Chinese Poems (1918)",
"In the southern village the boy who minds the ox\nWith his naked feet stands on the ox’s back.\nThrough the hole in his coat the river wind blows;\nThrough his broken hat the mountain rain pours.\nOn the long dyke he seemed to be far away;\nIn the narrow lane suddenly we were face to face.\n*   *   *\nThe boy is home and the ox is back in its stall;\nAnd a dark smoke oozes through the thatched roof."
],
[
"On the Birth of His Son",
"Su Shi (蘇軾), 1037–1101",
"Chinese",
"tr. Arthur Waley, A Hundred and Seventy Chinese Poems (1918)",
"Families, when a child is born\nWant it to be intelligent.\nI, through intelligence,\nHaving wrecked my whole life,\nOnly hope the baby will prove\nIgnorant and stupid.\nThen he will crown a tranquil life\nBy becoming a Cabinet Minister."
],
[
"Golden Bells",
"Bai Juyi (白居易), 772–846",
"Chinese",
"tr. Arthur Waley, A Hundred and Seventy Chinese Poems (1918)",
"When I was almost forty\nI had a daughter whose name was Golden Bells.\nNow it is just a year since she was born;\nShe is learning to sit and cannot yet talk.\nAshamed,--to find that I have not a sage’s heart:\nI cannot resist vulgar thoughts and feelings.\nHenceforward I am tied to things outside myself:\nMy only reward,--the pleasure I am getting now.\nIf I am spared the grief of her dying young,\nThen I shall have the trouble of getting her married.\nMy plan for retiring and going back to the hills\nMust now be postponed for fifteen years!"
],
[
"Remembering Golden Bells",
"Bai Juyi (白居易), 772–846",
"Chinese",
"tr. Arthur Waley, A Hundred and Seventy Chinese Poems (1918)",
"Ruined and ill,--a man of two score;\n  Pretty and guileless,--a girl of three.\nNot a boy,--but, still better than nothing:\nTo soothe one’s feeling,--from time to time a kiss!\nThere came a day,--they suddenly took her from me;\nHer soul’s shadow wandered I know not where.\nAnd when I remember how just at the time she died\nShe lisped strange sounds, beginning to learn to talk,\nThen I know that the ties of flesh and blood\nOnly bind us to a load of grief and sorrow.\nAt last, by thinking of the time before she was born,\nBy thought and reason I drove the pain away.\nSince my heart forgot her, many days have passed\nAnd three times winter has changed to spring.\nThis morning, for a little, the old grief came back,\nBecause, in the road, I met her foster-nurse."
],
[
"The Flower Market",
"Bai Juyi (白居易), 772–846",
"Chinese",
"tr. Arthur Waley, A Hundred and Seventy Chinese Poems (1918)",
"In the Royal City spring is almost over:\nTinkle, tinkle--the coaches and horsemen pass.\nWe tell each other “This is the peony season”:\nAnd follow with the crowd that goes to the Flower Market.\n“Cheap and dear--no uniform price:\nThe cost of the plant depends on the number of blossoms.\nFor the fine flower,--a hundred pieces of damask:\nFor the cheap flower,--five bits of silk.\nAbove is spread an awning to protect them:\nAround is woven a wattle-fence to screen them.\nIf you sprinkle water and cover the roots with mud,\nWhen they are transplanted, they will not lose their beauty.”\nEach household thoughtlessly follows the custom,\nMan by man, no one realizing.\nThere happened to be an old farm labourer\n        Who came by chance that way.\nHe bowed his head and sighed a deep sigh:\nBut this sigh nobody understood.\nHe was thinking, “A cluster of deep-red flowers\nWould pay the taxes of ten poor houses.”"
],
[
"The Charcoal-Seller",
"Bai Juyi (白居易), 772–846",
"Chinese",
"tr. Arthur Waley, A Hundred and Seventy Chinese Poems (1918)",
"An old charcoal-seller\nCutting wood and burning charcoal in the forests of the Southern Mountain.\nHis face, stained with dust and ashes, has turned to the colour of smoke.\nThe hair on his temples is streaked with gray: his ten fingers are black.\nThe money he gets by selling charcoal, how far does it go?\nIt is just enough to clothe his limbs and put food in his mouth.\nAlthough, alas, the coat on his back is a coat without lining.\nHe hopes for the coming of cold weather, to send up the price of coal!\nLast night, outside the city,--a whole foot of snow;\nAt dawn he drives the charcoal wagon along the frozen ruts.\nOxen,--weary; man,--hungry: the sun, already high;\nOutside the Gate, to the south of the Market, at last they stop in the mud.\nSuddenly, a pair of prancing horsemen. Who can it be coming?\nA public official in a yellow coat and a boy in a white shirt.\nIn their hands they hold a written warrant: on their tongues--the words of an order;\nThey turn back the wagon and curse the oxen, leading them off to the north.\nA whole wagon of charcoal,\nMore than a thousand pieces!\nIf officials choose to take it away, the woodman may not complain.\nHalf a piece of red silk and a single yard of damask,\nThe Courtiers have tied to the oxen’s collar, as the price of a wagon of coal!"
],
[
"The Red Cockatoo",
"Bai Juyi (白居易), 772–846",
"Chinese",
"tr. Arthur Waley, A Hundred and Seventy Chinese Poems (1918)",
"Sent as a present from Annam--\nA red cockatoo.\nColoured like the peach-tree blossom,\nSpeaking with the speech of men.\nAnd they did to it what is always done\nTo the learned and eloquent.\nThey took a cage with stout bars\nAnd shut it up inside."
],
[
"Eating Bamboo-Shoots",
"Bai Juyi (白居易), 772–846",
"Chinese",
"tr. Arthur Waley, A Hundred and Seventy Chinese Poems (1918)",
"My new Province is a land of bamboo-groves:\nTheir shoots in spring fill the valleys and hills.\nThe mountain woodman cuts an armful of them\nAnd brings them down to sell at the early market.\nThings are cheap in proportion as they are common;\nFor two farthings, I buy a whole bundle.\nI put the shoots in a great earthen pot\nAnd heat them up along with boiling rice.\nThe purple nodules broken,--like an old brocade;\nThe white skin opened,--like new pearls.\nNow every day I eat them recklessly;\nFor a long time I have not touched meat.\nAll the time I was living at Lo-yang\nThey could not give me enough to suit my taste,\nNow I can have as many shoots as I please;\nFor each breath of the south-wind makes a new bamboo!"
],
[
"After Lunch",
"Bai Juyi (白居易), 772–846",
"Chinese",
"tr. Arthur Waley, A Hundred and Seventy Chinese Poems (1918)",
"After lunch--one short nap:\nOn waking up--two cups of tea.\nRaising my head, I see the sun’s light\nOnce again slanting to the south-west.\nThose who are happy regret the shortness of the day;\nThose who are sad tire of the year’s sloth.\nBut those whose hearts are devoid of joy or sadness\nJust go on living, regardless of “short” or “long.”"
],
[
"The Philosophers: Lao-tzŭ",
"Bai Juyi (白居易), 772–846",
"Chinese",
"tr. Arthur Waley, A Hundred and Seventy Chinese Poems (1918)",
"“Those who speak know nothing;\nThose who know are silent.”\nThese words, as I am told,\nWere spoken by Lao-tzŭ.\nIf we are to believe that Lao-tzŭ\n    Was himself one who knew,\nHow comes it that he wrote a book\n    Of five thousand words?"
],
[
"Last Poem",
"Bai Juyi (白居易), 772–846",
"Chinese",
"tr. Arthur Waley, A Hundred and Seventy Chinese Poems (1918)",
"They have put my bed beside the unpainted screen;\nThey have shifted my stove in front of the blue curtain.\nI listen to my grandchildren, reading me a book;\nI watch the servants, heating up my soup.\nWith rapid pencil I answer the poems of friends;\nI feel in my pockets and pull out medicine-money.\nWhen this superintendence of trifling affairs is done,\nI lie back on my pillows and sleep with my face to the\nSouth."
]
];
