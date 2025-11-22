import { ElizaConfig } from '../types';

// ---------------------------------------------------------------------------
// ENGLISH CONFIGURATION
// ---------------------------------------------------------------------------

export const englishReflections: { [key: string]: string } = {
  "am": "are",
  "was": "were",
  "i": "you",
  "i'd": "you would",
  "i've": "you have",
  "i'll": "you will",
  "my": "your",
  "are": "am",
  "you've": "I have",
  "you'll": "I will",
  "your": "my",
  "yours": "mine",
  "you": "me",
  "me": "you"
};

export const englishScript: ElizaConfig = {
  initialMessages: [
    "Hello. I am Eliza. How are you feeling today?",
    "Please tell me what's on your mind."
  ],
  fallbacks: [
    "Please go on.",
    "Does that suggest anything else which belongs to you?",
    "I see.",
    "I am not sure I understand you fully.",
    "Come, come, elucidate your thoughts.",
    "Can you elaborate on that?",
    "That is quite interesting."
  ],
  reflections: englishReflections,
  keywords: [
    { pattern: /can you ([^?]*)/i, responses: ["Don't you believe that I can {0}?", "You want me to be able to {0}.", "Perhaps you would like to be able to {0} yourself."] },
    { pattern: /can i ([^?]*)/i, responses: ["Perhaps you don't want to {0}.", "Do you want to be able to {0}?", "If you could {0}, would you?"] },
    { pattern: /you are ([^?]*)/i, responses: ["What makes you think I am {0}?", "Does it please you to believe I am {0}?", "Do you sometimes wish you were {0}?", "Perhaps you would like to be {0}."] },
    { pattern: /youre ([^?]*)/i, responses: ["What makes you think I am {0}?", "Does it please you to believe I am {0}?", "Perhaps you would like to be {0}."] },
    { pattern: /i don't ([^?]*)/i, responses: ["Don't you really {0}?", "Why don't you {0}?", "Do you wish to be able to {0}?"] },
    { pattern: /i feel ([^?]*)/i, responses: ["Good, tell me more about these feelings.", "Do you often feel {0}?", "When do you usually feel {0}?", "When you feel {0}, what do you do?"] },
    { pattern: /i have ([^?]*)/i, responses: ["Why do you tell me that you've {0}?", "Have you really {0}?", "Now that you have {0}, what will you do next?"] },
    { pattern: /i would ([^?]*)/i, responses: ["Could you explain why you would {0}?", "Why would you {0}?", "Who else knows that you would {0}?"] },
    { pattern: /is there ([^?]*)/i, responses: ["Do you think there is {0}?", "It's likely that there is {0}.", "Would you like there to be {0}?"] },
    { pattern: /my ([^?]*)/i, responses: ["I see, your {0}.", "Why do you say your {0}?", "When your {0}, how does that make you feel?"] },
    { pattern: /you ([^?]*)/i, responses: ["We were discussing you, not me.", "Oh, I {0}?", "You're not really talking about me, are you?"] },
    { pattern: /why ([^?]*)/i, responses: ["Why do you ask {0}?", "Why is it important to you?", "Have you thought about {0} yourself?"] },
    { pattern: /i want ([^?]*)/i, responses: ["What would it mean to you if you got {0}?", "Why do you want {0}?", "Suppose you got {0} soon."] },
    { pattern: /mother/i, key: 'mother', responses: ["Tell me more about your mother.", "How was your relationship with your mother?", "Does she influence you?"], followUps: ["You mentioned your mother earlier. What else comes to mind?", "Let's talk more about your mother.", "How does thinking about your mother make you feel now?"] },
    { pattern: /father/i, key: 'father', responses: ["Tell me more about your father.", "How was your relationship with your father?", "Does he influence you?"], followUps: ["You spoke of your father before. Does that topic still bother you?", "What other memories of your father do you have?", "Let's continue discussing your father."] },
    { pattern: /brother/i, key: 'brother', responses: ["Tell me more about your brother.", "How is your relationship with your brother?"], followUps: ["You mentioned your brother earlier. How do you get along?", "What else can you tell me about your brother?"] },
    { pattern: /sister/i, key: 'sister', responses: ["Tell me more about your sister.", "How is your relationship with your sister?"], followUps: ["You mentioned your sister earlier. How do you get along?", "What else can you tell me about your sister?"] },
    { pattern: /child/i, key: 'childhood', responses: ["Did you have close friends as a child?", "What is your favorite childhood memory?", "Do you remember any dreams or nightmares from childhood?"], followUps: ["Let's go back to your childhood. What else do you remember?", "You mentioned your childhood before. Does any particular memory stand out?"] },
    { pattern: /dream/i, key: 'dream', responses: ["What does that dream suggest to you?", "Do you dream often?", "What persons appear in your dreams?"], followUps: ["You mentioned dreaming earlier. Do your dreams have a common theme?", "Let's talk more about that dream.", "Have you had that dream again?"] },
    { pattern: /hello/i, responses: ["How do you do. Please state your problem.", "Hi. What seems to be your problem?"] },
    { pattern: /hi/i, responses: ["How do you do. Please state your problem.", "Hi. What seems to be your problem?"] },
    { pattern: /sorry/i, responses: ["Please don't apologize.", "Apologies are not necessary.", "I've told you that apologies are not required."] },
    { pattern: /always/i, responses: ["Can you think of a specific example?", "When?", "What incident are you thinking of?", "Really, always?"] },
    { pattern: /because/i, responses: ["Is that the real reason?", "Don't any other reasons come to mind?", "Does that reason seem to explain anything else?"] },
    { pattern: /maybe/i, responses: ["You don't seem quite certain.", "Why the uncertain tone?", "Can't you be more positive?", "You aren't sure?"] },
    { pattern: /no/i, responses: ["Are you saying no just to be negative?", "You are being a bit negative.", "Why not?", "Why 'no'?"] },
    { pattern: /(.*)/i, responses: ["Please tell me more.", "Let's change focus a bit... Tell me about your family.", "Can you elaborate on that?", "Why do you say that {0}?"] }
  ]
};

// ---------------------------------------------------------------------------
// CHINESE CONFIGURATION
// ---------------------------------------------------------------------------

export const chineseReflections: { [key: string]: string } = {
  "我": "你",
  "我的": "你的",
  "你": "我",
  "你的": "我的",
  "你们": "我们",
  "我们": "你们",
  "咱们": "我们"
};

export const chineseScript: ElizaConfig = {
  initialMessages: [
    "你好，我是伊莉莎。今天感觉怎么样？",
    "请告诉我你心里在想什么。"
  ],
  fallbacks: [
    "请继续说。",
    "我正在听。",
    "然后呢？",
    "这很有意思，请继续。",
    "我明白了，请继续。",
    "这似乎对你很重要。",
    "你能具体说说吗？",
    "可以多谈谈这个吗？",
    "能否多告诉我一些？",
    "当你说这些的时候，你有什么感觉？",
    "这让你想到了什么？",
    "这种感觉让你联想到了什么？",
    "这听起来很让人深思。",
    "别担心，慢慢说，我在这里。",
    "这是一个很有趣的观点。"
  ],
  reflections: chineseReflections,
  keywords: [
    // Greetings
    { pattern: /你好|您好|嗨|喂/i, responses: ["你好。请告诉我你的困扰。", "嗨。你好像有什么心事？", "你好，我们可以聊聊。"] },
    { pattern: /再见|拜拜|晚安/i, responses: ["再见。希望能再和你聊天。", "这就走了吗？再见。", "晚安，愿你有个好梦。"] },
    { pattern: /谢谢|感谢/i, responses: ["不客气。", "你太客气了。", "希望能帮到你。"] },
    
    // Apologies
    { pattern: /对不起|抱歉/i, responses: ["请不要道歉。", "没必要道歉。", "我们之间不需要道歉。", "道歉通常暗示着某种内疚，你有这种感觉吗？"] },

    // Memory / Remembering
    { pattern: /你记得(.*)/i, responses: ["你觉得我会忘记{0}吗？", "为什么你觉得我会记得{0}？", "提起{0}时，你想到了什么？", "关于{0}，你还记得什么？"] },
    { pattern: /我记得(.*)/i, responses: ["你经常想起{0}吗？", "想起{0}让你有什么感觉？", "还有什么其他的回忆吗？", "为什么现在想起了{0}？"] },
    { pattern: /我忘(.*)/i, responses: ["你觉得你为什么会忘记{0}？", "为什么你不能记起{0}？", "忘记这件事让你困扰吗？"] },

    // Computers / AI
    { pattern: /计算机|电脑|AI|机器人|程序/i, responses: ["机器让你感到困扰吗？", "你是在说我吗？", "你觉得机器能理解人类的感情吗？", "你对人工智能怎么看？", "不要担心机器，我们聊聊你吧。"] },

    // Abilities / Desires
    { pattern: /你能(.*)/i, responses: ["你希望我能{0}吗？", "如果我能{0}，这对你很重要吗？", "也许你也可以试着{0}。", "你为什么要是这一问？"] },
    { pattern: /我能(.*)/i, responses: ["你觉得你能{0}吗？", "你想{0}吗？", "如果能{0}，你会怎么做？"] },
    { pattern: /我想(.*)/i, responses: ["你认为如果你得到{0}，你会开心吗？", "为什么你想要{0}？", "假如你真的实现了{0}，那会怎样？", "你觉得得到{0}有什么意义？"] },
    { pattern: /我想要(.*)/i, responses: ["为什么你想要{0}？", "得到{0}对你来说意味着什么？", "还有什么其他是你想要的？", "如果得不到{0}，你会怎么做？"] },
    { pattern: /愿意(.*)/i, responses: ["你为什么愿意{0}？", "如果不愿意{0}，会发生什么？"] },

    // Feelings / Identity
    { pattern: /我感觉(.*)/i, responses: ["你说你感觉{0}，能告诉我为什么吗？", "你经常感觉{0}吗？", "当你有这种感觉时，你会做什么？", "这听起来很有趣，多说说这种感觉。"] },
    { pattern: /我觉得(.*)/i, responses: ["你觉得{0}，这让你感到困扰吗？", "为什么你会觉得{0}？", "这听起来很重要，能多说说吗？", "其他人也这么觉得吗？"] },
    { pattern: /我是(.*)/i, responses: ["你为什么认为你是{0}？", "如果你是{0}，这对你意味着什么？", "也许你想成为{0}？", "你一直都是{0}吗？"] },
    { pattern: /你是(.*)/i, responses: ["你为什么认为我是{0}？", "如果我是{0}，你会怎么想？", "也许你希望我是{0}。", "我们现在是在讨论你，不是我。"] },
    { pattern: /我悲伤|我难过|我不开心/i, responses: ["我很遗憾听到你这么说。", "能告诉我具体是什么让你难过吗？", "不要独自承担这种悲伤，说出来会好受些。"] },
    { pattern: /我开心|我高兴|我快乐/i, responses: ["听到你这么说我也很高兴。", "是什么让你这么开心？", "这种快乐的感觉让你想起了什么？"] },

    // Specific Patterns (If, Because, Why)
    { pattern: /如果(.*)/i, responses: ["如果{0}，你会怎么做？", "你觉得这很有可能发生吗？", "这让你感到担心吗？"] },
    { pattern: /因为(.*)/i, responses: ["这是唯一的原因吗？", "除此之外还有其他原因吗？", "这解释了你刚才说的那些吗？", "还有别的因素吗？"] },
    { pattern: /为什么(.*)/i, responses: ["你为什么问我这个？", "为什么这对你来说很重要？", "你自己有答案吗？", "你觉得原因是什麽？"] },

    // Family (Consolidated & with Memory)
    { pattern: /爸爸|父亲/i, key: 'father', responses: ["能不能说说你父亲的事？", "你和你父亲的关系怎么样？", "这让你想起了你的父亲吗？", "你父亲对你影响大吗？"], followUps: ["我们之前聊过你的父亲，你现在有什么新的想法吗？", "再多说说你父亲吧。", "你父亲的形象在你脑海里是怎样的？"] },
    { pattern: /妈妈|母亲/i, key: 'mother', responses: ["能不能说说你母亲的事？", "你和你母亲的关系怎么样？", "这让你想起了你的母亲吗？", "你母亲是个什么样的人？"], followUps: ["你之前提到过你的母亲，关于她你还想说什么？", "让我们继续聊聊你的母亲。", "你母亲对你的影响，现在看来是怎样的？"] },
    { pattern: /老婆|妻子|太太/i, key: 'wife', responses: ["能不能说说你妻子的事？", "你们的关系怎么样？", "这让你想起了什么？"], followUps: ["我们之前聊过你的妻子，你们最近怎么样？", "关于你的妻子，还有什么想说的吗？"] },
    { pattern: /老公|丈夫|先生/i, key: 'husband', responses: ["能不能说说你丈夫的事？", "你们的关系怎么样？", "这让你想起了什么？"], followUps: ["我们之前聊过你的丈夫，你们最近怎么样？", "关于你的丈夫，还有什么想说的吗？"] },
    { pattern: /孩子|小孩/i, key: 'childhood', responses: ["你喜欢孩子吗？", "能不能说说那个孩子的事？", "这让你想起了你的童年吗？", "孩子通常很可爱，不是吗？"], followUps: ["我们之前聊过孩子的话题，这让你有什么联想？", "你的童年对你现在有影响吗？"] },
    { pattern: /家人|家庭/i, key: 'family', responses: ["你的家庭环境怎么样？", "你和家人很亲近吗？", "家对你来说意味着什么？"], followUps: ["我们再聊聊你的家庭吧。", "家庭这个话题似乎对你很重要。"] },
    { pattern: /兄弟|姐妹|哥哥|姐姐|弟弟|妹妹/i, key: 'sibling', responses: ["能不能说说你兄弟姐妹的事？", "这让你想起了你的兄弟姐妹吗？", "你在家里排行第几？"], followUps: ["我们之前聊过你的兄弟姐妹，你们关系好吗？", "再多说说他们吧。"] },
    { pattern: /男朋友/i, key: 'boyfriend', responses: ["谈谈你的男朋友吧。", "你和男朋友的关系怎么样？", "你的男朋友是个什么样的人？"], followUps: ["我们之前聊过你的男朋友，你们最近怎么样？", "关于你的男朋友，还有什么想说的吗？"] },
    { pattern: /女朋友/i, key: 'girlfriend', responses: ["谈谈你的女朋友吧。", "你和女朋友的关系怎么样？", "你的女朋友是个什么样的人？"], followUps: ["我们之前聊过你的女朋友，你们最近怎么样？", "关于你的女朋友，还有什么想说的吗？"] },
    { pattern: /叔叔|伯伯|舅舅/i, key: 'uncle', responses: ["能说说你的这位长辈吗？", "他和你的关系亲近吗？", "他让你想起了什么？"], followUps: ["我们之前聊过你的长辈，他最近好吗？", "关于他，你还有别的印象吗？"] },
    { pattern: /阿姨|姑姑|姨妈/i, key: 'aunt', responses: ["能说说你的这位长辈吗？", "她和你的关系亲近吗？", "她让你想起了什么？"], followUps: ["我们之前聊过你的长辈，她最近好吗？", "关于她，你还有别的印象吗？"] },
    { pattern: /表哥|表弟|表姐|表妹|堂哥|堂弟|堂姐|堂妹/i, key: 'cousin', responses: ["能说说你的这位亲戚吗？", "你们小时候经常一起玩吗？", "你们的关系怎么样？"], followUps: ["我们之前聊过你的亲戚，你们现在还有联系吗？", "关于他/她，你还有别的回忆吗？"] },

    // General / Abstract (with Memory)
    { pattern: /朋友/i, key: 'friend', responses: ["你是在担心你的朋友吗？", "你朋友对你来说很重要吗？", "这让你想起了哪个朋友？", "你觉得自己朋友多吗？"], followUps: ["我们之前聊过朋友，你现在想起了谁？", "朋友对你来说，扮演着什么样的角色？"] },
    { pattern: /梦见(.*)/i, key: 'dream', responses: ["真的吗，梦见{0}？", "你以前做过这样的梦吗？", "你觉得这个梦意味着什么？", "梦里的{0}让你有什么感觉？"], followUps: ["我们之前聊过梦，你最近还做梦吗？", "关于那个梦，你有什么新的理解吗？"] },
    { pattern: /梦/i, key: 'dream', responses: ["这个梦让你感觉如何？", "你经常做梦吗？", "这个梦里有谁？", "你醒来后是什么感觉？"], followUps: ["我们之前聊过梦，你最近还做梦吗？", "关于那个梦，你有什么新的理解吗？"] },
    
    // Common Conversational Markers
    { pattern: /总是|老是/i, responses: ["你能举个具体的例子吗？", "真的是总是这样吗？", "比如说什么时候？", "这让你感到厌烦吗？"] },
    { pattern: /或许|可能|也许/i, responses: ["你看起来不太确定。", "为什么不确定呢？", "你心里其实有答案了吗？", "情况可能并非如此。"] },
    { pattern: /听说(.*)/i, responses: ["你是从哪里听说的？", "这让你想到了什么？", "你相信这个说法吗？"] },
    { pattern: /像(.*)/i, responses: ["具体哪里像？", "这种相似让你想起了什么？", "还有什么其他的联系吗？", "这让我想起了一些事情。"] },
    { pattern: /是吗|真的吗/i, responses: ["你好像有些怀疑。", "为什么不信呢？", "你自己怎么看？", "我有必要骗你吗？"] },
    { pattern: /大家|每个人|所有人/i, responses: ["真的所有人吗？", "你能想到有谁不是这样吗？", "这也是你想说的吗？", "谁具体指的是谁？"] },
    
    // Negation / Confirmation
    { pattern: /不(.*)/i, responses: ["你为什么这么否定？", "你是认真的吗？", "为什么不{0}？", "如果{0}会怎样？"] },
    { pattern: /是(.*)/i, responses: ["你确定是{0}吗？", "如果是这样，你会怎么做？", "这让你想起了什么？"] },
    
    // Catch-all for specific words not caught above but useful
    { pattern: /钱|金钱/i, responses: ["钱对你来说很重要吗？", "你在担心经济问题吗？", "钱能代表一切吗？"] },
    { pattern: /工作|上班/i, key: 'work', responses: ["你的工作让你感到压力吗？", "你喜欢你的工作吗？", "工作对你的生活有什么影响？"], followUps: ["我们之前聊过工作，最近有什么变化吗？", "工作上的事还顺利吗？"] },
    { pattern: /名字/i, responses: ["名字并不重要，不是吗？", "你为什么对名字感兴趣？", "我自己就是伊莉莎。"] },

    // Ultimate Catch-all
    { pattern: /(.*)/i, responses: ["请多告诉我一些。", "能举个例子吗？", "为什么你这么说？", "我明白了，这对你来说意味着什么？", "这很有趣，请继续。", "能详细说说吗？"] }
  ]
};