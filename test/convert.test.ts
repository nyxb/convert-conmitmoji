import { describe, expect, it } from 'vitest';
import { convert } from '../src';

const conmitmojis = [
  {
    emoji: "🎨",
    code: ":art:",
  },
  {
    emoji: "⚡️",
    code: ":zap:",
  },
  {
    emoji: "🔥",
    code: ":fire:",
  },
  {
    emoji: "🐛",
    code: ":bug:",
  },
  {
    emoji: "🚑️",
    code: ":ambulance:",
  },
  {
    emoji: "✨",
    code: ":sparkles:",
  },
  {
    emoji: "📝",
    code: ":memo:",
  },
  {
    emoji: "🚀",
    code: ":rocket:",
  },
  {
    emoji: "💄",
    code: ":lipstick:",
  },
  {
    emoji: "🎉",
    code: ":tada:",
  },
  {
    emoji: "✅",
    code: ":white_check_mark:",
  },
  {
    emoji: "🔒️",
    code: ":lock:",
  },
  {
    emoji: "🔐",
    code: ":closed_lock_with_key:",
  },
  {
    emoji: "🔖",
    code: ":bookmark:",
  },
  {
    emoji: "🚨",
    code: ":rotating_light:",
  },
  {
    emoji: "🚧",
    code: ":construction:",
  },
  {
    emoji: "💚",
    code: ":green_heart:",
  },
  {
    emoji: "⬇️",
    code: ":arrow_down:",
  },
  {
    emoji: "⬆️",
    code: ":arrow_up:",
  },
  {
    emoji: "📌",
    code: ":pushpin:",
  },
  {
    emoji: "👷",
    code: ":construction_worker:",
  },
  {
    emoji: "📈",
    code: ":chart_with_upwards_trend:",
  },
  {
    emoji: "♻️",
    code: ":recycle:",
  },
  {
    emoji: "➕",
    code: ":heavy_plus_sign:",
  },
  {
    emoji: "➖",
    code: ":heavy_minus_sign:",
  },
  {
    emoji: "🔧",
    code: ":wrench:",
  },
  {
    emoji: "🔨",
    code: ":hammer:",
  },
  {
    emoji: "🌐",
    code: ":globe_with_meridians:",
  },
  {
    emoji: "✏️",
    code: ":pencil2:",
  },
  {
    emoji: "💩",
    code: ":poop:",
  },
  {
    emoji: "⏪️",
    code: ":rewind:",
  },
  {
    emoji: "🔀",
    code: ":twisted_rightwards_arrows:",
  },
  {
    emoji: "📦️",
    code: ":package:",
  },
  {
    emoji: "👽️",
    code: ":alien:",
  },
  {
    emoji: "🚚",
    code: ":truck:",
  },
  {
    emoji: "📄",
    code: ":page_facing_up:",
  },
  {
    emoji: "💥",
    code: ":boom:",
  },
  {
    emoji: "🍱",
    code: ":bento:",
  },
  {
    emoji: "♿️",
    code: ":wheelchair:",
  },
  {
    emoji: "💡",
    code: ":bulb:",
  },
  {
    emoji: "🍻",
    code: ":beers:",
  },
  {
    emoji: "💬",
    code: ":speech_balloon:",
  },
  {
    emoji: "🗃️",
    code: ":card_file_box:",
  },
  {
    emoji: "🔊",
    code: ":loud_sound:",
  },
  {
    emoji: "🔇",
    code: ":mute:",
  },
  {
    emoji: "👥",
    code: ":busts_in_silhouette:",
  },
  {
    emoji: "🚸",
    code: ":children_crossing:",
  },
  {
    emoji: "🏗️",
    code: ":building_construction:",
  },
  {
    emoji: "📱",
    code: ":iphone:",
  },
  {
    emoji: "🤡",
    code: ":clown_face:",
  },
  {
    emoji: "🥚",
    code: ":egg:",
  },
  {
    emoji: "🙈",
    code: ":see_no_evil:",
  },
  {
    emoji: "📸",
    code: ":camera_flash:",
  },
  {
    emoji: "⚗️",
    code: ":alembic:",
  },
  {
    emoji: "🔍️",
    code: ":mag:",
  },
  {
    emoji: "🏷️",
    code: ":label:",
  },
  {
    emoji: "🌱",
    code: ":seedling:",
  },
  {
    emoji: "🚩",
    code: ":triangular_flag_on_post:",
  },
  {
    emoji: "🥅",
    code: ":goal_net:",
  },
  {
    emoji: "💫",
    code: ":dizzy:",
  },
  {
    emoji: "🗑️",
    code: ":wastebasket:",
  },
  {
    emoji: "🛂",
    code: ":passport_control:",
  },
  {
    emoji: "🩹",
    code: ":adhesive_bandage:",
  },
  {
    emoji: "🧐",
    code: ":monocle_face:",
  },
  {
    emoji: "⚰️",
    code: ":coffin:",
  },
  {
    emoji: "🧪",
    code: ":test_tube:",
  },
  {
    emoji: "👔",
    code: ":necktie:",
  },
  {
    emoji: "🩺",
    code: ":stethoscope:",
  },
  {
    emoji: "🧱",
    code: ":bricks:",
  },
  {
    emoji: "🧑‍💻",
    code: ":technologist:",
  },
  {
    emoji: "💸",
    code: ":money_with_wings:",
  }
];

const content = ":arrow_up: bump qs from 6.10.3 to 6.10.4 (xxx) - **helper:** :zap:  Updated TSDoc (xxx) ";
const contentWithConmitmoji = "⬆️ bump qs from 6.10.3 to 6.10.4 (xxx) - **helper:** ⚡️  Updated TSDoc (xxx) ";

const pencil = "this is :pencil: 1 and this is :pencil2:";
const pencilWithConmitmoji = "this is ✏️ 1 and this is ✏️";

describe('convert', () => {
  it('should be defined', () => {
    expect(convert).toBeDefined;
  });

  it('should return the correct conmitmoji for every string', () => {
    let conmitmojisEqual = true;
    for (const conmitmoji of conmitmojis) {
      conmitmojisEqual = convert(conmitmoji.code) === conmitmoji.emoji && conmitmojisEqual;
    }
    expect(conmitmojisEqual).toBe(true);
  });

  it('should generate leading space', () => {
    const conmitmojiWithSpace = convert(conmitmojis[0].code, "leading");
    expect(conmitmojiWithSpace).toBe(` ${conmitmojis[0].emoji}`);
  });

  it('should generate trailing space', () => {
    const conmitmojiWithSpace = convert(conmitmojis[0].code, "trailing");
    expect(conmitmojiWithSpace).toBe(`${conmitmojis[0].emoji} `);
    // Backwards compatibility
    const conmitmojiWithSpace2 = convert(conmitmojis[0].code, true);
    expect(conmitmojiWithSpace2).toBe(`${conmitmojis[0].emoji} `);
  });

  it('should generate both spaces', () => {
    const conmitmojiWithSpace = convert(conmitmojis[0].code, "both");
    expect(conmitmojiWithSpace).toBe(` ${conmitmojis[0].emoji} `);
  });

  it('should not generate space', () => {
    const conmitmojiWithSpace = convert(conmitmojis[0].code, false);
    expect(conmitmojiWithSpace).toBe(`${conmitmojis[0].emoji}`);
  });

  it('should replace multiple strings', () => {
    const result = convert(content);
    expect(result).toBe(contentWithConmitmoji);
  });

  it('should replace pencil and pencil2', () => {
    const result = convert(pencil);
    expect(result).toBe(pencilWithConmitmoji);
  });
});
