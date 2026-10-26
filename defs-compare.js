// Words whose meaning in Webster's 1913 differs from the modern sense in Open English WordNet 2024 (CC BY 4.0).
const DEFS_COMPARE = {
"gallimaufry": {
"now": "A motley assortment of things.",
"then": "A hash of various kinds of meats, a ragout."
},
"panoply": {
"now": "A complete and impressive array.",
"then": "Defensive armor in general; a full suit of defensive armor."
},
"abstemious": {
"now": "Sparing in consumption of especially food and drink.",
"then": "Abstaining from wine."
},
"asperity": {
"now": "Something hard to endure.",
"then": "Roughness of surface; unevenness; -- opposed to smoothness."
},
"phantasmagoria": {
"now": "A constantly changing medley of real or imagined images (as in a dream).",
"then": "An optical effect produced by a magic lantern."
},
"plangent": {
"now": "Loud and resounding.",
"then": "Beating; dashing, as a wave."
},
"saturnine": {
"now": "Bitter or scornful.",
"then": "Born under, or influenced by, the planet Saturn."
},
"sanctimonious": {
"now": "Excessively or hypocritically pious.",
"then": "Possessing sanctimony; holy; sacred; saintly."
},
"nondescript": {
"now": "Lacking distinct or individual characteristics; dull and uninteresting.",
"then": "Not hitherto described; novel; hence, odd; abnormal; unclassifiable."
},
"disparagement": {
"now": "A communication that belittles somebody or something.",
"then": "Matching any one in marriage under his or her degree; injurious union with something of inferior excellence; a lowering in rank or estimation."
},
"epitome": {
"now": "A standard or typical example.",
"then": "A work in which the contents of a former work are reduced within a smaller space by curtailment and condensation; a brief summary; an abridgement."
},
"exorbitant": {
"now": "Greatly exceeding bounds of reason or moderation.",
"then": "Departing from an orbit or usual track; hence, deviating from the usual or due course; going beyond the appointed rules or established limits of right or propriety; excessive; extravagant; enormous; inordinate."
},
"effete": {
"now": "Affected, overrefined, and effeminate.",
"then": "No longer capable of producing young, as an animal, or fruit, as the earth; hence, worn out with age; exhausted of energy; incapable of efficient action; no longer productive; barren; sterile."
},
"paraphernalia": {
"now": "Equipment consisting of miscellaneous articles needed for a particular operation or sport etc.",
"then": "Something reserved to a wife, over and above her dower, being chiefly apparel and ornaments suited to her degree."
},
"outlandish": {
"now": "Conspicuously or grossly unconventional or unusual.",
"then": "Foreign; not native."
},
"militate": {
"now": "Have force or influence; bring about an effect or change.",
"then": "To make war; to fight; to contend; -- usually followed by against and with."
},
"amputate": {
"now": "Remove surgically.",
"then": "To prune or lop off, as branches or tendrils."
},
"libertine": {
"now": "A dissolute person; usually a man who is morally unrestrained.",
"then": "A manumitted slave; a freedman; also, the son of a freedman."
},
"rosary": {
"now": "A string of beads used in counting prayers (especially by Catholics).",
"then": "A bed of roses, or place where roses grow."
},
"egregious": {
"now": "Conspicuously and outrageously bad or reprehensible.",
"then": "Surpassing; extraordinary; distinguished (in a bad sense); -- formerly used with words importing a good quality, but now joined with words having a bad sense."
},
"hectic": {
"now": "Marked by intense agitation or emotion.",
"then": "Habitual; constitutional; pertaining especially to slow waste of animal tissue, as in consumption."
},
"gentility": {
"now": "Elegance by virtue of fineness of manner and expression.",
"then": "Good extraction; dignity of birth."
},
"pedagogue": {
"now": "Someone who educates young people.",
"then": "A slave who led his master's children to school, and had the charge of them generally."
},
"officious": {
"now": "Intrusive in a meddling or offensive manner.",
"then": "Disposed to serve; kind; obliging."
},
"voluble": {
"now": "Marked by a ready flow of speech.",
"then": "Easily rolling or turning; easily set in motion; apt to roll; rotating."
},
"artifice": {
"now": "A deceptive maneuver (especially to avoid capture).",
"then": "Workmanship; a skillfully contrived work."
},
"deduce": {
"now": "Reason by deduction; establish by deduction.",
"then": "To lead forth."
},
"succinct": {
"now": "Briefly giving the gist of something.",
"then": "Girded or tucked up; bound; drawn tightly together."
},
"implicate": {
"now": "Bring into intimate and incriminating connection.",
"then": "To infold; to fold together; to interweave."
},
"escapade": {
"now": "A wild and exciting undertaking (not necessarily lawful).",
"then": "The fling of a horse, or ordinary kicking back of his heels; a gambol."
},
"chaperon": {
"now": "One who accompanies and supervises a young woman or gatherings of young people.",
"then": "A hood; especially, an ornamental or an official hood."
},
"affluence": {
"now": "Abundant wealth.",
"then": "A flowing to or towards; a concourse; an influx."
},
"promiscuous": {
"now": "Not selective of a single class or person.",
"then": "Consisting of individuals united in a body or mass without order; mingled; confused; undistinguished."
},
"waspish": {
"now": "Very irritable.",
"then": "Resembling a wasp in form; having a slender waist, like a wasp."
},
"durance": {
"now": "Imprisonment (especially for a long time).",
"then": "Continuance; duration."
},
"revulsion": {
"now": "Intense aversion.",
"then": "A strong pulling or drawing back; withdrawal."
},
"purblind": {
"now": "Having greatly reduced vision.",
"then": "Wholly blind."
},
"expatiate": {
"now": "Add details, as to an account or idea; clarify the meaning of and discourse in a learned way, usually in writing.",
"then": "To range at large, or without restraint."
},
"exterminate": {
"now": "Kill en masse; kill on a large scale; kill many.",
"then": "To drive out or away; to expel."
},
"noggin": {
"now": "Informal terms for a human head.",
"then": "A small mug or cup."
},
"ingenuous": {
"now": "Characterized by an inability to mask your feelings; not devious.",
"then": "Of honorable extraction; freeborn; noble."
},
"blithe": {
"now": "Lacking or showing a lack of due concern.",
"then": "Gay; merry; sprightly; joyous; glad; cheerful."
},
"haggle": {
"now": "Wrangle (over a price, terms of an agreement, etc.).",
"then": "To cut roughly or hack; to cut into small pieces; to notch or cut in an unskillful manner; to make rough or mangle by cutting."
},
"sloppy": {
"now": "Lacking neatness or order.",
"then": "Wet, so as to spatter easily; wet, as with something slopped over; muddy; plashy."
},
"insinuation": {
"now": "An indirect (and usually malicious) implication.",
"then": "The act or process of insinuating; a creeping, winding, or flowing in."
},
"carnage": {
"now": "The savage and excessive killing of many people.",
"then": "Flesh of slain animals or men."
},
"obnoxious": {
"now": "Causing disapproval or protest.",
"then": "Subject; liable; exposed; answerable; amenable; -- with to."
},
"precarious": {
"now": "Affording no ease or reassurance.",
"then": "Depending on the will or pleasure of another; held by courtesy; liable to be changed or lost at the pleasure of another."
},
"luminary": {
"now": "A celebrity who is an inspiration to others.",
"then": "Any body that gives light, especially one of the heavenly bodies."
}
};
