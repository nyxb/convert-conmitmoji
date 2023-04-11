const conmitmojis: Record<string, string> = {
  ':art:': '🎨',
  ':zap:': '⚡️',
  ':fire:': '🔥',
  ':bug:': '🐛',
  ':ambulance:': '🚑️',
  ':sparkles:': '✨',
  ':memo:': '📝',
  ':rocket:': '🚀',
  ':lipstick:': '💄',
  ':tada:': '🎉',
  ':white_check_mark:': '✅',
  ':lock:': '🔒️',
  ':closed_lock_with_key:': '🔐',
  ':bookmark:': '🔖',
  ':rotating_light:': '🚨',
  ':construction:': '🚧',
  ':green_heart:': '💚',
  ':arrow_down:': '⬇️',
  ':arrow_up:': '⬆️',
  ':pushpin:': '📌',
  ':construction_worker:': '👷',
  ':chart_with_upwards_trend:': '📈',
  ':recycle:': '♻️',
  ':heavy_plus_sign:': '➕',
  ':heavy_minus_sign:': '➖',
  ':wrench:': '🔧',
  ':hammer:': '🔨',
  ':globe_with_meridians:': '🌐',
  ':pencil2:': '✏️',
  ':pencil:': '✏️', // Unsure ?
  ':poop:': '💩',
  ':rewind:': '⏪️',
  ':twisted_rightwards_arrows:': '🔀',
  ':package:': '📦️',
  ':alien:': '👽️',
  ':truck:': '🚚',
  ':page_facing_up:': '📄',
  ':boom:': '💥',
  ':bento:': '🍱',
  ':wheelchair:': '♿️',
  ':bulb:': '💡',
  ':beers:': '🍻',
  ':speech_balloon:': '💬',
  ':card_file_box:': '🗃️',
  ':loud_sound:': '🔊',
  ':mute:': '🔇',
  ':busts_in_silhouette:': '👥',
  ':children_crossing:': '🚸',
  ':building_construction:': '🏗️',
  ':iphone:': '📱',
  ':clown_face:': '🤡',
  ':egg:': '🥚',
  ':see_no_evil:': '🙈',
  ':camera_flash:': '📸',
  ':alembic:': '⚗️',
  ':mag:': '🔍️',
  ':label:': '🏷️',
  ':seedling:': '🌱',
  ':triangular_flag_on_post:': '🚩',
  ':goal_net:': '🥅',
  ':dizzy:': '💫',
  ':wastebasket:': '🗑️',
  ':passport_control:': '🛂',
  ':adhesive_bandage:': '🩹',
  ':monocle_face:': '🧐',
  ':coffin:': '⚰️',
  ':test_tube:': '🧪',
  ':necktie:': '👔',
  ':stethoscope:': '🩺',
  ':bricks:': '🧱',
  ':technologist:': '🧑‍💻',
  ':money_with_wings:': '💸',
  ':thread:': '🧵',
  ':safety_vest:': '🦺',
  ':books:': '📚',
  ':gem:': '💎',
  ':loudspeaker:': '📢',
  'open_book:': '📖',
  ':laptop:': '💻',
  ':back_arrwo:': '🔙',
  ':ticket:': '🎫',
  ':admission_ticket:': '🎟️',
  ':broom:': '🧹',

}

export function convert(content: string, withSpace?: boolean | 'leading' | 'trailing' | 'both') {
  const re = new RegExp(Object.keys(conmitmojis).join('|'), 'gi')
  return content.replace(re, (matched) => {
    switch (withSpace) {
      case true:
      case 'trailing':
        return `${conmitmojis[matched.toLowerCase()]} `
      case 'leading':
        return ` ${conmitmojis[matched.toLowerCase()]}`
      case 'both':
        return ` ${conmitmojis[matched.toLowerCase()]} `
      default:
        return conmitmojis[matched.toLowerCase()]
    }
  })
}
