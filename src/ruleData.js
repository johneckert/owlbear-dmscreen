/* 
NOTE ON KEY NAMES: 
For key names of main rules eg. 'strength' spaces should be used between words.
For key names of sub-rules eg. 'athletics' a '-' represents a space in the rule name and ' ' represents a dot. 
*/

export const RULE_DATA = {
  strength: {
    athletics: {
      description: 'Climb a wall or a rope, swim or jump high.',
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'Easy',
          examples: 'Normal wall; Tread in rough condition; Water; Clear obstacle while jumping',
        },
        {
          difficulty: 'Moderate',
          examples: 'Rope from overhang; Swim in rough water',
        },
        {
          difficulty: 'Hard',
          examples: 'Wall with rare handholds; Catch on a rope; Violent water',
        },
        {
          difficulty: 'Very Hard',
          examples: 'Slippery wall; Stormy waters; Clear obstacle while jumping',
        },
      ],
    },
    'feats-of-strength other': {
      description:
        'Any attempt to lift, push, pull, or break something, to force your body through a space, or to otherwise apply brute force to a situation.',
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'Easy',
          examples: 'Struck/broken door; Weak bindings; Pull stuck wedge obiect loose',
        },
        {
          difficulty: 'Moderate',
          examples: 'Reinforced wooden door; Hang on a wagon',
        },
        {
          difficulty: 'Hard',
          examples: 'Heavy locked/barred door; Topple stone statue; Pull stuck wagon',
        },
        {
          difficulty: 'Very Hard',
          examples: 'Heavy reinforced door; Hold door against water',
        },
      ],
    },
  },
  dexterity: {
    acrobatics: {
      description: 'Walk across difficult surface; Hold balance; Land safely; Otherwise fall / take damage.',
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'Easy',
          examples: 'Icy surface; Turbulent situation; Land on dificult terrain',
        },
        {
          difficulty: 'Moderate',
          examples: 'Narrow edge; swing from chandelier and land',
        },
        {
          difficulty: 'Hard',
          examples: 'Cross a wildly swaying rope bridge',
        },
        {
          difficulty: 'Very Hard',
          examples: 'Walk across a tightrope; Vault over/under an enemy',
        },
      ],
    },
    'sleight-of-hand': {
      headers: ['description', 'purpose'],
      rows: [
        {
          description: 'Contest vs. Perception',
          purpose: 'Hide an object on your person; Palm an object; Lift a purse; Plant an object on another person.',
        },
      ],
    },
    stealth: {
      headers: ['description', 'purpose'],
      rows: [
        {
          description: 'Contest vs. Deception',
          purpose: 'Conceal from enemies; Sneak past targets; Slip away while others are distracted.',
        },
      ],
    },
    'pick-lock disarm-trap': {
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'Easy',
          examples: 'Simple lock; Simple trap',
        },
        {
          difficulty: 'Moderate',
          examples: 'Typical lock; Average trap',
        },
        {
          difficulty: 'Hard',
          examples: 'Elaborate lock; Complex trap',
        },
        {
          difficulty: 'Very Hard',
          examples: 'Masterwork lock; Magical trap',
        },
      ],
    },
  },
  constitution: {
    concentration: {
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: '10 or half of the damage taken.',
          examples: 'After taking damage while maintaining concentration spell.',
        },
      ],
    },
  },
  intelligence: {
    'arcana history nature religion': {
      description: {
        arcana: 'Spells, magic items, planes of existence',
        history: 'historical events, old kingdoms, legendary people',
        nature: 'terrain. plants and animals',
        religion: 'deities, rites and prayers, holy symbols',
      },
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'Easy',
          examples: 'Recall widely known information. (common)',
        },
        {
          difficulty: 'Moderate',
          examples: 'Recall more obscure or specific information. (uncommon)',
        },
        {
          difficulty: 'Hard',
          examples: 'Recall truly esoteric or precise information. (rare)',
        },
        {
          difficulty: 'Very Hard',
          examples: 'Recall information that is known only by a privileged few. (very rare)',
        },
      ],
    },
    'investigation other': {
      description:
        "Identity a trap or a secret or coded message; Communicate a idea with an creature you don't share a language with; Discover the true nature of an illusion",
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'Easy',
          examples: 'Obvious trap or a secret; Simple idea with an intelligent creature; Low-level illusion',
        },
        {
          difficulty: 'Moderate',
          examples:
            'Typical trap; Determine time or cause of death of a recentlv deceased creature; Estimate the material worth of an item; Mid-level illusion',
        },
        {
          difficulty: 'Hard',
          examples:
            'Well-hidden trap, object, or area; Forge a document or identity such a document; High-level illusion',
        },
        {
          difficulty: 'Very Hard',
          examples:
            'Magically-hidden trap, object, or area; Discern the purpose and process of a comblicated device or system; Determine the integrity of a structure, construct, or formation and identity any exploitable weak points.',
        },
      ],
    },
  },
  wisdom: {
    'insight perception': {
      description: {
        insight: 'Read the intentions of a creature; Check if it the truth',
        perception: 'Spot/recognize a location; Hear a sound; Detect a smell; Feel vibrations through the ground',
      },
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'Easy',
          examples:
            'Read a child, prominent landmark, or structure; Hear the far-off sound of thunder signaling a coming storm',
        },
        {
          difficulty: 'Moderate',
          examples:
            'Discern the leader of a group; the intended message of a non-verbal talk shot a natural-obscured obiect or teature: a conversation in the next room',
        },
        {
          difficulty: 'Hard',
          examples:
            "Guess at the enemy's next action; Well-hidden object or feature; A hushed conversation through a heavv door",
        },
        {
          difficulty: 'Very Hard',
          examples: 'Near invisible object or feature; Read the lips of a creature vou can see but not hear',
        },
      ],
    },
    survival: {
      description: 'Follow a trail / track; forage food for a day; navigate in wilderness.',
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'Easy',
          examples:
            'Well-worn trail in a forest; Tracks of a creature through snow or mud; Forage in a plentiful area; Navigate on a clear night',
        },
        {
          difficulty: 'Moderate',
          examples:
            'Abandoned or forgotten trail; Track a creature through a forest; Forage in a sparse area; Navigate on a cloudy night; Predict an oncoming storm; Identify the signs of nearby creatures',
        },
        {
          difficulty: 'Hard',
          examples:
            "Track over barren terrain; Forage in a harsh area; Navigate through an alien area on a cloudy night; Predict tomorrow's weather",
        },
        {
          difficulty: 'Very Hard',
          examples: 'Track after rainfall; Navigate an alien area on a stormy night.',
        },
      ],
    },
    'animal-handling medicine other': {
      description: {
        'Animal Handling': 'Interact with or train an animal',
        Medicine: 'cure or stabilize a creature , diagnose ailments',
      },
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'Easy',
          examples: 'Domesticated animal; Stabilize a dying creature outside of combat; Common ailment',
        },
        {
          difficulty: 'Moderate',
          examples:
            'Wild but otherwise peaceful animal; Perform a complex maneuver while mounted; Set a broken bone; Stabilize a dying creature in the middle of combat; Uncommon ailment',
        },
        {
          difficulty: 'Hard',
          examples: "Intuit a hostile animal's next action; Control an untrained mount; Rare ailment",
        },
        {
          difficulty: 'Very Hard',
          examples: 'Calm a dangerous wild animal; Diagnose magical and divine ailments',
        },
      ],
    },
  },
  charisma: {
    deception: {
      headers: ['description', 'examples'],
      rows: [
        {
          description: 'Contest vs. Insight',
          examples:
            'Fast-talk or con someone, adopt a disguise or impersonate another creature, tell a convincing lie or otherwise hide vour true intentions.',
        },
      ],
    },
    intimidation: {
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'Easy',
          examples: 'Scare a spineless noble in to handing over their coin purse.',
        },
        {
          difficulty: 'Moderate',
          examples:
            'Pry information out of an uncooperative prisoner, convince street thugs to back down from a confrontation.',
        },
        {
          difficulty: 'Hard',
          examples:
            'Advise a guard that it might be best to look the other wav this time around, coerce an official in to signing a document.',
        },
        {
          difficulty: 'Very Hard',
          examples: 'Frighten a creature larger than you, causing it to flee; Stop an agitated mob in their tracks.',
        },
      ],
    },
    performance: {
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'Easy',
          examples: 'Routine performance such as telling a story in a tavern or around a campfire.',
        },
        {
          difficulty: 'Moderate',
          examples:
            'Professional performance such as an inspiring speech or an impressive musical display which may attract the attention of a local troupe and lead to regional fame.',
        },
        {
          difficulty: 'Hard',
          examples:
            'Memorable pertormance which may attract the attention of a local patron and lead to national fame.',
        },
        {
          difficulty: 'Very Hard',
          examples:
            'Extraordinary performance which may attract the attention of distant patrons and even extra-planar beings.',
        },
      ],
    },
    persuasion: {
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'Easy',
          examples: 'Convince the mayor to allow your party to help calm a distraught person.',
        },
        {
          difficulty: 'Moderate',
          examples:
            'Persuade a group of highway thieves to leave in peace. Convince a friendly aquaintance that you know best.',
        },
        {
          difficulty: 'Hard',
          examples:
            'Convince a chamberlain to let your party see the king, inspire or rally a crown of townsfolk negotiate a peace between warring tribes.',
        },
        {
          difficulty: 'Very Hard',
          examples:
            "Convince a sphinx that you are worthy of the secrets it guards; Assure a dragon you're worth more alive than dead.",
        },
      ],
    },
  },
};