// [title, author, era, date/note, text]  (public-domain texts; ancient pieces in the author's own translation)
const POEM_SETS = {
Ancient: [
["Fragment 147","Sappho","Ancient","c. 600 BC, Lesbos (tr. for this app)",
`Someone, I tell you,
will remember us
even in another time.`],
["Poem 85","Catullus","Ancient","c. 60 BC, Rome (tr. for this app)",
`I hate and I love. Why do I do it, you may ask.
I don't know, but I feel it happening, and I am torn apart.`],
["Quiet Night Thought","Li Bai","Ancient","c. 750, Tang China (tr. for this app)",
`Before my bed, the moonlight gleams;
I take it for frost upon the ground.
I lift my head and watch the bright moon;
I bow my head and think of home.`],
["Odes 1.11 (ending)","Horace","Ancient","c. 23 BC, Rome (tr. for this app)",
`Be wise: strain the wine,
and cut long hopes down to a short span.
Even as we speak, grudging time has fled.
Seize the day, and trust as little as you can
to tomorrow.`],
["To Every Thing There Is a Season","Ecclesiastes 3:1–8","Ancient","c. 3rd century BC (King James Version)",
`To every thing there is a season, and a time to every purpose under the heaven:
A time to be born, and a time to die; a time to plant, and a time to pluck up that which is planted;
A time to kill, and a time to heal; a time to break down, and a time to build up;
A time to weep, and a time to laugh; a time to mourn, and a time to dance;
A time to cast away stones, and a time to gather stones together; a time to embrace, and a time to refrain from embracing;
A time to get, and a time to lose; a time to keep, and a time to cast away;
A time to rend, and a time to sew; a time to keep silence, and a time to speak;
A time to love, and a time to hate; a time of war, and a time of peace.`],
["Psalm 23","Attributed to David","Ancient","c. 1000 BC (King James Version)",
`The LORD is my shepherd; I shall not want.
He maketh me to lie down in green pastures: he leadeth me beside the still waters.
He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.
Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.
Thou preparest a table before me in the presence of mine enemies: thou anointest my head with oil; my cup runneth over.
Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the LORD for ever.`]
],
Classical: [
["Sonnet 18","William Shakespeare","Classical","1609",
`Shall I compare thee to a summer's day?
Thou art more lovely and more temperate:
Rough winds do shake the darling buds of May,
And summer's lease hath all too short a date;
Sometime too hot the eye of heaven shines,
And often is his gold complexion dimm'd;
And every fair from fair sometime declines,
By chance or nature's changing course untrimm'd;
But thy eternal summer shall not fade,
Nor lose possession of that fair thou ow'st;
Nor shall death brag thou wander'st in his shade,
When in eternal lines to time thou grow'st:
So long as men can breathe or eyes can see,
So long lives this, and this gives life to thee.`],
["Sonnet 116","William Shakespeare","Classical","1609",
`Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove:
O no! it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wandering bark,
Whose worth's unknown, although his height be taken.
Love's not Time's fool, though rosy lips and cheeks
Within his bending sickle's compass come:
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
If this be error and upon me proved,
I never writ, nor no man ever loved.`],
["Death, Be Not Proud","John Donne","Classical","c. 1610",
`Death be not proud, though some have called thee
Mighty and dreadful, for thou art not so;
For those whom thou think'st thou dost overthrow
Die not, poor Death, nor yet canst thou kill me.
From rest and sleep, which but thy pictures be,
Much pleasure; then from thee much more must flow,
And soonest our best men with thee do go,
Rest of their bones, and soul's delivery.
Thou art slave to fate, chance, kings, and desperate men,
And dost with poison, war, and sickness dwell,
And poppy or charms can make us sleep as well
And better than thy stroke; why swell'st thou then?
One short sleep past, we wake eternally
And death shall be no more; Death, thou shalt die.`],
["To the Virgins, to Make Much of Time","Robert Herrick","Classical","1648",
`Gather ye rose-buds while ye may,
Old Time is still a-flying;
And this same flower that smiles to-day
To-morrow will be dying.

The glorious Lamp of Heaven, the Sun,
The higher he's a-getting,
The sooner will his race be run,
And nearer he's to setting.

That age is best which is the first,
When youth and blood are warmer;
But being spent, the worse, and worst
Times still succeed the former.

Then be not coy, but use your time,
And while ye may, go marry:
For having lost but once your prime,
You may for ever tarry.`],
["The Old Pond","Matsuo Bashō","Classical","1686, Japan (tr. for this app)",
`An old pond:
a frog jumps in,
the sound of water.`],
["A Red, Red Rose","Robert Burns","Classical","1794",
`O my Luve is like a red, red rose
That's newly sprung in June;
O my Luve is like the melodie
That's sweetly play'd in tune.

As fair art thou, my bonnie lass,
So deep in luve am I;
And I will luve thee still, my dear,
Till a' the seas gang dry.

Till a' the seas gang dry, my dear,
And the rocks melt wi' the sun;
I will luve thee still, my dear,
While the sands o' life shall run.

And fare thee weel, my only Luve!
And fare thee weel a while!
And I will come again, my Luve,
Tho' it were ten thousand mile.`],
["The Tyger","William Blake","Classical","1794",
`Tyger Tyger, burning bright,
In the forests of the night;
What immortal hand or eye,
Could frame thy fearful symmetry?

In what distant deeps or skies.
Burnt the fire of thine eyes?
On what wings dare he aspire?
What the hand, dare seize the fire?

And what shoulder, & what art,
Could twist the sinews of thy heart?
And when thy heart began to beat,
What dread hand? & what dread feet?

What the hammer? what the chain,
In what furnace was thy brain?
What the anvil? what dread grasp,
Dare its deadly terrors clasp!

When the stars threw down their spears
And water'd heaven with their tears:
Did he smile his work to see?
Did he who made the Lamb make thee?

Tyger Tyger burning bright,
In the forests of the night:
What immortal hand or eye,
Dare frame thy fearful symmetry?`],
["Auguries of Innocence (opening)","William Blake","Classical","c. 1803",
`To see a World in a Grain of Sand
And a Heaven in a Wild Flower,
Hold Infinity in the palm of your hand
And Eternity in an hour.`]
],
New: [
["Ozymandias","Percy Bysshe Shelley","New","1818",
`I met a traveller from an antique land,
Who said—"Two vast and trunkless legs of stone
Stand in the desert. . . . Near them, on the sand,
Half sunk a shattered visage lies, whose frown,
And wrinkled lip, and sneer of cold command,
Tell that its sculptor well those passions read
Which yet survive, stamped on these lifeless things,
The hand that mocked them, and the heart that fed;
And on the pedestal, these words appear:
My name is Ozymandias, King of Kings;
Look on my Works, ye Mighty, and despair!
Nothing beside remains. Round the decay
Of that colossal Wreck, boundless and bare
The lone and level sands stretch far away."`],
["Bright Star","John Keats","New","1819",
`Bright star, would I were stedfast as thou art—
Not in lone splendour hung aloft the night
And watching, with eternal lids apart,
Like nature's patient, sleepless Eremite,
The moving waters at their priestlike task
Of pure ablution round earth's human shores,
Or gazing on the new soft-fallen mask
Of snow upon the mountains and the moors—
No—yet still stedfast, still unchangeable,
Pillow'd upon my fair love's ripening breast,
To feel for ever its soft fall and swell,
Awake for ever in a sweet unrest,
Still, still to hear her tender-taken breath,
And so live ever—or else swoon to death.`],
["The World Is Too Much with Us","William Wordsworth","New","1807",
`The world is too much with us; late and soon,
Getting and spending, we lay waste our powers;—
Little we see in Nature that is ours;
We have given our hearts away, a sordid boon!
This Sea that bares her bosom to the moon,
The winds that will be howling at all hours,
And are up-gathered now like sleeping flowers,
For this, for everything, we are out of tune;
It moves us not.—Great God! I'd rather be
A Pagan suckled in a creed outworn;
So might I, standing on this pleasant lea,
Have glimpses that would make me less forlorn;
Have sight of Proteus rising from the sea;
Or hear old Triton blow his wreathèd horn.`],
["“Hope” is the thing with feathers","Emily Dickinson","New","c. 1861",
`"Hope" is the thing with feathers -
That perches in the soul -
And sings the tune without the words -
And never stops - at all -

And sweetest - in the Gale - is heard -
And sore must be the storm -
That could abash the little Bird
That kept so many warm -

I've heard it in the chillest land -
And on the strangest Sea -
Yet - never - in Extremity,
It asked a crumb - of me.`],
["I'm Nobody! Who are you?","Emily Dickinson","New","c. 1861",
`I'm Nobody! Who are you?
Are you – Nobody – too?
Then there's a pair of us!
Don't tell! they'd advertise – you know!

How dreary – to be – Somebody!
How public – like a Frog –
To tell one's name – the livelong June –
To an admiring Bog!`],
["A Noiseless Patient Spider","Walt Whitman","New","1868",
`A noiseless patient spider,
I mark'd where on a little promontory it stood isolated,
Mark'd how to explore the vacant vast surrounding,
It launch'd forth filament, filament, filament, out of itself,
Ever unreeling them, ever tirelessly speeding them.

And you O my soul where you stand,
Surrounded, detached, in measureless oceans of space,
Ceaselessly musing, venturing, throwing, seeking the spheres to connect them,
Till the bridge you will need be form'd, till the ductile anchor hold,
Till the gossamer thread you fling catch somewhere, O my soul.`],
["Crossing the Bar","Alfred, Lord Tennyson","New","1889",
`Sunset and evening star,
And one clear call for me!
And may there be no moaning of the bar,
When I put out to sea,

But such a tide as moving seems asleep,
Too full for sound and foam,
When that which drew from out the boundless deep
Turns again home.

Twilight and evening bell,
And after that the dark!
And may there be no sadness of farewell,
When I embark;

For tho' from out our bourne of Time and Place
The flood may bear me far,
I hope to see my Pilot face to face
When I have crost the bar.`],
["Remember","Christina Rossetti","New","1862",
`Remember me when I am gone away,
Gone far away into the silent land;
When you can no more hold me by the hand,
Nor I half turn to go yet turning stay.
Remember me when no more day by day
You tell me of our future that you plann'd:
Only remember me; you understand
It will be late to counsel then or pray.
Yet if you should forget me for a while
And afterwards remember, do not grieve:
For if the darkness and corruption leave
A vestige of the thoughts that once I had,
Better by far you should forget and smile
Than that you should remember and be sad.`],
["Loveliest of Trees","A. E. Housman","New","1896",
`Loveliest of trees, the cherry now
Is hung with bloom along the bough,
And stands about the woodland ride
Wearing white for Eastertide.

Now, of my threescore years and ten,
Twenty will not come again,
And take from seventy springs a score,
It only leaves me fifty more.

And since to look at things in bloom
Fifty springs are little room,
About the woodlands I will go
To see the cherry hung with snow.`],
["Pied Beauty","Gerard Manley Hopkins","New","1877",
`Glory be to God for dappled things—
For skies of couple-colour as a brinded cow;
For rose-moles all in stipple upon trout that swim;
Fresh-firecoal chestnut-falls; finches' wings;
Landscape plotted and pieced—fold, fallow, and plough;
And áll trádes, their gear and tackle and trim.
All things counter, original, spare, strange;
Whatever is fickle, freckled (who knows how?)
With swift, slow; sweet, sour; adazzle, dim;
He fathers-forth whose beauty is past change:
Praise him.`]
],
Modern: [
["The Second Coming","W. B. Yeats","Modern","1920",
`Turning and turning in the widening gyre
The falcon cannot hear the falconer;
Things fall apart; the centre cannot hold;
Mere anarchy is loosed upon the world,
The blood-dimmed tide is loosed, and everywhere
The ceremony of innocence is drowned;
The best lack all conviction, while the worst
Are full of passionate intensity.

Surely some revelation is at hand;
Surely the Second Coming is at hand.
The Second Coming! Hardly are those words out
When a vast image out of Spiritus Mundi
Troubles my sight: somewhere in sands of the desert
A shape with lion body and the head of a man,
A gaze blank and pitiless as the sun,
Is moving its slow thighs, while all about it
Reel shadows of the indignant desert birds.
The darkness drops again; but now I know
That twenty centuries of stony sleep
Were vexed to nightmare by a rocking cradle,
And what rough beast, its hour come round at last,
Slouches towards Bethlehem to be born?`],
["The Lake Isle of Innisfree","W. B. Yeats","Modern","1890",
`I will arise and go now, and go to Innisfree,
And a small cabin build there, of clay and wattles made;
Nine bean-rows will I have there, a hive for the honey-bee,
And live alone in the bee-loud glade.

And I shall have some peace there, for peace comes dropping slow,
Dropping from the veils of the morning to where the cricket sings;
There midnight's all a glimmer, and noon a purple glow,
And evening full of the linnet's wings.

I will arise and go now, for always night and day
I hear lake water lapping with low sounds by the shore;
While I stand on the roadway, or on the pavements grey,
I hear it in the deep heart's core.`],
["Stopping by Woods on a Snowy Evening","Robert Frost","Modern","1923",
`Whose woods these are I think I know.
His house is in the village though;
He will not see me stopping here
To watch his woods fill up with snow.

My little horse must think it queer
To stop without a farmhouse near
Between the woods and frozen lake
The darkest evening of the year.

He gives his harness bells a shake
To ask if there is some mistake.
The only other sound's the sweep
Of easy wind and downy flake.

The woods are lovely, dark and deep,
But I have promises to keep,
And miles to go before I sleep,
And miles to go before I sleep.`],
["Fire and Ice","Robert Frost","Modern","1920",
`Some say the world will end in fire,
Some say in ice.
From what I've tasted of desire
I hold with those who favor fire.
But if it had to perish twice,
I think I know enough of hate
To say that for destruction ice
Is also great
And would suffice.`],
["The Red Wheelbarrow","William Carlos Williams","Modern","1923",
`so much depends
upon

a red wheel
barrow

glazed with rain
water

beside the white
chickens.`],
["In a Station of the Metro","Ezra Pound","Modern","1913",
`The apparition of these faces in the crowd;
Petals on a wet, black bough.`],
["Fog","Carl Sandburg","Modern","1916",
`The fog comes
on little cat feet.

It sits looking
over harbor and city
on silent haunches
and then moves on.`],
["There Will Come Soft Rains","Sara Teasdale","Modern","1920",
`There will come soft rains and the smell of the ground,
And swallows circling with their shimmering sound;

And frogs in the pools singing at night,
And wild plum trees in tremulous white;

Robins will wear their feathery fire
Whistling their whims on a low fence-wire;

And not one will know of the war, not one
Will care at last when it is done.

Not one would mind, neither bird nor tree
If mankind perished utterly;

And Spring herself, when she woke at dawn
Would scarcely know that we were gone.`],
["The Negro Speaks of Rivers","Langston Hughes","Modern","1921",
`I've known rivers:
I've known rivers ancient as the world and older than the
flow of human blood in human veins.

My soul has grown deep like the rivers.

I bathed in the Euphrates when dawns were young.
I built my hut near the Congo and it lulled me to sleep.
I looked upon the Nile and raised the pyramids above it.
I heard the singing of the Mississippi when Abe Lincoln
went down to New Orleans, and I've seen its muddy
bosom turn all golden in the sunset.

I've known rivers:
Ancient, dusky rivers.

My soul has grown deep like the rivers.`]
]
};

// Interleave the eras so the daily poem rotates Ancient → Classical → New → Modern → Chinese.
const POEMS = (() => {
  const lists = [...Object.values(POEM_SETS), typeof CHINESE_POEMS !== 'undefined' ? CHINESE_POEMS : []].map(a => a.slice());
  const out = [];
  while (lists.some(l => l.length)) lists.forEach(l => { if (l.length) out.push(l.shift()); });
  return out;
})();
