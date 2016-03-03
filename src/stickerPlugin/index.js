import addSticker from './modifiers/addSticker';
import removeSticker from './modifiers/removeSticker';
import cleanupEmptyStickers from './modifiers/cleanupEmptyStickers';
import blockRendererFn from './blockRendererFn';
import sticker from './Sticker';
import stickerSelect from './StickerSelect';

export default (config) => ({
  add: addSticker,
  blockRendererFn: blockRendererFn(config.stickers), // standard
  onChange: cleanupEmptyStickers, // standard
  remove: removeSticker,
  Sticker: sticker(config.stickers),
  StickerSelect: stickerSelect(config.stickers),
});