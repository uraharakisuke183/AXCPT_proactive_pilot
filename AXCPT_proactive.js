/************************ 
 * Axcpt_Proactive *
 ************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'AXCPT_proactive';  // from the Builder filename that created this script
const _urlId = new URLSearchParams(window.location.search).get('id') || 'unknown';
let expInfo = {
    'participant': _urlId,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1,1,1]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instruction0RoutineBegin());
flowScheduler.add(instruction0RoutineEachFrame());
flowScheduler.add(instruction0RoutineEnd());
const proactive_training1_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(proactive_training1_loopLoopBegin(proactive_training1_loopLoopScheduler));
flowScheduler.add(proactive_training1_loopLoopScheduler);
flowScheduler.add(proactive_training1_loopLoopEnd);


flowScheduler.add(instruction2_3RoutineBegin());
flowScheduler.add(instruction2_3RoutineEachFrame());
flowScheduler.add(instruction2_3RoutineEnd());
const proactive_training2_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(proactive_training2_loopLoopBegin(proactive_training2_loopLoopScheduler));
flowScheduler.add(proactive_training2_loopLoopScheduler);
flowScheduler.add(proactive_training2_loopLoopEnd);


flowScheduler.add(instruction8RoutineBegin());
flowScheduler.add(instruction8RoutineEachFrame());
flowScheduler.add(instruction8RoutineEnd());
const mixed_practice_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(mixed_practice_trialsLoopBegin(mixed_practice_trialsLoopScheduler));
flowScheduler.add(mixed_practice_trialsLoopScheduler);
flowScheduler.add(mixed_practice_trialsLoopEnd);



flowScheduler.add(practice_endRoutineBegin());
flowScheduler.add(practice_endRoutineEachFrame());
flowScheduler.add(practice_endRoutineEnd());
const blocks_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocks_loopLoopBegin(blocks_loopLoopScheduler));
flowScheduler.add(blocks_loopLoopScheduler);
flowScheduler.add(blocks_loopLoopEnd);





flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
const questions_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(questions_loopLoopBegin(questions_loopLoopScheduler));
flowScheduler.add(questions_loopLoopScheduler);
flowScheduler.add(questions_loopLoopEnd);


flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(data_saveRoutineBegin());
flowScheduler.add(data_saveRoutineEachFrame());
flowScheduler.add(data_saveRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'conditions/prac_proactive_trials/proactive_trials1.xlsx', 'path': 'conditions/prac_proactive_trials/proactive_trials1.xlsx'},
    {'name': 'audio_stimuli/left.wav', 'path': 'audio_stimuli/left.wav'},
    {'name': 'audio_stimuli/right.wav', 'path': 'audio_stimuli/right.wav'},
    {'name': 'conditions/prac_proactive_trials/proactive_trials2.xlsx', 'path': 'conditions/prac_proactive_trials/proactive_trials2.xlsx'},
    {'name': 'conditions/practice_trials.xlsx', 'path': 'conditions/practice_trials.xlsx'},
    {'name': 'conditions/blocks_short.xlsx', 'path': 'conditions/blocks_short.xlsx'},
    {'name': 'conditions/main_trials.xlsx', 'path': 'conditions/main_trials.xlsx'},
    {'name': 'questionnare/questionnaire_loop.xlsx', 'path': 'questionnare/questionnaire_loop.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instruction0Clock;
var instructions_text;
var page_counter;
var instr_title;
var instr_hint;
var training_trial_1Clock;
var cue_text_1;
var isi_blank_1;
var audio_cue;
var border_1;
var probe_text_1;
var iti_fixation_cross_1;
var instruction2_3Clock;
var instruction_text_2;
var instruction_endkey;
var training_trial_2Clock;
var cue_text_2;
var isi_blank_2;
var prep_text;
var prep_input;
var prep_feedback_text;
var border_2;
var probe_text_2;
var iti_fixation_cross_2;
var instruction8Clock;
var instruction8_text;
var instruction8_endkey;
var feedbackClock;
var feedback_msg;
var show_feedback;
var feedback_text;
var feedback_key;
var practice_endClock;
var practice_endtext;
var practice_endkey;
var main_trialsClock;
var str_text_2;
var cue_text_3;
var isi_blank_3;
var border_3;
var probe_text_3;
var cue_key_resp_2;
var probe_key_resp_2;
var iti_fixation_cross_3;
var block_breakClock;
var block_break_text;
var block_break_key;
var endClock;
var end_text;
var end_key_resp;
var questionnareClock;
var question_text;
var btn1;
var btn2;
var btn3;
var btn4;
var btn5;
var thanksClock;
var thanks_text;
var data_saveClock;
var text_data_save;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instruction0"
  instruction0Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_instructions
  globalThis.instruction_pages = [
    "Добро пожаловать в завершающую экспериментальную сессию!\n\nБольшое спасибо, что добрались до конца :)\n\nВ этот раз мы бы хотели проверить, повлияет ли на Ваши результаты \nпредварительное обсуждение конкретного подхода к решению данной задачи",

    "Вам предстоит выполнять ту же задачу, что и в две предыдущие сессии \n— реагировать нажатием клавиш на пары из последовательно предъявляемых символов!\n\nВы будете отвечать с помощью клавиш «z» и «m».\n\nПожалуйста, используйте левый указательный палец для клавиши «z»\nи правый указательный палец для клавиши «m», как Вы делали это ранее.",

    "Теперь мы будем называть клавишу «z» Вашей ЛЕВОЙ кнопкой,\nа клавишу «m» — Вашей ПРАВОЙ кнопкой.\n\nВо время этого эксперимента, пожалуйста, отвечайте \nкак можно быстрее и точнее.\n\nВы не сможете изменить свой ответ после нажатия,\nпоэтому не беспокойтесь о том, чтобы исправить себя,\nесли Вы поняли, что ответили неверно.",

    "Если Вы ПЕРВОЙ увидели букву А, то в 80(!) % случаев после неё \nбудет следовать Х. То есть достаточно часто :)\n\nЗная это, Вы можете «предсказывать» свой ответ на ВТОРУЮ букву заранее, что будет полезной стратегией для улучшения Ваших результатов.\n\nСтратегия заключается в том, чтобы готовить свой ответ на ВТОРУЮ букву сразу после появления ПЕРВОЙ, чтобы уже быть готовым нажать нужную кнопку, когда придет время.\n\nЦель данной экспериментальной сессии — использование подобной стратегии.",

    "Повторимся, очень вероятно, что вслед за буквой А последует буква Х.\n\nПоэтому, всякий раз, когда Вы видите А в качестве первой буквы, \nВам следует использовать паузу перед появлением второй буквы,\nчтобы подготовиться к нажатию ЛЕВОЙ кнопки («z»).\n\nВсякий раз, когда ПЕРВАЯ буква — не А,\nВам следует использовать задержку между первой и второй буквой\nдля подготовки к нажатию ПРАВОЙ кнопки (m).\n\nВ ходе данной экспериментальной сессии \nмы просим Вас применять эту стратегию,\nактивно подготавливая свой ответ заранее.",

    "Обычные правила задачи по-прежнему действуют:\n\n– В тех редких случаях, когда за буквой А \nследует любая другая буква, кроме Х,\nВам следует постараться нажать ПРАВУЮ кнопку (m) вместо ЛЕВОЙ(z) \nпри появлении второй буквы, отличной от Х.\n\n– В тех редких случаях, когда за ПЕРВОЙ буквой следует цифра,\nВам следует постараться вообще воздержаться от ответа \n(от нажатия любых клавиш).\n\nИз-за использования подобной стратегии подготовки ответа заранее \nу Вас могут возникнуть трудности в этих редких случаях, \nи в них Вы, вероятно, сделаете больше ошибок.\n\nЭто нормально! За ошибки нет никаких штрафов.\nПросто старайтесь отвечать правильно :)",

    "В этой сессии нас интересует эффект от использования \nстратегии предварительной подготовки,\nпоэтому, пожалуйста, старайтесь продолжать использовать эту стратегию,\nдаже если Вы заметите, что делаете некоторые ошибки.\n\nКонечно, Вам по-прежнему следует стараться изо всех сил,\nчтобы не допускать ошибок вовсе, \nно это менее(!) важно, чем использование стратегии.",

    "Сейчас Вы будете тренироваться в использовании этой \nстратегии предварительной подготовки.\nТренировка может показаться Вам однообразной, \nно она разработана для того,чтобы помочь глубоко усвоить стратегию.\n\nЕсли А — первая буква в пробе, Вы услышите голос: «ЛЕВАЯ КНОПКА»,\nнапоминающий Вам подготовиться к нажатию левой кнопки («z»).\n\nЕсли первая буква в пробе — не А, Вы услышите «ПРАВАЯ КНОПКА»,\nчто напомнит Вам подготовиться к нажатию правой кнопки («m»).\n\nВы будете слышать голосовые инструкции во время паузы между буквами,\nпока на экране отображаются «+++».",

    "В следующей тренировке Ваши ответы регистрироваться не будут, \nпросто слушайте звуковые подсказки и смотрите, \nкак применять стратегию."
];  
  globalThis.current_page = 0;
  
  let extraInfo = psychoJS.experiment.extraInfo || {};
  let pid = String(extraInfo["participant"] || extraInfo["id"] || "").trim();
  
  if (!pid || !/^[A-Za-z0-9_-]+$/.test(pid)) {
      alert("Participant ID не указан или некорректен. Проверьте ссылку (?participant=P01 или ?id=P01).");
      quitPsychoJS("", false);
  } else {
      psychoJS.experiment.extraInfo["participant"] = pid;
  }
  instructions_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.038,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  page_counter = new visual.TextStim({
    win: psychoJS.window,
    name: 'page_counter',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.45)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('grey'),  opacity: undefined,
    depth: -2.0 
  });
  
  instr_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_title',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.43], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  instr_hint = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_hint',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.38)], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('grey'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "training_trial_1"
  training_trial_1Clock = new util.Clock();
  cue_text_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'cue_text_1',
    text: '',
    font: 'Tahoma',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  isi_blank_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'isi_blank_1',
    text: '+++',
    font: 'Tahoma',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  audio_cue = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: 1.5,
      });
  audio_cue.setVolume(1.0);
  audio_cue.isPlaying = false;
  audio_cue.isFinished = false;
  border_1 = new visual.Rect ({
    win: psychoJS.window, name: 'border_1', 
    width: [0.15, 0.2][0], height: [0.15, 0.2][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 3.0, 
    lineColor: new util.Color('black'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  probe_text_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'probe_text_1',
    text: '',
    font: 'Tahoma',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  iti_fixation_cross_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'iti_fixation_cross_1',
    text: ' + +\n +\n',
    font: 'Tahoma',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "instruction2_3"
  instruction2_3Clock = new util.Clock();
  instruction_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text_2',
    text: 'Теперь попробуйте применить стратегию самостоятельно!\n\nПосле демонстрации первой буквы Вам нужно будет сообщить, какую кнопку Вы будете готовить для второй буквы - левую (z) или правую (m).  \n\nПри этом фактически нажимать левую и правую кнопки в этот раз не потребуется, просто вводите слова левая\\правая на клавиатуре.\n\nПример 1: Вы видите А (первая буква). Во время последующей паузы Вы вводите на клавиатуре \\"левая\\". Если Ваш ответ верный, показывается вторая буква и проба завершается. \n\nПример 2: Вы видите F (первая буква). Во время последующей паузы Вы вводите на клавиатуре \\"правая\\".  Если Ваш ответ верный, показывается вторая буква и проба завершается. \n\nНажмите клавишу k, чтобы начать тренировочные пробы с вводом ответа!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  instruction_endkey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "training_trial_2"
  training_trial_2Clock = new util.Clock();
  cue_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'cue_text_2',
    text: '',
    font: 'Tahoma',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  isi_blank_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'isi_blank_2',
    text: '+++',
    font: 'Tahoma',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  prep_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'prep_text',
    text: 'Какую кнопку Вы будете готовить для второй буквы?\n\nВпишите без кавычек - левая или правая.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  prep_input = new visual.TextBox({
    win: psychoJS.window,
    name: 'prep_input',
    text: '',
    placeholder: 'левая или правая',
    font: 'Arial',
    pos: [0, (- 0.25)], 
    draggable: false,
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  prep_feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'prep_feedback_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.04,  wrapWidth: 0.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  border_2 = new visual.Rect ({
    win: psychoJS.window, name: 'border_2', 
    width: [0.15, 0.2][0], height: [0.15, 0.2][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 3.0, 
    lineColor: new util.Color('black'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -5, 
    interpolate: true, 
  });
  
  probe_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'probe_text_2',
    text: '',
    font: 'Tahoma',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -6.0 
  });
  
  iti_fixation_cross_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'iti_fixation_cross_2',
    text: ' + +\n +\n',
    font: 'Tahoma',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "instruction8"
  instruction8Clock = new util.Clock();
  instruction8_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction8_text',
    text: 'Переходим к финальной тренировке на смешанных пробах! \n\nПеред началом каждой пробы в этой задаче Вы будете видеть фразу: Используйте стратегию!\nЭто специальное напоминание о необходимости применять стратегию во время решения задачи.\n\nПожалуйста, держите левый указательный палец на клавише z, а правый указательный палец на клавише m.\n\nНажмите клавишу K, чтобы продолжить.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  instruction8_endkey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  // Run 'Begin Experiment' code from feedback_code
  feedback_msg = "";
  show_feedback = false;
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('red'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_end"
  practice_endClock = new util.Clock();
  practice_endtext = new visual.TextStim({
    win: psychoJS.window,
    name: 'practice_endtext',
    text: 'Вы завершили тренировку! \n\nТеперь начнется основная часть эксперимента, не забывайте использовать стратегию!\n\nПожалуйста, держите левый указательный палец на клавише z, а правый указательный палец на клавише m на протяжении всего эксперимента и отвечайте как можно быстрее и точнее.\n\nНажмите K, чтобы начать.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  practice_endkey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "main_trials"
  main_trialsClock = new util.Clock();
  str_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'str_text_2',
    text: 'Используйте стратегию!\n',
    font: 'Tahoma',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  cue_text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'cue_text_3',
    text: '',
    font: 'Tahoma',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  isi_blank_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'isi_blank_3',
    text: '+++',
    font: 'Tahoma',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  border_3 = new visual.Rect ({
    win: psychoJS.window, name: 'border_3', 
    width: [0.15, 0.2][0], height: [0.15, 0.2][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 3.0, 
    lineColor: new util.Color('black'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  probe_text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'probe_text_3',
    text: '',
    font: 'Tahoma',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  cue_key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  probe_key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  iti_fixation_cross_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'iti_fixation_cross_3',
    text: ' + +\n +\n',
    font: 'Tahoma',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "block_break"
  block_breakClock = new util.Clock();
  block_break_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'block_break_text',
    text: 'Вы выполнили 1/3 (или 2/3) эксперимента!\n\nПожалуйста, сделайте перерыв на 1–5 минут.\n\nЧерез одну минуту вы сможете продолжить выполнение задания.\n\nЕсли вам нужно больше времени, это нормально, но, пожалуйста, не делайте перерыв дольше 5 минут.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  block_break_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: 'Основная часть эксперимента завершена.\n\nБлагодарим вас за участие!\n\nПрежде чем закончить, пожалуйста, ответьте на несколько коротких вопросов.\nВаши ответы помогут нам корректно интерпретировать результаты.\n\nНажмите K, чтобы перейти к вопросам.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "questionnare"
  questionnareClock = new util.Clock();
  question_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_text',
    text: '',
    font: 'Noto Sans',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.06,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  btn1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn1',
    text: '',
    font: 'Noto Sans',
    pos: [0.0, 0.05],
    size: [0.8, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.03,
    bold: false,
    italic: false,
  });
  btn1.clock = new util.Clock();
  
  btn2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn2',
    text: '',
    font: 'Noto Sans',
    pos: [0, (- 0.04)],
    size: [0.8, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.03,
    bold: false,
    italic: false,
  });
  btn2.clock = new util.Clock();
  
  btn3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn3',
    text: '',
    font: 'Noto Sans',
    pos: [0.0, (- 0.13)],
    size: [0.8, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.03,
    bold: false,
    italic: false,
  });
  btn3.clock = new util.Clock();
  
  btn4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn4',
    text: '',
    font: 'Noto Sans',
    pos: [0, (- 0.22)],
    size: [0.8, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.03,
    bold: false,
    italic: false,
  });
  btn4.clock = new util.Clock();
  
  btn5 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn5',
    text: '',
    font: 'Noto Sans',
    pos: [0, (- 0.31)],
    size: [0.8, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.03,
    bold: false,
    italic: false,
  });
  btn5.clock = new util.Clock();
  
  // Run 'Begin Experiment' code from code_questionnaire
  btn1.clock = new util.Clock();
  btn1.buttonClock = btn1.clock;
  
  btn2.clock = new util.Clock();
  btn2.buttonClock = btn2.clock;
  
  btn3.clock = new util.Clock();
  btn3.buttonClock = btn3.clock;
  
  btn4.clock = new util.Clock();
  btn4.buttonClock = btn4.clock;
  
  btn5.clock = new util.Clock();
  btn5.buttonClock = btn5.clock;
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  thanks_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'thanks_text',
    text: 'Спасибо за участие!\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "data_save"
  data_saveClock = new util.Clock();
  text_data_save = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_data_save',
    text: 'Подождите, идет запись данных эксперимента.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var instruction0MaxDurationReached;
var instruction0MaxDuration;
var instruction0Components;
function instruction0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction0' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instruction0Clock.reset();
    routineTimer.reset();
    instruction0MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_instructions
    globalThis.current_page = 0;
    
    instr_title.setText("Инструкция");
    instructions_text.setText(globalThis.instruction_pages[globalThis.current_page]);
    page_counter.setText(
        (globalThis.current_page + 1).toString() + " / " +
        globalThis.instruction_pages.length.toString()
    );
    
    if (globalThis.current_page === globalThis.instruction_pages.length - 1) {
        instr_hint.setText("Нажмите -> чтобы перейти к тренировочным примерам");
    } else {
        instr_hint.setText("Используйте стрелки <- -> для перемещения между листами");
    }
    
    psychoJS.eventManager.clearEvents();
    psychoJS.experiment.addData('instruction0.started', globalClock.getTime());
    instruction0MaxDuration = null
    // keep track of which components have finished
    instruction0Components = [];
    instruction0Components.push(instructions_text);
    instruction0Components.push(page_counter);
    instruction0Components.push(instr_title);
    instruction0Components.push(instr_hint);
    
    for (const thisComponent of instruction0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction0' ---
    // get current time
    t = instruction0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_instructions
    let keys = psychoJS.eventManager.getKeys({keyList: ["right", "left"]});
    
    if (keys.length > 0) {
        let key = keys[keys.length - 1];
    
        if (key === "right") {
            if (globalThis.current_page < globalThis.instruction_pages.length - 1) {
                globalThis.current_page += 1;
    
                instructions_text.setText(globalThis.instruction_pages[globalThis.current_page]);
                page_counter.setText(
                    (globalThis.current_page + 1).toString() + " / " +
                    globalThis.instruction_pages.length.toString()
                );
    
                if (globalThis.current_page === globalThis.instruction_pages.length - 1) {
                    instr_hint.setText("Нажмите -> чтобы перейти к тренировочным примерам");
                } else {
                    instr_hint.setText("Используйте стрелки <- -> для перемещения между листами");
                }
            } else {
                continueRoutine = false;
            }
        } else if (key === "left") {
            if (globalThis.current_page > 0) {
                globalThis.current_page -= 1;
    
                instructions_text.setText(globalThis.instruction_pages[globalThis.current_page]);
                page_counter.setText(
                    (globalThis.current_page + 1).toString() + " / " +
                    globalThis.instruction_pages.length.toString()
                );
                instr_hint.setText("Используйте стрелки <- -> для перемещения между листами");
            }
        }
    }
    
    // *instructions_text* updates
    if (t >= 0.0 && instructions_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_text.tStart = t;  // (not accounting for frame time here)
      instructions_text.frameNStart = frameN;  // exact frame index
      
      instructions_text.setAutoDraw(true);
    }
    
    
    // if instructions_text is active this frame...
    if (instructions_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *page_counter* updates
    if (t >= 0.0 && page_counter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      page_counter.tStart = t;  // (not accounting for frame time here)
      page_counter.frameNStart = frameN;  // exact frame index
      
      page_counter.setAutoDraw(true);
    }
    
    
    // if page_counter is active this frame...
    if (page_counter.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *instr_title* updates
    if (t >= 0.0 && instr_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_title.tStart = t;  // (not accounting for frame time here)
      instr_title.frameNStart = frameN;  // exact frame index
      
      instr_title.setAutoDraw(true);
    }
    
    
    // if instr_title is active this frame...
    if (instr_title.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *instr_hint* updates
    if (t >= 0.0 && instr_hint.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_hint.tStart = t;  // (not accounting for frame time here)
      instr_hint.frameNStart = frameN;  // exact frame index
      
      instr_hint.setAutoDraw(true);
    }
    
    
    // if instr_hint is active this frame...
    if (instr_hint.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction0' ---
    for (const thisComponent of instruction0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction0.stopped', globalClock.getTime());
    // the Routine "instruction0" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var proactive_training1_loop;
function proactive_training1_loopLoopBegin(proactive_training1_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    proactive_training1_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions/prac_proactive_trials/proactive_trials1.xlsx',
      seed: undefined, name: 'proactive_training1_loop'
    });
    psychoJS.experiment.addLoop(proactive_training1_loop); // add the loop to the experiment
    currentLoop = proactive_training1_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisProactive_training1_loop of proactive_training1_loop) {
      snapshot = proactive_training1_loop.getSnapshot();
      proactive_training1_loopLoopScheduler.add(importConditions(snapshot));
      proactive_training1_loopLoopScheduler.add(training_trial_1RoutineBegin(snapshot));
      proactive_training1_loopLoopScheduler.add(training_trial_1RoutineEachFrame());
      proactive_training1_loopLoopScheduler.add(training_trial_1RoutineEnd(snapshot));
      proactive_training1_loopLoopScheduler.add(proactive_training1_loopLoopEndIteration(proactive_training1_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function proactive_training1_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(proactive_training1_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function proactive_training1_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var proactive_training2_loop;
function proactive_training2_loopLoopBegin(proactive_training2_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    proactive_training2_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions/prac_proactive_trials/proactive_trials2.xlsx',
      seed: undefined, name: 'proactive_training2_loop'
    });
    psychoJS.experiment.addLoop(proactive_training2_loop); // add the loop to the experiment
    currentLoop = proactive_training2_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisProactive_training2_loop of proactive_training2_loop) {
      snapshot = proactive_training2_loop.getSnapshot();
      proactive_training2_loopLoopScheduler.add(importConditions(snapshot));
      proactive_training2_loopLoopScheduler.add(training_trial_2RoutineBegin(snapshot));
      proactive_training2_loopLoopScheduler.add(training_trial_2RoutineEachFrame());
      proactive_training2_loopLoopScheduler.add(training_trial_2RoutineEnd(snapshot));
      proactive_training2_loopLoopScheduler.add(proactive_training2_loopLoopEndIteration(proactive_training2_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function proactive_training2_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(proactive_training2_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function proactive_training2_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var mixed_practice_trials;
function mixed_practice_trialsLoopBegin(mixed_practice_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    mixed_practice_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions/practice_trials.xlsx',
      seed: undefined, name: 'mixed_practice_trials'
    });
    psychoJS.experiment.addLoop(mixed_practice_trials); // add the loop to the experiment
    currentLoop = mixed_practice_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisMixed_practice_trial of mixed_practice_trials) {
      snapshot = mixed_practice_trials.getSnapshot();
      mixed_practice_trialsLoopScheduler.add(importConditions(snapshot));
      mixed_practice_trialsLoopScheduler.add(mixed_practice_trialRoutineBegin(snapshot));
      mixed_practice_trialsLoopScheduler.add(mixed_practice_trialRoutineEachFrame());
      mixed_practice_trialsLoopScheduler.add(mixed_practice_trialRoutineEnd(snapshot));
      mixed_practice_trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      mixed_practice_trialsLoopScheduler.add(feedbackRoutineEachFrame());
      mixed_practice_trialsLoopScheduler.add(feedbackRoutineEnd(snapshot));
      mixed_practice_trialsLoopScheduler.add(mixed_practice_trialsLoopEndIteration(mixed_practice_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function mixed_practice_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(mixed_practice_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function mixed_practice_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

// Reuse the main trial implementation for the mixed-practice loop.
// Feedback reads the active keyboard objects through the compatibility code below.
function mixed_practice_trialRoutineBegin(snapshot) {
  return main_trialsRoutineBegin(snapshot);
}

function mixed_practice_trialRoutineEachFrame() {
  return main_trialsRoutineEachFrame();
}

function mixed_practice_trialRoutineEnd(snapshot) {
  return main_trialsRoutineEnd(snapshot);
}


var blocks_loop;
function blocks_loopLoopBegin(blocks_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blocks_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions/blocks_short.xlsx',
      seed: undefined, name: 'blocks_loop'
    });
    psychoJS.experiment.addLoop(blocks_loop); // add the loop to the experiment
    currentLoop = blocks_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlocks_loop of blocks_loop) {
      snapshot = blocks_loop.getSnapshot();
      blocks_loopLoopScheduler.add(importConditions(snapshot));
      const trials_loopLoopScheduler = new Scheduler(psychoJS);
      blocks_loopLoopScheduler.add(trials_loopLoopBegin(trials_loopLoopScheduler, snapshot));
      blocks_loopLoopScheduler.add(trials_loopLoopScheduler);
      blocks_loopLoopScheduler.add(trials_loopLoopEnd);
      blocks_loopLoopScheduler.add(block_breakRoutineBegin(snapshot));
      blocks_loopLoopScheduler.add(block_breakRoutineEachFrame());
      blocks_loopLoopScheduler.add(block_breakRoutineEnd(snapshot));
      blocks_loopLoopScheduler.add(blocks_loopLoopEndIteration(blocks_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_loop;
function trials_loopLoopBegin(trials_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'conditions/main_trials.xlsx', block_rows),
      seed: undefined, name: 'trials_loop'
    });
    psychoJS.experiment.addLoop(trials_loop); // add the loop to the experiment
    currentLoop = trials_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_loop of trials_loop) {
      snapshot = trials_loop.getSnapshot();
      trials_loopLoopScheduler.add(importConditions(snapshot));
      trials_loopLoopScheduler.add(main_trialsRoutineBegin(snapshot));
      trials_loopLoopScheduler.add(main_trialsRoutineEachFrame());
      trials_loopLoopScheduler.add(main_trialsRoutineEnd(snapshot));
      trials_loopLoopScheduler.add(trials_loopLoopEndIteration(trials_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function blocks_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(blocks_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function blocks_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var questions_loop;
function questions_loopLoopBegin(questions_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    questions_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'questionnare/questionnaire_loop.xlsx',
      seed: undefined, name: 'questions_loop'
    });
    psychoJS.experiment.addLoop(questions_loop); // add the loop to the experiment
    currentLoop = questions_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisQuestions_loop of questions_loop) {
      snapshot = questions_loop.getSnapshot();
      questions_loopLoopScheduler.add(importConditions(snapshot));
      questions_loopLoopScheduler.add(questionnareRoutineBegin(snapshot));
      questions_loopLoopScheduler.add(questionnareRoutineEachFrame());
      questions_loopLoopScheduler.add(questionnareRoutineEnd(snapshot));
      questions_loopLoopScheduler.add(questions_loopLoopEndIteration(questions_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function questions_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(questions_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function questions_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var training_trial_1MaxDurationReached;
var training_trial_1MaxDuration;
var training_trial_1Components;
function training_trial_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'training_trial_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    training_trial_1Clock.reset(routineTimer.getTime());
    routineTimer.add(6.750000);
    training_trial_1MaxDurationReached = false;
    // update component parameters for each repeat
    cue_text_1.setText(cue);
    audio_cue.isFinished = false;
    audio_cue.setValue(audio_file);
    audio_cue.secs=1.5;
    audio_cue.setVolume(1.0);
    probe_text_1.setPos([0, 0]);
    probe_text_1.setText(probe);
    psychoJS.experiment.addData('training_trial_1.started', globalClock.getTime());
    training_trial_1MaxDuration = null
    // keep track of which components have finished
    training_trial_1Components = [];
    training_trial_1Components.push(cue_text_1);
    training_trial_1Components.push(isi_blank_1);
    training_trial_1Components.push(audio_cue);
    training_trial_1Components.push(border_1);
    training_trial_1Components.push(probe_text_1);
    training_trial_1Components.push(iti_fixation_cross_1);
    
    for (const thisComponent of training_trial_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function training_trial_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'training_trial_1' ---
    // get current time
    t = training_trial_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cue_text_1* updates
    if (t >= 0.5 && cue_text_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_text_1.tStart = t;  // (not accounting for frame time here)
      cue_text_1.frameNStart = frameN;  // exact frame index
      
      cue_text_1.setAutoDraw(true);
    }
    
    
    // if cue_text_1 is active this frame...
    if (cue_text_1.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (cue_text_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      cue_text_1.tStop = t;  // not accounting for scr refresh
      cue_text_1.frameNStop = frameN;  // exact frame index
      // update status
      cue_text_1.status = PsychoJS.Status.FINISHED;
      cue_text_1.setAutoDraw(false);
    }
    
    
    // *isi_blank_1* updates
    if (t >= 1 && isi_blank_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      isi_blank_1.tStart = t;  // (not accounting for frame time here)
      isi_blank_1.frameNStart = frameN;  // exact frame index
      
      isi_blank_1.setAutoDraw(true);
    }
    
    
    // if isi_blank_1 is active this frame...
    if (isi_blank_1.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 1 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (isi_blank_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      isi_blank_1.tStop = t;  // not accounting for scr refresh
      isi_blank_1.frameNStop = frameN;  // exact frame index
      // update status
      isi_blank_1.status = PsychoJS.Status.FINISHED;
      isi_blank_1.setAutoDraw(false);
    }
    
    if (audio_cue.status === PsychoJS.Status.STARTED) {
        audio_cue.isPlaying = true;
        if (t >= (audio_cue.getDuration() + audio_cue.tStart)) {
            audio_cue.isFinished = true;
        }
    }
    // start/stop audio_cue
    if (t >= 1.5 && audio_cue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      audio_cue.tStart = t;  // (not accounting for frame time here)
      audio_cue.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ audio_cue.play(); });  // screen flip
      audio_cue.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 1.5 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (audio_cue.status === PsychoJS.Status.STARTED && t >= frameRemains || audio_cue.isFinished) {
      // keep track of stop time/frame for later
      audio_cue.tStop = t;  // not accounting for scr refresh
      audio_cue.frameNStop = frameN;  // exact frame index
      // update status
      audio_cue.status = PsychoJS.Status.FINISHED;
      // stop playback
      audio_cue.stop();
    }
    
    // *border_1* updates
    if (t >= 5 && border_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      border_1.tStart = t;  // (not accounting for frame time here)
      border_1.frameNStart = frameN;  // exact frame index
      
      border_1.setAutoDraw(true);
    }
    
    
    // if border_1 is active this frame...
    if (border_1.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 5 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (border_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      border_1.tStop = t;  // not accounting for scr refresh
      border_1.frameNStop = frameN;  // exact frame index
      // update status
      border_1.status = PsychoJS.Status.FINISHED;
      border_1.setAutoDraw(false);
    }
    
    
    // *probe_text_1* updates
    if (t >= 5.25 && probe_text_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probe_text_1.tStart = t;  // (not accounting for frame time here)
      probe_text_1.frameNStart = frameN;  // exact frame index
      
      probe_text_1.setAutoDraw(true);
    }
    
    
    // if probe_text_1 is active this frame...
    if (probe_text_1.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 5.25 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (probe_text_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      probe_text_1.tStop = t;  // not accounting for scr refresh
      probe_text_1.frameNStop = frameN;  // exact frame index
      // update status
      probe_text_1.status = PsychoJS.Status.FINISHED;
      probe_text_1.setAutoDraw(false);
    }
    
    
    // *iti_fixation_cross_1* updates
    if (t >= 5.75 && iti_fixation_cross_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      iti_fixation_cross_1.tStart = t;  // (not accounting for frame time here)
      iti_fixation_cross_1.frameNStart = frameN;  // exact frame index
      
      iti_fixation_cross_1.setAutoDraw(true);
    }
    
    
    // if iti_fixation_cross_1 is active this frame...
    if (iti_fixation_cross_1.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 5.75 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (iti_fixation_cross_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      iti_fixation_cross_1.tStop = t;  // not accounting for scr refresh
      iti_fixation_cross_1.frameNStop = frameN;  // exact frame index
      // update status
      iti_fixation_cross_1.status = PsychoJS.Status.FINISHED;
      iti_fixation_cross_1.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of training_trial_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function training_trial_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'training_trial_1' ---
    for (const thisComponent of training_trial_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('training_trial_1.stopped', globalClock.getTime());
    audio_cue.stop();  // ensure sound has stopped at end of Routine
    if (routineForceEnded) {
        routineTimer.reset();} else if (training_trial_1MaxDurationReached) {
        training_trial_1Clock.add(training_trial_1MaxDuration);
    } else {
        training_trial_1Clock.add(6.750000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction2_3MaxDurationReached;
var _instruction_endkey_allKeys;
var instruction2_3MaxDuration;
var instruction2_3Components;
function instruction2_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction2_3' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instruction2_3Clock.reset();
    routineTimer.reset();
    instruction2_3MaxDurationReached = false;
    // update component parameters for each repeat
    instruction_endkey.keys = undefined;
    instruction_endkey.rt = undefined;
    _instruction_endkey_allKeys = [];
    psychoJS.experiment.addData('instruction2_3.started', globalClock.getTime());
    instruction2_3MaxDuration = null
    // keep track of which components have finished
    instruction2_3Components = [];
    instruction2_3Components.push(instruction_text_2);
    instruction2_3Components.push(instruction_endkey);
    
    for (const thisComponent of instruction2_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction2_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction2_3' ---
    // get current time
    t = instruction2_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_text_2* updates
    if (t >= 0.0 && instruction_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text_2.tStart = t;  // (not accounting for frame time here)
      instruction_text_2.frameNStart = frameN;  // exact frame index
      
      instruction_text_2.setAutoDraw(true);
    }
    
    
    // if instruction_text_2 is active this frame...
    if (instruction_text_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *instruction_endkey* updates
    if (t >= 0.0 && instruction_endkey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_endkey.tStart = t;  // (not accounting for frame time here)
      instruction_endkey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      instruction_endkey.clock.reset();
      instruction_endkey.start();
      instruction_endkey.clearEvents();
    }
    
    // if instruction_endkey is active this frame...
    if (instruction_endkey.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruction_endkey.getKeys({
        keyList: typeof ['k',] === 'string' ? [['k',]] : ['k',], 
        waitRelease: false
      });
      _instruction_endkey_allKeys = _instruction_endkey_allKeys.concat(theseKeys);
      if (_instruction_endkey_allKeys.length > 0) {
        instruction_endkey.keys = _instruction_endkey_allKeys[_instruction_endkey_allKeys.length - 1].name;  // just the last key pressed
        instruction_endkey.rt = _instruction_endkey_allKeys[_instruction_endkey_allKeys.length - 1].rt;
        instruction_endkey.duration = _instruction_endkey_allKeys[_instruction_endkey_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction2_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction2_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction2_3' ---
    for (const thisComponent of instruction2_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction2_3.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instruction_endkey.corr, level);
    }
    psychoJS.experiment.addData('instruction_endkey.keys', instruction_endkey.keys);
    if (typeof instruction_endkey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instruction_endkey.rt', instruction_endkey.rt);
        psychoJS.experiment.addData('instruction_endkey.duration', instruction_endkey.duration);
        routineTimer.reset();
        }
    
    instruction_endkey.stop();
    // the Routine "instruction2_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var training_trial_2MaxDurationReached;
var training_trial_2MaxDuration;
var training_trial_2Components;
function training_trial_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'training_trial_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    training_trial_2Clock.reset();
    routineTimer.reset();
    training_trial_2MaxDurationReached = false;
    // update component parameters for each repeat
    cue_text_2.setText(cue);
    prep_input.setText('');
    prep_input.refresh();
    probe_text_2.setPos([0, 0]);
    probe_text_2.setText(probe);
    // Run 'Begin Routine' code from code_typed_prac
    globalThis.tp2_phase = "wait_input";
    globalThis.tp2_phase_timer = null;
    globalThis.tp2_last_answer_correct = false;
    globalThis.tp2_attempt_count = 0;
    globalThis.tp2_input_armed_at = null;
    globalThis.tp2_input_arm_delay = 0.10;
    
    globalThis.tp2_expected = (cue === "A") ? "left" : "right";
    
    globalThis.tp2_left_variants = ["left", "левая", "левую", "левой", "лево", "леваякнопка"];
    globalThis.tp2_right_variants = ["right", "правая", "правую", "правой", "право", "праваякнопка"];
    
    globalThis.tp2_flush_keys = function () {
      try { psychoJS.eventManager.clearEvents(); } catch (e) {}
    };
    
    globalThis.tp2_clear_input = function () {
      try { prep_input.setText(""); } catch (e) {}
      try { prep_input.text = ""; } catch (e) {}
      try { prep_input._text = ""; } catch (e) {}
      try { prep_input.refresh(); } catch (e) {}
    };
    
    globalThis.tp2_get_input = function () {
      let raw = "";
      try {
        if (typeof prep_input.getText === "function") {
          raw = prep_input.getText();
        } else if (prep_input.text !== undefined) {
          raw = prep_input.text;
        } else if (prep_input._text !== undefined) {
          raw = prep_input._text;
        }
      } catch (e) {
        raw = "";
      }
      if (raw === null || raw === undefined) raw = "";
      return String(raw).trim().toLowerCase().replace(/ё/g, "е").replace(/[^a-zа-я]/g, "");
    };
    
    globalThis.tp2_show = function (stim) {
      stim.setAutoDraw(true);
      if ("status" in stim) stim.status = PsychoJS.Status.STARTED;
    };
    
    globalThis.tp2_hide = function (stim, finish = false) {
      stim.setAutoDraw(false);
      if (finish && ("status" in stim)) stim.status = PsychoJS.Status.FINISHED;
    };
    
    globalThis.tp2_flush_keys();
    globalThis.tp2_clear_input();
    
    globalThis.tp2_hide(prep_text);
    globalThis.tp2_hide(prep_input);
    globalThis.tp2_hide(prep_feedback_text);
    globalThis.tp2_hide(border_2);
    globalThis.tp2_hide(probe_text_2);
    globalThis.tp2_hide(iti_fixation_cross_2);
    psychoJS.experiment.addData('training_trial_2.started', globalClock.getTime());
    training_trial_2MaxDuration = null
    // keep track of which components have finished
    training_trial_2Components = [];
    training_trial_2Components.push(cue_text_2);
    training_trial_2Components.push(isi_blank_2);
    training_trial_2Components.push(prep_text);
    training_trial_2Components.push(prep_input);
    training_trial_2Components.push(prep_feedback_text);
    training_trial_2Components.push(border_2);
    training_trial_2Components.push(probe_text_2);
    training_trial_2Components.push(iti_fixation_cross_2);
    
    for (const thisComponent of training_trial_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function training_trial_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'training_trial_2' ---
    // get current time
    t = training_trial_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cue_text_2* updates
    if (t >= 0.5 && cue_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_text_2.tStart = t;  // (not accounting for frame time here)
      cue_text_2.frameNStart = frameN;  // exact frame index
      
      cue_text_2.setAutoDraw(true);
    }
    
    
    // if cue_text_2 is active this frame...
    if (cue_text_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (cue_text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      cue_text_2.tStop = t;  // not accounting for scr refresh
      cue_text_2.frameNStop = frameN;  // exact frame index
      // update status
      cue_text_2.status = PsychoJS.Status.FINISHED;
      cue_text_2.setAutoDraw(false);
    }
    
    
    // *isi_blank_2* updates
    if (t >= 1 && isi_blank_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      isi_blank_2.tStart = t;  // (not accounting for frame time here)
      isi_blank_2.frameNStart = frameN;  // exact frame index
      
      isi_blank_2.setAutoDraw(true);
    }
    
    
    // if isi_blank_2 is active this frame...
    if (isi_blank_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 1 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (isi_blank_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      isi_blank_2.tStop = t;  // not accounting for scr refresh
      isi_blank_2.frameNStop = frameN;  // exact frame index
      // update status
      isi_blank_2.status = PsychoJS.Status.FINISHED;
      isi_blank_2.setAutoDraw(false);
    }
    
    
    // *prep_text* updates
    if (t >= 1.5 && prep_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prep_text.tStart = t;  // (not accounting for frame time here)
      prep_text.frameNStart = frameN;  // exact frame index
      
      prep_text.setAutoDraw(true);
    }
    
    
    // if prep_text is active this frame...
    if (prep_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *prep_input* updates
    if (t >= 1.5 && prep_input.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prep_input.tStart = t;  // (not accounting for frame time here)
      prep_input.frameNStart = frameN;  // exact frame index
      
      prep_input.setAutoDraw(true);
    }
    
    
    // if prep_input is active this frame...
    if (prep_input.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *prep_feedback_text* updates
    
    // if prep_feedback_text is active this frame...
    if (prep_feedback_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *border_2* updates
    
    // if border_2 is active this frame...
    if (border_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *probe_text_2* updates
    
    // if probe_text_2 is active this frame...
    if (probe_text_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *iti_fixation_cross_2* updates
    
    // if iti_fixation_cross_2 is active this frame...
    if (iti_fixation_cross_2.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_typed_prac
    if (globalThis.tp2_phase === "wait_input") {
      if (prep_input.status === PsychoJS.Status.STARTED) {
        globalThis.tp2_flush_keys();
        globalThis.tp2_clear_input();
        globalThis.tp2_input_armed_at = t + globalThis.tp2_input_arm_delay;
        globalThis.tp2_phase = "prep";
      }
    
    } else if (globalThis.tp2_phase === "prep") {
      if (globalThis.tp2_input_armed_at === null || t < globalThis.tp2_input_armed_at) {
        globalThis.tp2_clear_input();
      } else {
        let typed = globalThis.tp2_get_input();
    
        if (globalThis.tp2_left_variants.includes(typed) || globalThis.tp2_right_variants.includes(typed)) {
          globalThis.tp2_attempt_count += 1;
    
          globalThis.tp2_hide(prep_text);
          globalThis.tp2_hide(prep_input);
    
          let gave_left = globalThis.tp2_left_variants.includes(typed);
          let gave_right = globalThis.tp2_right_variants.includes(typed);
    
          globalThis.tp2_last_answer_correct =
            (globalThis.tp2_expected === "left" && gave_left) ||
            (globalThis.tp2_expected === "right" && gave_right);
    
          if (globalThis.tp2_last_answer_correct) {
            prep_feedback_text.setText("Верно!");
            prep_feedback_text.setColor(new util.Color("#00AA00"));
          } else {
            prep_feedback_text.setText("Попробуйте снова.\nПервый стимул был: «" + cue + "»");
            prep_feedback_text.setColor(new util.Color("#FF0000"));
          }
    
          globalThis.tp2_show(prep_feedback_text);
          globalThis.tp2_hide(isi_blank_2, true);
    
          globalThis.tp2_phase_timer = new util.Clock();
          globalThis.tp2_phase = "feedback";
        }
      }
    
    } else if (globalThis.tp2_phase === "feedback") {
      if (globalThis.tp2_phase_timer.getTime() >= 1.5) {
        globalThis.tp2_hide(prep_feedback_text, true);
    
        if (globalThis.tp2_last_answer_correct) {
          globalThis.tp2_show(border_2);
          globalThis.tp2_phase_timer = new util.Clock();
          globalThis.tp2_phase = "border";
        } else {
          globalThis.tp2_flush_keys();
          globalThis.tp2_clear_input();
          globalThis.tp2_show(prep_text);
          globalThis.tp2_show(prep_input);
          globalThis.tp2_input_armed_at = t + globalThis.tp2_input_arm_delay;
          globalThis.tp2_phase_timer = null;
          globalThis.tp2_phase = "prep";
        }
      }
    
    } else if (globalThis.tp2_phase === "border") {
      if (globalThis.tp2_phase_timer.getTime() >= 0.25) {
        globalThis.tp2_hide(border_2, true);
        globalThis.tp2_show(probe_text_2);
        globalThis.tp2_phase_timer = new util.Clock();
        globalThis.tp2_phase = "probe";
      }
    
    } else if (globalThis.tp2_phase === "probe") {
      if (globalThis.tp2_phase_timer.getTime() >= 0.5) {
        globalThis.tp2_hide(probe_text_2, true);
        globalThis.tp2_show(iti_fixation_cross_2);
        globalThis.tp2_phase_timer = new util.Clock();
        globalThis.tp2_phase = "iti";
      }
    
    } else if (globalThis.tp2_phase === "iti") {
      if (globalThis.tp2_phase_timer.getTime() >= 1.0) {
        globalThis.tp2_hide(iti_fixation_cross_2, true);
        continueRoutine = false;
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of training_trial_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function training_trial_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'training_trial_2' ---
    for (const thisComponent of training_trial_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('training_trial_2.stopped', globalClock.getTime());
    psychoJS.experiment.addData('prep_input.text',prep_input.text)
    // Run 'End Routine' code from code_typed_prac
    globalThis.tp2_hide(prep_text, true);
    globalThis.tp2_hide(prep_input, true);
    globalThis.tp2_hide(prep_feedback_text, true);
    globalThis.tp2_hide(border_2, true);
    globalThis.tp2_hide(probe_text_2, true);
    globalThis.tp2_hide(iti_fixation_cross_2, true);
    
    globalThis.tp2_flush_keys();
    globalThis.tp2_clear_input();
    
    psychoJS.experiment.addData("prac_attempts", globalThis.tp2_attempt_count);
    psychoJS.experiment.addData("block", "prac_typed");
    // the Routine "training_trial_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction8MaxDurationReached;
var _instruction8_endkey_allKeys;
var instruction8MaxDuration;
var instruction8Components;
function instruction8RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction8' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instruction8Clock.reset();
    routineTimer.reset();
    instruction8MaxDurationReached = false;
    // update component parameters for each repeat
    instruction8_endkey.keys = undefined;
    instruction8_endkey.rt = undefined;
    _instruction8_endkey_allKeys = [];
    psychoJS.experiment.addData('instruction8.started', globalClock.getTime());
    instruction8MaxDuration = null
    // keep track of which components have finished
    instruction8Components = [];
    instruction8Components.push(instruction8_text);
    instruction8Components.push(instruction8_endkey);
    
    for (const thisComponent of instruction8Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction8RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction8' ---
    // get current time
    t = instruction8Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction8_text* updates
    if (t >= 0.0 && instruction8_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction8_text.tStart = t;  // (not accounting for frame time here)
      instruction8_text.frameNStart = frameN;  // exact frame index
      
      instruction8_text.setAutoDraw(true);
    }
    
    
    // if instruction8_text is active this frame...
    if (instruction8_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *instruction8_endkey* updates
    if (t >= 0.0 && instruction8_endkey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction8_endkey.tStart = t;  // (not accounting for frame time here)
      instruction8_endkey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      instruction8_endkey.clock.reset();
      instruction8_endkey.start();
      instruction8_endkey.clearEvents();
    }
    
    // if instruction8_endkey is active this frame...
    if (instruction8_endkey.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruction8_endkey.getKeys({
        keyList: typeof ['k',] === 'string' ? [['k',]] : ['k',], 
        waitRelease: false
      });
      _instruction8_endkey_allKeys = _instruction8_endkey_allKeys.concat(theseKeys);
      if (_instruction8_endkey_allKeys.length > 0) {
        instruction8_endkey.keys = _instruction8_endkey_allKeys[_instruction8_endkey_allKeys.length - 1].name;  // just the last key pressed
        instruction8_endkey.rt = _instruction8_endkey_allKeys[_instruction8_endkey_allKeys.length - 1].rt;
        instruction8_endkey.duration = _instruction8_endkey_allKeys[_instruction8_endkey_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction8Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction8RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction8' ---
    for (const thisComponent of instruction8Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction8.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instruction8_endkey.corr, level);
    }
    psychoJS.experiment.addData('instruction8_endkey.keys', instruction8_endkey.keys);
    if (typeof instruction8_endkey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instruction8_endkey.rt', instruction8_endkey.rt);
        psychoJS.experiment.addData('instruction8_endkey.duration', instruction8_endkey.duration);
        routineTimer.reset();
        }
    
    instruction8_endkey.stop();
    // the Routine "instruction8" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedbackMaxDurationReached;
var _feedback_key_allKeys;
var feedbackMaxDuration;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    feedbackClock.reset();
    routineTimer.reset();
    feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from feedback_code
    function emptyResponse(x) {
      if (x === null || x === undefined) return true;
      if (Array.isArray(x)) return x.length === 0;
      let s = String(x).trim().toLowerCase();
      return ["", "none", "nan"].includes(s);
    }
    
    function expectedIsEmpty(x) {
      if (x === null || x === undefined) return true;
      let s = String(x).trim().toLowerCase();
      return ["", "none", "nan"].includes(s);
    }
    
    let wrong_feedback_msg =
      "Неверно!\n\n" +
      "При появлении ПЕРВОЙ буквы всегда нажимайте ПРАВУЮ клавишу (`m`).\n\n" +
      "Если первой буквой была буква A, а второй была - X, " +
      "нажимайте ЛЕВУЮ клавишу (`z`) при появлении Х.\n" +
      "Во всех остальных случаях отвечайте на второй стимул ПРАВОЙ клавишей (`m`).\n\n" +
      "ИСКЛЮЧЕНИЕ: если второй стимул в паре - ЧИСЛО, " +
      "не нажимайте ничего в ответ на второй стимул.\n\n" +
      "Нажмите клавишу `k`, чтобы продолжить.";
    
    show_feedback = false;
    feedback_msg = "";
    
    let cueExpectedEmpty = expectedIsEmpty(cue_resp);
    let probeExpectedEmpty = expectedIsEmpty(probe_resp);
    
    let activeCueKeyResp = (
      (typeof cue_key_resp !== "undefined") && cue_key_resp
    ) ? cue_key_resp : cue_key_resp_2;
    let activeProbeKeyResp = (
      (typeof probe_key_resp !== "undefined") && probe_key_resp
    ) ? probe_key_resp : probe_key_resp_2;
    
    let cueMissing = emptyResponse(activeCueKeyResp.keys);
    let probeMissing = emptyResponse(activeProbeKeyResp.keys);
    
    let cueOk = (typeof globalThis.cue_corr !== "undefined")
      ? (globalThis.cue_corr === 1)
      : (activeCueKeyResp.corr === 1);
    
    let probeOk = (typeof globalThis.probe_corr !== "undefined")
      ? (globalThis.probe_corr === 1)
      : (activeProbeKeyResp.corr === 1);
    
    if (!cueExpectedEmpty && !cueOk) {
      if (cueMissing) {
        feedback_msg =
          "СЛИШКОМ МЕДЛЕННО!\n\n" +
          "На ПЕРВУЮ букву всегда нужно нажимать M.\n\n" +
          "Нажмите K для продолжения.";
      } else {
        feedback_msg = wrong_feedback_msg;
      }
      show_feedback = true;
    }
    
    if (!show_feedback && !probeOk) {
      if (probeExpectedEmpty) {
        feedback_msg = wrong_feedback_msg;
      } else if (probeMissing) {
        if (trial_type === "AX") {
          feedback_msg =
            "СЛИШКОМ МЕДЛЕННО!\n\n" +
            "Когда ПЕРВАЯ буква - A и ВТОРАЯ - X,\n" +
            "нужно нажать Z на ВТОРУЮ (Х).\n\n" +
            "Нажмите K для продолжения.";
        } else {
          feedback_msg =
            "СЛИШКОМ МЕДЛЕННО!\n\n" +
            "На ВТОРУЮ букву нужно быстро нажать M.\n\n" +
            "Нажмите K для продолжения.";
        }
      } else {
        feedback_msg = wrong_feedback_msg;
      }
      show_feedback = true;
    }
    
    if (!show_feedback) {
      continueRoutine = false;
    }
    
    feedback_text.setText(feedback_msg);
    feedback_text.setText(feedback_msg);
    feedback_key.keys = undefined;
    feedback_key.rt = undefined;
    _feedback_key_allKeys = [];
    psychoJS.experiment.addData('feedback.started', globalClock.getTime());
    feedbackMaxDuration = null
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(feedback_text);
    feedbackComponents.push(feedback_key);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_text* updates
    if (t >= 0.0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index
      
      feedback_text.setAutoDraw(true);
    }
    
    
    // if feedback_text is active this frame...
    if (feedback_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *feedback_key* updates
    if (t >= 0.0 && feedback_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_key.tStart = t;  // (not accounting for frame time here)
      feedback_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      feedback_key.clock.reset();
      feedback_key.start();
      feedback_key.clearEvents();
    }
    
    // if feedback_key is active this frame...
    if (feedback_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = feedback_key.getKeys({
        keyList: typeof ['k',] === 'string' ? [['k',]] : ['k',], 
        waitRelease: false
      });
      _feedback_key_allKeys = _feedback_key_allKeys.concat(theseKeys);
      if (_feedback_key_allKeys.length > 0) {
        feedback_key.keys = _feedback_key_allKeys[_feedback_key_allKeys.length - 1].name;  // just the last key pressed
        feedback_key.rt = _feedback_key_allKeys[_feedback_key_allKeys.length - 1].rt;
        feedback_key.duration = _feedback_key_allKeys[_feedback_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(feedback_key.corr, level);
    }
    psychoJS.experiment.addData('feedback_key.keys', feedback_key.keys);
    if (typeof feedback_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('feedback_key.rt', feedback_key.rt);
        psychoJS.experiment.addData('feedback_key.duration', feedback_key.duration);
        routineTimer.reset();
        }
    
    feedback_key.stop();
    // the Routine "feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_endMaxDurationReached;
var _practice_endkey_allKeys;
var practice_endMaxDuration;
var practice_endComponents;
function practice_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    practice_endClock.reset();
    routineTimer.reset();
    practice_endMaxDurationReached = false;
    // update component parameters for each repeat
    practice_endkey.keys = undefined;
    practice_endkey.rt = undefined;
    _practice_endkey_allKeys = [];
    psychoJS.experiment.addData('practice_end.started', globalClock.getTime());
    practice_endMaxDuration = null
    // keep track of which components have finished
    practice_endComponents = [];
    practice_endComponents.push(practice_endtext);
    practice_endComponents.push(practice_endkey);
    
    for (const thisComponent of practice_endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_end' ---
    // get current time
    t = practice_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practice_endtext* updates
    if (t >= 0 && practice_endtext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_endtext.tStart = t;  // (not accounting for frame time here)
      practice_endtext.frameNStart = frameN;  // exact frame index
      
      practice_endtext.setAutoDraw(true);
    }
    
    
    // if practice_endtext is active this frame...
    if (practice_endtext.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *practice_endkey* updates
    if (t >= 0.0 && practice_endkey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_endkey.tStart = t;  // (not accounting for frame time here)
      practice_endkey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      practice_endkey.clock.reset();
      practice_endkey.start();
      practice_endkey.clearEvents();
    }
    
    // if practice_endkey is active this frame...
    if (practice_endkey.status === PsychoJS.Status.STARTED) {
      let theseKeys = practice_endkey.getKeys({
        keyList: typeof ['k',] === 'string' ? [['k',]] : ['k',], 
        waitRelease: false
      });
      _practice_endkey_allKeys = _practice_endkey_allKeys.concat(theseKeys);
      if (_practice_endkey_allKeys.length > 0) {
        practice_endkey.keys = _practice_endkey_allKeys[_practice_endkey_allKeys.length - 1].name;  // just the last key pressed
        practice_endkey.rt = _practice_endkey_allKeys[_practice_endkey_allKeys.length - 1].rt;
        practice_endkey.duration = _practice_endkey_allKeys[_practice_endkey_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_end' ---
    for (const thisComponent of practice_endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practice_end.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(practice_endkey.corr, level);
    }
    psychoJS.experiment.addData('practice_endkey.keys', practice_endkey.keys);
    if (typeof practice_endkey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('practice_endkey.rt', practice_endkey.rt);
        psychoJS.experiment.addData('practice_endkey.duration', practice_endkey.duration);
        routineTimer.reset();
        }
    
    practice_endkey.stop();
    // the Routine "practice_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var main_trialsMaxDurationReached;
var _cue_key_resp_2_allKeys;
var _probe_key_resp_2_allKeys;
var main_trialsMaxDuration;
var main_trialsComponents;
function main_trialsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'main_trials' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    main_trialsClock.reset(routineTimer.getTime());
    routineTimer.add(6.750000);
    main_trialsMaxDurationReached = false;
    // update component parameters for each repeat
    cue_text_3.setText(cue);
    probe_text_3.setPos([0, probe_position]);
    probe_text_3.setText(probe);
    cue_key_resp_2.keys = undefined;
    cue_key_resp_2.rt = undefined;
    _cue_key_resp_2_allKeys = [];
    probe_key_resp_2.keys = undefined;
    probe_key_resp_2.rt = undefined;
    _probe_key_resp_2_allKeys = [];
    // Run 'Begin Routine' code from code_probe_corr_2
    globalThis.cue_corr = 0;
    globalThis.probe_corr = 0;
    globalThis.is_nogo = 0;
    psychoJS.experiment.addData('main_trials.started', globalClock.getTime());
    main_trialsMaxDuration = null
    // keep track of which components have finished
    main_trialsComponents = [];
    main_trialsComponents.push(str_text_2);
    main_trialsComponents.push(cue_text_3);
    main_trialsComponents.push(isi_blank_3);
    main_trialsComponents.push(border_3);
    main_trialsComponents.push(probe_text_3);
    main_trialsComponents.push(cue_key_resp_2);
    main_trialsComponents.push(probe_key_resp_2);
    main_trialsComponents.push(iti_fixation_cross_3);
    
    for (const thisComponent of main_trialsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function main_trialsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'main_trials' ---
    // get current time
    t = main_trialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *str_text_2* updates
    if (t >= 0 && str_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      str_text_2.tStart = t;  // (not accounting for frame time here)
      str_text_2.frameNStart = frameN;  // exact frame index
      
      str_text_2.setAutoDraw(true);
    }
    
    
    // if str_text_2 is active this frame...
    if (str_text_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (str_text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      str_text_2.tStop = t;  // not accounting for scr refresh
      str_text_2.frameNStop = frameN;  // exact frame index
      // update status
      str_text_2.status = PsychoJS.Status.FINISHED;
      str_text_2.setAutoDraw(false);
    }
    
    
    // *cue_text_3* updates
    if (t >= 0.5 && cue_text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_text_3.tStart = t;  // (not accounting for frame time here)
      cue_text_3.frameNStart = frameN;  // exact frame index
      
      cue_text_3.setAutoDraw(true);
    }
    
    
    // if cue_text_3 is active this frame...
    if (cue_text_3.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (cue_text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      cue_text_3.tStop = t;  // not accounting for scr refresh
      cue_text_3.frameNStop = frameN;  // exact frame index
      // update status
      cue_text_3.status = PsychoJS.Status.FINISHED;
      cue_text_3.setAutoDraw(false);
    }
    
    
    // *isi_blank_3* updates
    if (t >= 1 && isi_blank_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      isi_blank_3.tStart = t;  // (not accounting for frame time here)
      isi_blank_3.frameNStart = frameN;  // exact frame index
      
      isi_blank_3.setAutoDraw(true);
    }
    
    
    // if isi_blank_3 is active this frame...
    if (isi_blank_3.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 1 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (isi_blank_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      isi_blank_3.tStop = t;  // not accounting for scr refresh
      isi_blank_3.frameNStop = frameN;  // exact frame index
      // update status
      isi_blank_3.status = PsychoJS.Status.FINISHED;
      isi_blank_3.setAutoDraw(false);
    }
    
    
    // *border_3* updates
    if (t >= 5 && border_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      border_3.tStart = t;  // (not accounting for frame time here)
      border_3.frameNStart = frameN;  // exact frame index
      
      border_3.setAutoDraw(true);
    }
    
    
    // if border_3 is active this frame...
    if (border_3.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 5 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (border_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      border_3.tStop = t;  // not accounting for scr refresh
      border_3.frameNStop = frameN;  // exact frame index
      // update status
      border_3.status = PsychoJS.Status.FINISHED;
      border_3.setAutoDraw(false);
    }
    
    
    // *probe_text_3* updates
    if (t >= 5.25 && probe_text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probe_text_3.tStart = t;  // (not accounting for frame time here)
      probe_text_3.frameNStart = frameN;  // exact frame index
      
      probe_text_3.setAutoDraw(true);
    }
    
    
    // if probe_text_3 is active this frame...
    if (probe_text_3.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 5.25 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (probe_text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      probe_text_3.tStop = t;  // not accounting for scr refresh
      probe_text_3.frameNStop = frameN;  // exact frame index
      // update status
      probe_text_3.status = PsychoJS.Status.FINISHED;
      probe_text_3.setAutoDraw(false);
    }
    
    
    // *cue_key_resp_2* updates
    if (t >= 0.5 && cue_key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_key_resp_2.tStart = t;  // (not accounting for frame time here)
      cue_key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { cue_key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { cue_key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { cue_key_resp_2.clearEvents(); });
    }
    frameRemains = 0.5 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (cue_key_resp_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      cue_key_resp_2.tStop = t;  // not accounting for scr refresh
      cue_key_resp_2.frameNStop = frameN;  // exact frame index
      // update status
      cue_key_resp_2.status = PsychoJS.Status.FINISHED;
      frameRemains = 0.5 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (cue_key_resp_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        cue_key_resp_2.tStop = t;  // not accounting for scr refresh
        cue_key_resp_2.frameNStop = frameN;  // exact frame index
        // update status
        cue_key_resp_2.status = PsychoJS.Status.FINISHED;
        cue_key_resp_2.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if cue_key_resp_2 is active this frame...
      if (cue_key_resp_2.status === PsychoJS.Status.STARTED) {
        let theseKeys = cue_key_resp_2.getKeys({
          keyList: typeof ['m','z',] === 'string' ? [['m','z',]] : ['m','z',], 
          waitRelease: false
        });
        _cue_key_resp_2_allKeys = _cue_key_resp_2_allKeys.concat(theseKeys);
        if (_cue_key_resp_2_allKeys.length > 0) {
          cue_key_resp_2.keys = _cue_key_resp_2_allKeys[0].name;  // just the first key pressed
          cue_key_resp_2.rt = _cue_key_resp_2_allKeys[0].rt;
          cue_key_resp_2.duration = _cue_key_resp_2_allKeys[0].duration;
          // was this correct?
          if (cue_key_resp_2.keys == cue_resp) {
              cue_key_resp_2.corr = 1;
          } else {
              cue_key_resp_2.corr = 0;
          }
        }
      }
      
      
      // *probe_key_resp_2* updates
      if (t >= 5.25 && probe_key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        probe_key_resp_2.tStart = t;  // (not accounting for frame time here)
        probe_key_resp_2.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { probe_key_resp_2.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { probe_key_resp_2.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { probe_key_resp_2.clearEvents(); });
      }
      frameRemains = 5.25 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (probe_key_resp_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        probe_key_resp_2.tStop = t;  // not accounting for scr refresh
        probe_key_resp_2.frameNStop = frameN;  // exact frame index
        // update status
        probe_key_resp_2.status = PsychoJS.Status.FINISHED;
        frameRemains = 5.25 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (probe_key_resp_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          probe_key_resp_2.tStop = t;  // not accounting for scr refresh
          probe_key_resp_2.frameNStop = frameN;  // exact frame index
          // update status
          probe_key_resp_2.status = PsychoJS.Status.FINISHED;
          probe_key_resp_2.status = PsychoJS.Status.FINISHED;
            }
          
        }
        
        // if probe_key_resp_2 is active this frame...
        if (probe_key_resp_2.status === PsychoJS.Status.STARTED) {
          let theseKeys = probe_key_resp_2.getKeys({
            keyList: typeof ['m','z',] === 'string' ? [['m','z',]] : ['m','z',], 
            waitRelease: false
          });
          _probe_key_resp_2_allKeys = _probe_key_resp_2_allKeys.concat(theseKeys);
          if (_probe_key_resp_2_allKeys.length > 0) {
            probe_key_resp_2.keys = _probe_key_resp_2_allKeys[0].name;  // just the first key pressed
            probe_key_resp_2.rt = _probe_key_resp_2_allKeys[0].rt;
            probe_key_resp_2.duration = _probe_key_resp_2_allKeys[0].duration;
            // was this correct?
            if (probe_key_resp_2.keys == probe_resp) {
                probe_key_resp_2.corr = 1;
            } else {
                probe_key_resp_2.corr = 0;
            }
          }
        }
        
        
        // *iti_fixation_cross_3* updates
        if (t >= 5.75 && iti_fixation_cross_3.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          iti_fixation_cross_3.tStart = t;  // (not accounting for frame time here)
          iti_fixation_cross_3.frameNStart = frameN;  // exact frame index
          
          iti_fixation_cross_3.setAutoDraw(true);
        }
        
        
        // if iti_fixation_cross_3 is active this frame...
        if (iti_fixation_cross_3.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 5.75 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (iti_fixation_cross_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          iti_fixation_cross_3.tStop = t;  // not accounting for scr refresh
          iti_fixation_cross_3.frameNStop = frameN;  // exact frame index
          // update status
          iti_fixation_cross_3.status = PsychoJS.Status.FINISHED;
          iti_fixation_cross_3.setAutoDraw(false);
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of main_trialsComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine && routineTimer.getTime() > 0) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function main_trialsRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'main_trials' ---
        for (const thisComponent of main_trialsComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('main_trials.stopped', globalClock.getTime());
        // was no response the correct answer?!
        if (cue_key_resp_2.keys === undefined) {
          if (['None','none',undefined].includes(cue_resp)) {
             cue_key_resp_2.corr = 1;  // correct non-response
          } else {
             cue_key_resp_2.corr = 0;  // failed to respond (incorrectly)
          }
        }
        // store data for current loop
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(cue_key_resp_2.corr, level);
        }
        psychoJS.experiment.addData('cue_key_resp_2.keys', cue_key_resp_2.keys);
        psychoJS.experiment.addData('cue_key_resp_2.corr', cue_key_resp_2.corr);
        if (typeof cue_key_resp_2.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('cue_key_resp_2.rt', cue_key_resp_2.rt);
            psychoJS.experiment.addData('cue_key_resp_2.duration', cue_key_resp_2.duration);
            }
        
        cue_key_resp_2.stop();
        // was no response the correct answer?!
        if (probe_key_resp_2.keys === undefined) {
          if (['None','none',undefined].includes(probe_resp)) {
             probe_key_resp_2.corr = 1;  // correct non-response
          } else {
             probe_key_resp_2.corr = 0;  // failed to respond (incorrectly)
          }
        }
        // store data for current loop
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(probe_key_resp_2.corr, level);
        }
        psychoJS.experiment.addData('probe_key_resp_2.keys', probe_key_resp_2.keys);
        psychoJS.experiment.addData('probe_key_resp_2.corr', probe_key_resp_2.corr);
        if (typeof probe_key_resp_2.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('probe_key_resp_2.rt', probe_key_resp_2.rt);
            psychoJS.experiment.addData('probe_key_resp_2.duration', probe_key_resp_2.duration);
            }
        
        probe_key_resp_2.stop();
        // Run 'End Routine' code from code_probe_corr_2
        function emptyValue(x) {
          if (x === null || x === undefined) return true;
          if (Array.isArray(x)) return x.length === 0;
          let s = String(x).trim().toLowerCase();
          return ["", "none", "nan"].includes(s);
        }
        
        function normValue(x) {
          if (emptyValue(x)) return null;
          if (Array.isArray(x)) return String(x[0]);
          return String(x);
        }
        
        let cueExpected = normValue(cue_resp);
        let cuePressed = normValue(cue_key_resp_2.keys);
        
        let probeExpected = normValue(probe_resp);
        let probePressed = normValue(probe_key_resp_2.keys);
        
        globalThis.cue_corr = (cueExpected === null)
          ? (cuePressed === null ? 1 : 0)
          : (cuePressed === cueExpected ? 1 : 0);
        
        globalThis.probe_corr = (probeExpected === null)
          ? (probePressed === null ? 1 : 0)
          : (probePressed === probeExpected ? 1 : 0);
        
        globalThis.is_nogo = (probeExpected === null) ? 1 : 0;
        
        cue_key_resp_2.corr = globalThis.cue_corr;
        probe_key_resp_2.corr = globalThis.probe_corr;
        
        psychoJS.experiment.addData("cue_corr", globalThis.cue_corr);
        psychoJS.experiment.addData("probe_corr", globalThis.probe_corr);
        psychoJS.experiment.addData("is_nogo", globalThis.is_nogo);
        psychoJS.experiment.addData("is_nogo_design", globalThis.is_nogo);
        
        if (typeof blocks_loop !== "undefined" && blocks_loop !== null &&
            typeof trials_loop !== "undefined" && trials_loop !== null) {
          psychoJS.experiment.addData("block_number", blocks_loop.thisN + 1);
          psychoJS.experiment.addData("trial_number", trials_loop.thisN + 1);
        } else if (typeof mixed_practice_trials !== "undefined" && mixed_practice_trials !== null) {
          psychoJS.experiment.addData("mixed_practice_trial_number", mixed_practice_trials.thisN + 1);
        }
        if (routineForceEnded) {
            routineTimer.reset();} else if (main_trialsMaxDurationReached) {
            main_trialsClock.add(main_trialsMaxDuration);
        } else {
            main_trialsClock.add(6.750000);
        }
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var block_breakMaxDurationReached;
var _block_break_key_allKeys;
var block_breakMaxDuration;
var block_breakComponents;
function block_breakRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'block_break' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        block_breakClock.reset();
        routineTimer.reset();
        block_breakMaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from block_break_code
        if (blocks_loop.thisN === (blocks_loop.nTotal - 1)) {
            continueRoutine = false;
        } else {
            block_break_text.setText("Вы выполнили 1/3 (или 2/3) эксперимента!\n\nПожалуйста, сделайте перерыв на 1–5 минут.\n\nЧерез одну минуту вы сможете продолжить выполнение задания.\n\nЕсли вам нужно больше времени, это нормально, но, пожалуйста, не делайте перерыв дольше 5 минут.");
            break_text_changed = false;
        }
        block_break_key.keys = undefined;
        block_break_key.rt = undefined;
        _block_break_key_allKeys = [];
        psychoJS.experiment.addData('block_break.started', globalClock.getTime());
        block_breakMaxDuration = null
        // keep track of which components have finished
        block_breakComponents = [];
        block_breakComponents.push(block_break_text);
        block_breakComponents.push(block_break_key);
        
        for (const thisComponent of block_breakComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
var break_text_changed;
function block_breakRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'block_break' ---
        // get current time
        t = block_breakClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *block_break_text* updates
        if (t >= 0 && block_break_text.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          block_break_text.tStart = t;  // (not accounting for frame time here)
          block_break_text.frameNStart = frameN;  // exact frame index
          
          block_break_text.setAutoDraw(true);
        }
        
        
        // if block_break_text is active this frame...
        if (block_break_text.status === PsychoJS.Status.STARTED) {
        }
        
        // Run 'Each Frame' code from block_break_code
        if ((t >= 60) && !break_text_changed) {
            block_break_text.setText("Минута прошла.\n\nНажмите ПРОБЕЛ, если готовы продолжить, либо отдохните ещё несколько минут (не более 5).");
            break_text_changed = true;
        }
        
        // *block_break_key* updates
        if (t >= 60 && block_break_key.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          block_break_key.tStart = t;  // (not accounting for frame time here)
          block_break_key.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          block_break_key.clock.reset();
          block_break_key.start();
          block_break_key.clearEvents();
        }
        
        // if block_break_key is active this frame...
        if (block_break_key.status === PsychoJS.Status.STARTED) {
          let theseKeys = block_break_key.getKeys({
            keyList: typeof ['space',] === 'string' ? [['space',]] : ['space',], 
            waitRelease: false
          });
          _block_break_key_allKeys = _block_break_key_allKeys.concat(theseKeys);
          if (_block_break_key_allKeys.length > 0) {
            block_break_key.keys = _block_break_key_allKeys[_block_break_key_allKeys.length - 1].name;  // just the last key pressed
            block_break_key.rt = _block_break_key_allKeys[_block_break_key_allKeys.length - 1].rt;
            block_break_key.duration = _block_break_key_allKeys[_block_break_key_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of block_breakComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function block_breakRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'block_break' ---
        for (const thisComponent of block_breakComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('block_break.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(block_break_key.corr, level);
        }
        psychoJS.experiment.addData('block_break_key.keys', block_break_key.keys);
        if (typeof block_break_key.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('block_break_key.rt', block_break_key.rt);
            psychoJS.experiment.addData('block_break_key.duration', block_break_key.duration);
            routineTimer.reset();
            }
        
        block_break_key.stop();
        // the Routine "block_break" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var endMaxDurationReached;
var _end_key_resp_allKeys;
var endMaxDuration;
var endComponents;
function endRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'end' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        endClock.reset();
        routineTimer.reset();
        endMaxDurationReached = false;
        // update component parameters for each repeat
        end_key_resp.keys = undefined;
        end_key_resp.rt = undefined;
        _end_key_resp_allKeys = [];
        psychoJS.experiment.addData('end.started', globalClock.getTime());
        endMaxDuration = null
        // keep track of which components have finished
        endComponents = [];
        endComponents.push(end_text);
        endComponents.push(end_key_resp);
        
        for (const thisComponent of endComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function endRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'end' ---
        // get current time
        t = endClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *end_text* updates
        if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          end_text.tStart = t;  // (not accounting for frame time here)
          end_text.frameNStart = frameN;  // exact frame index
          
          end_text.setAutoDraw(true);
        }
        
        
        // if end_text is active this frame...
        if (end_text.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *end_key_resp* updates
        if (t >= 0.0 && end_key_resp.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          end_key_resp.tStart = t;  // (not accounting for frame time here)
          end_key_resp.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          psychoJS.window.callOnFlip(function() { end_key_resp.clock.reset(); });  // t=0 on next screen flip
          psychoJS.window.callOnFlip(function() { end_key_resp.start(); }); // start on screen flip
          psychoJS.window.callOnFlip(function() { end_key_resp.clearEvents(); });
        }
        
        // if end_key_resp is active this frame...
        if (end_key_resp.status === PsychoJS.Status.STARTED) {
          let theseKeys = end_key_resp.getKeys({
            keyList: typeof ['k',] === 'string' ? [['k',]] : ['k',], 
            waitRelease: false
          });
          _end_key_resp_allKeys = _end_key_resp_allKeys.concat(theseKeys);
          if (_end_key_resp_allKeys.length > 0) {
            end_key_resp.keys = _end_key_resp_allKeys[_end_key_resp_allKeys.length - 1].name;  // just the last key pressed
            end_key_resp.rt = _end_key_resp_allKeys[_end_key_resp_allKeys.length - 1].rt;
            end_key_resp.duration = _end_key_resp_allKeys[_end_key_resp_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of endComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function endRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'end' ---
        for (const thisComponent of endComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('end.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(end_key_resp.corr, level);
        }
        psychoJS.experiment.addData('end_key_resp.keys', end_key_resp.keys);
        if (typeof end_key_resp.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('end_key_resp.rt', end_key_resp.rt);
            psychoJS.experiment.addData('end_key_resp.duration', end_key_resp.duration);
            routineTimer.reset();
            }
        
        end_key_resp.stop();
        // the Routine "end" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var questionnareMaxDurationReached;
var answered;
var questionnareMaxDuration;
var questionnareComponents;
function questionnareRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'questionnare' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        questionnareClock.reset();
        routineTimer.reset();
        questionnareMaxDurationReached = false;
        // update component parameters for each repeat
        question_text.setText(question);
        btn1.setText(opt1);
        // reset btn1 to account for continued clicks & clear times on/off
        btn1.reset()
        btn2.setText(opt2);
        // reset btn2 to account for continued clicks & clear times on/off
        btn2.reset()
        btn3.setText(opt3);
        // reset btn3 to account for continued clicks & clear times on/off
        btn3.reset()
        btn4.setText(opt4);
        // reset btn4 to account for continued clicks & clear times on/off
        btn4.reset()
        btn5.setText(opt5);
        // reset btn5 to account for continued clicks & clear times on/off
        btn5.reset()
        // Run 'Begin Routine' code from code_questionnaire
        psychoJS.window.mouseVisible = true;
        
        
        answered = false;
        
        var btns = [btn1, btn2, btn3, btn4, btn5];
        for (var i = 0; i < btns.length; i++) {
            btns[i].timesOn = [];
            btns[i].timesOff = [];
            btns[i].clock.reset();
        }
        
       btn1.setText(opt1);
btn2.setText(opt2);
btn3.setText(opt3);
btn4.setText(opt4);
btn5.setText(opt5);

var btns = [btn1, btn2, btn3, btn4, btn5];
var opts = [opt1, opt2, opt3, opt4, opt5];

for (var i = 0; i < btns.length; i++) {
    var txt = (opts[i] === undefined || opts[i] === null) ? "" : String(opts[i]);

    btns[i].setSize([1.2, 0.08]);

    if (txt.length > 65) {
        btns[i].setLetterHeight(0.020);
    } else if (txt.length > 50) {
        btns[i].setLetterHeight(0.023);
    } else {
        btns[i].setLetterHeight(0.030);
    }

    btns[i].setText(txt);
}

psychoJS.experiment.addData('questionnare.started', globalClock.getTime());
questionnareMaxDuration = null;
        // keep track of which components have finished
        questionnareComponents = [];
        questionnareComponents.push(question_text);
        questionnareComponents.push(btn1);
        questionnareComponents.push(btn2);
        questionnareComponents.push(btn3);
        questionnareComponents.push(btn4);
        questionnareComponents.push(btn5);
        
        for (const thisComponent of questionnareComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function questionnareRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'questionnare' ---
        // get current time
        t = questionnareClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *question_text* updates
        if (t >= 0.0 && question_text.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          question_text.tStart = t;  // (not accounting for frame time here)
          question_text.frameNStart = frameN;  // exact frame index
          
          question_text.setAutoDraw(true);
        }
        
        
        // if question_text is active this frame...
        if (question_text.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *btn1* updates
        if (t >= 0 && btn1.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          btn1.tStart = t;  // (not accounting for frame time here)
          btn1.frameNStart = frameN;  // exact frame index
          
          btn1.setAutoDraw(true);
        }
        
        
        // if btn1 is active this frame...
        if (btn1.status === PsychoJS.Status.STARTED) {
        }
        
        if (btn1.status === PsychoJS.Status.STARTED) {
          // check whether btn1 has been pressed
          if (btn1.isClicked) {
            if (!btn1.wasClicked) {
              // store time of first click
              btn1.timesOn.push(btn1.clock.getTime());
              // store time clicked until
              btn1.timesOff.push(btn1.clock.getTime());
            } else {
              // update time clicked until;
              btn1.timesOff[btn1.timesOff.length - 1] = btn1.clock.getTime();
            }
            if (!btn1.wasClicked) {
              // end routine when btn1 is clicked
              continueRoutine = false;
              
            }
            // if btn1 is still clicked next frame, it is not a new click
            btn1.wasClicked = true;
          } else {
            // if btn1 is clicked next frame, it is a new click
            btn1.wasClicked = false;
          }
        } else {
          // keep clock at 0 if btn1 hasn't started / has finished
          btn1.clock.reset();
          // if btn1 is clicked next frame, it is a new click
          btn1.wasClicked = false;
        }
        
        // *btn2* updates
        if (t >= 0 && btn2.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          btn2.tStart = t;  // (not accounting for frame time here)
          btn2.frameNStart = frameN;  // exact frame index
          
          btn2.setAutoDraw(true);
        }
        
        
        // if btn2 is active this frame...
        if (btn2.status === PsychoJS.Status.STARTED) {
        }
        
        if (btn2.status === PsychoJS.Status.STARTED) {
          // check whether btn2 has been pressed
          if (btn2.isClicked) {
            if (!btn2.wasClicked) {
              // store time of first click
              btn2.timesOn.push(btn2.clock.getTime());
              // store time clicked until
              btn2.timesOff.push(btn2.clock.getTime());
            } else {
              // update time clicked until;
              btn2.timesOff[btn2.timesOff.length - 1] = btn2.clock.getTime();
            }
            if (!btn2.wasClicked) {
              // end routine when btn2 is clicked
              continueRoutine = false;
              
            }
            // if btn2 is still clicked next frame, it is not a new click
            btn2.wasClicked = true;
          } else {
            // if btn2 is clicked next frame, it is a new click
            btn2.wasClicked = false;
          }
        } else {
          // keep clock at 0 if btn2 hasn't started / has finished
          btn2.clock.reset();
          // if btn2 is clicked next frame, it is a new click
          btn2.wasClicked = false;
        }
        
        // *btn3* updates
        if (t >= 0 && btn3.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          btn3.tStart = t;  // (not accounting for frame time here)
          btn3.frameNStart = frameN;  // exact frame index
          
          btn3.setAutoDraw(true);
        }
        
        
        // if btn3 is active this frame...
        if (btn3.status === PsychoJS.Status.STARTED) {
        }
        
        if (btn3.status === PsychoJS.Status.STARTED) {
          // check whether btn3 has been pressed
          if (btn3.isClicked) {
            if (!btn3.wasClicked) {
              // store time of first click
              btn3.timesOn.push(btn3.clock.getTime());
              // store time clicked until
              btn3.timesOff.push(btn3.clock.getTime());
            } else {
              // update time clicked until;
              btn3.timesOff[btn3.timesOff.length - 1] = btn3.clock.getTime();
            }
            if (!btn3.wasClicked) {
              // end routine when btn3 is clicked
              continueRoutine = false;
              
            }
            // if btn3 is still clicked next frame, it is not a new click
            btn3.wasClicked = true;
          } else {
            // if btn3 is clicked next frame, it is a new click
            btn3.wasClicked = false;
          }
        } else {
          // keep clock at 0 if btn3 hasn't started / has finished
          btn3.clock.reset();
          // if btn3 is clicked next frame, it is a new click
          btn3.wasClicked = false;
        }
        
        // *btn4* updates
        if (t >= 0 && btn4.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          btn4.tStart = t;  // (not accounting for frame time here)
          btn4.frameNStart = frameN;  // exact frame index
          
          btn4.setAutoDraw(true);
        }
        
        
        // if btn4 is active this frame...
        if (btn4.status === PsychoJS.Status.STARTED) {
        }
        
        if (btn4.status === PsychoJS.Status.STARTED) {
          // check whether btn4 has been pressed
          if (btn4.isClicked) {
            if (!btn4.wasClicked) {
              // store time of first click
              btn4.timesOn.push(btn4.clock.getTime());
              // store time clicked until
              btn4.timesOff.push(btn4.clock.getTime());
            } else {
              // update time clicked until;
              btn4.timesOff[btn4.timesOff.length - 1] = btn4.clock.getTime();
            }
            if (!btn4.wasClicked) {
              // end routine when btn4 is clicked
              continueRoutine = false;
              
            }
            // if btn4 is still clicked next frame, it is not a new click
            btn4.wasClicked = true;
          } else {
            // if btn4 is clicked next frame, it is a new click
            btn4.wasClicked = false;
          }
        } else {
          // keep clock at 0 if btn4 hasn't started / has finished
          btn4.clock.reset();
          // if btn4 is clicked next frame, it is a new click
          btn4.wasClicked = false;
        }
        
        // *btn5* updates
        if (t >= 0 && btn5.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          btn5.tStart = t;  // (not accounting for frame time here)
          btn5.frameNStart = frameN;  // exact frame index
          
          btn5.setAutoDraw(true);
        }
        
        
        // if btn5 is active this frame...
        if (btn5.status === PsychoJS.Status.STARTED) {
        }
        
        if (btn5.status === PsychoJS.Status.STARTED) {
          // check whether btn5 has been pressed
          if (btn5.isClicked) {
            if (!btn5.wasClicked) {
              // store time of first click
              btn5.timesOn.push(btn5.clock.getTime());
              // store time clicked until
              btn5.timesOff.push(btn5.clock.getTime());
            } else {
              // update time clicked until;
              btn5.timesOff[btn5.timesOff.length - 1] = btn5.clock.getTime();
            }
            if (!btn5.wasClicked) {
              // end routine when btn5 is clicked
              continueRoutine = false;
              
            }
            // if btn5 is still clicked next frame, it is not a new click
            btn5.wasClicked = true;
          } else {
            // if btn5 is clicked next frame, it is a new click
            btn5.wasClicked = false;
          }
        } else {
          // keep clock at 0 if btn5 hasn't started / has finished
          btn5.clock.reset();
          // if btn5 is clicked next frame, it is a new click
          btn5.wasClicked = false;
        }
        // Run 'Each Frame' code from code_questionnaire
        // Управление видимостью btn5
        var opt5isempty = (opt5 === null || opt5 === undefined || String(opt5).trim() === '' || String(opt5).trim().toLowerCase() === 'none');
        if (opt5isempty) {
            btn5.opacity = 0;
            btn5.disabled = true;
        } else {
            btn5.opacity = 1;
            btn5.disabled = false;
        }
        
        // Фиксация ответа
        if (!answered && t > 0.3) {
            if (btn1.isClicked) {
                psychoJS.experiment.addData('q_number', questions_loop.thisN + 1);
                psychoJS.experiment.addData('question', question);
                psychoJS.experiment.addData('answer', opt1);
                continueRoutine = false;
                answered = true;
            } else if (btn2.isClicked) {
                psychoJS.experiment.addData('q_number', questions_loop.thisN + 1);
                psychoJS.experiment.addData('question', question);
                psychoJS.experiment.addData('answer', opt2);
                continueRoutine = false;
                answered = true;
            } else if (btn3.isClicked) {
                psychoJS.experiment.addData('q_number', questions_loop.thisN + 1);
                psychoJS.experiment.addData('question', question);
                psychoJS.experiment.addData('answer', opt3);
                continueRoutine = false;
                answered = true;
            } else if (btn4.isClicked) {
                psychoJS.experiment.addData('q_number', questions_loop.thisN + 1);
                psychoJS.experiment.addData('question', question);
                psychoJS.experiment.addData('answer', opt4);
                continueRoutine = false;
                answered = true;
            } else if (btn5.isClicked && !opt5isempty) {
                psychoJS.experiment.addData('q_number', questions_loop.thisN + 1);
                psychoJS.experiment.addData('question', question);
                psychoJS.experiment.addData('answer', opt5);
                continueRoutine = false;
                answered = true;
            }
        }
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of questionnareComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function questionnareRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'questionnare' ---
        for (const thisComponent of questionnareComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('questionnare.stopped', globalClock.getTime());
        psychoJS.experiment.addData('btn1.numClicks', btn1.numClicks);
        psychoJS.experiment.addData('btn1.timesOn', btn1.timesOn);
        psychoJS.experiment.addData('btn1.timesOff', btn1.timesOff);
        psychoJS.experiment.addData('btn2.numClicks', btn2.numClicks);
        psychoJS.experiment.addData('btn2.timesOn', btn2.timesOn);
        psychoJS.experiment.addData('btn2.timesOff', btn2.timesOff);
        psychoJS.experiment.addData('btn3.numClicks', btn3.numClicks);
        psychoJS.experiment.addData('btn3.timesOn', btn3.timesOn);
        psychoJS.experiment.addData('btn3.timesOff', btn3.timesOff);
        psychoJS.experiment.addData('btn4.numClicks', btn4.numClicks);
        psychoJS.experiment.addData('btn4.timesOn', btn4.timesOn);
        psychoJS.experiment.addData('btn4.timesOff', btn4.timesOff);
        psychoJS.experiment.addData('btn5.numClicks', btn5.numClicks);
        psychoJS.experiment.addData('btn5.timesOn', btn5.timesOn);
        psychoJS.experiment.addData('btn5.timesOff', btn5.timesOff);
        // the Routine "questionnare" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var thanksMaxDurationReached;
var thanksMaxDuration;
var thanksComponents;
function thanksRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'thanks' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        thanksClock.reset(routineTimer.getTime());
        routineTimer.add(1.000000);
        thanksMaxDurationReached = false;
        // update component parameters for each repeat
        psychoJS.experiment.addData('thanks.started', globalClock.getTime());
        thanksMaxDuration = null
        // keep track of which components have finished
        thanksComponents = [];
        thanksComponents.push(thanks_text);
        
        for (const thisComponent of thanksComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function thanksRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'thanks' ---
        // get current time
        t = thanksClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *thanks_text* updates
        if (t >= 0.0 && thanks_text.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          thanks_text.tStart = t;  // (not accounting for frame time here)
          thanks_text.frameNStart = frameN;  // exact frame index
          
          thanks_text.setAutoDraw(true);
        }
        
        
        // if thanks_text is active this frame...
        if (thanks_text.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (thanks_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          thanks_text.tStop = t;  // not accounting for scr refresh
          thanks_text.frameNStop = frameN;  // exact frame index
          // update status
          thanks_text.status = PsychoJS.Status.FINISHED;
          thanks_text.setAutoDraw(false);
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of thanksComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine && routineTimer.getTime() > 0) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function thanksRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'thanks' ---
        for (const thisComponent of thanksComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('thanks.stopped', globalClock.getTime());
        if (routineForceEnded) {
            routineTimer.reset();} else if (thanksMaxDurationReached) {
            thanksClock.add(thanksMaxDuration);
        } else {
            thanksClock.add(1.000000);
        }
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var data_saveMaxDurationReached;
var participant;
var data_saveMaxDuration;
var data_saveComponents;
function data_saveRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'data_save' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        data_saveClock.reset(routineTimer.getTime());
        routineTimer.add(3.000000);
        data_saveMaxDurationReached = false;
        // update component parameters for each repeat
        psychoJS._saveResults = 0;
        
        globalThis.dataSaveDone = false;
        globalThis.dataSaveOk = false;
        globalThis.dataSaveError = "";
        
        text_data_save.setText("Сохранение данных...\nПожалуйста, не закрывайте окно.");
        
        function csvCell(value) {
            if (value === null || value === undefined) return "";
            if (typeof value === "object") value = JSON.stringify(value);
        
            let s = String(value).replace(/\r?\n/g, " ");
            if (s.includes('"') || s.includes(",")) {
                s = '"' + s.replace(/"/g, '""') + '"';
            }
            return s;
        }
        
        function trialsToCsv(rows) {
            rows = Array.isArray(rows) ? rows : [];
        
            let headers = [];
            let seen = new Set();
        
            for (const row of rows) {
                if (row && typeof row === "object") {
                    for (const key of Object.keys(row)) {
                        if (!seen.has(key)) {
                            seen.add(key);
                            headers.push(key);
                        }
                    }
                }
            }
        
            if (headers.length === 0) {
                return "warning\nNo trial data found";
            }
        
            let lines = [headers.map(csvCell).join(",")];
        
            for (const row of rows) {
                lines.push(headers.map(key => csvCell(row ? row[key] : "")).join(","));
            }
        
            return lines.join("\n");
        }
        
        let participant = String(
            psychoJS.experiment.extraInfo["participant"] ||
            psychoJS.experiment.extraInfo["id"] ||
            "unknown"
        ).trim();
        
        participant = participant.replace(/[^A-Za-z0-9_-]/g, "_") || "unknown";
        
        let expNameSafe = String(psychoJS._experiment._experimentName || "AXCPT_proactive")
            .replace(/[^A-Za-z0-9_-]/g, "_");
        
        let datetimeSafe = String(psychoJS._experiment._datetime || new Date().toISOString())
            .replace(/[^A-Za-z0-9_-]/g, "_");
        
        let filename = participant + "_" + expNameSafe + "_" + datetimeSafe + ".csv";
        let dataObj = psychoJS._experiment._trialsData || [];
        let csvData = trialsToCsv(dataObj);
        
        console.log("Saving data to DataPipe:", filename);
        
        fetch("https://pipe.jspsych.org/api/data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            },
            body: JSON.stringify({
                experimentID: "xZL44Osr7bjf",
                filename: filename,
                data: csvData,
            }),
        })
        .then(async response => {
            let responseText = await response.text();
        
            if (!response.ok) {
                throw new Error("DataPipe error " + response.status + ": " + responseText);
            }
        
            console.log("DataPipe response:", responseText);
            globalThis.dataSaveOk = true;
            globalThis.dataSaveDone = true;
        })
        .catch(error => {
            console.error("DataPipe save failed:", error);
            globalThis.dataSaveError = String(error);
            globalThis.dataSaveDone = true;
        });
        psychoJS.experiment.addData('data_save.started', globalClock.getTime());
        data_saveMaxDuration = null
        // keep track of which components have finished
        data_saveComponents = [];
        data_saveComponents.push(text_data_save);
        
        for (const thisComponent of data_saveComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function data_saveRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'data_save' ---
        // get current time
        t = data_saveClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        if (globalThis.dataSaveDone) {
            if (globalThis.dataSaveOk) {
                continueRoutine = false;
            } else {
                text_data_save.setText(
                    "Ошибка сохранения данных.\n" +
                    "Пожалуйста, не закрывайте окно и сообщите экспериментатору.\n\n" +
                    globalThis.dataSaveError
                );
            }
        }
        
        // *text_data_save* updates
        if (t >= 0.0 && text_data_save.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_data_save.tStart = t;  // (not accounting for frame time here)
          text_data_save.frameNStart = frameN;  // exact frame index
          
          text_data_save.setAutoDraw(true);
        }
        
        
        // if text_data_save is active this frame...
        if (text_data_save.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 3600 - psychoJS.window.monitorFramePeriod * 0.75;// keep message visible while DataPipe finishes
        if (text_data_save.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          text_data_save.tStop = t;  // not accounting for scr refresh
          text_data_save.frameNStop = frameN;  // exact frame index
          // update status
          text_data_save.status = PsychoJS.Status.FINISHED;
          text_data_save.setAutoDraw(false);
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of data_saveComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function data_saveRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'data_save' ---
        for (const thisComponent of data_saveComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('data_save.stopped', globalClock.getTime());
        if (routineForceEnded) {
            routineTimer.reset();} else if (data_saveMaxDurationReached) {
            data_saveClock.add(data_saveMaxDuration);
        } else {
            data_saveClock.add(3.000000);
        }
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
function importConditions(currentLoop) {
      return async function () {
        psychoJS.importAttributes(currentLoop.getCurrentTrial());
        return Scheduler.Event.NEXT;
        };
    }
    
    
async function quitPsychoJS(message, isCompleted) {
      // Check for and save orphaned data
      if (psychoJS.experiment.isEntryEmpty()) {
        psychoJS.experiment.nextEntry();
      }
      psychoJS.window.close();
      psychoJS.quit({message: message, isCompleted: isCompleted});
      
      return Scheduler.Event.QUIT;
    }
